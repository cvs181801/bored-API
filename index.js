//grab elements from DOM

const boredDiv = document.querySelector(".activity");
const button = document.querySelector(".image__newactivitybtn");
let activity = document.createElement("p");
let type = document.createElement("p");
let costAssociated = document.createElement("p");

button.addEventListener("click", function(e) {
    fetch("http://www.boredapi.com/api/activity/")  //https://apis.scrimba.com/bored/api/activity these are added to scrimba platform FYI
    .then(res => res.json())
    .then(data => {
        activity.textContent = "";
        type.textContent = "";
        costAssociated.textContent = "";
        activity.textContent = `Activity: ${data.activity}`;
        boredDiv.append(activity);
        type.textContent = `Type: ${data.type}`;
        boredDiv.append(type);
        if (`${data.price}` == 0) {
            costAssociated.textContent = `Does it cost $$$?: No`;
        } else {
            costAssociated.textContent = `Does it cost $$$?: Yes`;
        }
        boredDiv.append(costAssociated);
    });

})

