// Select the fact text and button elements
const factText = document.getElementById('fact-text');
const factButton = document.getElementById('new-fact-btn');

// Function to fetch a random fact from Urandom API
async function fetchRandomFact() {
    const apiUrl = 'https://uselessfacts.jsph.pl/random.json?language=en';  // Urandom API URL

    try {
        // Fetch the data from the API
        const response = await fetch(apiUrl);

        // Check if the response was successful
        if (response.ok) {
            const data = await response.json();

            // Log the entire data to see its structure
            console.log(data);

            // Check if the fact is present in the response
            if (data && data.text) {
                factText.textContent = data.text;
            } else {
                factText.textContent = "Sorry, no fact available. Try again!";
            }
        } else {
            factText.textContent = "Error fetching data. Please try again later.";
            console.error('Failed to fetch:', response.status, response.statusText);  // Log the status code and message
        }
    } catch (error) {
        factText.textContent = "An error occurred while fetching the fact.";
        console.error('Error fetching the fact:', error);  // Log the error for debugging
    }
}

// Fetch the first fact when the page loads
fetchRandomFact();

// Event listener for the button to get a new fact
factButton.addEventListener('click', fetchRandomFact);
