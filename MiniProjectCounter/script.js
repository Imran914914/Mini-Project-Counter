let incbtn = document.querySelector(".incbtn");
let decbtn = document.querySelector(".decbtn");
let numbers = document.querySelector(".numbers");
let num = 0;
numbers.innerText = `${num}`

let increaseVal = ()=>{
    return num = num + 1;
}
let decreaseVal = ()=>{
    return num = num - 1;
}


incbtn.addEventListener("click",()=>{
    numbers.innerText = increaseVal();

})
decbtn.addEventListener("click",()=>{
    if(num<=0){
        numbers.innerText = 0;
    }else{
        numbers.innerText = decreaseVal();
    }
})

let reset = document.querySelector(".reset");
reset.addEventListener("click", ()=>{
    num = 0;
    let resetNum = num;
    numbers.innerText = resetNum;
})