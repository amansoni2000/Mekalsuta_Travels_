// Handle form submission
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent default form submission

    // Get user inputs
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    // WhatsApp message format
    var whatsappMessage = `Name: ${name}%0AEmail: ${email}%0AMessage: ${message}`;

    // WhatsApp URL
    var whatsappUrl = `https://wa.me/918085580634?text=${whatsappMessage}`;

    // Open WhatsApp
    window.open(whatsappUrl, '_blank');
});
