let darkMode = document.getElementById("darkMode");
let body = document.querySelector("body");

darkMode.onclick = function() {
    body.classList.toggle("dark");
    if (body.classList == "dark") {
        darkMode.classList.replace("fa-moon", "fa-sun");
    } else {
        darkMode.classList.replace("fa-sun", "fa-moon");
    }
}