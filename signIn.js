// Wait for the DOM to fully load before executing the script
document.addEventListener('DOMContentLoaded', () => {
    // Handle the form submission
    document.getElementById('signInForm').addEventListener('submit', async (event) => {
        event.preventDefault(); // Prevent the default form submission

        // Get the email and password from the input fields
        const email = document.getElementById('signin-email').value;
        const password = document.getElementById('signin-password').value;

        // Create the user data object to send in the request body
        const userData = { email, password };

        try {
            // Send the POST request to the backend for sign-in validation
            const response = await fetch('http://localhost:4000/api/user/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json', // Send data as JSON
                },
                body: JSON.stringify(userData), // Attach user data as the request body
            });

            // Handle the response from the backend
            if (response.ok) {
                const result = await response.json();
                console.log('User signed in:', result);

                // Redirect user to the home page or dashboard after successful sign-in
                window.location.href = 'index.html'; // Replace with your actual home URL
            } else {
                const errorData = await response.json();
                console.error('Error:', errorData.message);

                // Display custom error message based on the response
                if (errorData.message === 'Account not found') {
                    alert('Account not found. Please check your email and try again.');
                } else if (errorData.message === 'Invalid credentials') {
                    alert('Incorrect password. Please try again.');
                } else {
                    alert('Sign In Failed: ' + errorData.message);
                }
            }
        } catch (error) {
            console.error('Network error:', error);
            alert('A network error occurred.');
        }
    });
});
