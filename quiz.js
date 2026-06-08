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

    type:"scale",

    question:{
        en:"How entrepreneurial do you consider yourself?",
        es:"¿Qué tan emprendedor te consideras?",
        de:"Wie unternehmerisch schätzt du dich selbst ein?"
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
        en:"Business & Money",
        es:"Negocios y Dinero",
        de:"Geschäft & Geld"
    },

    type:"single",

    question:{
        en:"Would you rather:",
        es:"¿Qué preferirías?",
        de:"Was würdest du bevorzugen?"
    },

    options:[

        {
            value:"high_risk_high_reward",
            en:"Earn More With More Risk",
            es:"Ganar Más Con Más Riesgo",
            de:"Mehr Verdienen Mit Mehr Risiko"
        },

{
    value:"low_risk_stability",

    en:"Earn Less With Stability",

    es:"Ganar Menos Con Estabilidad",

    de:"Weniger Einkommen, Dafür Stabilität"
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
        en:"Personal Growth",
        es:"Crecimiento Personal",
        de:"Persönliche Entwicklung"
    },

    type:"single",

    question:{
        en:"What usually stops you from reaching your goals?",
        es:"¿Qué suele impedirte alcanzar tus metas?",
        de:"Was hindert dich normalerweise daran, deine Ziele zu erreichen?"
    },

    options:[

        {
            value:"fear",
            en:"Fear",
            es:"Miedo",
            de:"Angst"
        },

        {
            value:"lack_of_time",
            en:"Lack of Time",
            es:"Falta de Tiempo",
            de:"Zeitmangel"
        },

        {
            value:"money",
            en:"Money",
            es:"Dinero",
            de:"Geld"
        },

        {
            value:"distraction",
            en:"Distraction",
            es:"Distracción",
            de:"Ablenkung"
        },

        {
            value:"lack_of_clarity",
            en:"Lack of Clarity",
            es:"Falta de Claridad",
            de:"Mangelnde Klarheit"
        },

        {
            value:"lack_of_confidence",
            en:"Lack of Confidence",
            es:"Falta de Confianza",
            de:"Mangelndes Selbstvertrauen"
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
function downloadBlueprint(){

let reportLanguage =
translations[currentLanguage]
.reportLanguage;
let markdown = `# REPORT LANGUAGE


${reportLanguage}

# PERSONAL SUCCESS BLUEPRINT GENERATOR

## AI INSTRUCTIONS

You are an expert career strategist, business advisor, personality analyst, and personal development coach.

Analyze all answers and generate a highly personalized Personal Success Blueprint.

Do not repeat answers directly.

Infer strengths, weaknesses, opportunities, risks, motivations, career fit, business fit, lifestyle fit and growth potential.

Create the following sections:

## Your Profile

## Top Strengths

## Growth Opportunities

## Career Matches

## Business Opportunities

## Income Style Analysis

## Lifestyle Fit

## Ikigai Analysis

## Main Risks

## 90-Day Action Plan

## Final Insight

Length target:
1200-2000 words.

---

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