# -*- coding: utf-8 -*-
from reportlab.lib.pagesizes import A4
from reportlab.lib.units import mm
from reportlab.lib import colors
from reportlab.lib.styles import ParagraphStyle
from reportlab.platypus import (BaseDocTemplate, PageTemplate, Frame, Paragraph, Spacer,
    Table, TableStyle, PageBreak, Flowable)
from reportlab.platypus.tableofcontents import TableOfContents
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.pdfbase.pdfmetrics import registerFontFamily
from reportlab.lib.utils import ImageReader
FD="/usr/share/fonts/truetype/google-fonts/"
for n,f in [("Pop","Poppins-Regular.ttf"),("Pop-B","Poppins-Bold.ttf"),("Pop-M","Poppins-Medium.ttf"),("Pop-L","Poppins-Light.ttf"),("Pop-I","Poppins-Italic.ttf")]:
    pdfmetrics.registerFont(TTFont(n,FD+f))
registerFontFamily("Pop",normal="Pop",bold="Pop-B",italic="Pop-I",boldItalic="Pop-B")
AST="/sessions/admiring-busy-pasteur/mnt/greenScience/assets/"
DGREEN=colors.HexColor("#123A22"); LIME=colors.HexColor("#8FBE20"); GSUB=colors.HexColor("#5E9E2E")
DARK=colors.HexColor("#18482C"); INK=colors.HexColor("#2E3830"); BODY=colors.HexColor("#3C463E")
GREY=colors.HexColor("#6E7A70"); SOFT=colors.HexColor("#EAF1E6"); HAIR=colors.HexColor("#D6DCD6")
PW,PH=A4; LM=22*mm; RM=20*mm; TM=24*mm; BM=20*mm
S={}
S['h1']=ParagraphStyle('h1',fontName="Pop-B",fontSize=20,textColor=DGREEN,spaceBefore=4,spaceAfter=9,leading=24)
S['h2']=ParagraphStyle('h2',fontName="Pop-B",fontSize=13.5,textColor=DARK,spaceBefore=11,spaceAfter=4,leading=17)
S['h3']=ParagraphStyle('h3',fontName="Pop-B",fontSize=11,textColor=GSUB,spaceBefore=7,spaceAfter=2,leading=14)
S['body']=ParagraphStyle('body',fontName="Pop",fontSize=10.2,textColor=BODY,leading=15.4,spaceAfter=6,alignment=4)
S['bul']=ParagraphStyle('bul',fontName="Pop",fontSize=10.2,textColor=BODY,leading=14.8,spaceAfter=3,leftIndent=13,bulletIndent=2,alignment=4)
S['lead']=ParagraphStyle('lead',fontName="Pop-M",fontSize=11.3,textColor=DARK,leading=16.5,spaceAfter=8)
S['toc']=ParagraphStyle('toc',fontName="Pop-M",fontSize=10.5,textColor=DGREEN,leading=16.4)
S['th']=ParagraphStyle('th',fontName="Pop-B",fontSize=8.6,textColor=colors.white,leading=10.5)
S['td']=ParagraphStyle('td',fontName="Pop",fontSize=8.6,textColor=INK,leading=11)
S['tdb']=ParagraphStyle('tdb',fontName="Pop-B",fontSize=8.6,textColor=DGREEN,leading=11)
S['small']=ParagraphStyle('small',fontName="Pop",fontSize=8.3,textColor=GREY,leading=11.5,spaceAfter=2,alignment=4)
S['gl']=ParagraphStyle('gl',fontName="Pop",fontSize=9.6,textColor=BODY,leading=14,spaceAfter=5,alignment=4)
story=[]
def H1(t):
    p=Paragraph(t,S['h1']); p._toc=t; story.append(p)
def H2(t): story.append(Paragraph(t,S['h2']))
def H3(t): story.append(Paragraph(t,S['h3']))
def P(t): story.append(Paragraph(t,S['body']))
def LEAD(t): story.append(Paragraph(t,S['lead']))
def BUL(items):
    for it in items: story.append(Paragraph(it,S['bul'],bulletText="•"))
def SP(h=6): story.append(Spacer(1,h))
def SMALL(t): story.append(Paragraph(t,S['small']))
def GL(t,d): story.append(Paragraph("<b>"+t+":</b> "+d,S['gl']))
class Callout(Flowable):
    def __init__(self,title,text,fill,bar,tcol):
        Flowable.__init__(self);self.t=title;self.x=text;self.fill=fill;self.bar=bar;self.tc=tcol;self.width=PW-LM-RM
    def wrap(self,aw,ah):
        self.tp=Paragraph(self.t,ParagraphStyle('a',fontName="Pop-B",fontSize=10.3,textColor=self.tc,leading=13))
        self.p=Paragraph(self.x,ParagraphStyle('b',fontName="Pop",fontSize=9.5,textColor=BODY,leading=14))
        w=self.width-26; self.th=self.tp.wrap(w,999)[1]; self.ph=self.p.wrap(w,999)[1]
        self.h=self.th+self.ph+20; return (self.width,self.h)
    def draw(self):
        c=self.canv; c.setFillColor(self.fill); c.roundRect(0,0,self.width,self.h,8,fill=1,stroke=0)
        c.setFillColor(self.bar); c.roundRect(0,0,5,self.h,2,fill=1,stroke=0)
        self.tp.drawOn(c,15,self.h-5-self.th); self.p.drawOn(c,15,8)
def CALLOUT(t,x,kind="tip"):
    m={"tip":(SOFT,LIME,DGREEN),"warn":(colors.HexColor("#FBEEDD"),colors.HexColor("#E0783C"),colors.HexColor("#9A4E1E")),"key":(colors.HexColor("#E7F0E2"),GSUB,DARK)}
    f,b,tc=m[kind]; story.append(Spacer(1,3)); story.append(Callout(t,x,f,b,tc)); story.append(Spacer(1,7))
def TABLE(header,rows,widths):
    data=[[Paragraph(h,S['th']) for h in header]]
    for r in rows: data.append([Paragraph(r[0],S['tdb'])]+[Paragraph(c,S['td']) for c in r[1:]])
    t=Table(data,colWidths=widths,repeatRows=1)
    ts=[('BACKGROUND',(0,0),(-1,0),DARK),('VALIGN',(0,0),(-1,-1),'MIDDLE'),
        ('LEFTPADDING',(0,0),(-1,-1),6),('RIGHTPADDING',(0,0),(-1,-1),6),
        ('TOPPADDING',(0,0),(-1,-1),4),('BOTTOMPADDING',(0,0),(-1,-1),4),
        ('LINEBELOW',(0,0),(-1,-1),0.4,HAIR),('ROUNDEDCORNERS',[6,6,0,0])]
    for i in range(1,len(data)):
        if i%2==0: ts.append(('BACKGROUND',(0,i),(-1,i),colors.HexColor("#F1F5EF")))
    t.setStyle(TableStyle(ts)); story.append(t); story.append(Spacer(1,7))
def COMP(rows):
    H3("Composición (según ficha técnica)")
    TABLE(["Microorganismo / componente","%","Función principal"],rows,[210,38,205])

