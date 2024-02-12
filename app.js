let timeDsiplay = document.querySelector("#time")
let clock = document.querySelector("#clock-parent")
let intervalId;

function displayTime(){
    intervalId = setInterval(()=>{
        const date = new Date();
        const time = date.toLocaleTimeString();
        timeDisplay.innerText = time;
        dateDisplay.innerText = date.toDateString();
    })
}

const button = document.querySelector("#display-btn");
let showTime = false;

button.addEventListener("click",()=>{
    showTime = !showTime
    if(showTime){
        displayTime()
        clock.style.boxShadow = "0px 50px 50px #7fdd711a";
    }else{
        clearInterval(intervalId)
        timeDisplay.innerText = ''; 
        dateDisplay.innerText = '';
        clock.style.boxShadow = "";
    }
})