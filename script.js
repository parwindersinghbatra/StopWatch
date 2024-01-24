var timerInMs = 0;

var timer;
// var min = document.getElementById("min")
// var sec = document.getElementById("sec")
// var ms = document.getElementById("ms")


document.getElementById("start").addEventListener("click", startTimer)
document.getElementById("pause").addEventListener("click", pauseTimer)
document.getElementById("reset").addEventListener("click", resetTimer)


function resetTimer() {
    clearInterval(timer)
    timerInMs = 0;
    updateTimer(timerInMs)
    document.getElementById('start').disabled = false;
    document.getElementById('pause').disabled = true;
}

function pauseTimer() {
    clearInterval(timer)
    document.getElementById('pause').disabled = true;
    document.getElementById('start').disabled = false;

}


function startTimer(){
   
    timer = setInterval(() =>{
        timerInMs+=100;
        document.getElementById('start').disabled = true;
        document.getElementById('pause').disabled = false;
        updateTimer(timerInMs);
    },100)
  
}

function updateTimer(timerInMs){

    const sec = Math.floor(timerInMs / 1000)
    const min = Math.floor(timerInMs/ 60000)
    const ms = (timerInMs%1000)/10
    

    document.getElementById("min").innerHTML = min<10 ? "0" + min%60 : min%60

    document.getElementById("sec").innerHTML = sec<10 ? "0" + sec%60 : sec%60

    document.getElementById("ms").innerHTML = ms<10 ? "0" : ms

}
// setInterval()