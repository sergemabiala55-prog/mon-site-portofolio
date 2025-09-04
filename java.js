// java.js

// 1. Changer la couleur de fond du header au survol
const header = document.querySelector('header');
header.addEventListener('mouseenter', () => {
    header.style.backgroundColor = '#b84444ff';
});
header.addEventListener('mouseleave', () => {
    header.style.backgroundColor = '';
});

// 2. Ajouter une alerte quand le formulaire est soumis
const form = document.querySelector('form');
if (form) {
    form.addEventListener('submit', (e) => {
        e.preventDefault(); // empêche l'envoi réel pour tester
        const name = document.getElementById('name').value;
        alert(Merci ${name}, votre message a été reçu !);
        form.reset(); // réinitialiser le formulaire
    });
}

// 3. Ajouter un message de bienvenue personnalisé
const mainSection = document.querySelector('main section');
if (mainSection) {
    const welcomeMsg = document.createElement('p');
    welcomeMsg.textContent = "Bienvenue sur mon portfolio interactif ! Explorez mes compétences et projets.";
    mainSection.prepend(welcomeMsg); // ajouter avant le contenu existant
}

// 4. Scroll vers le haut doucement
const scrollTopButton = document.createElement('button');
scrollTopButton.textContent = '↑ Haut de page';
scrollTopButton.style.position = 'fixed';
scrollTopButton.style.bottom = '20px';
scrollTopButton.style.right = '20px';
scrollTopButton.style.padding = '10px 15px';
scrollTopButton.style.display = 'none';
document.body.appendChild(scrollTopButton);

window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
        scrollTopButton.style.display = 'block';
    } else {
        scrollTopButton.style.display = 'none';
    }
});

scrollTopButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});