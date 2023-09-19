// Get references to DOM elements
const body = document.querySelector("body"),
hourhand = document.querySelector(".hour"),
minutehand = document.querySelector(".minute"),
secondhand = document.querySelector(".second"),
modeswitch = document.querySelector(".mode-switch");

// check if the mode is already set to "Dark Mode" in localStorage
if (localStorage.getItem("mode") === "Dark Mode"){
 // add "dark" class to body and set modeSwitch text to "Light Mode"
    body.classList.add("dark");
    modeswitch.textContent = "Light Mode"
}
// add a click event listener to modeSwitch

modeswitch.addEventListener("click", ()=>{
    // toggle the "dark" class on the body element
    body.classList.toggle("dark");
    // check if the "dark" class is currently present on the body element
    const isDarkMode = body.classList.contains("dark");
    // set modeSwitch text based on "dark" class presence
    modeswitch.textContent= isDarkMode ?"Light Mode" : "Dark Mode";
    // set localStorage "mode" item based on "dark" class presence
    localStorage.setItem("mode", isDarkMode ? "Dark Mode" : "Loght Mode");
});

const updateTime = () =>{
    // Get current time and calculate degrees for clock hands
    let date = new Date(),
        secTodeg = (date.getSeconds()/60) *360,
        minTodeg = (date.getMinutes()/60) *360,
        hrTOdeg = (date.getHours()/12) *360;
     // Rotate the clock hands to the appropriate degree based on the current time
     secondhand.style.transform = `rotate(${secTodeg}deg)`;
     minutehand.style.transform = `rotate(${minTodeg}deg)`;
     hourhand.style.transform = `rotate(${hrTOdeg}deg)`;
}

// call updateTime to set clock hands every second

setInterval(updateTime, 1000);

//call updateTime function on page load

updateTime()