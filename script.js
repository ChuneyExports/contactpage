document.addEventListener('DOMContentLoaded', () => {
    const phoneNumbers = document.querySelectorAll('.phone');
    const emailAddresses = document.querySelectorAll('.email');

    phoneNumbers.forEach(phone => {
        phone.addEventListener('click', () => {
            const phoneNumber = phone.dataset.phone;
            navigator.clipboard.writeText(phoneNumber).then(() => {
                const copiedMessage = document.createElement('p');
                copiedMessage.textContent = 'Phone number copied!';
                copiedMessage.style.color = '#007bff';
                copiedMessage.style.fontSize = '0.8em';
                copiedMessage.style.marginTop = '0.2em';
                
                phone.parentNode.insertBefore(copiedMessage, phone.nextSibling);

                setTimeout(() => {
                    copiedMessage.remove();
                }, 2000);
            });
        });
    });

    emailAddresses.forEach(email => {
        email.addEventListener('click', (e) => {
            e.preventDefault();
            const emailAddress = email.textContent;
            openEmailClient(emailAddress);
        });
    });

    function openEmailClient(email) {
        // Try using mailto: protocol
        window.location.href = `mailto:${email}`;
        
        // Check if the mailto: protocol worked after a short delay
        setTimeout(() => {
            // If the page hasn't changed, try opening a new window
            if (window.location.href.indexOf('mailto:') === -1) {
                window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=${email}`, '_blank');
            }
        }, 100);
    }
});
