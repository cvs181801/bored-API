//grab elements from DOM

const boredDiv = document.querySelector(".activity");

fetch("https://apis.scrimba.com/bored/api/activity")
    .then(res => res.json())
    .then(data => {
        let activity = document.createElement("p");
        activity.textContent = `Activity: ${data.activity}`;
        boredDiv.append(activity);
        let type = document.createElement("p");
        type.textContent = `Type: ${data.type}`;
        boredDiv.append(type);
        let costAssociated = document.createElement("p");
        if (`${data.price}` == 0) {
            costAssociated.textContent = `Does it cost $$$?: No`;
        } else {
            costAssociated.textContent = `Does it cost $$$?: Yes`;
        }
        boredDiv.append(costAssociated);
    });