story.append(PageBreak())
story.append(Paragraph("Contenido",S['h1'])); SP(4)
toc=TableOfContents(); toc.levelStyles=[S['toc']]; story.append(toc); story.append(PageBreak())

H1("1 · Introducción: el suelo vivo y los bioinsumos")
LEAD("Manual de estudio y de campo de la línea Green Science (una sublínea de BioAgroSolutions). Explica qué son los bioinsumos, qué microorganismos usamos y qué hace cada uno, cómo y por qué se aplican, y todos los beneficios de cada producto — con el detalle necesario para que el equipo pueda explicarlos con seguridad.")
H2("¿Qué es un bioinsumo?")
P("Un <b>bioinsumo</b> es un insumo agrícola de origen biológico: microorganismos vivos benéficos (bacterias, hongos y levaduras) y/o sus metabolitos (enzimas, fitohormonas, ácidos orgánicos, toxinas naturales). La línea Green Science es de <b>origen orgánico microbiano</b>, 100% biológica y sin residuos tóxicos, apta para exportación. A diferencia de un agroquímico —una molécula fija— el bioinsumo actúa por <b>procesos vivos</b>: los microorganismos se multiplican, colonizan la raíz o el rastrojo, producen sustancias útiles y compiten con lo dañino.")
H2("El suelo vivo (Living Soil Biotechnology)")
P("Un suelo sano es un <b>ecosistema</b>: en un gramo hay miles de millones de microorganismos. La zona que rodea la raíz —la <b>rizósfera</b>— es donde ocurre casi todo: la planta libera azúcares y exudados y, a cambio, los microbios le acercan nutrientes, hormonas y protección. Nuestro trabajo es <b>devolverle la vida al suelo</b>: más materia orgánica, mejor microflora, raíces más profundas y defensas naturales activas.")
CALLOUT("Idea central para transmitir","Nutrimos y sanamos el <b>suelo</b>, y fortalecemos la <b>planta</b> para que se defienda sola. El biológico no reemplaza todo lo químico de golpe: lo integra, baja residuos y recupera el suelo campaña tras campaña. Y a diferencia de un químico, <b>los microorganismos siguen trabajando</b> después de aplicados, colonizando la rizósfera.","key")
H2("Conceptos base")
BUL([
"<b>UFC/ml (unidades formadoras de colonia):</b> mide cuántos microorganismos <i>vivos y viables</i> hay por mililitro; es la 'carga' real del producto. Ej.: FULL POWER 50 declara <i>Azospirillum</i> a 2×10⁸ UFC/ml.",
"<b>Viabilidad y vida útil:</b> están vivos; el calor, el sol (UV), el cloro y el tiempo los debilitan. Conservar en fresco, ventilado y bajo sombra.",
"<b>Colonización:</b> se <i>instalan</i> en la semilla, la raíz o el rastrojo y se multiplican; su efecto se sostiene en el tiempo, no es un 'golpe' puntual.",
"<b>Sin período de carencia:</b> no dejan residuos tóxicos; reentrada segura y apto para exportación.",
"<b>Preventivo &gt; curativo:</b> rinden mucho más aplicados a tiempo que cuando la plaga o la enfermedad ya explotó."])

