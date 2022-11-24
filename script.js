var x = setInterval(function() {

var now = new Date().getTime();
var countDownDate = new Date("Dec 13, 2022 17:33:00").getTime();
var timeleft = countDownDate - now; 

var days = Math.floor((timeleft/1000/60/60/24));
var hours = Math.floor((timeleft/1000/60/60));
var minutes = Math.floor((timeleft/1000/60));
var seconds = Math.floor((timeleft/1000));
var miliseconds = timeleft;


document.getElementById("days").innerHTML = days;
document.getElementById("hours").innerHTML = hours;
document.getElementById("minutes").innerHTML = minutes;
document.getElementById("seconds").innerHTML = seconds;
document.getElementById("miliseconds").innerHTML = miliseconds;

}, 1000);

