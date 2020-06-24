const selectAllElements = document.querySelectorAll("[data-select]");

selectAllElements.forEach(function (item) {
    item.addEventListener("click", function () {
        const realSelect = this.nextElementSibling;

        if (event.target.hasAttribute("data-select-item")) {

            const itemTitle = event.target.getAttribute("data-select-item");

            this.querySelector("[data-select-title]").textContent = itemTitle;
            this.querySelector(".header-select__dropdown").classList.toggle("hidden");

            if (realSelect) {

                realSelect.value = itemTitle;

            }

        } else {
            this.querySelector(".header-select__dropdown").classList.toggle("hidden")
        }
    })
})