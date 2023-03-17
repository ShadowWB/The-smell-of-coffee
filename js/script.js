const menuBtn = document.querySelector('.burger'),
    menu = document.querySelector('.header-nav__mobile'),
    menuItems = document.querySelectorAll(".header-nav__mobile li a");

function toggleClass(item) {
    item.classList.toggle('active');
}

menuBtn.addEventListener('click', () => {
    toggleClass(menuBtn);
    toggleClass(menu);
});

menuItems.forEach(item => {
    item.addEventListener("click", () => {
        toggleClass(menuBtn);
        toggleClass(menu);
    })
})

const productCards = document.querySelectorAll(".product-card"),
    input = document.querySelector('[name="search-input"]'),
    filterSelect = document.querySelector(".filters-select"),
    filterButtons = document.querySelectorAll(".filter-panel__btns button");

function filteredCard(data) {
    let value = data.toLowerCase()

    productCards.forEach(card => {
        if (card.children[2].innerHTML.toLocaleLowerCase().indexOf(value) > -1) {
            card.style.display = ""
        } else {
            card.style.display = "none"
        };
    })
}

filterButtons.forEach(button => {
    button.addEventListener("click", () => {
        filteredCard(button.innerHTML)
    })
})

filterSelect.addEventListener("click", () => {
    filteredCard(filterSelect.value)
})

input.addEventListener("keyup", () => {
    let inputValue = input.value;
    filteredCard(inputValue)
})
