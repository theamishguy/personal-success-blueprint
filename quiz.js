const translations = {


en: {

    continue: "Continue",
    back: "Back",

    questions: "Questions",

    complete: "Complete",

    generatingTitle:
    "Generating Your Personal Success Blueprint",

    analyzing:
    "Analyzing personality...",

    strengths:
    "Identifying strengths...",

    careers:
    "Matching career paths...",

    roadmap:
    "Building success roadmap...",

    blueprint:
    "Preparing your blueprint...",

    ready:
    "Blueprint Ready",

    processed:
    "Your responses have been processed.",

    download:
    "Download Blueprint",

reset: "Reset",

of: "of",

placeholder:
"Type your answer here...",
reportLanguage:"English"

},

es: {

    continue: "Continuar",
    back: "Atrás",

    questions: "Preguntas",

    complete: "Completado",

    generatingTitle:
    "Generando Tu Plan Personal de Éxito",

    analyzing:
    "Analizando personalidad...",

    strengths:
    "Identificando fortalezas...",

    careers:
    "Buscando carreras compatibles...",

    roadmap:
    "Construyendo plan de acción...",

    blueprint:
    "Preparando tu informe...",

    ready:
    "Informe Listo",

    processed:
    "Tus respuestas han sido procesadas.",

    download:
    "Descargar Informe",

    reset: "Reiniciar",
    
    of: "de",

    placeholder:
    "Escribe tu respuesta aquí...",
    reportLanguage:"Spanish"
},

de: {

    continue: "Weiter",
    back: "Zurück",

    questions: "Fragen",

    complete: "Abgeschlossen",

    generatingTitle:
    "Dein Persönlicher Erfolgsplan Wird Erstellt",

    analyzing:
    "Persönlichkeit wird analysiert...",

    strengths:
    "Stärken werden identifiziert...",

    careers:
    "Passende Karrierewege werden gesucht...",

    roadmap:
    "Aktionsplan wird erstellt...",

    blueprint:
    "Bericht wird vorbereitet...",

    ready:
    "Bericht Fertig",

    processed:
    "Deine Antworten wurden verarbeitet.",

    download:
    "Bericht Herunterladen",
    
    reset: "Zurücksetzen",
  
     of: "von",

     placeholder:
    "Gib deine Antwort hier ein...",
     reportLanguage:"German"
}

};


// ======================================
// QUESTIONS
// ======================================

