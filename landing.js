const currentLanguage =
localStorage.getItem("language")
|| "en";

const landingTranslations = {

    en: {

        logo:
        "Personal Success Blueprint",

        start:
        "Start Assessment",

        heroBadge:
        "AI-Powered Personal Analysis",

        heroTitle:
        "Discover Your Ideal Career, Business & Life Path",

        heroDescription:
        "Stop guessing about your future. Discover your strengths, ideal career paths, business opportunities, income style, and practical next steps with a personalized Success Blueprint."

    },

    es: {

        logo:
        "Plan Personal de Éxito",

        start:
        "Comenzar Evaluación",

        heroBadge:
        "Análisis Personal Impulsado por IA",

        heroTitle:
        "Descubre Tu Carrera, Negocio y Camino de Vida Ideal",

        heroDescription:
        "Deja de adivinar tu futuro. Descubre tus fortalezas, carreras ideales, oportunidades de negocio, estilo de ingresos y próximos pasos prácticos con un plan personalizado."

    },

    de: {

        logo:
        "Persönlicher Erfolgsplan",

        start:
        "Bewertung Starten",

        heroBadge:
        "KI-gestützte Persönliche Analyse",

        heroTitle:
        "Entdecke Deinen Idealen Karriere-, Geschäfts- und Lebensweg",

        heroDescription:
        "Höre auf zu raten. Entdecke deine Stärken, ideale Karrierewege, Geschäftsmöglichkeiten, Einkommensstil und konkrete nächste Schritte mit einem persönlichen Erfolgsplan."

    }

};
function updateLandingLanguage(){

    const t =
    landingTranslations[
        localStorage.getItem("language")
        || "en"
    ];
    document
.querySelectorAll(
    ".language-switcher button"
)
.forEach(btn =>
    btn.classList.remove("active")
);

document
.querySelectorAll(
    "#enBtn, #esBtn, #deBtn"
)
.forEach(btn =>
    btn.classList.remove("active")
);

document
.getElementById(
    localStorage.getItem("language")
    + "Btn"
)
.classList.add("active");
    document.getElementById(
        "logoText"
    ).innerText =
    t.logo;

    document.getElementById(
        "heroBadge"
    ).innerText =
    t.heroBadge;

    document.getElementById(
        "heroTitle"
    ).innerText =
    t.heroTitle;

    document.getElementById(
        "heroDescription"
    ).innerText =
    t.heroDescription;

    document.getElementById(
        "startBtnTop"
    ).innerText =
    t.start;

}
function setLanguage(lang){

    localStorage.setItem(
        "language",
        lang
    );

    updateLandingLanguage();

}

updateLandingLanguage();