H1("2 · Cómo funcionan los microorganismos")
P("Debajo de cada producto hay unos pocos <b>mecanismos</b> que se repiten. Entenderlos permite explicar con propiedad qué hace cada microorganismo y por qué conviene combinarlos.")
H2("A · Nutrición del suelo y de la planta")
H3("Fijación biológica de nitrógeno (FBN)")
P("El aire tiene 78% de nitrógeno (N₂), pero la planta no lo puede usar directo. Ciertas bacterias tienen la enzima <b>nitrogenasa</b>, que convierte el N₂ del aire en amonio asimilable. Hay dos vías: <b>simbiótica</b> —<i>Bradyrhizobium / Rhizobium</i> forman <b>nódulos</b> en las raíces de leguminosas— y <b>asociativa/endófita</b> —<i>Azospirillum</i> y <i>Gluconacetobacter diazotrophicus</i> fijan N en o dentro de la raíz de gramíneas (maíz, arroz, caña).")
P("<b>La nodulación paso a paso:</b> la leguminosa libera <b>flavonoides</b>; la bacteria responde con <b>factores Nod</b>; el pelo radicular se <b>curva</b> y forma un <b>hilo de infección</b> por donde entra la bacteria; se arma el <b>nódulo</b>, donde la bacteria se transforma en <b>bacteroide</b>. La <b>leghemoglobina</b> (que da el color rosado del nódulo sano) regula el oxígeno para que la nitrogenasa trabaje. Resultado: nitrógeno 'de la casa', gratis y limpio.")
H3("Solubilización de fósforo, potasio y micronutrientes")
P("Gran parte del fósforo del suelo está 'bloqueado'. Bacterias como <i>Pseudomonas fluorescens</i> y <i>Bacillus megaterium</i> liberan <b>ácidos orgánicos</b> y <b>fosfatasas</b> que desbloquean ese P, movilizan potasio y micronutrientes, y producen <b>sideróforos</b> que capturan hierro y se lo entregan a la planta (quitándoselo a los patógenos).")
H3("Fitohormonas y pelos radiculares")
P("Muchas bacterias benéficas (PGPR) producen <b>fitohormonas</b>: <b>auxinas</b> (ácido indolacético, AIA) que disparan raíces y <b>pelos radiculares</b>; <b>giberelinas</b> que alargan tejidos; y <b>citoquininas</b> que activan la división celular. <i>Azospirillum brasilense</i> es un gran productor de AIA: por eso, tratado desde la semilla, <b>multiplica los pelos absorbentes desde la germinación</b> y agranda el sistema radicular. Más pelos radiculares = más superficie para absorber agua y nutrientes.")
H3("Tolerancia al estrés")
P("Bajo estrés (sequía, salinidad, encharcamiento) la planta produce <b>etileno</b>, que frena su crecimiento. Varias bacterias bajan ese etileno (enzima <b>ACC deaminasa</b>) y mejoran la eficiencia del agua, por eso el cultivo con manejo biológico <b>aguanta mejor la seca</b>.")
H3("Descomposición y materia orgánica")
P("Hongos, actinomicetos y levaduras descomponen el rastrojo, liberan nutrientes, forman <b>humus</b> y mejoran la estructura (aireación, infiltración, retención de agua). Un rastrojo colonizado por hongos benéficos es señal de un suelo que sana.")
H2("B · Protección: control biológico")
H3("Antibiosis")
P("<i>Bacillus subtilis, B. amyloliquefaciens, B. pumilus</i> producen <b>lipopéptidos</b> (iturina, surfactina, fengicina) que rompen la membrana de hongos y bacterias patógenas. Son 'antibióticos naturales' fabricados en el lugar. Además son <b>esporulados</b>: forman esporas resistentes que sobreviven en condiciones difíciles.")
H3("Micoparasitismo — el caso de Trichoderma")
P("<i>Trichoderma harzianum</i> literalmente <b>parasita a otros hongos</b>: los detecta, se enrolla sobre sus hifas y las degrada con enzimas (<b>quitinasas, β-glucanasas, proteasas</b>) que rompen su pared. Además compite por espacio y alimento y coloniza la raíz protegiéndola.")
H3("Resistencia sistémica inducida (ISR)")
P("El contacto con microorganismos benéficos <b>activa las defensas propias de la planta</b> (vías del ácido jasmónico y el etileno), como una 'vacuna': la planta queda 'alerta' (<i>primed</i>) y responde más rápido y fuerte ante un ataque posterior, en toda la planta y no solo donde se aplicó.")
H3("Entomopatógenos — cómo matan a los insectos")
P("<b>Bacillus thuringiensis (Bt):</b> durante su esporulación forma <b>cristales proteicos (proteínas Cry)</b> junto a la espora. Cuando la larva come hoja tratada, en su intestino <b>alcalino</b> el cristal se <b>disuelve</b> y las proteasas del insecto <b>activan</b> la toxina. La toxina activada se <b>une a receptores específicos</b> del epitelio intestinal, se <b>inserta en la membrana</b> y forma <b>poros</b>: las células se hinchan y revientan (lisis osmótica), el intestino se paraliza, la larva deja de comer y muere. Esa unión a un receptor puntual es lo que lo hace <b>específico e inocuo</b> para personas, fauna y polinizadores.")
P("<b>Hongos entomopatógenos (Beauveria bassiana, Metarhizium anisopliae):</b> a diferencia del Bt, actúan <b>por contacto</b> (no necesitan que el insecto coma). El conidio (espora) se <b>adhiere a la cutícula</b>, germina y forma un <b>apresorio</b>; con enzimas (proteasas, quitinasas, lipasas) más presión mecánica <b>perfora la cutícula</b>, entra al cuerpo (hemocele) y se multiplica, liberando <b>toxinas</b> (beauvericina, destruxinas) que matan al insecto. Luego el hongo <b>emerge y esporula</b> (la 'micosis' blanca o verde) e infecta a otros insectos.")
P("<b>Spinosad</b> (de la actinobacteria <i>Saccharopolyspora spinosa</i>): neurotóxico natural que sobreexcita el sistema nervioso del insecto (receptores nicotínicos y GABA), con parálisis y muerte rápida por contacto e ingestión. <b>Chromobacterium subtsugae:</b> aporta metabolitos con efecto <b>antialimentario</b> e insecticida por contacto/ingestión, y repelencia.")
CALLOUT("Por qué el biológico casi no genera resistencia","Nuestros bioinsecticidas y biofungicidas son <b>multisitio</b>: atacan por varios frentes a la vez (toxinas Cry + hongos + Spinosad + antialimentario, o micoparasitismo + antibiosis + ISR). Al insecto o al hongo le cuesta muchísimo más 'esquivar' varios mecanismos que uno solo — al revés de un químico de sitio único.","key")
H2("C · Quién es quién: los microorganismos de la línea")
TABLE(["Microorganismo","Tipo","Qué hace"],
[["Azospirillum brasilense","Bacteria","Fija N asociativo y produce auxinas (AIA): más raíces y pelos radiculares."],
 ["Bradyrhizobium japonicum","Bacteria","Fija N en simbiosis (nódulos) en leguminosas."],
 ["Gluconacetobacter diazotrophicus","Bacteria endófita","Fija N dentro de la planta (caña/gramíneas) y promueve crecimiento."],
 ["Pseudomonas fluorescens","Bacteria","Solubiliza P, produce sideróforos y antibióticos; induce defensas (ISR)."],
 ["Bacillus subtilis / amyloliquefaciens / pumilus / megaterium / aryabhattai","Bacterias esporuladas","Antibiosis (lipopéptidos), solubilización de P, promoción e ISR; muy resistentes."],
 ["Trichoderma harzianum","Hongo benéfico","Micoparasitismo (enzimas), competencia, antibiosis e ISR; coloniza la raíz."],
 ["Beauveria bassiana / Metarhizium anisopliae","Hongos entomopatógenos","Infectan insectos por la cutícula (micosis) y los matan por dentro."],
 ["Bacillus thuringiensis (kurstaki, aizawai)","Bacteria","Cristales Cry que perforan el intestino de las larvas."],
 ["Saccharopolyspora spinosa","Actinobacteria","Produce Spinosad: neurotóxico para insectos."],
 ["Chromobacterium subtsugae","Bacteria","Metabolitos insecticidas: antialimentario y contacto."],
 ["Ác. lácticas · Actinomicetos · Saccharomyces (levaduras)","Consorcio probiótico","Fermentan/descomponen materia orgánica; compiten con patógenos; mejoran digestión y aguas."]],
[168,86,199])

H1("3 · Buenas prácticas de aplicación (para todos)")
P("Como trabajamos con organismos vivos, <b>el 'cómo' importa tanto como el 'qué'</b>. Estas reglas cuidan la viabilidad de los microorganismos.")
H2("El agua y el caldo")
BUL(["<b>Agua limpia y sin cloro:</b> el cloro mata microorganismos. Dejá reposar el agua unas horas o usá un neutralizante; preferí agua de pozo o lluvia limpia.",
"<b>pH ligeramente ácido a neutro</b> (aprox. 5,5–7).",
"<b>Agitá</b> antes de usar; prepará el caldo y aplicalo el mismo día."])
H2("El momento y el clima")
BUL(["Aplicá <b>temprano o al atardecer</b>: el sol fuerte (UV) y el calor desecan y matan a los microorganismos. Los hongos entomopatógenos rinden mejor con <b>humedad relativa alta y días nublados</b>.",
"Buscá <b>humedad</b> (rocío, suelo húmedo, previo a lluvia suave). Para aplicaciones al suelo, con humedad e incorporando/regando.",
"Evitá viento fuerte o lluvia torrencial inmediata que lave el producto."])
H2("Cobertura, dosis y equipo")
BUL(["Buen <b>volumen de caldo</b> y cobertura pareja; en plagas/enfermedades foliares, apuntá también al envés y al cogollo.",
"Respetá la <b>dosis de la ficha</b>; más no es mejor: manda la cobertura y el momento.",
"Equipo <b>limpio</b>, sin restos de la aplicación anterior."])
H2("Compatibilidad de mezclas")
BUL(["Los productos Green Science son <b>compatibles con la mayoría de abonos y plaguicidas</b> del mercado local y con bacterias solubilizadoras; aun así, hacé siempre una <b>prueba de compatibilidad</b> (prueba de jarra) antes de cargar el tanque.",
"Evitá el <b>cloro, el cobre y los desinfectantes/fungicidas de amplio espectro</b> en el mismo caldo con los biológicos vivos: los matan. Si hay que usarlos, separá las aplicaciones unos días."])
H2("Conservación y seguridad")
BUL(["Conservar en el <b>envase original cerrado</b>, en lugar fresco, ventilado y bajo sombra, fuera del alcance de los niños.",
"<b>Sin período de carencia</b>: reentrada segura, apto exportación.",
"Emergencias por intoxicación (Bolivia): Hospital Japonés 800-10-6966."])
CALLOUT("Los 3 errores que más 'matan' un biológico","1) Agua con cloro. 2) Aplicar al mediodía a pleno sol. 3) Mezclarlo con un fungicida/bactericida fuerte o cobre en el mismo tanque. Evitá esos tres y ya ganaste la mitad del resultado.","warn")