const questions = [

{
    category:{
        en:"Interests & Motivation",
        es:"Intereses y Motivación",
        de:"Interessen & Motivation"
    },

    type:"multi",

    question:{
        en:"What topics interest you most?",
        es:"¿Qué temas te interesan más?",
        de:"Welche Themen interessieren dich am meisten?"
    },

    options:[

        {
            value:"business",
            en:"Business",
            es:"Negocios",
            de:"Unternehmen"
        },

        {
            value:"technology",
            en:"Technology",
            es:"Tecnología",
            de:"Technologie"
        },

        {
            value:"science",
            en:"Science",
            es:"Ciencia",
            de:"Wissenschaft"
        },

        {
            value:"finance",
            en:"Finance",
            es:"Finanzas",
            de:"Finanzen"
        },

        {
            value:"health",
            en:"Health",
            es:"Salud",
            de:"Gesundheit"
        },

        {
            value:"education",
            en:"Education",
            es:"Educación",
            de:"Bildung"
        },

        {
            value:"arts",
            en:"Arts & Design",
            es:"Arte y Diseño",
            de:"Kunst & Design"
        },

        {
            value:"sports",
            en:"Sports",
            es:"Deportes",
            de:"Sport"
        }

    ]
},

{
    category:{
        en:"Interests & Motivation",
        es:"Intereses y Motivación",
        de:"Interessen & Motivation"
    },

    type:"text",

    question:{
        en:"What activity makes you lose track of time?",
        es:"¿Qué actividad te hace perder la noción del tiempo?",
        de:"Bei welcher Tätigkeit verlierst du das Zeitgefühl?"
    }
},

{
    category:{
        en:"Interests & Motivation",
        es:"Intereses y Motivación",
        de:"Interessen & Motivation"
    },

    type:"text",

    question:{
        en:"If money wasn't a concern, how would you spend most of your time?",
        es:"Si el dinero no fuera una preocupación, ¿cómo pasarías la mayor parte de tu tiempo?",
        de:"Wie würdest du den Großteil deiner Zeit verbringen, wenn Geld keine Rolle spielen würde?"
    }
},

{
    category:{
        en:"Interests & Motivation",
        es:"Intereses y Motivación",
        de:"Interessen & Motivation"
    },

    type:"single",

    question:{
        en:"Which type of problem do you enjoy solving most?",
        es:"¿Qué tipo de problema disfrutas resolver más?",
        de:"Welche Art von Problemen löst du am liebsten?"
    },

    options:[

        {
            value:"technical",
            en:"Technical",
            es:"Técnico",
            de:"Technisch"
        },

        {
            value:"creative",
            en:"Creative",
            es:"Creativo",
            de:"Kreativ"
        },

        {
            value:"human",
            en:"Human",
            es:"Humano",
            de:"Menschlich"
        },

        {
            value:"financial",
            en:"Financial",
            es:"Financiero",
            de:"Finanziell"
        },

        {
            value:"strategic",
            en:"Strategic",
            es:"Estratégico",
            de:"Strategisch"
        },

        {
            value:"operational",
            en:"Operational",
            es:"Operativo",
            de:"Operativ"
        }

    ]
},
{
    category:{
        en:"Strengths",
        es:"Fortalezas",
        de:"Stärken"
    },

    type:"single",

    question:{
        en:"People usually come to me for:",
        es:"La gente suele acudir a mí por:",
        de:"Menschen kommen normalerweise zu mir wegen:"
    },

    options:[

        {
            value:"advice",
            en:"Advice",
            es:"Consejos",
            de:"Ratschläge"
        },

        {
            value:"leadership",
            en:"Leadership",
            es:"Liderazgo",
            de:"Führung"
        },

        {
            value:"technical_help",
            en:"Technical Help",
            es:"Ayuda Técnica",
            de:"Technische Hilfe"
        },

        {
            value:"organization",
            en:"Organization",
            es:"Organización",
            de:"Organisation"
        },

        {
            value:"creativity",
            en:"Creativity",
            es:"Creatividad",
            de:"Kreativität"
        },

        {
            value:"emotional_support",
            en:"Emotional Support",
            es:"Apoyo Emocional",
            de:"Emotionale Unterstützung"
        }

    ]
},
{
    category:{
        en:"Strengths",
        es:"Fortalezas",
        de:"Stärken"
    },

    type:"single",

    question:{
        en:"Which describes you best?",
        es:"¿Cuál te describe mejor?",
        de:"Welche Beschreibung passt am besten zu dir?"
    },

    options:[

        {
            value:"analytical",
            en:"Analytical",
            es:"Analítico",
            de:"Analytisch"
        },

        {
            value:"creative",
            en:"Creative",
            es:"Creativo",
            de:"Kreativ"
        },

        {
            value:"practical",
            en:"Practical",
            es:"Práctico",
            de:"Praktisch"
        },

        {
            value:"visionary",
            en:"Visionary",
            es:"Visionario",
            de:"Visionär"
        },

        {
            value:"empathetic",
            en:"Empathetic",
            es:"Empático",
            de:"Einfühlsam"
        },

        {
            value:"persuasive",
            en:"Persuasive",
            es:"Persuasivo",
            de:"Überzeugend"
        }

    ]
},
{
    category:{
        en:"Strengths",
        es:"Fortalezas",
        de:"Stärken"
    },

    type:"text",

    question:{
        en:"What skill are you most confident in?",
        es:"¿En qué habilidad tienes más confianza?",
        de:"Bei welcher Fähigkeit bist du am selbstsichersten?"
    }
},
{
    category:{
        en:"Strengths",
        es:"Fortalezas",
        de:"Stärken"
    },

    type:"scale",

    question:{
        en:"How quickly do you learn new skills?",
        es:"¿Qué tan rápido aprendes nuevas habilidades?",
        de:"Wie schnell lernst du neue Fähigkeiten?"
    },

    minLabel:{
        en:"Much Slower Than Average",
        es:"Mucho Más Lento Que El Promedio",
        de:"Viel Langsamer Als Der Durchschnitt"
    },

    maxLabel:{
        en:"Much Faster Than Average",
        es:"Mucho Más Rápido Que Der Durchschnitt",
        de:"Viel Schneller Als Der Durchschnitt"
    }
},
{
    category:{
        en:"Strengths",
        es:"Fortalezas",
        de:"Stärken"
    },

    type:"single",

    question:{
        en:"When facing a difficult challenge, I usually:",
        es:"Cuando enfrento un desafío difícil, normalmente:",
        de:"Wenn ich vor einer schwierigen Herausforderung stehe, dann:"
    },

    options:[

        {
            value:"research_first",
            en:"Research First",
            es:"Investigo Primero",
            de:"Recherchiere Zuerst"
        },

        {
            value:"act_immediately",
            en:"Act Immediately",
            es:"Actúo De Inmediato",
            de:"Handle Sofort"
        },

        {
            value:"ask_others",
            en:"Ask Others",
            es:"Pregunto A Otros",
            de:"Frage Andere"
        },

        {
            value:"create_plan",
            en:"Create a Plan",
            es:"Creo Un Plan",
            de:"Erstelle Einen Plan"
        },

        {
            value:"multiple_solutions",
            en:"Try Multiple Solutions",
            es:"Pruebo Varias Soluciones",
            de:"Probiere Mehrere Lösungen"
        }

    ]
},
{
    category:{
        en:"Career & Work Style",
        es:"Carrera y Estilo de Trabajo",
        de:"Karriere & Arbeitsstil"
    },

    type:"single",

    question:{
        en:"Which work environment suits you best?",
        es:"¿Qué entorno laboral te conviene más?",
        de:"Welche Arbeitsumgebung passt am besten zu dir?"
    },

    options:[

        {
            value:"alone",
            en:"Working Alone",
            es:"Trabajar Solo",
            de:"Alleine Arbeiten"
        },

        {
            value:"small_team",
            en:"Small Team",
            es:"Equipo Pequeño",
            de:"Kleines Team"
        },

        {
            value:"large_team",
            en:"Large Team",
            es:"Equipo Grande",
            de:"Großes Team"
        },

        {
            value:"leading",
            en:"Leading Others",
            es:"Liderando A Otros",
            de:"Andere Führen"
        },

        {
            value:"flexible_mix",
            en:"Flexible Mix",
            es:"Mezcla Flexible",
            de:"Flexible Mischung"
        }

    ]
},

{
    category:{
        en:"Career & Work Style",
        es:"Carrera y Estilo de Trabajo",
        de:"Karriere & Arbeitsstil"
    },

    type:"single",

    question:{
        en:"What motivates you most at work?",
        es:"¿Qué te motiva más en el trabajo?",
        de:"Was motiviert dich bei der Arbeit am meisten?"
    },

    options:[

        {
            value:"freedom",
            en:"Freedom",
            es:"Libertad",
            de:"Freiheit"
        },

        {
            value:"money",
            en:"Money",
            es:"Dinero",
            de:"Geld"
        },

        {
            value:"purpose",
            en:"Purpose",
            es:"Propósito",
            de:"Sinn"
        },

        {
            value:"achievement",
            en:"Achievement",
            es:"Logro",
            de:"Leistung"
        },

        {
            value:"recognition",
            en:"Recognition",
            es:"Reconocimiento",
            de:"Anerkennung"
        },

        {
            value:"learning",
            en:"Learning",
            es:"Aprendizaje",
            de:"Lernen"
        }

    ]
},

{
    category:{
        en:"Career & Work Style",
        es:"Carrera y Estilo de Trabajo",
        de:"Karriere & Arbeitsstil"
    },

    type:"single",

    question:{
        en:"What matters most in a career?",
        es:"¿Qué es lo más importante en una carrera profesional?",
        de:"Was ist in einer Karriere am wichtigsten?"
    },

    options:[

        {
            value:"income",
            en:"Income",
            es:"Ingresos",
            de:"Einkommen"
        },

        {
            value:"security",
            en:"Security",
            es:"Seguridad",
            de:"Sicherheit"
        },

        {
            value:"freedom",
            en:"Freedom",
            es:"Libertad",
            de:"Freiheit"
        },

        {
            value:"impact",
            en:"Impact",
            es:"Impacto",
            de:"Einfluss"
        },

        {
            value:"growth",
            en:"Growth",
            es:"Crecimiento",
            de:"Wachstum"
        },

        {
            value:"work_life_balance",
            en:"Work-Life Balance",
            es:"Equilibrio Vida-Trabajo",
            de:"Work-Life-Balance"
        }

    ]
},
{
    category:{
        en:"Career & Work Style",
        es:"Carrera y Estilo de Trabajo",
        de:"Karriere & Arbeitsstil"
    },

    type:"scale",

    question:{
        en:"How comfortable are you with uncertainty and risk?",
        es:"¿Qué tan cómodo te sientes con la incertidumbre y el riesgo?",
        de:"Wie wohl fühlst du dich mit Unsicherheit und Risiko?"
    },

    minLabel:{
        en:"Very Uncomfortable",
        es:"Muy Incómodo",
        de:"Sehr Unwohl"
    },

    maxLabel:{
        en:"Very Comfortable",
        es:"Muy Cómodo",
        de:"Sehr Wohl"
    }
},
{
    category:{
        en:"Career & Work Style",
        es:"Carrera y Estilo de Trabajo",
        de:"Karriere & Arbeitsstil"
    },

    type:"scale",

    question:{
        en:"How much do you enjoy leading other people?",
        es:"¿Cuánto disfrutas liderar a otras personas?",
        de:"Wie sehr genießt du es, andere Menschen zu führen?"
    },

    minLabel:{
        en:"Strongly Dislike",
        es:"Me Desagrada Mucho",
        de:"Mag Ich Überhaupt Nicht"
    },

    maxLabel:{
        en:"Strongly Enjoy",
        es:"Me Gusta Mucho",
        de:"Mache Ich Sehr Gerne"
    }
},

{
category:{
    en:"Thinking Style",
    es:"Estilo de Pensamiento",
    de:"Denkstil"
},
type:"challenge",
challengeType:"thinking",
question:{
en:"A machine takes 5 minutes to produce 5 parts. How long would 100 machines take to produce 100 parts?",
es:"Una máquina tarda 5 minutos en producir 5 piezas. ¿Cuánto tardarían 100 máquinas en producir 100 piezas?",
de:"Eine Maschine benötigt 5 Minuten, um 5 Teile herzustellen. Wie lange benötigen 100 Maschinen für 100 Teile?"
},
options:[

{
value:"5",
en:"5 minutes",
es:"5 minutos",
de:"5 Minuten"
},

{
value:"100",
en:"100 minutes",
es:"100 minutos",
de:"100 Minuten"
},

{
value:"500",
en:"500 minutes",
es:"500 minutos",
de:"500 Minuten"
},

{
value:"1",
en:"1 minute",
es:"1 minuto",
de:"1 Minute"
}

]
},

{
   category:{
    en:"Work Style Challenge",
    es:"Desafío de Estilo de Trabajo",
    de:"Arbeitsstil-Challenge"
},

    type:"challenge",
    challengeType:"workstyle",
    question:{
        en:"You inherit a small business. What would you most enjoy doing?",
        es:"Heredas una pequeña empresa. ¿Qué disfrutarías más haciendo?",
        de:"Du erbst ein kleines Unternehmen. Was würdest du am liebsten tun?"
    },

    options:[

        {
            value:"builder",
            en:"Creating new products",
            es:"Crear nuevos productos",
            de:"Neue Produkte entwickeln"
        },

        {
            value:"optimizer",
            en:"Improving existing systems",
            es:"Mejorar sistemas existentes",
            de:"Bestehende Systeme verbessern"
        },

        {
            value:"promoter",
            en:"Marketing and sales",
            es:"Marketing y ventas",
            de:"Marketing und Vertrieb"
        },

        {
            value:"leader",
            en:"Managing the team",
            es:"Gestionar el equipo",
            de:"Das Team führen"
        }

    ]

},

{
    category:{
        en:"Business & Money",
        es:"Negocios y Dinero",
        de:"Geschäft & Geld"
    },

    type:"single",

    question:{
        en:"Which income model sounds most appealing?",
        es:"¿Qué modelo de ingresos te parece más atractivo?",
        de:"Welches Einkommensmodell spricht dich am meisten an?"
    },

    options:[

        {
            value:"salary",
            en:"Salary",
            es:"Salario",
            de:"Gehalt"
        },

        {
            value:"freelancing",
            en:"Freelancing",
            es:"Trabajo Independiente",
            de:"Freiberuflich"
        },

        {
            value:"business_ownership",
            en:"Business Ownership",
            es:"Propietario de Negocio",
            de:"Unternehmensbesitz"
        },

        {
            value:"investments",
            en:"Investments",
            es:"Inversiones",
            de:"Investitionen"
        },

        {
            value:"multiple_income_streams",
            en:"Multiple Income Streams",
            es:"Múltiples Fuentes de Ingresos",
            de:"Mehrere Einkommensquellen"
        }

    ]
},
{
    category:{
        en:"Business & Money",
        es:"Negocios y Dinero",
        de:"Geschäft & Geld"
    },

    type:"single",

    question:{
        en:"Which path sounds most appealing?",
        es:"¿Qué camino te parece más atractivo?",
        de:"Welcher Weg klingt für dich am attraktivsten?"
    },

    options:[

        {
            value:"business_owner",
            en:"Build my own business",
            es:"Crear mi propio negocio",
            de:"Mein eigenes Unternehmen aufbauen"
        },

        {
            value:"specialist",
            en:"Become a highly-paid specialist",
            es:"Convertirme en un especialista muy bien pagado",
            de:"Ein hochbezahlter Spezialist werden"
        },

        {
            value:"creator",
            en:"Create products or content",
            es:"Crear productos o contenido",
            de:"Produkte oder Inhalte erstellen"
        },

        {
            value:"manager",
            en:"Manage people and organizations",
            es:"Gestionar personas y organizaciones",
            de:"Menschen und Organisationen führen"
        },

        {
            value:"unsure",
            en:"I'm not sure yet",
            es:"Aún no estoy seguro",
            de:"Ich bin mir noch nicht sicher"
        }

    ]
},



{
    category:{
    en:"Decision Style",
    es:"Estilo de Decisión",
    de:"Entscheidungsstil"
},

    type:"challenge",

    challengeType:"risk",

    question:{
        en:"Choose one option:",
        es:"Elige una opción:",
        de:"Wähle eine Option:"
    },

    description:{
        en:"$5,000 guaranteed today OR 50% chance of receiving $15,000",
        es:"$5.000 garantizados hoy O 50% de probabilidad de recibir $15.000",
        de:"5.000 $ garantiert heute ODER 50 % Chance auf 15.000 $"
    },

    options:[

        {
            value:"guaranteed",
            en:"$5,000 Guaranteed",
            es:"$5.000 Garantizados",
            de:"5.000 $ Garantiert"
        },

        {
            value:"risk_reward",
            en:"50% Chance at $15,000",
            es:"50% de Probabilidad de $15.000",
            de:"50 % Chance auf 15.000 $"
        }

    ]

},

{
    category:{
        en:"Lifestyle",
        es:"Estilo de Vida",
        de:"Lebensstil"
    },

    type:"multi",

    question:{
        en:"Which lifestyle goals matter most to you?",
        es:"¿Qué objetivos de estilo de vida son más importantes para ti?",
        de:"Welche Lebensziele sind dir am wichtigsten?"
    },

    options:[
        {value:"travel",en:"Travel",es:"Viajar",de:"Reisen"},
        {value:"family",en:"Family",es:"Familia",de:"Familie"},
        {value:"financial_freedom",en:"Financial Freedom",es:"Libertad Financiera",de:"Finanzielle Freiheit"},
        {value:"health",en:"Health",es:"Salud",de:"Gesundheit"},
        {value:"learning",en:"Learning",es:"Aprendizaje",de:"Lernen"},
        {value:"adventure",en:"Adventure",es:"Aventura",de:"Abenteuer"},
        {value:"flexibility",en:"Flexibility",es:"Flexibilidad",de:"Flexibilität"}
    ]
},
{
    category:{
        en:"Lifestyle",
        es:"Estilo de Vida",
        de:"Lebensstil"
    },

    type:"single",

    question:{
        en:"What does success mean to you?",
        es:"¿Qué significa el éxito para ti?",
        de:"Was bedeutet Erfolg für dich?"
    },

    options:[
        {value:"freedom",en:"Freedom",es:"Libertad",de:"Freiheit"},
        {value:"wealth",en:"Wealth",es:"Riqueza",de:"Wohlstand"},
        {value:"impact",en:"Impact",es:"Impacto",de:"Einfluss"},
        {value:"family",en:"Family",es:"Familia",de:"Familie"},
        {value:"personal_growth",en:"Personal Growth",es:"Crecimiento Personal",de:"Persönliches Wachstum"},
        {value:"achievement",en:"Achievement",es:"Logro",de:"Leistung"}
    ]
},
{
    category:{
        en:"Lifestyle",
        es:"Estilo de Vida",
        de:"Lebensstil"
    },

    type:"scale",

question:{
    en:"How important is location independence to you?",
    es:"¿Qué tan importante es para ti poder trabajar desde cualquier lugar?",
    de:"Wie wichtig ist es für dich, von überall aus arbeiten zu können?"
},

    minLabel:{
        en:"Not At All",
        es:"Para Nada",
        de:"Überhaupt Nicht"
    },

    maxLabel:{
        en:"Extremely",
        es:"Extremadamente",
        de:"Extrem"
    }
},
{
    category:{
        en:"Lifestyle",
        es:"Estilo de Vida",
        de:"Lebensstil"
    },

    type:"scale",

question:{
    en:"How important is work-life balance to you?",
    es:"¿Qué tan importante es para ti el equilibrio entre el trabajo y la vida personal?",
    de:"Wie wichtig ist dir die Balance zwischen Arbeit und Privatleben?"
},

minLabel:{
    en:"Not Important",
    es:"Nada Importante",
    de:"Überhaupt Nicht Wichtig"
},

maxLabel:{
    en:"Extremely Important",
    es:"Extremadamente Importante",
    de:"Äußerst Wichtig"
}
},

{
category:{
    en:"Real-World Constraints",
    es:"Limitaciones del Mundo Real",
    de:"Reale Einschränkungen"
},
type:"single",
question:{
en:"Which best describes where you live?",
es:"¿Cuál describe mejor dónde vives?",
de:"Welche Beschreibung trifft am besten auf deinen Wohnort zu?"
},
options:[

    {
        value:"major_city",
        en:"Major City",
        es:"Ciudad Grande",
        de:"Großstadt"
    },

    {
        value:"medium_city",
        en:"Medium-Sized City",
        es:"Ciudad Mediana",
        de:"Mittelgroße Stadt"
    },

    {
        value:"small_town",
        en:"Small Town",
        es:"Pueblo Pequeño",
        de:"Kleinstadt"
    },

    {
        value:"rural_area",
        en:"Rural Area",
        es:"Zona Rural",
        de:"Ländliche Gegend"
    }

]
},
{
    category:{
    en:"Real-World Constraints",
    es:"Limitaciones del Mundo Real",
    de:"Reale Einschränkungen"
},

    type:"single",

    question:{
        en:"If you lost your income today, how long could you maintain your current lifestyle?",
        es:"Si perdieras tus ingresos hoy, ¿cuánto tiempo podrías mantener tu estilo de vida actual?",
        de:"Wenn du heute dein Einkommen verlieren würdest, wie lange könntest du deinen aktuellen Lebensstil aufrechterhalten?"
    },

    options:[

        {
            value:"less_than_1_month",
            en:"Less than 1 month",
            es:"Menos de 1 mes",
            de:"Weniger als 1 Monat"
        },

        {
            value:"1_3_months",
            en:"1-3 months",
            es:"1-3 meses",
            de:"1-3 Monate"
        },

        {
            value:"3_6_months",
            en:"3-6 months",
            es:"3-6 meses",
            de:"3-6 Monate"
        },

        {
            value:"6_12_months",
            en:"6-12 months",
            es:"6-12 meses",
            de:"6-12 Monate"
        },

        {
            value:"more_than_1_year",
            en:"More than a year",
            es:"Más de un año",
            de:"Mehr als ein Jahr"
        }

    ]

},

{
    category:{
        en:"Personal Growth",
        es:"Crecimiento Personal",
        de:"Persönliche Entwicklung"
    },

    type:"scale",

    question:{
        en:"How often do you procrastinate?",
        es:"¿Con qué frecuencia procrastinas?",
        de:"Wie oft schiebst du Dinge auf?"
    },

    minLabel:{
        en:"Rarely",
        es:"Rara Vez",
        de:"Selten"
    },

    maxLabel:{
        en:"Very Often",
        es:"Muy A Menudo",
        de:"Sehr Oft"
    }
},


{
    category:{
    en:"Productivity & Execution",
    es:"Productividad y Ejecución",
    de:"Produktivität & Umsetzung"
},

    type:"single",

    question:{
        en:"Which statement sounds most like you?",
        es:"¿Qué afirmación se parece más a ti?",
        de:"Welche Aussage beschreibt dich am besten?"
    },

    options:[

        {
            value:"finishes_most",
            en:"I finish most things I start",
            es:"Termino la mayoría de las cosas que empiezo",
            de:"Ich beende die meisten Dinge, die ich beginne"
        },

        {
            value:"finishes_important",
            en:"I finish important things only",
            es:"Solo termino las cosas importantes",
            de:"Ich beende nur wichtige Dinge"
        },

        {
            value:"starts_many",
            en:"I start many projects but rarely complete them",
            es:"Empiezo muchos proyectos pero rara vez los termino",
            de:"Ich beginne viele Projekte, schließe sie aber selten ab"
        },

        {
            value:"loses_momentum",
            en:"I often lose momentum before finishing",
            es:"A menudo pierdo impulso antes de terminar",
            de:"Ich verliere oft die Motivation bevor ich fertig bin"
        }

    ]

},
{
    category:{
    en:"Productivity & Execution",
    es:"Productividad y Ejecución",
    de:"Produktivität & Umsetzung"
},

    type:"single",

    question:{
        en:"At the end of a normal day, how much energy do you usually have left?",
        es:"Al final de un día normal, ¿cuánta energía te queda normalmente?",
        de:"Wie viel Energie hast du normalerweise am Ende eines Tages übrig?"
    },

    options:[

        {
            value:"almost_none",
            en:"Almost none",
            es:"Casi nada",
            de:"Fast keine"
        },

        {
            value:"a_little",
            en:"A little",
            es:"Un poco",
            de:"Ein wenig"
        },

        {
            value:"moderate",
            en:"Moderate",
            es:"Moderada",
            de:"Mittel"
        },

        {
            value:"plenty",
            en:"Plenty",
            es:"Mucha",
            de:"Viel"
        }

    ]

},
{
    category:{
    en:"Challenges",
    es:"Desafíos",
    de:"Herausforderungen"
},

    type:"single",

    question:{
        en:"What is currently holding you back the most?",
        es:"¿Qué es lo que más te está frenando actualmente?",
        de:"Was hält dich derzeit am meisten zurück?"
    },

    options:[

        {
            value:"money",
            en:"Money",
            es:"Dinero",
            de:"Geld"
        },

        {
            value:"time",
            en:"Time",
            es:"Tiempo",
            de:"Zeit"
        },

        {
            value:"focus",
            en:"Focus",
            es:"Concentración",
            de:"Fokus"
        },

        {
            value:"confidence",
            en:"Confidence",
            es:"Confianza",
            de:"Selbstvertrauen"
        },

        {
            value:"opportunities",
            en:"Opportunities",
            es:"Oportunidades",
            de:"Möglichkeiten"
        },

        {
            value:"knowledge",
            en:"Knowledge",
            es:"Conocimiento",
            de:"Wissen"
        },

        {
            value:"health",
            en:"Health",
            es:"Salud",
            de:"Gesundheit"
        },

        {
            value:"family_responsibilities",
            en:"Family responsibilities",
            es:"Responsabilidades familiares",
            de:"Familiäre Verpflichtungen"
        }

    ]

},

{
    category:{
        en:"Future Vision",
        es:"Visión de Futuro",
        de:"Zukunftsvision"
    },

    type:"text",

    question:{
        en:"What is your biggest goal for the next 3 years?",
        es:"¿Cuál es tu mayor objetivo para los próximos 3 años?",
        de:"Was ist dein größtes Ziel für die nächsten 3 Jahre?"
    }
},
{
    category:{
        en:"Future Vision",
        es:"Visión de Futuro",
        de:"Zukunftsvision"
    },

    type:"text",

    question:{
        en:"Describe your ideal day five years from now.",
        es:"Describe tu día ideal dentro de cinco años.",
        de:"Beschreibe deinen idealen Tag in fünf Jahren."
    }
},
{
    category:{
        en:"Final Details",
        es:"Detalles Finales",
        de:"Abschließende Angaben"
    },

    type:"text",

    question:{
        en:"What email address should receive your blueprint?",
        es:"¿A qué dirección de correo electrónico debemos enviar tu informe?",
        de:"An welche E-Mail-Adresse soll dein Bericht gesendet werden?"
    }
}
];

