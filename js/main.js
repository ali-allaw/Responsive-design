let lis = document.querySelectorAll(".info-list li");
let content = document.querySelectorAll(".info-content div");

lis.forEach((li) => {
    li.addEventListener("click", (e) => {
        lis.forEach((li) => {
            li.classList.remove("selected")
        })
        e.currentTarget.classList.add("selected")
        content.forEach((div) => {
            div.style.display = 'none'
            if (div.classList.value === e.currentTarget.dataset.class) {
                div.style.display = 'block'
            }
        })
    })
})