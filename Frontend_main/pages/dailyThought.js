// Fetching a random Kanye West quote
async function getThought() {
    try {
        const response = await fetch('https://api.kanye.rest');

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        console.log('API Response:', data); // Log API response for debugging

        // Display the quote
        document.getElementById('thought').innerText = 
            `"${data.quote}" — Kanye West`;
    } catch (error) {
        console.error('Error fetching thought:', error);
        document.getElementById('thought').innerText = 
            'Failed to load thought. Please try again!';
    }
}

// Ensure DOM is loaded before calling the function
document.addEventListener('DOMContentLoaded', getThought);
