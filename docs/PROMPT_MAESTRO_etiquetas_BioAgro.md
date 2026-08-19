# Prompt maestro — Etiquetas Línea BioAgro (estilo único para todas)

Este es un **prompt general** para generar/diseñar la etiqueta de cualquier producto de la línea BioAgro con el **mismo estilo profesional**. Reemplazá los campos entre `[ ]` y adjuntá la **foto del producto** (la que va en el centro). Todas las etiquetas salen consistentes porque comparten esta estructura.

---

## Cómo usarlo
1. Adjuntá la **foto del cultivo** (1:1, 1500×1500 px).
2. Completá los `[CAMPOS]` con los datos del producto.
3. Pegá el prompt en tu herramienta de IA de diseño/imagen.

---

## PROMPT (copiar y pegar)

```
Diseñá una ETIQUETA DE PRODUCTO agrícola profesional, formato horizontal (2600×1680 px,
apaisada, para envolver un bidón de 1 L), estilo flat/limpio, listo para imprimir, sin
errores de texto. Marca: BIOAGROSOLUTIONS — Línea BioAgro. Color de acento del producto:
[COLOR] (usalo en encabezados, detalles y bordes). Fondo blanco. Tipografía sans serif
moderna (Poppins/Montserrat). Estructura en TRES COLUMNAS + banda inferior:

COLUMNA IZQUIERDA (texto legal y de seguridad, con encabezados en barras redondeadas del
color de acento y texto blanco):
- "GRUPO BIOLÓGICO: ORGÁNICO MICROBIANO"
- PRECAUCIONES Y ADVERTENCIAS DE USO
- MANIPULACIÓN Y APLICACIÓN (EPP)
- ALMACENAMIENTO Y TRANSPORTE
- PRIMEROS AUXILIOS (ojos/piel/ingestión/inhalación)
- ADVERTENCIA PARA EL MÉDICO (no existe antídoto; Centro Nacional de Intoxicaciones
  Argentina 0800-333-0160)
- PERIODO DE CARENCIA (no corresponde)
- RESPONSABILIDAD LEGAL y TITULAR DE REGISTRO: BioAgroSolutions, Necochea, Buenos Aires,
  Argentina, +54 9 2262 48-7998
- Un CÓDIGO QR real en una tarjeta clara que dice "FICHA TÉCNICA – Escaneá el código para
  ver la ficha técnica completa" y la URL bioagrosolutions.com.ar/productos/[SLUG]

PANEL CENTRAL (el "frente" del producto, tarjeta redondeada con borde del color de acento
y sombra suave):
- Arriba: logo de BioAgroSolutions (hoja + "BioAgro Solutions") y debajo "LÍNEA BIOAGRO".
- Debajo, la FOTO adjunta ocupando casi todo el panel (bordes redondeados).
- Sobre la parte inferior de la foto, un DEGRADADO oscuro (scrim) para legibilidad, y encima:
  una línea de acento del color del producto + el TIPO en mayúsculas espaciadas ("[TIPO]")
  + el NOMBRE del producto grande, en blanco, en negrita, con sombra sutil ("[NOMBRE]").
- Debajo de la foto: 3 beneficios con tilde en círculo ([BENEFICIO 1], [BENEFICIO 2],
  [BENEFICIO 3]), el texto "100% BIOLÓGICO · SIN RESIDUOS" y "CONT. NETO 1 Lt".

COLUMNA DERECHA (información técnica, encabezados en barras redondeadas del color de acento):
- Nombre del producto grande en el color de acento + una pastilla con el TIPO.
- GENERALIDADES: [DESCRIPCIÓN del producto].
- COMPOSICIÓN: lista de microorganismos con líneas punteadas y porcentaje a la derecha:
  [COMPONENTE 1] … [%], [COMPONENTE 2] … [%], … (según ficha técnica).
- COMPATIBILIDAD: compatible con la mayoría de abonos y plaguicidas; prueba previa.
- INSTRUCCIONES DE USO: [MODO Y MOMENTO DE APLICACIÓN].
- Tabla CULTIVO | ACCIÓN | DOSIS: [CULTIVO] · [ACCIÓN] · [DOSIS].
- RIESGOS AMBIENTALES: manejo y disposición de envases.

BANDA INFERIOR (blanca, ancho completo, con línea superior del color de acento):
- Logo de BioAgroSolutions a la izquierda + "LÍNEA BIOAGRO".
- Banderas de Argentina y Bolivia a la derecha.

Estilo: profesional, prolijo, mucho aire, alto contraste, textos nítidos y legibles,
paleta dominada por el color de acento [COLOR] sobre blanco. Sin marcas de agua.
```

---

## Colores de acento por producto (para mantener la coherencia)

| Producto | Color (RGB / HEX) | Tipo |
|---|---|---|
| BioCore | 34,120,70 · `#22784A` | Biofertilizante |
| BioNDrive | 0,150,120 · `#009678` | Biofertilizante |
| BioFill | 205,150,35 · `#CD9623` | Biofertilizante |
| BioBoost | 120,180,40 · `#78B428` | Bioestimulante |
| BioResista | 95,165,210 · `#5FA5D2` | Bioestimulante |
| BioSync | 130,90,180 · `#825AB4` | Coadyuvante |
| BioGuard | 230,120,45 · `#E6782D` | Biofungicida |
| BioStrike | 155,60,50 · `#9B3C32` | Bioinsecticida |
| BioMollux | 0,160,160 · `#00A0A0` | Bioinsecticida |
| BioNodo | 150,110,60 · `#966E3C` | Trat. de semillas |
| BioSprout | 95,165,80 · `#5FA550` | Trat. de semillas |
| BioVita | 40,95,175 · `#2860AF` | Línea pecuaria |

> **Tip:** si querés máxima precisión de texto (composición, tablas, legales), conviene
> generarla por plantilla/código como en `Etiquetas_Linea_BioAgro.pdf` (los textos salen
> perfectos y todas quedan iguales). La IA es ideal para la **foto del centro** y para
> mockups; para el texto fino, la plantilla es más confiable. Si me pasás la foto y los
> datos, te la armo idéntica con este mismo estilo.
```
