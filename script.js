const burgerBtn = document.querySelector(".fa-bars");
const burgerModalMenu = document.querySelector(".modal__burger_menu");

const showModal = ()=> {
    burgerBtn.addEventListener("click", ()=> {
        burgerModalMenu.classList.toggle("active");
        burgerBtn.classList.toggle("rotate");
    })

    window.addEventListener("click", (e) => {
        if (!burgerModalMenu.contains(e.target) && e.target !== burgerBtn) {
            burgerModalMenu.classList.remove("active");
            burgerBtn.classList.toggle("rotate");
        }
    });
}
showModal()