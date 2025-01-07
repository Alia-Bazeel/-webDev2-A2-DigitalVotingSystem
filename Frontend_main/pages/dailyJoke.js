// Select joke elements
const jokeSetup = document.getElementById('joke-setup');
const jokePunchline = document.getElementById('joke-punchline');
const newJokeBtn = document.getElementById('new-joke-btn');

// Fetch and display a random joke
async function fetchJoke() {
    try {
        const response = await fetch('https://official-joke-api.appspot.com/random_joke');
        const joke = await response.json();
        jokeSetup.textContent = joke.setup;
        jokePunchline.textContent = joke.punchline;
    } catch (error) {
        jokeSetup.textContent = 'Oops! Failed to load a joke.';
        jokePunchline.textContent = '';
        console.error('Error fetching joke:', error);
    }
}

// Event listener for new joke button
newJokeBtn.addEventListener('click', fetchJoke);

// Load a joke when the page loads
window.onload = fetchJoke;
