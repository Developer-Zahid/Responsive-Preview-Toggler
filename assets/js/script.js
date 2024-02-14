let responsiveTogglerBtns = document.querySelectorAll("[data-responsive-toggle-btn]")


responsiveTogglerBtns.forEach(item=>{
    item.addEventListener("click", ()=>{
        let viewportWindowElement = document.querySelector(".preview-body__window")
        let currentViewportWidth = item.dataset.viewportWidth
        document.querySelector(".preview-header__btn.active").classList.remove("active")
        item.classList.add("active")
        viewportWindowElement.style.maxWidth = currentViewportWidth
    })
})