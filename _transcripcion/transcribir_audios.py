#!/usr/bin/env python3
"""
Transcribe los audios .opus de cada caso de Green Science y deja un archivo
`transcripcion.md` dentro de cada subcarpeta de CASOS/.

USO
----
1) Instalar dependencias (una sola vez):
       pip install faster-whisper

   (faster-whisper descarga el modelo automáticamente la primera vez.
    No necesita ffmpeg en la mayoría de los casos; si falla, instalá ffmpeg.)

2) Correr el script desde la carpeta que contiene CASOS/:
       python transcribir_audios.py

   O apuntando a una ruta concreta:
       python transcribir_audios.py /ruta/a/CASOS

MODELO
------
Por defecto usa "small" (buen equilibrio). Para más precisión en audios difíciles:
       python transcribir_audios.py --modelo medium
Opciones: tiny, base, small, medium, large-v3 (más grande = más lento y preciso).

RESULTADO
---------
- CASOS/<caso>/transcripcion.md  con el texto de cada audio.
- Pegá esos textos en el `caso.md` correspondiente (o pasámelos y yo redacto
  Situación → Tratamiento → Resultado y completo los // TODO del sitio).
"""
import argparse
import sys
from pathlib import Path


def main() -> int:
    ap = argparse.ArgumentParser()
    ap.add_argument("carpeta", nargs="?", default=".",
                    help="Carpeta que contiene CASOS/ (o la propia CASOS/). Default: actual")
    ap.add_argument("--modelo", default="small",
                    help="tiny|base|small|medium|large-v3 (default: small)")
    ap.add_argument("--idioma", default="es", help="Código de idioma (default: es)")
    args = ap.parse_args()

    try:
        from faster_whisper import WhisperModel
    except ImportError:
        print("Falta faster-whisper. Instalalo con:  pip install faster-whisper")
        return 1

    raiz = Path(args.carpeta).expanduser().resolve()
    casos_dir = raiz if raiz.name.upper() == "CASOS" else raiz / "CASOS"
    if not casos_dir.is_dir():
        print(f"No encuentro la carpeta CASOS en: {raiz}")
        return 1

    audios = sorted(casos_dir.glob("*/audios/*.opus"))
    if not audios:
        print(f"No hay audios .opus bajo {casos_dir}")
        return 1

    print(f"Cargando modelo '{args.modelo}' (la primera vez se descarga)...")
    model = WhisperModel(args.modelo, device="cpu", compute_type="int8")

    # Agrupar por caso
    por_caso: dict[Path, list[Path]] = {}
    for a in audios:
        por_caso.setdefault(a.parent.parent, []).append(a)

    total = len(audios)
    hechos = 0
    for caso_path in sorted(por_caso):
        lineas = [f"# Transcripción — {caso_path.name}\n"]
        for audio in sorted(por_caso[caso_path]):
            hechos += 1
            print(f"[{hechos}/{total}] {caso_path.name}/{audio.name} ...", flush=True)
            segments, _ = model.transcribe(str(audio), language=args.idioma, vad_filter=True)
            texto = " ".join(s.text.strip() for s in segments).strip()
            lineas.append(f"## {audio.name}\n\n{texto or '(sin habla detectada)'}\n")
        out = caso_path / "transcripcion.md"
        out.write_text("\n".join(lineas), encoding="utf-8")
        print(f"  -> {out}")

    print(f"\nListo. {total} audios transcriptos. Revisá los 'transcripcion.md' de cada caso.")
    return 0


if __name__ == "__main__":
    sys.exit(main())