H1("4 · Las categorías y los productos Green Science")
P("Cada categoría en profundidad: composición real, qué hacen los microorganismos, por qué y cómo se aplica, beneficios y precauciones. Las dosis son las de ficha técnica; ajustar con asesoría según cultivo, zona y condiciones.")
P("El <b>tratamiento de semillas</b> tiene <b>dos productos distintos</b>, uno por familia de cultivo: <b>SEED FORTE 3.0</b> para leguminosas y <b>SEED FORTE 4.0</b> para gramíneas. No son intercambiables: cambian los microorganismos y la vía de fijación de nitrógeno. A continuación, cada uno por separado.")

H1("4.1 · Tratamiento de semillas · Leguminosas — SEED FORTE 3.0")
P("SEED FORTE 3.0 es el tratamiento biológico de semillas para la <b>familia Fabaceae (leguminosas)</b>: <b>soya, maní, algodón y girasol</b>. Su gran diferencial es la <b>fijación simbiótica de nitrógeno</b>: instala en la raíz las bacterias que forman nódulos y capturan el nitrógeno del aire.")
H2("Cómo funciona (qué hacen los microorganismos)")
P("El protagonista es el <b>Bradyrhizobium japonicum (30%)</b>, la bacteria simbiótica de las leguminosas: penetra por los pelos radiculares, forma los <b>nódulos</b> y allí, convertida en bacteroide, fija el N₂ del aire con su nitrogenasa (la leghemoglobina rosada regula el oxígeno). En una soya bien nodulada, esta fijación puede cubrir <b>gran parte de la demanda de nitrógeno</b> del cultivo. El <b>Azospirillum brasilense (30%)</b> suma fijación asociativa y, sobre todo, <b>auxinas</b> que generan <b>pelos radiculares (absorbentes) desde la germinación</b>. El <b>Trichoderma harzianum</b> —presente en alta proporción (20%)— protege la semilla y la raíz por micoparasitismo y coloniza la rizósfera; los <b>Bacillus</b> (aryabhattai, megaterium, subtilis) solubilizan fósforo y aportan antibiosis, y la <b>Chromobacterium subtsugae</b> protege frente a plagas. Todo queda instalado y <b>sigue actuando toda la campaña</b>.")
COMP([["Azospirillum brasilense spp","30%","Fija N asociativo; auxinas → pelos radiculares"],
["Bradyrhizobium japonicum spp","30%","Fija N simbiótico (nódulos) — clave en leguminosas"],
["Trichoderma harzianum","20%","Protege semilla/raíz (micoparasitismo); coloniza rizósfera"],
["Bacillus aryabhattai","5%","Solubiliza P; promoción del crecimiento"],
["Bacillus megaterium","5%","Solubiliza fósforo; antibiosis"],
["Bacillus subtilis spp","5%","Antibiosis (lipopéptidos); control de patógenos"],
["Chromobacterium subtsugae","5%","Protección frente a plagas/patógenos"],
["Ácidos húmicos y fúlvicos","inertes","Vehículo y bioestimulación"]])
H2("Por qué se aplica")
P("Porque en leguminosas el nitrógeno es el nutriente más caro y limitante: con una <b>buena nodulación</b> el propio cultivo lo fabrica. Además define emergencia pareja, raíces fuertes y protección temprana de la plántula, reduciendo el riesgo de resistencias.")
H2("Cómo y cuándo aplicarlo")
BUL(["<b>Sobre la semilla</b>, antes de sembrar, cubriendo de forma pareja; dejar orear a la sombra y <b>sembrar dentro de las horas siguientes</b> (no exponer al sol).",
"Se puede usar en <b>coinoculación</b> con otras bacterias solubilizadoras, respetando dosis.",
"Agua limpia sin cloro; verificar compatibilidad con curasemillas químico."])
H2("Beneficios")
BUL(["<b>Fijación de nitrógeno</b> por nódulos: N 'de la casa', menos fertilizante.","<b>Mayor nodulación</b> y germinación uniforme.","Pelos absorbentes desde la siembra, que acompañan hasta la cosecha.","Control de patógenos de la semilla y activación de fitohormonas.","Microorganismos que <b>siguen colonizando la rizósfera</b> toda la campaña."])
H2("Propiedades y precauciones")
BUL(["Específico para <b>leguminosas</b> (soya, maní, algodón, girasol); origen orgánico microbiano, sin residuos.","Alto contenido de Trichoderma (20%): fuerte protección de la semilla.","No exponer la semilla inoculada al sol ni sembrarla tarde; cuidar compatibilidad con curasemillas."])
CALLOUT("Dosis (ficha técnica)","500 ml por cada 100 kg de semilla · 1 L/ha. Aplicar sobre la semilla antes de sembrar (o en coinoculación).","tip")

