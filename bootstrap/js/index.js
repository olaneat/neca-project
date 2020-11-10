let htmlDay = document.getElementById('day')
let htmlHour = document.getElementById('hours')
let htmlMin = document.getElementById('mins')
let htmlSec = document.getElementById('secs')
let carDeal = document.getElementById('deal')

let endDate = new Date("Nov 30, 2020 23:59:00").getTime()

function myCalender(){
  var currentDate = new Date().getTime();
  var update = endDate - currentDate;
  var day = Math.floor(update / ( 1000 * 60 * 60 * 24));
  var hours = Math.floor((update % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var mins = Math.floor((update % (1000 * 60 * 60 ) / (1000 * 60)));
  var secs = Math.floor((update % (1000 * 60)) / 1000)

  htmlDay.innerHTML = `\t Days \t\n ${updateDaate(day)}`;
  htmlHour.innerHTML =  `\t Hours \t\n ${updateDaate(hours)}`
  htmlMin.innerHTML = `\t Minutes \t\n ${updateDaate(mins)}`
  htmlSec.innerHTML = ` \t Seconds \t\n ${updateDaate(secs)}`

  function updateDaate(x){
    if (x <= 9) {
      return '0' + x
    }else{
      return x
    }
  }
  var t = setTimeout(myCalender, 1000)

}

window.addEventListener('load', myCalender)

