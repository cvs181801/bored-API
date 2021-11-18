//grab elements from DOM

const boredDiv = document.querySelector(".activity");
const button = document.querySelector(".image__newactivitybtn");
const buttonContainer = document.querySelector(".BtnContainer");
let activity = document.createElement("p");
let type = document.createElement("p");
let costAssociated = document.createElement("p");
const image = document.getElementsByTagName("img");

buttonContainer.style.marginTop = "15em";
activity.textContent = "I'm bored..."
boredDiv.append(activity);

button.addEventListener("click", function(e) {
    activity.textContent = "";
    type.textContent = "";
    costAssociated.textContent = "";
    activity.textContent = "One moment, let me search the web for an activity..."
    boredDiv.append(activity);
    
        fetch("http://www.boredapi.com/api/activity/")  //https://apis.scrimba.com/bored/api/activity these are added to scrimba platform FYI
        .then(res => res.json())
        .then(data => {
            buttonContainer.style.marginTop = "auto";
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
            //image.style.transition = "all 3s ease-in-out";
        });

})