H1("4.2 · Tratamiento de semillas · Gramíneas — SEED FORTE 4.0")
P("SEED FORTE 4.0 es el tratamiento biológico de semillas para la <b>familia Poaceae (gramíneas / cereales)</b>: <b>arroz, caña de azúcar, maíz y trigo</b>. Como las gramíneas <b>no forman nódulos</b>, su fijación de nitrógeno es <b>asociativa y endófita</b>, y el foco está en <b>emergencia, macollaje y raíz</b>.")
H2("Cómo funciona (qué hacen los microorganismos)")
P("Aquí el <b>Azospirillum brasilense (30%)</b> es el motor: fija nitrógeno asociativo en la rizósfera y produce <b>auxinas</b> que <b>multiplican los pelos radiculares desde la germinación</b> y estimulan el <b>macollaje</b> (más tallos por planta). Se suma el <b>Gluconacetobacter diazotrophicus (10%)</b>, una bacteria <b>endófita</b> que vive <i>dentro</i> de la planta (típica de la caña) y fija nitrógeno internamente — algo que el 3.0 no tiene. El <b>Bradyrhizobium (20%)</b> refuerza la promoción; los <b>Bacillus</b> (amyloliquefaciens, aryabhattai, megaterium, subtilis) solubilizan fósforo y aportan antibiosis; el <b>Trichoderma harzianum (10%)</b> y la <b>Chromobacterium subtsugae</b> controlan patógenos de la semilla. El resultado es una gramínea con más raíz, macollaje parejo y arranque protegido.")
COMP([["Azospirillum brasilense spp","30%","Fija N asociativo; auxinas → pelos radiculares y macollaje"],
["Bradyrhizobium japonicum","20%","Promoción y aporte de fijación"],
["Gluconacetobacter diazotrophicus","10%","Fija N endófita (dentro de la planta) — propio de gramíneas"],
["Trichoderma harzianum","10%","Controla patógenos de semilla; coloniza raíz"],
["Bacillus subtilis","10%","Antibiosis; control de patógenos"],
["Bacillus amyloliquefaciens","5%","Antibiosis (lipopéptidos); promoción"],
["Bacillus aryabhattai / megaterium","5%/5%","Solubilizan fósforo; promoción"],
["Chromobacterium subtsugae","5%","Protección frente a plagas/patógenos"],
["Ácidos húmicos y fúlvicos","inertes","Vehículo y bioestimulación"]])
H2("Por qué se aplica")
P("Porque en gramíneas el arranque y el <b>macollaje</b> definen el número de tallos y el techo de rendimiento. Al no nodular, la vía correcta es la <b>fijación asociativa/endófita</b> que aporta este producto — por eso no sirve el 3.0. En ensayos propios de maíz, cambiar <b>solo</b> el tratamiento de semilla biológico frente al químico marcó <b>+25 quintales/ha</b>, con el resto del manejo igual.")
H2("Cómo y cuándo aplicarlo")
BUL(["<b>Sobre la semilla</b>, antes de sembrar, cubriendo parejo; orear a la sombra y <b>sembrar dentro de las horas siguientes</b>.",
"Se puede usar en <b>coinoculación</b>, respetando dosis.",
"Agua limpia sin cloro; verificar compatibilidad con curasemillas."])
H2("Beneficios")
BUL(["<b>Emergencia uniforme</b> y <b>mayor macollaje</b> (más tallos por planta).","<b>Raíces más fuertes</b> y pelos absorbentes desde la siembra, hasta la cosecha.","Fijación de nitrógeno asociativa y <b>endófita</b> (Gluconacetobacter).","Control de patógenos de la semilla y mayor vigor inicial.","Microorganismos que <b>siguen colonizando la rizósfera</b> toda la campaña."])
H2("Propiedades y precauciones")
BUL(["Específico para <b>gramíneas</b> (arroz, caña, maíz, trigo); origen orgánico microbiano, sin residuos.","Incluye fijación endófita (Gluconacetobacter), ausente en el 3.0.","No exponer la semilla inoculada al sol ni sembrarla tarde; cuidar compatibilidad con curasemillas."])
CALLOUT("Dosis (ficha técnica)","500 ml por cada 100 kg de semilla · 1 L/ha. Aplicar sobre la semilla antes de sembrar (o en coinoculación).","tip")
CALLOUT("3.0 vs 4.0 — la diferencia en una frase","Ambos ponen la raíz en marcha, pero el <b>3.0 (leguminosas)</b> fija nitrógeno por <b>nódulos</b> (Bradyrhizobium, y lleva más Trichoderma), y el <b>4.0 (gramíneas)</b> lo fija de forma <b>asociativa y endófita</b> (Azospirillum + Gluconacetobacter) con foco en <b>macollaje</b>. Usar el que corresponde a la familia del cultivo.","key")

H1("4.3 · Biofertilizante — FULL GREEN 100")
P("Inoculante y fertilizante microbiano que <b>nutre desde la biología del suelo</b> (no aporta sales solubles). Mejora las propiedades <b>físicas, químicas y biológicas</b> del suelo, incrementa la microflora benéfica y estimula las raicillas y la simbiosis con bacterias fijadoras de nitrógeno.")
H2("Cómo funciona")
P("El <b>Azospirillum</b> y el <b>Bradyrhizobium</b> aportan y estimulan la <b>fijación de nitrógeno</b>; la <b>Pseudomonas fluorescens</b> solubiliza fósforo, produce sideróforos y desplaza patógenos. Su consorcio <b>acelera la descomposición de la materia orgánica</b> y libera nutrientes, mejorando la traslocación y el aprovechamiento en la planta. FULL GREEN 100 incluye además <b>hongos entomopatógenos</b> (Beauveria, Metarhizium) y <b>Bt/Spinosa</b>, sumando una <b>supresión de plagas de suelo/follaje</b> mientras nutre — un biofertilizante con 'escudo'.")
COMP([["Azospirillum brasilense","15%","Fija N; auxinas y promoción"],
["Bradyrhizobium japonicum","15%","Fija N; simbiosis"],
["Pseudomonas fluorescens","5%","Solubiliza P; sideróforos; antibiosis"],
["Beauveria bassiana / Metarhizium anisopliae","10%/10%","Supresión de plagas (entomopatógenos)"],
["Bt kurstaki / aizawai · Saccharopolyspora spinosa","5%/5%/5%","Control de larvas e insectos"],
["Minerales y sustancias inertes","30%","Vehículo y nutrición"]])
H2("Por qué y cómo se aplica")
P("Para <b>mejorar la fertilidad real</b> del suelo y la eficiencia de los fertilizantes: parte del nutriente que hoy se pierde o queda fijado se vuelve disponible; con el tiempo, recupera suelos pobres o cansados. Se aplica foliar y/o al suelo (incluye fertirriego), en <b>V3, V5, V7, R1 y R3</b>, idealmente con humedad y en horas frescas.")
H2("Beneficios")
BUL(["Mayor rendimiento, vigor y color.","Suelo más fértil y vivo campaña tras campaña; mejor microflora.","Mejor aprovechamiento de los fertilizantes aplicados.","Supresión biológica adicional de plagas por sus entomopatógenos.","Aplicable en todos los cultivos; compatible con el equipo habitual."])
CALLOUT("Dosis (ficha técnica)","0,5 – 1 L/ha. Aplicaciones secuenciales en V3, V5, V7, R1 y R3.","tip")

H1("4.4 · Bioestimulante — FULL POWER 50")
P("Bioestimulante para <b>activar la planta</b>: raíz, vigor, floración y tolerancia al estrés. No es un fertilizante: es un <b>activador</b> del desarrollo.")
H2("Cómo funciona")
P("Su base es <b>Azospirillum brasilense</b> a alta carga (2×10⁸ UFC/ml, 60%) con <b>Bradyrhizobium</b> y <b>Pseudomonas fluorescens</b>. Aprovecha y estimula la <b>fijación de nitrógeno</b> y produce <b>fitohormonas</b> (giberelinas, auxinas y citoquininas) que disparan el <b>desarrollo radicular</b> —más cantidad y tamaño de raíces y pelos absorbentes— y mejoran la absorción de agua y nutrientes, con <b>mayor tolerancia a la sequía</b>. Además <b>solubiliza fósforo, potasio y hierro</b>, optimizando su disponibilidad.")
COMP([["Azospirillum brasilense (2×10⁸ UFC/ml)","60%","Fija N; auxinas/giberelinas/citoquininas → raíz y vigor"],
["Bradyrhizobium japonicum (2×10⁸ UFC/ml)","30%","Fija N; promoción"],
["Pseudomonas fluorescens","5%","Solubiliza P, K y Fe; sideróforos"],
["Ingredientes inertes / ácidos húmicos y fúlvicos","5% / c.s.p.","Vehículo y bioestimulación"]])
H2("Por qué y cómo se aplica")
P("Para <b>potenciar momentos clave</b>: arranque y desarrollo radicular, floración y cuaje, y recuperación tras un estrés (seca, granizo, aplicación fuerte). Se aplica foliar a los <b>15–20 días</b> de la siembra y en <b>V3, V5 y R3</b>, en horas frescas.")
H2("Beneficios")
BUL(["Crecimiento rápido y mayor masa radicular (más raíces y pelos absorbentes).","Más floración, mejor cuaje y llenado.","Mejor tolerancia al estrés hídrico; mejor eficiencia del agua.","Más disponibilidad de P, K y Fe.","Aplicable en todos los cultivos."])
CALLOUT("Dosis (ficha técnica)","Secuencial 1 L/ha. Aplicar a los 15–20 días de la siembra y en V3, V5 y R3.","tip")