// ======================================
// STATE
// ======================================

let currentQuestion = 0;
let answers = {};

let profileScores = {

    builder:0,
    specialist:0,
    creator:0,
    leader:0,

    freedom:0,
    stability:0,

    execution:0,
    learning:0,

    risk:0,
    opportunity:0,

    energy:0,
    people:0

};
let currentLanguage =
localStorage.getItem("language");

if(!currentLanguage){

    const browserLanguage =
    navigator.language.toLowerCase();

    if(browserLanguage.startsWith("es")){

        currentLanguage = "es";

    }
    else if(browserLanguage.startsWith("de")){

        currentLanguage = "de";

    }
    else{

        currentLanguage = "en";

    }

    localStorage.setItem(
        "language",
        currentLanguage
    );
}

// ======================================
// RESTORE SAVED DATA
// ======================================

const savedAnswers =
localStorage.getItem(
    "blueprintAnswers"
);

if(savedAnswers){

    answers =
    JSON.parse(savedAnswers);

}

const savedQuestion =
localStorage.getItem(
    "blueprintQuestion"
);

if(savedQuestion){

    currentQuestion =
    parseInt(savedQuestion);

}

// ======================================
// ELEMENTS
// ======================================

const questionTitle =
document.getElementById("questionTitle");

const answersContainer =
document.getElementById("answers");

