// Necessary elements
const signInBtn = document.getElementById('signInBtn');
const signUpBtn = document.getElementById('signUpBtn');
const signInForm = document.getElementById('signInForm');
const signUpForm = document.getElementById('signUpForm');
const switchToSignUp = document.getElementById('switchToSignUp');
const switchToSignIn = document.getElementById('switchToSignIn');

// Toggle Forms Using Buttons
signInBtn.addEventListener('click', () => {
    signInForm.classList.add('active');
    signUpForm.classList.remove('active');
    signInBtn.classList.add('active');
    signUpBtn.classList.remove('active');
});

signUpBtn.addEventListener('click', () => {
    signUpForm.classList.add('active');
    signInForm.classList.remove('active');
    signUpBtn.classList.add('active');
    signInBtn.classList.remove('active');
});

// Toggle Forms Using Switch Text
switchToSignUp.addEventListener('click', () => {
    signUpBtn.click();
});

switchToSignIn.addEventListener('click', () => {
    signInBtn.click();
});

// Placeholder Form Submission (You can replace with backend integration)
signInForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Sign In Successful!');
});

signUpForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Sign Up Successful!');
});