H1("4.5 · Bioinsecticida — BIOMAX 43")
P("Bioinsecticida de <b>microorganismos entomopatógenos</b> que controla plagas por <b>varios modos de acción a la vez</b>, sin residuos.")
H2("Cómo funciona (por qué se forma el cristal)")
P("Su mecanismo central es la <b>formación de cristales proteicos</b> por el <i>Bacillus thuringiensis</i> durante su <b>fase estacionaria de esporulación</b>: la bacteria, al esporular, fabrica junto a la espora <b>inclusiones cristalinas de proteínas Cry</b> (es su forma de 'guardar' la toxina). Cuando el insecto <b>ingiere</b> la hoja tratada, en su intestino <b>alcalino</b> el cristal se <b>disuelve</b>, las proteasas del insecto <b>activan</b> la toxina, ésta se <b>une a receptores</b> del epitelio intestinal, se <b>inserta</b> y forma <b>poros</b>: las células revientan (lisis), el insecto <b>deja de alimentarse</b> y muere. En paralelo, <b>Beauveria</b> y <b>Metarhizium</b> lo infectan por la cutícula (micosis), el <b>Spinosad</b> (Saccharopolyspora spinosa) lo ataca por el sistema nervioso, y <b>Chromobacterium subtsugae</b> aporta efecto antialimentario. Por eso es <b>multisitio</b> y no genera resistencia con facilidad.")
COMP([["Bacillus thuringiensis kurstaki","10%","Cristales Cry: perforan el intestino de larvas"],
["Bacillus thuringiensis aizawai","10%","Cristales Cry (espectro complementario)"],
["Chromobacterium subtsugae","20%","Antialimentario e insecticida por contacto"],
["Saccharopolyspora spinosa (Spinosad)","20%","Neurotóxico: parálisis rápida"],
["Beauveria bassiana","10%","Micosis: infecta por la cutícula"],
["Metarhizium anisopliae","10%","Micosis: infecta por la cutícula"],
["Ácidos húmicos y fúlvicos","20%","Vehículo; solubilización de nutrientes"]])
H2("Por qué y cómo se aplica")
P("Para <b>controlar insectos sin residuos ni carencia</b>: orugas, chinches, mosca blanca, trips y ácaros, entre otras. Se aplica en <b>etapa vegetativa desde los 15 a 20 días</b> de la siembra, secuencial en <b>V3, V5, V7, R1 y R3</b>, apuntando a los <b>primeros estadios</b> de la plaga (larvas jóvenes), al atardecer o temprano y con buena cobertura (envés y cogollo).")
H2("Beneficios")
BUL(["Control total de plagas con <b>reacción rápida</b> (Spinosad) y sostenida (hongos y Bt).","100% biológico, sin residuos ni carencia; apto exportación.","<b>No genera resistencia</b> con facilidad (multisitio).","Respeta polinizadores y enemigos naturales; seguro para el aplicador.","Aplicable en todos los cultivos."])
CALLOUT("Dosis (ficha técnica)","Secuencial 1 L/ha. Desde los 15 a 20 días; aplicaciones en V3, V5, V7, R1 y R3. Aplicar en horas frescas.","tip")

H1("4.6 · Bioinsecticida molusquicida — BIO-MULUSK")
P("Controla <b>moluscos</b> (caracoles), <b>cochinilla</b> y <b>pulgón negro</b>, además de cochinillas, orugas y <b>picudo negro</b>, en cultivos como banano/plátano, piña, palta, café y cítricos. <b>Cuenta con Registro SENASAG N° 07-16428.</b>")
H2("Cómo funciona")
P("Combina hongos entomopatógenos (<b>Beauveria bassiana, Metarhizium anisopliae</b>) que infectan a la plaga por la cutícula, con <b>Pseudomonas fluorescens</b> y <b>extractos orgánicos atrayentes</b> que acercan a la plaga al producto. Su acción <b>inmoviliza al caracol y lo esteriliza</b>, impidiendo su reproducción y reduciendo drásticamente la población. No deja residuos tóxicos, por lo que se puede aplicar en cualquier momento y favorece la exportación.")
COMP([["Beauveria bassiana","10%","Micosis: infecta por la cutícula"],
["Metarhizium anisopliae","10%","Micosis: infecta por la cutícula"],
["Pseudomonas fluorescens","10%","Antibiosis; promoción"],
["Extractos orgánicos atrayentes","c.s.p.","Atraen la plaga al producto"]])
H2("Por qué y cómo se aplica")
P("Para proteger cultivos sensibles al daño de caracoles/babosas y a la cochinilla/picudo, sin residuos. Se aplica en etapa vegetativa desde los <b>30 días</b>, en <b>V3, V5, V7, R1 y R3</b>, preferentemente con <b>buena humedad relativa y días nublados</b> (cuando los moluscos están activos).")
H2("Beneficios")
BUL(["Control de caracol, cochinilla, pulgón negro, orugas y picudo negro.","Inmoviliza y <b>esteriliza</b> al caracol: corta su reproducción.","Sin residuos; apto exportación (ideal banano).","Más seguro que los cebos químicos para la fauna no objetivo."])
CALLOUT("Dosis (ficha técnica)","3 litros, secuencial (V3, V5, V7, R1, R3). Aplicar con alta humedad relativa / días nublados.","tip")

H1("4.7 · Biofungicida — BIOGUARD")
P("Biofungicida <b>multisitio, preventivo y de amplio espectro</b>: combina 3 microorganismos que se complementan para un <b>biocontrol secuencial</b> de patógenos del follaje, el tallo y la raíz.")
H2("Cómo funciona")
P("Los microorganismos trabajan <b>en secuencia</b>: uno <b>coloniza rápido el sustrato y desplaza</b> a los patógenos (competencia por espacio y nutrientes), y el otro <b>produce metabolitos/antibióticos</b> que controlan a los que sobreviven al primer ataque. El <b>Trichoderma spp</b> aporta <b>micoparasitismo</b> (enzimas quitinasas/glucanasas que degradan al hongo patógeno) y coloniza la raíz; los <b>Bacillus subtilis y pumilus</b> aportan <b>antibiosis</b> (lipopéptidos antifúngicos). Además <b>estimula las defensas naturales de la planta</b> (ISR), haciéndola más resistente a enfermedades fúngicas.")
COMP([["Trichoderma spp","15%","Micoparasitismo (enzimas); coloniza raíz; ISR"],
["Bacillus subtilis spp","30%","Antibiosis (lipopéptidos antifúngicos)"],
["Bacillus pumilus","30%","Antibiosis; desplaza patógenos; ISR"],
["Ingredientes inertes","25%","Vehículo"]])
H2("Por qué y cómo se aplica")
P("Para <b>prevenir enfermedades</b> antes de que exploten: royas, tizones, mildiu, oídio, botrytis, antracnosis, fusariosis, Sclerotinia y enfermedades de raíz, según cultivo. Como es multisitio, <b>no genera resistencia</b> como un fungicida de sitio único. Se aplica de forma <b>preventiva</b> desde los <b>25 días</b> de la siembra, en <b>V3, V5, V7, R1 y R3</b>, con buena cobertura de follaje (y al suelo/rastrojo para sanidad de raíz).")
H2("Beneficios")
BUL(["Protección total preventiva, de amplio espectro y sin residuos.","<b>Biocontrol secuencial:</b> desplaza y luego elimina a los sobrevivientes.","Estimula las defensas naturales de la planta (ISR).","<b>No genera resistencia</b> (multisitio); sana también el suelo (coloniza rastrojo).","Aplicable en todos los cultivos."])
CALLOUT("Dosis (ficha técnica)","Secuencial 1 L/ha. Preventivo desde los 25 días; aplicaciones en V3, V5, V7, R1 y R3.","tip")