const progressFill =
document.getElementById("progressFill");

const progressText =
document.getElementById("progressText");

const nextBtn =
document.getElementById("nextBtn");

const backBtn =
document.getElementById("backBtn");


const questionCategory =
document.querySelector(".question-category");

// ======================================
// SAVE
// ======================================

function saveProgress(){

    localStorage.setItem(
        "blueprintAnswers",
        JSON.stringify(answers)
    );

    localStorage.setItem(
        "blueprintQuestion",
        currentQuestion
    );

}

// ======================================
// LANGUAGE
// ======================================

function setLanguage(lang){

    currentLanguage =
    lang;

    localStorage.setItem(
        "language",
        lang
    );

    loadQuestion();

}
// ======================================
// VALIDATION
// ======================================


function updateNextButton(){

    const answer =
    answers[currentQuestion];

    let valid = false;

    if(Array.isArray(answer)){

        valid = answer.length > 0;

    }

    else if(typeof answer === "string"){

        valid =
        answer.trim().length > 0;

    }

    else{

        valid =
        answer !== undefined &&
        answer !== null;

    }

    nextBtn.disabled =
    !valid;

}

// ======================================
// ANIMATION
// ======================================

function animateQuestion(callback){

    const card =
    document.querySelector(".question-card");

    card.style.opacity = 0;

    card.style.transform =
    "translateY(15px)";

    setTimeout(() => {

        callback();

        card.style.opacity = 1;

        card.style.transform =
        "translateY(0px)";

    }, 200);

}

