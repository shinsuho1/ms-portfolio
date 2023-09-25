const support_menus = document.querySelectorAll(".menu>li");
const support_articles = document.querySelectorAll(".inner>article");

support_menus.forEach((el,index)=>{
    el.addEventListener("click",()=>{
        for(let i = 0 ; i<support_articles.length ; i++){
            support_articles[i].classList.remove("on");
            support_menus[i].classList.remove("on");
        }
        support_menus[index].classList.add("on");
        support_articles[index].classList.add("on");

    });
});

let support_title = document.querySelectorAll(".title h2");
let support_text = document.querySelectorAll(".text");

support_title.forEach((el,index)=>{
    el.addEventListener("click",()=>{
        if(support_text[index].classList.contains("on")){
            support_text[index].classList.remove("on");
            support_title[index].classList.remove("on");
        }
        else{
            support_text[index].classList.add("on");
            support_title[index].classList.add("on");
        }
    });
});