H1("4.8 · Probiótico / Bioactivador — BIODYNE 500")
P("Producto biológico de <b>microorganismos que obtienen energía descomponiendo la materia orgánica</b>. Es un <b>probiótico multiuso</b>: mejora biológica de suelos, <b>tratamiento de aguas residuales</b> y <b>línea pecuaria</b> (bovino y porcino).")
H2("Cómo funciona")
P("El consorcio de <b>bacterias ácido-lácticas, actinomicetos y levaduras (Saccharomyces)</b> <b>fermenta y descompone la materia orgánica</b>, <b>compite y desplaza a los patógenos</b>, y produce sustancias benéficas. En el <b>suelo/planta</b> protege el sistema radicular y mejora la resistencia al estrés abiótico (sequía, salinidad), la eficiencia fotosintética y el rendimiento. En <b>pecuaria</b> mejora la digestión y la conversión alimenticia, favorece la ganancia de peso y fortalece el sistema inmune. En <b>aguas e instalaciones</b> reduce la materia orgánica, los lodos y los olores, y mejora la sanidad del ambiente.")
COMP([["Bacterias ácido-lácticas spp","20%","Fermentan MO; compiten con patógenos; digestión"],
["Actinomicetos spp","30%","Descomponen MO; antibiosis; sanidad"],
["Hongos Saccharomyces spp (levaduras)","30%","Fermentación; enzimas; probiótico"],
["Ingredientes inertes","20%","Vehículo"]])
H2("Por qué y cómo se aplica")
P("Para <b>recuperar el suelo y la microflora</b>, activar la cepa/rebrote y el arranque, tratar aguas y bebederos y mejorar sanidad y conversión en ganadería. Es la 'base viva' que potencia al resto del programa.")
BUL(["<b>Comederos:</b> 2–3 L de activado por mochila de 20 L.","<b>Bebederos:</b> 1 L de activado para 1.000 L de agua.","<b>Instalaciones:</b> 5 L del activado por mochila de 20 L.","<b>Suelo/agrícola y aguas residuales:</b> según uso (con agua limpia sin cloro, con humedad). Para consumo animal, consultar con un técnico."])
H2("Beneficios")
BUL(["Recupera el suelo, la materia orgánica y la microflora; protege la raíz.","Pecuaria: mejor digestión, conversión, ganancia de peso e inmunidad.","Aguas/instalaciones: menos materia orgánica, lodos y olores.","Base del programa: potencia a los demás bioinsumos."])
CALLOUT("Dosis (ficha técnica)","Según uso: comederos 2–3 L/mochila 20 L · bebederos 1 L/1.000 L agua · instalaciones 5 L/mochila 20 L. Para consumo animal, consultar con un técnico.","tip")

H1("5 · Tabla resumen de la línea")
TABLE(["Producto","Categoría","Principio biológico clave","Dosis (ficha)"],
[["SEED FORTE 3.0","Trat. semilla · leguminosas","Bradyrhizobium (nódulos) + Azospirillum + Trichoderma 20%","500 ml/100 kg · 1 L/ha"],
 ["SEED FORTE 4.0","Trat. semilla · gramíneas","Azospirillum + Gluconacetobacter (endófita) + Bacillus","500 ml/100 kg · 1 L/ha"],
 ["FULL GREEN 100","Biofertilizante","Azospirillum/Bradyrhizobium/Pseudomonas + entomopatógenos","0,5–1 L/ha"],
 ["FULL POWER 50","Bioestimulante","Azospirillum 2×10⁸ + Bradyrhizobium + Pseudomonas","1 L/ha secuencial"],
 ["BIOMAX 43","Bioinsecticida","Bt (Cry) + Spinosad + Beauveria + Metarhizium","1 L/ha secuencial"],
 ["BIO-MULUSK","Bioinsecticida molusquicida","Beauveria + Metarhizium + Pseudomonas + atrayentes","3 L secuencial"],
 ["BIOGUARD","Biofungicida","Trichoderma + Bacillus subtilis + B. pumilus","1 L/ha secuencial"],
 ["BIODYNE 500","Probiótico / bioactivador","Lácticas + actinomicetos + levaduras","Según uso"]],
[68,92,175,84])
CALLOUT("Cómo se arma un programa","Se arranca con el <b>tratamiento de semilla</b> (3.0 o 4.0 según la familia) y el <b>probiótico</b> en el suelo; se nutre con <b>biofertilizante</b> y se activa con <b>bioestimulante</b>; y se protege con <b>biofungicida</b> (preventivo) y <b>bioinsecticida</b> (al detectar la plaga). Todo aplicado en horas frescas, con agua sin cloro. Ver los planes de Manejo Integral por cultivo.","key")