// ======================================
// RENDER SINGLE
// ======================================

function renderSingle(question){

    question.options.forEach(option => {

        const btn =
        document.createElement("button");

        btn.className =
        "answer-btn";

       btn.innerText =

typeof option === "object"
?
option[currentLanguage]
:
option;

       if(
    answers[currentQuestion] ===
    (
        typeof option === "object"
        ?
        option.value
        :
        option
    )
){
            btn.classList.add(
                "selected"
            );
        }

        btn.onclick = () => {

            document
            .querySelectorAll(".answer-btn")
            .forEach(btn =>
                btn.classList.remove(
                    "selected"
                )
            );

            btn.classList.add(
                "selected"
            );

            answers[currentQuestion] =

typeof option === "object"
?
option.value
:
option;

            saveProgress();

            updateNextButton();

        };

        answersContainer.appendChild(btn);

    });

}

function renderChallenge(question){

    const intro =
    document.createElement("div");

    intro.style.marginBottom = "25px";

    intro.style.padding = "15px";

    intro.style.borderRadius = "12px";

    intro.style.background =
    "rgba(109,93,253,.12)";

    intro.style.border =
    "1px solid rgba(139,124,255,.3)";

   let challengeTitle;

if(currentLanguage === "es"){

    challengeTitle =
    "🧠 Desafío de Pensamiento";

    if(question.challengeType === "risk"){
        challengeTitle =
        "💰 Desafío de Decisión";
    }

    if(question.challengeType === "workstyle"){
        challengeTitle =
        "🎯 Desafío de Estilo de Trabajo";
    }

}
else if(currentLanguage === "de"){

    challengeTitle =
    "🧠 Denk-Challenge";

    if(question.challengeType === "risk"){
        challengeTitle =
        "💰 Entscheidungs-Challenge";
    }

    if(question.challengeType === "workstyle"){
        challengeTitle =
        "🎯 Arbeitsstil-Challenge";
    }

}
else{

    challengeTitle =
    "🧠 Quick Thinking Challenge";

    if(question.challengeType === "risk"){
        challengeTitle =
        "💰 Decision Challenge";
    }

    if(question.challengeType === "workstyle"){
        challengeTitle =
        "🎯 Work Style Challenge";
    }

}

  const challengeSubtitle =

currentLanguage === "es"
? "No lo pienses demasiado."

: currentLanguage === "de"
? "Nicht zu lange darüber nachdenken."

: "Don't overthink it.";

intro.innerHTML = `
    <strong>${challengeTitle}</strong>
    <br>
    ${challengeSubtitle}
`;

    answersContainer.appendChild(intro);

    if(question.description){

        const desc =
        document.createElement("div");

        desc.style.marginBottom =
        "20px";

        desc.style.color =
        "#AAB3C5";

        desc.innerText =

        typeof question.description === "object"
        ?
        question.description[currentLanguage]
        :
        question.description;

        answersContainer.appendChild(desc);

    }

    renderSingle(question);

}
// ======================================
// RENDER MULTI
// ======================================

