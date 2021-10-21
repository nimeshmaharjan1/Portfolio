const scrollUp = document.querySelector("#scroll-up");

scrollUp.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});


const burger = document.querySelector("#burger-menu");
const ul = document.querySelector("nav ul");
const nav = document.querySelector("nav");

burger.addEventListener("click", () => {
    ul.classList.toggle("show");
  });

  const navLink = document.querySelectorAll(".nav-link");

navLink.forEach((link) =>
  link.addEventListener("click", () => {
    ul.classList.remove("show");
  })
);

setInterval(displayclock, 500);
function displayclock(){
    var time = new Date();
    var hrs = time.getHours();
    var min = time.getMinutes();
    var sec = time.getSeconds();
    var en = 'AM';

    if (hrs >= 12) {
        en = 'PM'
    }

    if(hrs > 12){
        hrs = hrs - 12;
    }

    if(hrs == 0 ){
        hrs = 12;
    }
    if (hrs < 10){
        hrs = '0' + hrs;
    }
    if (min < 10){
        min = '0' + min;
    }
    if (sec < 10){
        sec = '0' + sec;
    }
    document.getElementById('clock').innerHTML = hrs + ':' + min + ':' + sec +' ' +en;
    
}