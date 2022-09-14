const checkbox = document.getElementById('checkbox');

// localStorage.setItem
checkbox.addEventListener('change', () => {
    //change the theme of the website
    document.body.classList.toggle('dark');
    localStorage.setItem("dark-mode", "enabled")
});

let darkMode = localStorage.getItem("dark-mode");

const disableDarkMode = () => {
    document.body.classList.toggle('dark');
    localStorage.setItem("dark-mode", "disabled");
}


// localStorage.getItem