function renderMulti(question){

    if(
        !answers[currentQuestion]
    ){
        answers[currentQuestion] = [];
    }

    question.options.forEach(option => {

        const btn =
        document.createElement("button");

        btn.className =
        "answer-btn";

        btn.innerText =

typeof option === "object"
?
option[currentLanguage]
:
option;

        if(
           answers[currentQuestion]
.includes(

typeof option === "object"
?
option.value
:
option

)
        ){
            btn.classList.add(
                "selected"
            );
        }

btn.onclick = () => {

    const optionValue =

    typeof option === "object"
    ?
    option.value
    :
    option;

    const index =
    answers[currentQuestion]
    .indexOf(optionValue);

    if(index > -1){

        answers[currentQuestion]
        .splice(index,1);

        btn.classList.remove(
            "selected"
        );

    }
    else{

        answers[currentQuestion]
        .push(optionValue);

        btn.classList.add(
            "selected"
        );

    }

    saveProgress();

    updateNextButton();

};

        answersContainer.appendChild(btn);

    });

}

// ======================================
// RENDER TEXT
// ======================================

function renderText(){

    const textarea =
    document.createElement(
        "textarea"
    );

    textarea.className =
    "text-answer";

    textarea.rows = 5;

textarea.placeholder =
translations[currentLanguage]
.placeholder;

    textarea.value =
    answers[currentQuestion] || "";

    textarea.oninput = () => {

        answers[currentQuestion] =
        textarea.value;

        saveProgress();

        updateNextButton();

    };

    answersContainer.appendChild(
        textarea
    );

}

// ======================================
// RENDER SCALE
// ======================================

function renderScale(question){

    const labels =
    document.createElement("div");

    labels.className =
    "scale-labels";

    labels.innerHTML = `
    <span>${
        typeof question.minLabel === "object"
        ?
        question.minLabel[currentLanguage]
        :
        question.minLabel
    }</span>

    <span>${
        typeof question.maxLabel === "object"
        ?
        question.maxLabel[currentLanguage]
        :
        question.maxLabel
    }</span>
`;

    answersContainer.appendChild(
        labels
    );

    const container =
    document.createElement(
        "div"
    );

    container.className =
    "scale-container";

    for(let i=1;i<=10;i++){

        const btn =
        document.createElement(
            "button"
        );

        btn.className =
        "answer-btn";

        btn.innerText = i;

        if(
            answers[currentQuestion] === i
        ){
            btn.classList.add(
                "selected"
            );
        }

        btn.onclick = () => {

            container
            .querySelectorAll(
                ".answer-btn"
            )
            .forEach(btn =>
                btn.classList.remove(
                    "selected"
                )
            );

            btn.classList.add(
                "selected"
            );

            answers[currentQuestion] =
            i;

            saveProgress();

            updateNextButton();

        };

        container.appendChild(
            btn
        );

    }

    answersContainer.appendChild(
        container
    );

}
// ======================================
// LOAD QUESTION
// ======================================

function loadQuestion(){
const percentage =
Math.round(
(
(currentQuestion + 1)
/
questions.length
)
*100
);
    const question =
    questions[currentQuestion];

const card =
document.querySelector(".question-card");

card.classList.remove("challenge-card");

if(question.type === "challenge"){

    card.classList.add("challenge-card");

}

questionTitle.innerText =

typeof question.question === "object"
?
question.question[currentLanguage]
:
question.question;

questionCategory.innerText =

typeof question.category === "object"
?
question.category[currentLanguage]
:
question.category;

progressText.innerHTML = `
${
typeof question.category === "object"
?
question.category[currentLanguage]
:
question.category
}
<br>
${currentQuestion + 1}
${translations[currentLanguage].of}
${questions.length}
${translations[currentLanguage].questions}
<br>
${percentage}% ${translations[currentLanguage].complete}
`;

    const progress =
    ((currentQuestion + 1)
    /
    questions.length)
    * 100;

    progressFill.style.width =
    `${progress}%`;

    answersContainer.innerHTML =
    "";

   if(question.type === "single"){

    renderSingle(question);

}

if(question.type === "challenge"){

    renderChallenge(question);

}

if(question.type === "multi"){

    renderMulti(question);

}

if(question.type === "text"){

    renderText();

}

if(question.type === "scale"){

    renderScale(question);

}
nextBtn.innerText =
translations[currentLanguage]
.continue;

backBtn.innerText =
translations[currentLanguage]
.back;

document.getElementById(
    "resetBtn"
).innerText =
translations[currentLanguage]
.reset;
    updateNextButton();

}

