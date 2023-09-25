const progream = document.querySelector(".progream");
const progream_title = progream.querySelectorAll("p");
const progream_title_arr = Array.from(progream_title);

let Progrem_width = parseFloat(getComputedStyle(progream).width);



window.addEventListener("load",()=>{
    if(Progrem_width <= 600){
        progream_title_arr.map((el,index)=>{
            let Values = progream_title_arr[index].innerText;
            Values = Values.split(".")[0]
            progream_title_arr[index].innerText = Values;

        });
    }
});
// let progream_title_Value = document.querySelectorAll("#title>li>h1");
// let english_title_values = []
// let korean_title_values = ["원드라이브","엑셀","파워포인트","워드","엑세스","팀즈"];
// for(let el of progream_title_Value){
//     english_title_values.push(el.innerText);
// }
// console.log(english_title_values);
// console.log(korean_title_values);

// progream_title_Value.forEach((el,index)=>{
//     const value_english = /[a-zA-Z]/g;
//     const value_korean = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/;

//     let helpme = el.textContent;
//     if(value_english.test(helpme)) {
//         console.log("나 영어");
//     }
//     else if(value_korean.test(helpme)){
//         console.log("나 한글");
//     }
    
// });