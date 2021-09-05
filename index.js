//grab elements from DOM

const boredDiv = document.querySelector(".activity");

fetch("https://apis.scrimba.com/bored/api/activity")
    .then(res => res.json())
    .then(data => console.log(data));