// ======================================
// MD EXPORT
// ======================================
function calculateScores(){

profileScores = {

    builder:0,
    specialist:0,
    creator:0,
    leader:0,

    freedom:0,
    stability:0,

    execution:0,
    learning:0,

    risk:0,
    opportunity:0,

    energy:0,

    people:0

};

    Object.values(answers).forEach(answer => {

if(Array.isArray(answer)){

    answer.forEach(item => {

        if(item === "business"){
            profileScores.builder += 10;
        }

        if(item === "technology"){
            profileScores.specialist += 10;
        }

        if(item === "science"){
            profileScores.learning += 10;
        }

        if(item === "finance"){
            profileScores.builder += 5;
            profileScores.risk += 5;
        }

        if(item === "education"){
            profileScores.people += 5;
            profileScores.learning += 5;
        }

        if(item === "arts"){
            profileScores.creator += 15;
        }

        if(item === "family"){
            profileScores.people += 10;
            profileScores.stability += 10;
        }

        if(item === "financial_freedom"){
            profileScores.freedom += 15;
        }

        if(item === "learning"){
            profileScores.learning += 15;
        }

        if(item === "flexibility"){
            profileScores.freedom += 10;
        }

    });

    return;
}
if(answer === "analytical"){
    profileScores.specialist += 10;
}
if(answer === "visionary"){
    profileScores.builder += 10;
    profileScores.creator += 10;
}
if(answer === "persuasive"){
    profileScores.people += 10;
    profileScores.leader += 10;
}
if(answer === "strategic"){
    profileScores.builder += 10;
    profileScores.leader += 5;
}
if(answer === "operational"){
    profileScores.execution += 10;
}
        if(answer === "builder"){
            profileScores.builder += 20;
        }

        if(answer === "optimizer"){
            profileScores.specialist += 15;
        }

        if(answer === "promoter"){
            profileScores.creator += 10;
            profileScores.leader += 5;
        }

        if(answer === "leader"){
            profileScores.leader += 20;
        }

        if(answer === "business_owner"){
            profileScores.builder += 15;
            profileScores.risk += 10;
        }

        if(answer === "creator"){
            profileScores.creator += 15;
        }

        if(answer === "specialist"){
            profileScores.specialist += 15;
        }

        if(answer === "manager"){
            profileScores.leader += 15;
        }

        if(answer === "guaranteed"){
            profileScores.stability += 15;
        }

        if(answer === "risk_reward"){
            profileScores.risk += 15;
        }
// =========================
// THINKING CHALLENGE
// =========================

if(answer === "5"){
    profileScores.learning += 10;
}

        if(answer === "finishes_most"){
            profileScores.execution += 20;
        }

        if(answer === "finishes_important"){
            profileScores.execution += 10;
        }

if(answer === "starts_many"){
    profileScores.execution -= 10;
}

if(answer === "loses_momentum"){
    profileScores.execution += 0;
}

        if(answer === "plenty"){
            profileScores.energy += 20;
        }

        if(answer === "moderate"){
            profileScores.energy += 10;
        }

        if(answer === "a_little"){
            profileScores.energy += 0;
        }

        if(answer === "almost_none"){
            profileScores.energy -= 10;
        }

        if(answer === "freedom"){
            profileScores.freedom += 10;
        }

        if(answer === "security"){
            profileScores.stability += 10;
        }
if(answer === "advice"){
    profileScores.people += 10;
}

if(answer === "organization"){
    profileScores.execution += 10;
}

if(answer === "research_first"){
    profileScores.learning += 10;
    profileScores.specialist += 5;
}

if(answer === "act_immediately"){
    profileScores.execution += 10;
    profileScores.risk += 5;
}

if(answer === "ask_others"){
    profileScores.people += 10;
}

if(answer === "create_plan"){
    profileScores.execution += 15;
}

if(answer === "multiple_solutions"){
    profileScores.creator += 10;
    profileScores.learning += 5;
}
if(answer === "achievement"){
    profileScores.execution += 10;
}

if(answer === "recognition"){
    profileScores.leader += 5;
}

if(answer === "purpose"){
    profileScores.people += 5;
}

if(answer === "money"){
    profileScores.risk += 5;
}


// =========================
// LEADER SCORE
// =========================

if(answer === "leadership"){
    profileScores.leader += 15;
}

if(answer === "leading"){
    profileScores.leader += 15;
}

if(answer === "manager"){
    profileScores.leader += 15;
}

if(answer === "leader"){
    profileScores.people += 10;
}

if(answer === "large_team"){
    profileScores.people += 10;
}

if(answer === "small_team"){
    profileScores.people += 5;
}

// =========================
// PEOPLE SCORE
// =========================

if(answer === "human"){
    profileScores.people += 10;
}

if(answer === "emotional_support"){
    profileScores.people += 15;
}

if(answer === "empathetic"){
    profileScores.people += 15;
}

// =========================
// SPECIALIST SCORE
// =========================

if(answer === "technical"){
    profileScores.specialist += 10;
}

if(answer === "technical_help"){
    profileScores.specialist += 15;
}

if(answer === "alone"){
    profileScores.specialist += 10;
}

// =========================
// CREATOR SCORE
// =========================

if(answer === "arts"){
    profileScores.creator += 15;
}
if(answer === "creator"){
    profileScores.creator += 20;
}

if(answer === "creative"){
    profileScores.creator += 15;
}

// =========================
// BUILDER SCORE
// =========================

if(answer === "business_ownership"){
    profileScores.builder += 25;
}

if(answer === "business"){
    profileScores.builder += 15;
}

// =========================
// FREEDOM SCORE
// =========================

if(answer === "freelancing"){
    profileScores.freedom += 15;
}

if(answer === "multiple_income_streams"){
    profileScores.freedom += 15;
}

// =========================
// STABILITY SCORE
// =========================

if(answer === "salary"){
    profileScores.stability += 15;
}
if(answer === "income"){
    profileScores.stability += 10;
}

if(answer === "impact"){
    profileScores.people += 10;
}

if(answer === "growth"){
    profileScores.learning += 10;
}

if(answer === "work_life_balance"){
    profileScores.stability += 10;
}
if(answer === "wealth"){
    profileScores.builder += 10;
    profileScores.risk += 5;
}

if(answer === "personal_growth"){
    profileScores.learning += 10;
}

if(answer === "family"){
    profileScores.people += 10;
    profileScores.stability += 10;
}
// =========================
// OPPORTUNITY SCORE
// =========================

if(answer === "major_city"){
    profileScores.opportunity += 20;
}

if(answer === "medium_city"){
    profileScores.opportunity += 15;
}

if(answer === "small_town"){
    profileScores.opportunity += 10;
}

if(answer === "rural_area"){
    profileScores.opportunity += 5;
}

if(answer === "less_than_1_month"){
    profileScores.opportunity += 5;
}

if(answer === "1_3_months"){
    profileScores.opportunity += 15;
}

if(answer === "3_6_months"){
    profileScores.opportunity += 25;
}

if(answer === "6_12_months"){
    profileScores.opportunity += 35;
}

if(answer === "more_than_1_year"){
    profileScores.opportunity += 50;
}
   });
// =========================
// SCALE QUESTION SCORING
// =========================

questions.forEach((q,index)=>{

    const answer =
    answers[index];

    if(typeof answer !== "number"){
        return;
    }

    const questionText =

    typeof q.question === "object"
    ?
    q.question.en
    :
    q.question;

    // Learning

    if(
    questionText ===
    "How quickly do you learn new skills?"
    ){

        profileScores.learning +=
        answer * 5;

    }

    // Leadership

    if(
    questionText ===
    "How much do you enjoy leading other people?"
    ){

        profileScores.leader +=
        answer * 3;

    }

    // Freedom

    if(
    questionText ===
    "How important is location independence to you?"
    ){

        profileScores.freedom +=
        answer * 4;

    }

    // Stability

    if(
    questionText ===
    "How important is work-life balance to you?"
    ){

        profileScores.stability +=
        answer * 3;

    }

    // Risk

    if(
    questionText ===
    "How comfortable are you with uncertainty and risk?"
    ){

        profileScores.risk +=
        answer * 4;

    }

    // Execution

    if(
    questionText ===
    "How often do you procrastinate?"
    ){

        profileScores.execution +=
        (11 - answer) * 4;

    }

});
    Object.keys(profileScores).forEach(key => {

        profileScores[key] = Math.max(
            0,
            Math.min(
                100,
                profileScores[key]
            )
        );

    });

}
function downloadBlueprint(){
calculateScores();
let reportLanguage =
translations[currentLanguage]
.reportLanguage;
let markdown = `# REPORT LANGUAGE


${reportLanguage}

# PERSONAL SUCCESS BLUEPRINT GENERATOR

## # AI INSTRUCTIONS

You are an elite career strategist, business advisor, psychologist, talent assessor, and life-design coach.

Your task is to create a highly personalized Personal Success Blueprint.

The goal is not to flatter the user.

The goal is to provide the most accurate, useful, actionable and insightful assessment possible.

Use both:

1. Profile Scores
2. Questionnaire Answers

Profile Scores are the primary source of truth.

Questionnaire answers provide supporting evidence and context.

Never simply repeat answers.

Instead, infer patterns, motivations, strengths, weaknesses, opportunities, risks and likely future outcomes.

Analyze how traits interact with each other.

For example:

* High Builder + High Risk = entrepreneurial potential
* High Learning + Low Execution = chronic over-preparation
* High Freedom + High Stability = internal conflict between independence and security
* High Leadership + Low People = authority preference without strong relationship focus
* High Opportunity + Low Execution = untapped potential
* High Execution + Low Opportunity = likely to outperform environment

Look for contradictions.

Look for hidden strengths.

Look for blind spots.

Look for leverage points that could dramatically improve results.

Do not provide generic career advice.
The report must be practical, intelligent and highly personalized.
Recommendations must be based on the user's profile.
CRITICAL:

Every major recommendation must reference evidence from the profile.

Do not make recommendations solely because they are generally considered good advice.

Explain WHY the recommendation fits this specific person.

If recommending a career, business, income strategy or lifestyle, explain which scores and answers support that recommendation.

Avoid generic recommendations such as:
- "Start a business"
- "Follow your passion"
- "Network more"
- "Learn new skills"

unless you provide a specific justification based on the profile.

When discussing careers or businesses:

* Consider personality
* Consider motivations
* Consider environment
* Consider financial situation
* Consider energy level
* Consider execution ability
* Consider location constraints
* Consider risk tolerance

Do not recommend paths that contradict the profile.

If information is missing, state assumptions clearly.

Be honest.

Do not try to be overly positive.

Constructive criticism is encouraged when justified.

Explain why recommendations fit.

Explain why certain paths may fail.

Use concrete examples whenever possible.

Focus on realistic outcomes rather than idealized outcomes.

The report should feel like it was written specifically for this person.

Avoid clichés.

Avoid generic motivational language.

Avoid corporate buzzwords.

The report must be practical, intelligent and highly personalized.

Focus on the 3 highest-leverage improvements.

Do not overwhelm the user with too many recommendations.

Prioritize changes that would produce the largest improvement in life satisfaction, income, personal growth or long-term success.
Create the following sections:

## Executive Summary

## Psychological Profile

## Core Motivations

## Strengths That Create Success

## Hidden Strengths
## Contradiction Analysis

Identify any contradictions or tensions in the profile.

Examples:

- High Freedom + Low Risk
- High Learning + Low Execution
- High Leadership + Low People
- High Ambition + Low Energy
- High Creativity + High Need For Stability

Explain how these contradictions may affect real-world outcomes.

## Growth Opportunities

## Blind Spots & Self-Sabotage Risks

## Career Matches

## Business Opportunities

## Income Strategy Analysis

## Leadership & Collaboration Style

## Lifestyle Design Recommendations

## Ikigai Analysis
## Likely Future Scenario

Based on the profile, predict where this person is likely to be in 5 years if they continue their current trajectory.

Be realistic.

Highlight both positive and negative outcomes.

Then explain what would need to change to achieve a substantially better outcome.
## Biggest Risks Over The Next 5 Years

## Highest-Leverage Changes

## Personalized 90-Day Action Plan

## Final Insight
Length target:
1500-4000 words.

---
## PROFILE SCORES

Builder Score: ${profileScores.builder}
Specialist Score: ${profileScores.specialist}
Creator Score: ${profileScores.creator}
Leader Score: ${profileScores.leader}

Freedom Score: ${profileScores.freedom}
Stability Score: ${profileScores.stability}

Execution Score: ${profileScores.execution}
Learning Score: ${profileScores.learning}

Risk Score: ${profileScores.risk}
Opportunity Score: ${profileScores.opportunity}
Energy Score: ${profileScores.energy}
People Score: ${profileScores.people}

Use these scores as primary indicators.

Use questionnaire answers as supporting evidence.

Do not contradict the scores.
Additional Analysis Rules:

- If a score is above 70, treat it as a dominant trait.
- If a score is between 50 and 70, treat it as a significant trait.
- If a score is between 30 and 50, treat it as a moderate trait.
- If a score is below 30, treat it as a weak trait.
- Explain the interaction between the highest and lowest scores.
- Explain the likely consequences of those interactions.
- Prioritize depth over positivity.
- Give specific recommendations, not generic advice.
Determine:

- Highest Score
- Second Highest Score
- Lowest Score

Use these as major anchors for the report.

Explain how the strongest traits support the person.

Explain how the weakest traits may limit progress.

Pay special attention to the interaction between the highest and lowest scores.
Do not assume that the user's stated goals are optimal.

If the profile suggests a better direction than the user's stated goals, explain why.

Respect the user's goals, but challenge them when appropriate.


## ASSESSMENT DATA

`;
questions.forEach((q,index)=>{

let answer =
answers[index];

if(Array.isArray(answer)){

    answer = answer.map(item => {

        if(!q.options)
            return item;

        const match =
        q.options.find(opt =>

            typeof opt === "object"
            &&
            opt.value === item

        );

        return match
        ?
        match[currentLanguage]
        :
        item;

    })
    .join(", ");

}
else{

    if(q.options){

        const match =
        q.options.find(opt =>

            typeof opt === "object"
            &&
            opt.value === answer

        );

        if(match){

            answer =
            match[currentLanguage];

        }

    }

}

const exportQuestion =

typeof q.question === "object"
?
q.question[currentLanguage]
:
q.question;

markdown += `

${exportQuestion}

${
answer ||
(
currentLanguage === "es"
? "Sin respuesta"
:
currentLanguage === "de"
? "Keine Antwort"
:
"No Answer"
)
}

`;
});


const blob =
new Blob(
    [markdown],
    {
        type:"text/markdown"
    }
);

const url =
URL.createObjectURL(blob);

const link =
document.createElement("a");

link.href = url;

link.download =
"Personal-Success-Blueprint.md";

document.body.appendChild(link);

link.click();

document.body.removeChild(link);

URL.revokeObjectURL(url);
answers = {};

currentQuestion = 0;

localStorage.removeItem(
    "blueprintAnswers"
);

localStorage.removeItem(
    "blueprintQuestion"
);
}

