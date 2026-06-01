@echo off
REM Quick start script for Praharsha Jekyll site on Windows

echo Starting Praharsha Jekyll Site with Docker...
echo.

REM Check if Docker is installed
docker --version >nul 2>&1
if errorlevel 1 (
    echo Docker is not installed!
    echo Please install Docker Desktop from: https://docs.docker.com/desktop/install/windows-server/
    pause
    exit /b 1
)

echo Docker is installed
echo.

REM Check for docker-compose
docker-compose --version >nul 2>&1
if errorlevel 1 (
    echo Docker Compose not found, using docker compose plugin...
    docker compose up
) else (
    echo Starting with docker-compose...
    docker-compose up
)

pause