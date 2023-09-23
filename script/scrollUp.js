let scrollUpBtn = document.createElement("div");

scrollUpBtn.classList.add("scrollUpBtn");
scrollUpBtn.innerHTML = `<i class="fa-solid fa-chevron-up"></i>`

console.log(scrollUpBtn);

document.body.append(scrollUpBtn);

scrollUpBtn.addEventListener("click",()=>{
    window.scrollTo({ left: 0, top: 0, behavior:"smooth"});
})

window.addEventListener("scroll",()=>{
    let scroll = window.scrollY;
    if(scroll >= 100){
        scrollUpBtn.classList.add("on");
    }
    else if(scroll < 100){
        scrollUpBtn.classList.remove("on");
    }
});