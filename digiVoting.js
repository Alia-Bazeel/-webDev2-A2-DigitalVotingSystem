// Wait for the DOM to fully load 
document.addEventListener("DOMContentLoaded", function () {
    // Function to handle form submission for sign-up
    const signUpForm = document.getElementById("signup-form");
    signUpForm.addEventListener("submit", function (e) {
        e.preventDefault(); // Prevent page reload
        alert("Sign-up functionality coming soon!");
    });

    // Function to handle form submission for sign-in
    const signInForm = document.getElementById("signin-form");
    signInForm.addEventListener("submit", function (e) {
        e.preventDefault(); // Prevent page reload
        alert("Sign-in functionality coming soon!");
    });

    // Handle vote submission
    const voteForm = document.getElementById("vote-form");
    voteForm.addEventListener("submit", function (e) {
        e.preventDefault(); // Prevent page reload
        const selectedOption = document.querySelector('input[name="vote-option"]:checked');
        if (selectedOption) {
            alert(`You voted for: ${selectedOption.value}`);
        } else {
            alert("Please select an option before voting.");
        }
    });

    // Random daily question display
    const questions = [
        "Which is the best country to visit with kids? New Zealand, Spain, Canada",
        "What is your favorite season? Spring, Summer, Autumn, Winter",
        "Which type of pet do you prefer? Dog, Cat, Bird, Fish",
    ];

    const dailyQuestionElement = document.getElementById("daily-question");
    const randomIndex = Math.floor(Math.random() * questions.length);
    dailyQuestionElement.textContent = questions[randomIndex];
});
