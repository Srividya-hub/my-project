document.getElementById('registration-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const genderElements = document.querySelectorAll('input[name="gender"]:checked');
    const errorMessage = document.getElementById('error-message');

    // Simple validation (for demonstration purposes)
    if (username && password && email) {
        const gender = Array.from(genderElements).map(element => element.value).join(', ');
        errorMessage.textContent = '';
        alert(`Registration successful!\n\nUsername: ${username}\nEmail: ${email}\nPhone: ${phone}\nGender: ${gender}`);
        // Redirect to another page or perform further actions
    } else {
        errorMessage.textContent = 'Please fill out all required fields';
    }
});
