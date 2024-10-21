document.getElementById('bookingForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const checkin = document.getElementById('checkin').value;
    const checkout = document.getElementById('checkout').value;
    const guests = document.getElementById('guests').value;

    // Validate the form
    if (name && email && phone && checkin && checkout && guests) {
        // Display a confirmation message
        document.getElementById('message').textContent = 'Booking Successful!';
    } else {
        // Display an error message
        document.getElementById('message').textContent = 'Please fill out all fields.';
    }
});
