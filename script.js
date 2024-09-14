const video = document.getElementById('video');
const canvas = document.getElementById('canvas');
const captureButton = document.getElementById('capture');

// Accéder à la webcam
navigator.mediaDevices.getUserMedia({ video: true })
    .then(stream => {
        video.srcObject = stream;
    })
    .catch(err => {
        console.error("Erreur d'accès à la webcam:", err);
    });

// Fonction pour capturer l'image
captureButton.addEventListener('click', () => {
    const context = canvas.getContext('2d');
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    context.drawImage(video, 0, 0);

    // Convertir l'image en base64
    const imageData = canvas.toDataURL('image/png');

    // Envoyer l'image au bot Telegram
    envoyerImageAuTelegram(imageData);
});

// Fonction pour envoyer l'image au bot Telegram
async function envoyerImageAuTelegram(imageData) {
    const botToken = '7448490532:AAHS5vRJGbXLM6uC3Ym8JGQLnOI7FmbMcBI'; // Remplacez par votre token de bot
    const chatId = '6798669588'; // Remplacez par votre chat ID

    // Créer un objet FormData pour envoyer l'image
    const formData = new FormData();
    formData.append('chat_id', chatId);
    formData.append('photo', imageData.split(',')[1]); // Enlever le préfixe "data:image/png;base64,"

    try {
        const response = await fetch(https://api.telegram.org/bot${botToken}/sendPhoto, {
            method: 'POST',
            body: formData,
        });

        if (response.ok) {
            alert('Image envoyée avec succès !');
        } else {
            alert('Erreur lors de l\'envoi de l\'image.');
        }
    } catch (error) {
        console.error('Erreur:', error);
        alert('Une erreur est survenue.');
    }
}

