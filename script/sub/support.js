const support_menus = document.querySelectorAll(".menu>li");
const support_articles = document.querySelectorAll("article");
const numberClick = document.querySelectorAll(".numberClick>li");


support_menus.forEach((el,index)=>{
    el.addEventListener("click",()=>{
        for(let i = 0 ; i<support_articles.length ; i++){
            support_articles[i].classList.remove("on");
            support_menus[i].classList.remove("on");
        }
        support_menus[index].classList.add("on");
        support_articles[index].classList.add("on");
        support_articles[index].querySelector(".start").classList.add("on");
    });
});

const support = document.querySelector(".support");

setTimeout(() => {
    support.classList.add("on");
}, 700);

numberClick.forEach((el,index)=>{
    el.addEventListener("click",()=>{
        for(let i = 0 ; i<numberClick.length ; i++){
            numberClick[i].classList.remove("on");
        }
        numberClick[index].classList.add("on");
    });
});




window.addEventListener("load",()=>{
    let support_style = parseFloat(getComputedStyle(support).width);
    let support_date = document.querySelectorAll(".date");
    let support_title = document.querySelectorAll("td.title");
    if(support_style <= 600){
        support_date.forEach((el,index)=>{
            let Values = support_date[index].innerText;
            Values_month = Values.split("-")[1]
            Values_day = Values.split("-")[2]
            support_date[index].innerText = `${Values_month}-${Values_day}`;
        });
        support_title .forEach((el,index)=>{
            let titles = support_title[index].innerText;
            let cut_titles = titles.substr(0,45);
            support_title[index].innerText = cut_titles;
        });
    }
});
