#!/usr/bin/env python3
"""web/index.html 검사 — 태그 균형과 필수 id 존재.

사용: python3 tools/check-html.py web/index.html
성공하면 "HTML OK"를 출력하고 exit 0, 실패하면 사유를 출력하고 exit 1.
빌드 도구를 도입하지 않기 위해 표준 라이브러리만 쓴다.
"""
import sys
from html.parser import HTMLParser

VOID = {
    "area", "base", "br", "col", "embed", "hr", "img", "input",
    "link", "meta", "param", "source", "track", "wbr",
}
REQUIRED_IDS = ["s%d" % n for n in range(10)] + ["hand-frame", "install-cmd", "hand-flash"]


class Checker(HTMLParser):
    def __init__(self):
        super().__init__(convert_charrefs=True)
        self.stack = []
        self.ids = set()
        self.errors = []

    def handle_starttag(self, tag, attrs):
        for name, value in attrs:
            if name == "id" and value:
                if value in self.ids:
                    self.errors.append("중복 id: %s (line %d)" % (value, self.getpos()[0]))
                self.ids.add(value)
        if tag not in VOID:
            self.stack.append((tag, self.getpos()[0]))

    def handle_startendtag(self, tag, attrs):
        for name, value in attrs:
            if name == "id" and value:
                self.ids.add(value)

    def handle_endtag(self, tag):
        if tag in VOID:
            return
        if not self.stack:
            self.errors.append("닫는 태그가 남음: </%s> (line %d)" % (tag, self.getpos()[0]))
            return
        open_tag, line = self.stack.pop()
        if open_tag != tag:
            self.errors.append(
                "태그 불일치: <%s> (line %d) 가 </%s> (line %d) 로 닫힘"
                % (open_tag, line, tag, self.getpos()[0])
            )


def main():
    if len(sys.argv) != 2:
        print("사용: python3 tools/check-html.py <file.html>")
        return 2
    path = sys.argv[1]
    with open(path, encoding="utf-8") as fh:
        source = fh.read()

    checker = Checker()
    checker.feed(source)
    checker.close()

    errors = list(checker.errors)
    for tag, line in checker.stack:
        errors.append("닫히지 않은 태그: <%s> (line %d)" % (tag, line))
    for wanted in REQUIRED_IDS:
        if wanted not in checker.ids:
            errors.append("필수 id 없음: %s" % wanted)

    if errors:
        for message in errors:
            print("FAIL " + message)
        return 1

    print("HTML OK — 태그 균형 정상, 필수 id %d개 확인 (%s)" % (len(REQUIRED_IDS), path))
    return 0


if __name__ == "__main__":
    sys.exit(main())
