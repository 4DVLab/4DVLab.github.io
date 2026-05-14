param(
    [int]$Port = 8000
)

$projectRoot = Split-Path -Parent $MyInvocation.MyCommand.Path
$url = "http://localhost:$Port/index.html"

Write-Host "Serving $projectRoot at $url"
Start-Process $url

Set-Location $projectRoot
python -m http.server $Port
