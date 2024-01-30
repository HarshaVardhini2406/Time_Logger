const btn= document.getElementById("select")
let task= document.getElementById("task")
let desc = document.getElementById("desc")
let duration = document.getElementById("duration")
const row=document.getElementById("row");

//Timer
const start=document.getElementById("start")
const time=document.getElementById("time");

let intervalId;
let sec=0,min=0,hr=0;

function addLog(){
       if(task.value&&desc.value)
       {
        row.innerHTML+="<tr><td>"+`${task.value}`+"</td>    <td>"+`${desc.value}`+"</td>    <td>"+`${hr.toString().padStart(2, '0')} : ${min.toString().padStart(2, '0')} : ${sec.toString().padStart(2, '0')}`+"</td></tr>"
        task.value=""
        desc.value=""
        min=0,sec=0,hr=0
       }
       else{
         alert("Enter All Details");
         min=0,sec=0,hr=0
       }
}

function startTimer(){
     intervalId = setInterval(function(){
        sec+=1;
        if(sec >= 60) 
        {
            min+= 1;
            sec=sec%60;
        } 
        if(min >= 60) 
        {
            hr+= 1;
            min=min%60;
        }   
        time.innerHTML=`${hr.toString().padStart(2, '0')} : ${min.toString().padStart(2, '0')} : ${sec.toString().padStart(2, '0')}`
        },1000)
        start.removeEventListener('click',startTimer)
        start.textContent="Stop"
        start.style.setProperty("background","red")

        start.addEventListener('click',stopTimer)
}
function stopTimer()
{
        clearInterval(intervalId)
        addLog()
        time.innerHTML=`${hr.toString().padStart(2, '0')} : ${min.toString().padStart(2, '0')} : ${sec.toString().padStart(2, '0')}`
        start.removeEventListener('click',stopTimer)
        start.textContent="Start"
        start.style.setProperty("background","green")
        start.addEventListener('click', startTimer)
}
start.addEventListener('click', startTimer)



