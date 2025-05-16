function setGreeting() {
    const hour = new Date().getHours();
    const greeting = hour < 12 ? "Good Morning" : 
                    hour < 18 ? "Good Afternoon" : "Good Evening";
    document.getElementById('greeting').textContent = `${greeting}, I'm Haji Kipacha`;
}

function toggleTheme() {
    document.body.classList.toggle('dark-theme');
    const theme = document.body.classList.contains('dark-theme') ? 'dark' : 'light';
   
    localStorage.setItem('theme', theme);

    const themes = localStorage.getItem('theme') || 'light'; // for example

    document.getElementById('themeToggleIcon').className = 
    themes === 'dark' ? 'fa fa-sun-o text-white' : 'fa fa-moon-o';
}

function initializeTheme() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.body.classList.toggle('dark-theme', savedTheme === 'dark');
}

document.querySelectorAll('.details-btn').forEach(button => {
    button.addEventListener('click', () => {
        const details = button.parentElement.querySelector('p:nth-of-type(2)');
        details.classList.toggle('show');
        button.textContent = details.classList.contains('show') ? 
                            'Hide Details' : 'Show Details';
    });
});


const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    menuToggle.classList.toggle('active');
    
    if(navLinks.classList.contains('active')) {
        document.addEventListener('click', closeMenuOutside);
    } else {
        document.removeEventListener('click', closeMenuOutside);
    }
});

function closeMenuOutside(e) {
    if (!navLinks.contains(e.target) && !menuToggle.contains(e.target)) {
        navLinks.classList.remove('active');
        menuToggle.classList.remove('active');
        document.removeEventListener('click', closeMenuOutside);
    }
}

document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        menuToggle.classList.remove('active');
    });
});
window.onload = () => {
    initializeTheme();
    setGreeting();
};

document.getElementById('themeToggle').addEventListener('click', toggleTheme);