const First = document.querySelector(".first");
const clockMin = document.querySelector(".clockMin");
const clockSec = document.querySelector(".clockSec");
const button1 = document.querySelector(".Button1");
const button2 = document.querySelector(".Button2");
const header = document.querySelector(".header");
const UPL = document.querySelector(".up_min");
const DOWNL = document.querySelector(".down_min");
const UPB = document.querySelector(".up_sec");
const DOWNB = document.querySelector(".down_sec");
const MINL = document.querySelector(".Minute");
const MINB = document.querySelector(".Second");
const IPlay = button1.querySelector("i");
const Span = button1.querySelector("span");
var forMin = null;
var forSec = null;
var functionStarted = false;
var minb = 0;
var minl = 0;
var Period = "Reset";
var timer = null

UPL.addEventListener("click", () =>{
    if(functionStarted == false) {
        minl++;
        if(minl == 1) {
            MINL.innerHTML = minl + " minute";
        }
    
        else{
            MINL.innerHTML = minl + " minutes";
        }
    
        if(functionStarted == false) {
            if(minl < 10){
                clockMin.innerHTML = "0" + minl;
            }
    
            else{
                clockMin.innerHTML = minl;
            }
        }
    }
})

DOWNL.addEventListener("click", () =>{
    if(functionStarted == false) {
        if(minl > 0) {
            minl--;
            if(minl == 1) {
                MINL.innerHTML = minl + " minute";
            }
        
            else{
                MINL.innerHTML = minl + " minutes";
            }
    
            if(functionStarted == false) {
                if(minl < 10){
                    clockMin.innerHTML = "0" + minl;
                }
        
                else{
                    clockMin.innerHTML = minl;
                }
            }
        }
    }
})

UPB.addEventListener("click", () =>{
    if(functionStarted == false) {
        minb++;
        if(minb == 1) {
            MINB.innerHTML = minb + " minute";
        }
    
        else{
            MINB.innerHTML = minb + " minutes";
        }
    }
})

DOWNB.addEventListener("click", () =>{
    if(functionStarted == false) {
        if(minb > 0) {
            minb--;
            if(minl == 1) {
                MINB.innerHTML = minb + " minute";
            }
        
            else{
                MINB.innerHTML = minb + " minutes";
            }
        }
    }
})

button1.addEventListener("click", () =>{
    if(forSec == null && forMin == null) {
        forMin = clockMin.innerHTML;    
        forSec = clockMin.innerHTML; 
    }

    else{
        forMin = forMin;    
        forSec = forSec;
    }

    if(functionStarted == "Stopped") {
        clearInterval(timer);
        IPlay.className = "fa-solid fa-play";
        Span.innerHTML = "Start";
        functionStarted = true;
    }

    else {
        if(MINL.innerHTML != "0 minutes" && MINB.innerHTML != "0 minutes") {
            if(Period == "Reset") {
                Period = "Session";
                First.style.backgroundColor = "#ff3333";
                UPL.style.backgroundColor = "#ff3333";
                DOWNL.style.backgroundColor = "#ff3333";
                UPB.style.backgroundColor = "#ff3333";
                DOWNB.style.backgroundColor = "#ff3333";
                header.innerHTML = "Session";   
            }

            IPlay.className = "fa-solid fa-pause";
            Span.innerHTML = "Pause";
            
            functionStarted = "Stopped";
            timer = setInterval(Timer, 1000);
        }

        else if(MINL.innerHTML == "0 minutes" && MINB.innerHTML == "0 minutes") {
            alert("Вы забыли ввести данные");
        }

        else if(MINB.innerHTML == "0 minutes") {
            alert("Вы забыли ввести время отдыха");
        }

        else if(MINL.innerHTML == "0 minutes") {
            alert("Вы забыли ввести время сессии");
        }
    }
})

button2.addEventListener("click", () =>{
    clearInterval(timer);
    clockSec.innerHTML = "00";
    functionStarted = false;
    forMin = null;
    forSec = null;
    if(minl < 10) {
        clockMin.innerHTML = "0" + minl;
    }

    else {
        clockMin.innerHTML = minl;
    }

    Period = "Reset";
    First.style.backgroundColor = "#5d76cb";
    UPL.style.backgroundColor = "#5d76cb";
    DOWNL.style.backgroundColor = "#5d76cb";
    UPB.style.backgroundColor = "#5d76cb";
    DOWNB.style.backgroundColor = "#5d76cb";
    header.innerHTML = "Reset";

    IPlay.className = "fa-solid fa-play ";
    Span.innerHTML = "Start";
})

function Timer() {
    if(clockMin.innerHTML == "00" && clockSec.innerHTML == "00") {
        if(Period == "Session") {
            Period = "Break";
            if(minb < 10){
                clockMin.innerHTML = "0" + minb;
            }
    
            else{
                clockMin.innerHTML = minb;
            }
            header.innerHTML = "Break";
            First.style.backgroundColor = "#0ddec9";
            UPB.style.backgroundColor = "#0ddec9";
            DOWNB.style.backgroundColor = "#0ddec9";
            UPL.style.backgroundColor = "#0ddec9";
            DOWNL.style.backgroundColor = "#0ddec9";

            forMin = minb - 1;
            forSec = 59;
        }
        
        else if(Period == "Break"){
            Period = "Session";
            if(minl < 10){
                clockMin.innerHTML = "0" + minl;
            }
    
            else{
                clockMin.innerHTML = minl;
            }
            header.innerHTML = "Session";
            First.style.backgroundColor = "#ff3333";
            UPB.style.backgroundColor = "#ff3333";
            DOWNB.style.backgroundColor = "#ff3333";
            UPL.style.backgroundColor = "#ff3333";
            DOWNL.style.backgroundColor = "#ff3333";

            forMin = minl - 1;
            forSec = 59;
        }
    }
    
    else if(clockSec.innerHTML == "00") {
        forSec = 59;
        forMin--;
    }

    if(forSec <= 9) {
        clockSec.innerHTML = "0" + forSec;
    }

    else if(forSec >= 9) {
        clockSec.innerHTML = forSec;
    }

    if(forMin <= 9) {
        clockMin.innerHTML = "0" + forMin;
    }

    else if(forMin >= 9) {
        clockMin.innerHTML = forMin;
    }

    forSec--;
}