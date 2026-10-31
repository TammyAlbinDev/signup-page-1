let nextButton = document.querySelector("#next-btn");
let nextMeeting = document.querySelector("#next-meeting");

function showNextMeeting() {
    nextMeeting.textContent = "Join us Saturday at 2 PM for some delicious Cajun cooking!";
}

nextButton.addEventListener("click", showNextMeeting);


let themeButton = document.querySelector("#theme-btn");

function toggleTheme() {
    document.body.classList.toggle("dark");
}

themeButton.addEventListener("click", toggleTheme);