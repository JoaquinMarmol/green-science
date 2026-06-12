@echo off
chcp 65001 >nul
cd /d "%~dp0"
echo ============================================================
echo   Instalacion de Python 3.12 (oficial, sin admin)
echo ============================================================
echo.
echo Descargando instalador...
curl -L -o "%~dp0python-3.12.7-amd64.exe" https://www.python.org/ftp/python/3.12.7/python-3.12.7-amd64.exe
if not exist "%~dp0python-3.12.7-amd64.exe" (
  echo [ERROR] No se pudo descargar el instalador. Revisa tu conexion.
  pause
  exit /b 1
)
echo.
echo Instalando ^(silencioso, para tu usuario, agregando al PATH^)...
echo Esto puede tardar 1-2 minutos. Espera por favor.
"%~dp0python-3.12.7-amd64.exe" /quiet InstallAllUsers=0 PrependPath=1 Include_pip=1 Include_launcher=1
echo.
echo Verificando instalacion (puede requerir reabrir la ventana)...
py -3.12 --version
echo.
echo ============================================================
echo   Listo. Cerra esta ventana y ejecuta Transcribir_Casos.bat
echo ============================================================
pause
