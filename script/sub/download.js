const download = document.querySelector(".download");
const section = document.querySelectorAll("section");

const section_arr = Array.from(section);
let posArr = [];

setTimeout(() => {
    download.classList.add("active");
}, 300);

setPos();
function setPos() {
    for (let el of section_arr) {
        posArr.push(el.offsetTop);
    }
}

window.addEventListener("scroll", () => {
    let scroll = window.scrollY;
    section_arr.map((el, index) => {
        if (scroll >= posArr[index] - 700) {
            section_arr[index].classList.add("active");
        }
        if (scroll >= 1270) {
            section_arr[2].classList.add("active");
        }
    });
});
