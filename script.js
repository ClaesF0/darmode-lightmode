const checkbox = document.getElementById('checkbox');
let darkMode = localStorage.getItem("dark-mode")

function enableDarkMode(){
checkbox.addEventListener('change', () => {
    //change the theme of the website
    document.body.classList.toggle('dark');
    localStorage.setItem("dark-mode", "enabled");
});
}

if (darkMode === "enabled") {
    enableDarkMode();
}
