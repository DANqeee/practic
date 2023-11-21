const checkbox = document.getElementById('checkbox');
const activCheck = document.getElementById("active_check")
const OnactivCheck = document.getElementById("active_check")

activCheck.addEventListener("click", () => {
    checkbox.classList.add('active');
})
OnactivCheck.addEventListener('click', () => {
    checkbox.classList.remove('active');
})