// Objets contenant des traductions pour différentes langues
const translations = {
    'en': {
        'welcome': 'Welcome to our website!',
        'about': 'About us',
        // Plus de traductions...
    },
    'fr': {
        'welcome': 'Bienvenue sur notre site web !',
        'about': 'À propos de nous',
        // Plus de traductions...
    },
    // Plus de langues...
};

// Fonction pour traduire tous les éléments de la page
function translatePage() {
    // Récupère le code de langue du navigateur et le réduit au format de deux lettres
    const lang = navigator.language.split('-')[0];

    // Vérifie si la langue détectée est prise en charge dans l'objet 'translations'
    if (translations[lang]) {
        // Met à jour l'attribut 'lang' de l'élément <html> si la traduction est disponible
        document.documentElement.lang = lang;

        // Récupère les traductions pour la langue sélectionnée
        const translation = translations[lang];

        // Parcourt tous les éléments ayant l'attribut 'data-key' et met à jour leur contenu
        document.querySelectorAll('[data-key]').forEach(element => {
            const key = element.getAttribute('data-key');
            // Remplace le contenu de l'élément si une traduction correspondante est trouvée
            if (translation[key]) {
                element.textContent = translation[key];
            }
        });
    } else {
        // Utilise l'anglais comme langue par défaut si la langue n'est pas prise en charge
        const translation = translations['en'];
        document.querySelectorAll('[data-key]').forEach(element => {
            const key = element.getAttribute('data-key');
            if (translation[key]) {
                element.textContent = translation[key];
            }
        });
    }
}

// Appelle 'translatePage' au chargement de la page pour traduire le contenu
window.onload = translatePage;