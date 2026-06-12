@echo off
chcp 65001 >nul
cd /d "%~dp0"
echo ============================================================
echo   Transcripcion de audios - Casos Green Science
echo ============================================================
echo.

set "PYEXE="
python --version >nul 2>nul && set "PYEXE=python"
if not defined PYEXE (
  py --version >nul 2>nul && set "PYEXE=py"
)
if not defined PYEXE (
  python3 --version >nul 2>nul && set "PYEXE=python3"
)

if not defined PYEXE (
  echo [ERROR] No se encontro un Python funcional en este equipo.
  echo Instalalo desde Microsoft Store o https://www.python.org/downloads/
  echo y volve a ejecutar este archivo.
  echo.
  pause
  exit /b 1
)

echo Usando: %PYEXE%
%PYEXE% --version
echo.
echo Instalando faster-whisper ^(la primera vez puede tardar unos minutos^)...
%PYEXE% -m pip install --quiet --disable-pip-version-check faster-whisper
echo.
echo Transcribiendo... ^(la primera corrida descarga el modelo ~150 MB^)
%PYEXE% transcribir_audios.py "%~dp0CASOS"

echo.
echo ============================================================
echo   LISTO. Revisa el archivo transcripcion.md dentro de
echo   cada carpeta de _transcripcion\CASOS\
echo ============================================================
pause
