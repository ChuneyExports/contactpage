document.addEventListener('DOMContentLoaded', () => {
    const phoneNumbers = document.querySelectorAll('.phone');
    const emailAddresses = document.querySelectorAll('.email');

    phoneNumbers.forEach(phone => {
        phone.addEventListener('click', () => {
            const phoneNumber = phone.dataset.phone;
            navigator.clipboard.writeText(phoneNumber).then(() => {
                // Create and insert the "Copied" message
                const copiedMessage = document.createElement('p');
                copiedMessage.textContent = 'Phone number copied!';
                copiedMessage.style.color = '#007bff';
                copiedMessage.style.fontSize = '0.8em';
                copiedMessage.style.marginTop = '0.2em';
                
                // Insert the message after the clicked phone number
                phone.parentNode.insertBefore(copiedMessage, phone.nextSibling);

                // Remove the message after 2 seconds
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
            const mailtoLink = document.createElement('a');
            mailtoLink.href = `mailto:${emailAddress}`;
            mailtoLink.click();
        });
    });
});

