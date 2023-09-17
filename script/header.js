const btnCall = document.querySelector(".btnCall");
const menuMo = document.querySelector(".menuMo");
const menuMo_close = menuMo.querySelector(".btnClose")
const header = document.querySelector("header");

setTimeout(()=>{
    header.classList.add("on");
},200);

btnCall.addEventListener("click",(e)=>{
    e.preventDefault();
    menuMo.classList.add("on");
});

menuMo_close.addEventListener("click",()=>{
    menuMo.classList.remove("on");
});

window.addEventListener("load",()=>{
    if(window.innerWidth <= 539){
        window.addEventListener("touchstart",(e)=>{
            startX = e.touches[0].clientX;
            console.log(startX);
        });
        window.addEventListener("touchmove",(e)=>{
            const touchX = e.touches[0].clientX;
            if(startX <= 30){
                if(touchX < 200){
                    menuMo.classList.add("on");
                }
            }
        });
    }
});