const slider = document.querySelector("#slider");
const title = document.querySelector("#title");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
let enableClick = true;

const icons = document.querySelectorAll(".icons>a");
const icons_arr = Array.from(icons);
const icon_p = document.querySelectorAll(".icons>p");

init();

next.addEventListener("click", (e) => {
    e.preventDefault();

    if (enableClick) {
        nextSlide();
        nextSlide_title();
        enableClick = false;
    }
});

prev.addEventListener("click", (e) => {
    e.preventDefault();

    if (enableClick) {
        prevSlide();
        prevSlide_title();
        enableClick = false;
    }
});

icons_arr.map((el, index) => {
    icons[index].addEventListener("click", (e) => {
        e.preventDefault();
        const site = icon_p[index].innerHTML;
        if (confirm(`${site}`)) {
            const link = icons_arr[index].getAttribute("href");
            location.href = link;
        }
    });
});

function init() {
    slider.style.left = "-100%";
    slider.prepend(slider.lastElementChild);

    title.style.left = "-100%";
    title.prepend(title.lastElementChild);
}

function nextSlide() {
    slider.style.transition = "margin-left 1s";
    slider.style.marginLeft = "-100%";

    slider.addEventListener(
        "transitionend",
        () => {
            slider.append(slider.firstElementChild);
            slider.style.transition = "none";
            slider.style.marginLeft = "0%";
            enableClick = true;
        },
        { once: true }
    );
}

function nextSlide_title() {
    title.style.transition = "margin-left 1s";
    title.style.marginLeft = "-100%";

    title.addEventListener(
        "transitionend",
        () => {
            title.append(title.firstElementChild);
            title.style.transition = "none";
            title.style.marginLeft = "0%";
            enableClick = true;
        },
        { once: true }
    );
}

function prevSlide() {
    slider.style.transition = "margin-left 1s";
    slider.style.marginLeft = "100%";

    slider.addEventListener(
        "transitionend",
        () => {
            slider.prepend(slider.lastElementChild);
            slider.style.transition = "none";
            slider.style.marginLeft = "0%";
            enableClick = true;
        },
        { once: true }
    );
}

function prevSlide_title() {
    title.style.transition = "margin-left 1s";
    title.style.marginLeft = "100%";

    title.addEventListener(
        "transitionend",
        () => {
            title.prepend(title.lastElementChild);
            title.style.transition = "none";
            title.style.marginLeft = "0%";
            enableClick = true;
        },
        { once: true }
    );
}
