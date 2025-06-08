const menuButton = document.getElementById('menu');
const nav = document.querySelector('.navigation');
const body = document.body;

menuButton.addEventListener("click", () => {
    nav.classList.toggle("open");
});



import { places } from '../data/week05.mjs';

const place = document.querySelector("#places");

function displayItems(places) {
    places.slice(0, 8).forEach((x, index) => {
        const thecard = document.createElement("div");

        // Title
        const thetitle = document.createElement('h2');
        thetitle.innerText = x.name;
        thecard.appendChild(thetitle);

        // Image inside figure
        const figure = document.createElement("figure");
        const thephoto = document.createElement("img");
        thephoto.src = x.photo_url || `https://via.placeholder.com/300x200?text=${encodeURIComponent(x.name)}`;
        thephoto.alt = x.name;
        figure.appendChild(thephoto);
        thecard.appendChild(figure);

        // Address
        const theaddress = document.createElement('address');
        theaddress.innerText = x.address || "No address available";
        thecard.appendChild(theaddress);

        // Description
        const thedesc = document.createElement('p');
        thedesc.innerText = x.description || "No description provided.";
        thecard.appendChild(thedesc);

        // Button
        const button = document.createElement("button");
        button.textContent = "Learn more";
        thecard.appendChild(button);

        // Append to main container
        place.appendChild(thecard);
    });
}

displayItems(places);


// Visit message logic
const visitMessage = document.querySelector("#visit-message");

const msToDays = 86400000;
const today = Date.now();
const lastVisit = localStorage.getItem("lastVisit");

if (!lastVisit) {
    // First-time visit
    visitMessage.textContent = "Welcome! Let us know if you have any questions.";
} else {
    const daysSinceLastVisit = Math.floor((today - Number(lastVisit)) / msToDays);

    if (daysSinceLastVisit < 1) {
        visitMessage.textContent = "Back so soon! Awesome!";
    } else if (daysSinceLastVisit === 1) {
        visitMessage.textContent = `You last visited 1 day ago.`;
    } else {
        visitMessage.textContent = `You last visited ${daysSinceLastVisit} days ago.`;
    }
}

// Update the last visit time in localStorage
localStorage.setItem("lastVisit", today);