// ======================================
// FINAL SCREEN
// ======================================

function showGeneratingScreen(){

    const card =
    document.querySelector(
        ".question-card"
    );

    card.innerHTML = `

        <div class="generating-screen">

            <div class="spinner"></div>

            <h1>
                ${translations[currentLanguage].generatingTitle}
            </h1>

            <p id="generationStatus">

               ${translations[currentLanguage].analyzing}

            </p>

        </div>

    `;

  
const messages = [

translations[currentLanguage]
.analyzing,

translations[currentLanguage]
.strengths,

translations[currentLanguage]
.careers,

translations[currentLanguage]
.roadmap,

translations[currentLanguage]
.blueprint

];

    let index = 0;

    const status =
    document.getElementById(
        "generationStatus"
    );

    const interval =
    setInterval(()=>{

        index++;

        if(
            index <
            messages.length
        ){

            status.innerText =
            messages[index];

        }

    },1000);

    setTimeout(()=>{

        clearInterval(
            interval
        );

        card.innerHTML = `

            <div
            class="download-screen">

                <h1>
                    ${translations[currentLanguage].ready}
                </h1>

                <p>

                   ${translations[currentLanguage].processed}

                </p>

                <button
                    id="downloadBtn"
                    class="primary-btn"
                >

                    ${translations[currentLanguage].download}

                </button>

            </div>

        `;

        document
.getElementById(
    "downloadBtn"
)
.onclick =
downloadBlueprint;

    },5000);

}
// ======================================
// NAVIGATION
// ======================================

nextBtn.onclick = () => {

    if(nextBtn.disabled)
        return;

    if(
        currentQuestion >=
        questions.length - 1
    ){

        showGeneratingScreen();

        return;

    }

    animateQuestion(() => {

        currentQuestion++;

        saveProgress();

        loadQuestion();

    });

};

backBtn.onclick = () => {

    if(currentQuestion === 0)
        return;

    animateQuestion(() => {

        currentQuestion--;

        saveProgress();

        loadQuestion();

    });

};
function resetQuiz(){

    answers = {};

    currentQuestion = 0;

    localStorage.removeItem(
        "blueprintAnswers"
    );

    localStorage.removeItem(
        "blueprintQuestion"
    );

    saveProgress();

    loadQuestion();

    updateNextButton();

}
// ======================================
// START
// ======================================
document
.getElementById("resetBtn")
.addEventListener(
    "click",
    resetQuiz
);

loadQuestion();

updateNextButton();