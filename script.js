let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}


//// codes for submit form
const scriptURL = 'https://script.google.com/macros/s/AKfycbwgn8PeGeXyn3i0uMyazDeizqZfD0zk0OrpgKU7dT8x6tNllDqO6qIl2ErtLtV5FJia/exec';
const form = document.forms['submit-to-google-sheet'];
const messageDiv = document.getElementById('message');

form.addEventListener('submit', e => {
    e.preventDefault();
    const formData = new FormData(form);
    // Log the form data to ensure it matches the expected format
    // console.log(Object.fromEntries(formData));
    fetch(scriptURL, { method: 'POST', body: formData })
        .then(response => {
            console.log('Success!', response);
            messageDiv.innerText = 'Form submitted successfully!';
            // Reset form after 2 seconds
            setTimeout(() => {
                form.reset();
                messageDiv.innerText = '';
            }, 1000);
        })
        .catch(error => {
            console.error('Error!', error.message);
            messageDiv.innerText = 'An error occurred while submitting the form.';
        });
});