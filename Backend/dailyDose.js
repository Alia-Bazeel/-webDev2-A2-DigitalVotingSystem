// Necessary elements
const header = document.querySelector('.fixed-header');
const dropdownIcon = document.querySelector('.dashboard-icon');
const dropdownMenu = document.querySelector('.dropdown-menu');
const headerH1 = document.querySelector('.fixed-header h1');
const headerH4 = document.querySelector('.fixed-header h4');
const logo = document.querySelector('.logo');
const navLinks = document.querySelectorAll('.nav-link');
const dropdownLinks = document.querySelectorAll('.dropdown-menu .nav-link');

// Ensuring smooth transition for header, text, and logo changes
header.style.transition = 'all 0.3s ease-in-out';
headerH1.style.transition = 'font-size 0.3s ease-in-out';
headerH4.style.transition = 'font-size 0.3s ease-in-out';
logo.style.transition = 'width 0.3s ease-in-out, height 0.3s ease-in-out';
navLinks.forEach(link => {
    link.style.transition = 'font-size 0.3s ease-in-out';
});
dropdownLinks.forEach(link => {
    link.style.transition = 'font-size 0.3s ease-in-out';
});

// Default and shrink styles
const defaultPadding = '20px 0';
const shrinkPadding = '10px 0';
const defaultFontSizeH1 = '7em';
const shrinkFontSizeH1 = '3.5em';
const defaultFontSizeH4 = '3em';
const shrinkFontSizeH4 = '1.5em';
const defaultLogoSize = '150px';
const shrinkLogoSize = '75px';
const defaultNavFontSize = '1.2em';
const shrinkNavFontSize = '1em';
const defaultDropdownFontSize = '1em';
const shrinkDropdownFontSize = '0.8em';

// HEADER SHRINK ON SCROLL 
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        // Shrink the header, font sizes, logo, and nav links
        header.style.padding = shrinkPadding;
        headerH1.style.fontSize = shrinkFontSizeH1;
        headerH4.style.fontSize = shrinkFontSizeH4;
        logo.style.width = shrinkLogoSize;
        logo.style.height = 'auto';
        navLinks.forEach(link => {
            link.style.fontSize = shrinkNavFontSize;
        });
        dropdownLinks.forEach(link => {
            link.style.fontSize = shrinkDropdownFontSize;
        });
    } else {
        // Restore default header, font sizes, logo, and nav links
        header.style.padding = defaultPadding;
        headerH1.style.fontSize = defaultFontSizeH1;
        headerH4.style.fontSize = defaultFontSizeH4;
        logo.style.width = defaultLogoSize;
        logo.style.height = 'auto';
        navLinks.forEach(link => {
            link.style.fontSize = defaultNavFontSize;
        });
        dropdownLinks.forEach(link => {
            link.style.fontSize = defaultDropdownFontSize;
        });
    }
});

// DROPDOWN MENU TOGGLE 
dropdownIcon.addEventListener('click', (event) => {
    event.stopPropagation(); // Prevent click event from bubbling up
    dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';
});

// CLOSE DROPDOWN WHEN CLICKING OUTSIDE 
document.addEventListener('click', (event) => {
    if (!event.target.closest('.dashboard-widget')) {
        dropdownMenu.style.display = 'none';
    }
});

// CLOSE DROPDOWN WHEN SCROLLING 
window.addEventListener('scroll', () => {
    dropdownMenu.style.display = 'none';
});