H1("6 · Glosario")
GL("UFC/ml","Unidades formadoras de colonia por mililitro: cantidad de microorganismos vivos y viables (la 'carga' real del producto).")
GL("Rizósfera","Zona de suelo que rodea la raíz, donde se concentra la actividad microbiana y el intercambio con la planta.")
GL("PGPR","Rizobacterias promotoras del crecimiento vegetal: bacterias que estimulan a la planta (hormonas, nutrición, defensa).")
GL("Pelos radiculares (absorbentes)","Prolongaciones finas de la raíz que multiplican la superficie de absorción de agua y nutrientes; las auxinas microbianas los estimulan.")
GL("FBN / Nitrogenasa","Fijación biológica de nitrógeno: la enzima nitrogenasa convierte el N₂ del aire en amonio asimilable.")
GL("Fijación asociativa vs. simbiótica","Simbiótica: la bacteria vive en nódulos de leguminosas. Asociativa/endófita: fija N junto a o dentro de la raíz de gramíneas, sin nódulos.")
GL("Nódulo / Leghemoglobina","Estructura en la raíz de leguminosas donde el Bradyrhizobium fija N; la leghemoglobina (color rosado) regula el oxígeno interno.")
GL("Endófita","Microorganismo que vive dentro de los tejidos de la planta (ej. Gluconacetobacter en caña/gramíneas).")
GL("Macollaje","Producción de tallos (macollos) desde la base de una gramínea; más macollaje = más potencial de rendimiento.")
GL("Solubilización de fósforo","Liberación del P 'bloqueado' del suelo por ácidos orgánicos y enzimas microbianas.")
GL("Sideróforo","Molécula microbiana que captura hierro y lo hace disponible para la planta (y se lo quita al patógeno).")
GL("Fitohormonas","Reguladores del crecimiento: auxinas (raíz/pelos), giberelinas (elongación), citoquininas (división celular).")
GL("Proteínas Cry / cristal parasporal","Toxinas que el Bt guarda en cristales durante la esporulación; perforan el intestino de las larvas al ser ingeridas.")
GL("Apresorio","Estructura que forman los hongos entomopatógenos para perforar la cutícula del insecto e infectarlo.")
GL("Micosis","Infección del insecto por un hongo entomopatógeno (Beauveria/Metarhizium), que lo coloniza y luego esporula.")
GL("Micoparasitismo","Un hongo benéfico (Trichoderma) parasita y degrada a un hongo patógeno con enzimas.")
GL("Antibiosis","Producción de antibióticos/lipopéptidos naturales que inhiben o matan patógenos.")
GL("ISR","Resistencia sistémica inducida: activación de las defensas propias de la planta por el contacto con microorganismos benéficos.")
GL("Multisitio","Que actúa por varios mecanismos a la vez; por eso es muy difícil que la plaga o el hongo generen resistencia.")
GL("Período de carencia","Días de espera entre la última aplicación y la cosecha. Los biológicos no tienen carencia (sin residuos).")
SP(6)
SMALL("Manual de estudio y de campo · BioAgroSolutions — Línea Green Science (Montero, Santa Cruz, Bolivia). Composiciones y dosis según las fichas técnicas publicadas por Green Science; su uso se ajusta con asesoría técnica según cultivo, zona y condiciones. Emergencias por intoxicación (Bolivia): Hospital Japonés 800-10-6966. Ventas BioAgroSolutions: +54 9 2262 48-7998.")

def draw_cover(c):
    c.saveState(); c.setFillColor(colors.HexColor("#0C2418")); c.rect(0,0,PW,PH,fill=1,stroke=0)
    c.setStrokeColor(colors.HexColor("#3C6E48")); c.setLineWidth(2); c.rect(16*mm,16*mm,PW-32*mm,PH-32*mm,fill=0,stroke=1)
    c.setStrokeColor(GSUB); c.setLineWidth(1); c.rect(19*mm,19*mm,PW-38*mm,PH-38*mm,fill=0,stroke=1)
    try: c.drawImage(AST+"logo.png", PW/2-14*mm, PH-70*mm, width=28*mm, height=28*mm, mask='auto', preserveAspectRatio=True)
    except Exception as e: print("leaf",e)
    c.setFillColor(colors.white); c.setFont("Pop-B",26); c.drawCentredString(PW/2, PH-84*mm, "BioAgroSolutions")
    c.setFillColor(colors.HexColor("#C9DBC9")); c.setFont("Pop-M",11); c.drawCentredString(PW/2, PH-90*mm, "SOLUCIONES BIOLÓGICAS PARA EL SUELO")
    c.setFillColor(colors.white); c.setFont("Pop-L",29); c.drawCentredString(PW/2, PH-123*mm, "Manual de Bioinsumos")
    c.setFillColor(GSUB); c.setFont("Pop-B",39); c.drawCentredString(PW/2, PH-139*mm, "LÍNEA GREEN SCIENCE")
    c.setFillColor(colors.HexColor("#DDE8DD")); c.setFont("Pop-M",13); c.drawCentredString(PW/2, PH-149*mm, "Guía de estudio y de campo")
    try:
        gs=ImageReader(AST+"gs_logo.png"); iw,ih=gs.getSize(); gw=70*mm; gh=gw*ih/iw
        c.setFillColor(colors.white); c.roundRect(PW/2-gw/2-6*mm, 92*mm-4*mm, gw+12*mm, gh+8*mm, 6, fill=1, stroke=0)
        c.drawImage(gs, PW/2-gw/2, 92*mm, width=gw, height=gh, mask='auto', preserveAspectRatio=True)
    except Exception as e: print("gs",e)
    c.setFillColor(colors.HexColor("#C9DBC9")); c.setFont("Pop",10.5)
    c.drawCentredString(PW/2, 74*mm, "Tratamiento de semillas · Biofertilizante · Bioestimulante")
    c.drawCentredString(PW/2, 68.5*mm, "Bioinsecticida · Biofungicida · Probiótico")
    c.setFont("Pop-L",10); c.setFillColor(colors.HexColor("#9FB6A2"))
    c.drawCentredString(PW/2, 34*mm, "Documento formativo · 2026 · ventas +54 9 2262 48-7998")
    c.restoreState()
def hf(c,doc):
    if doc.page==1: return
    c.saveState()
    try: c.drawImage(AST+"logo.png", LM, PH-18*mm, width=8*mm, height=8*mm, mask='auto', preserveAspectRatio=True)
    except Exception: pass
    c.setFillColor(DGREEN); c.setFont("Pop-B",11); c.drawString(LM+10*mm, PH-16.5*mm, "BioAgroSolutions")
    try:
        gs=ImageReader(AST+"gs_logo.png"); iw,ih=gs.getSize(); gh=6*mm; gw=gh*iw/ih
        c.drawImage(gs, LM+53*mm, PH-17*mm, width=gw, height=gh, mask='auto', preserveAspectRatio=True)
    except Exception: pass
    c.setFillColor(GREY); c.setFont("Pop-M",8.5); c.drawRightString(PW-RM, PH-16.5*mm, "MANUAL DE BIOINSUMOS · LÍNEA GREEN SCIENCE")
    c.setStrokeColor(HAIR); c.setLineWidth(1); c.line(LM, PH-19*mm, PW-RM, PH-19*mm)
    c.setFillColor(LIME); c.rect(LM, PH-19*mm-0.6*mm, 26*mm, 1.2*mm, fill=1, stroke=0)
    c.setStrokeColor(HAIR); c.line(LM, BM-2*mm, PW-RM, BM-2*mm)
    c.setFillColor(GREY); c.setFont("Pop",8.5)
    c.drawString(LM, BM-7*mm, "BioAgroSolutions · Línea Green Science")
    c.drawCentredString(PW/2, BM-7*mm, str(doc.page)); c.drawRightString(PW-RM, BM-7*mm, "ventas · +54 9 2262 48-7998")
    c.restoreState()
def on_page(c,doc):
    if doc.page==1: draw_cover(c)
    else: hf(c,doc)
class MyDoc(BaseDocTemplate):
    def afterFlowable(self, fl):
        if hasattr(fl,'_toc'): self.notify('TOCEntry',(0, fl._toc, self.page))
frame=Frame(LM, BM, PW-LM-RM, PH-TM-BM, id='main')
doc=MyDoc("/sessions/admiring-busy-pasteur/mnt/greenScience/Manual_Bioinsumos_GreenScience_BioAgroSolutions.pdf",
    pagesize=A4, leftMargin=LM,rightMargin=RM,topMargin=TM,bottomMargin=BM)
doc.addPageTemplates([PageTemplate(id='t',frames=[frame],onPage=on_page)])
doc.multiBuild(story)
print("OK")
