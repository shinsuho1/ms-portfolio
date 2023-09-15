const progream = document.querySelector(".progream");
const progream_title = progream.querySelectorAll("p");
const progream_title_arr = Array.from(progream_title);

let Progrem_style = parseFloat(getComputedStyle(progream).width);

window.addEventListener("load",()=>{
    if(Progrem_style <= 600){
        progream_title_arr.map((el,index)=>{
            let Values = progream_title_arr[index].innerText;
            Values = Values.split(".")[0]
            progream_title_arr[index].innerText = Values;

        });
    }
});

