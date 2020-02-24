const toggleButtons = document.getElementsByClassName("toggle-btn");

for (const button of toggleButtons) {
    button.addEventListener("click", () => button.classList.toggle("enabled"));
}
