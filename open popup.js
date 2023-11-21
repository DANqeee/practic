const openPopUp = document.getElementById('open_pop_up');
const closePopup = document.getElementById('pop_up_close');
const popup = document.getElementById('pop_up');

console.log(openPopUp,closePopup,popup);
    openPopUp.addEventListener("click", () => {
        popup.classList.add('active');
    })
    closePopup.addEventListener('click', () => {
        popup.classList.remove('active');
    })