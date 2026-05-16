#!/usr/bin/env sh

PORT="${1:-8000}"
PROJECT_ROOT="$(CDPATH= cd -- "$(dirname -- "$0")" && pwd)"

cd "$PROJECT_ROOT" || exit 1

URL="http://localhost:${PORT}/index.html"
echo "Serving $PROJECT_ROOT at $URL"

if command -v open >/dev/null 2>&1; then
  open "$URL"
fi

python3 -m http.server "$PORT"
