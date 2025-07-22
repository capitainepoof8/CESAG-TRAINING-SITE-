const questions = [
    // Original Questions
    {
        question: "Je n'ai aucune envie de terminer ma vie dans un...",
        options: ["Auspice", "Hospisse", "Hospice", "Hauspice"],
        answer: 2
    },
    {
        question: "Parmi ces verbes à l'infinitif, l'un est mal orthographié. Lequel?",
        options: ["Mijoter", "Greloter", "Barboter", "Radoter"],
        answer: 1 
    },
    {
        question: "Laquelle de ces montagnes est appelée « toit du monde » ?",
        options: ["Kilimandjaro", "Mont Everest", "Mont Blanc", "Les Appalaches"],
        answer: 1
    },
    {
        question: "A quel(s) auteur(s) associe-t-on le concept de négritude?",
        options: ["Aimé Césaire", "Léopold Sédar Senghor", "Wole Soyinka", "Eza Boto"],
        answer: 0 
    },
    {
        question: "Qui est l'auteur de la citation suivante : « un tigre ne proclame pas sa tigritude. II bondit sur sa proie et la dévore »",
        options: ["Léopold Sédar Senghor", "Wole Soyinka", "Chinua Achebe", "Cheikh Anta Diop"],
        answer: 1
    },
     {
        question: "Dans le domaine du Web, GAFA signifie:",
        options: ["Google, Apple, Facebook, Amazon", "Groupement Amazon, Facebook, Apple", "Google Amérique, Facebook Amérique", "Aucune de ses réponses"],
        answer: 0
    },
    // Recent Events
    {
        question: "Quel pays a remporté la Coupe d'Afrique des Nations (CAN) de football en 2024?",
        options: ["Nigeria", "Côte d'Ivoire", "Sénégal", "Afrique du Sud"],
        answer: 1
    },
    {
        question: "Qui a été élu président du Sénégal lors de l'élection de mars 2024?",
        options: ["Macky Sall", "Amadou Ba", "Bassirou Diomaye Faye", "Ousmane Sonko"],
        answer: 2
    },
    {
        question: "En 2023, un coup d'État militaire a eu lieu dans quel pays du Sahel?",
        options: ["Mali", "Burkina Faso", "Tchad", "Niger"],
        answer: 3
    },
    {
        question: "Lequel de ces pays africains a officiellement rejoint le groupe des BRICS en janvier 2024?",
        options: ["Nigeria", "Kenya", "Éthiopie", "Ghana"],
        answer: 2
    },
    // New Questions from Document & General Knowledge
    {
        question: "A quel pays associe-t-on le mot lusophone ?",
        options: ["Portugal", "Espagne", "Lusophonia", "Brésil"],
        answer: 0
    },
    {
        question: "Dans le droit OHADA, GIE signifie:",
        options: ["Groupement d'Intérêt Economique", "Groupe d'Initiative Economique", "Groupement d'Intérêt Etatique", "Gestion Intégrée des Entreprises"],
        answer: 0
    },
    {
        question: "Qui est l'auteur du livre 'Une si longue lettre'?",
        options: ["Ahmadou Kourouma", "Mariama Bâ", "Cheikh Hamidou Kane", "Mongo Beti"],
        answer: 1
    },
    {
        question: "Qui a écrit 'L'Avare'?",
        options: ["Victor Hugo", "Emile Zola", "Molière", "William Shakespeare"],
        answer: 2
    },
    {
        question: "Un article coûte 200 000 F CFA. On lui applique une réduction de 20% puis une nouvelle réduction de 20%. Quel est son nouveau prix ?",
        options: ["120 000 F CFA", "128 000 F CFA", "140 000 F CFA", "160 000 F CFA"],
        answer: 1 // 200000 * 0.8 * 0.8 = 128000
    },
    {
        question: "Mon âge est égal au tien plus la moitié du mien. Si tu as 22 ans, quel âge ai-je ?",
        options: ["33 ans", "44 ans", "55 ans", "66 ans"],
        answer: 1 // x = 22 + x/2  => x/2 = 22 => x = 44
    },
    {
        question: "Quelle ville abrite le siège de la Cour Pénale Internationale (CPI)?",
        options: ["Genève", "New York", "Bruxelles", "La Haye"],
        answer: 3
    },
    {
        question: "Quel est l'anagramme de 6 lettres du mot « sieste » ?",
        options: ["Tisse", "Steise", "Essite", "Existe"],
        answer: 3
    },
    {
        question: "Complétez la suite logique : 12, 24, 72, 288, ...",
        options: ["576", "1152", "1440", "1728"],
        answer: 2 // x2, x3, x4, x5
    },
    {
        question: "Complétez la suite logique : 9, 7, 10, 8, 11, ...",
        options: ["9", "12", "13", "6"],
        answer: 0 // -2, +3, -2, +3, -2
    },
    {
        question: "Quel pays africain est le plus grand producteur de cacao au monde?",
        options: ["Ghana", "Nigeria", "Cameroun", "Côte d'Ivoire"],
        answer: 3
    },
    {
        question: "La Grande Muraille Verte est une initiative africaine visant à lutter contre quoi?",
        options: ["L'élévation du niveau de la mer", "La déforestation", "La désertification", "La pollution plastique"],
        answer: 2
    },
    {
        question: "Quel fleuve est le plus long d'Afrique de l'Ouest?",
        options: ["Le fleuve Sénégal", "Le fleuve Niger", "Le fleuve Gambie", "La Volta"],
        answer: 1
    },
    {
        question: "Laquelle de ces organisations est une union économique et monétaire en Afrique de l'Ouest?",
        options: ["CEDEAO", "UEMOA", "CEMAC", "SADC"],
        answer: 1
    },
    {
        question: "Quel célèbre musicien sénégalais est connu comme le 'Roi du Mbalax'?",
        options: ["Ismaël Lô", "Baaba Maal", "Orchestra Baobab", "Youssou N'Dour"],
        answer: 3
    }
];
