document.getElementById('signUpForm').addEventListener('submit', async (event) => {
    event.preventDefault(); // Prevent default form submission

    const name = document.getElementById('signup-name').value;
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;

    const userData = { name, email, password, First_name: name }; // Modify to fit your schema

    try {
        const response = await fetch('http://localhost:4000/api/user', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData),
        });

        if (response.ok) {
            const result = await response.json();
            console.log('User signed up:', result);
            alert('Sign Up Successful!');
        } else {
            const errorData = await response.json();
            console.error('Error:', errorData.message);
            alert('Sign Up Failed: ' + errorData.message);
        }
    } catch (error) {
        console.error('Network error:', error);
        alert('A network error occurred.');
    }
});
