document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Empêche l'envoi du formulaire

    // Récupération des valeurs des champs
    const nom = document.getElementById('nom').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    // Vérification si un champ est vide
    if (nom === '' || email === '' || message === '') {
        alert('Veuillez remplir les champs manquants du formulaire');
        return; // Arrête l'exécution ici
    }

    // Vérification de la validité de l'email (structure de base)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert("Attention, ce n'est pas un mail valide");
        return; // Arrête l'exécution ici
    }

    // Vérification que l'email se termine par @gmail.com ou @yahoo.fr
    if (!email.endsWith('@gmail.com') && !email.endsWith('@yahoo.fr') && !email.endsWith('@outlook.com')) {
        alert("Votre email doit être valide");
        return;
    }

    // Si tout est bon, affiche les valeurs dans la console
    console.log({ nom, email, message });
});
