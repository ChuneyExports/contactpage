document.addEventListener('DOMContentLoaded', () => {
    const phoneNumbers = document.querySelectorAll('.phone');
    const emailAddresses = document.querySelectorAll('.email');

    phoneNumbers.forEach(phone => {
        phone.addEventListener('click', () => {
            const phoneNumber = phone.dataset.phone;
            navigator.clipboard.writeText(phoneNumber).then(() => {
                alert('Phone number copied to clipboard!');
            });
        });
    });

    emailAddresses.forEach(email => {
        email.addEventListener('click', () => {
            const emailAddress = email.textContent;
            window.location.href = `mailto:${emailAddress}`;
        });
    });
});