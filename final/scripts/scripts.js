const menuButton = document.getElementById('menu');
const nav = document.querySelector('.navigation');
const body = document.body;

menuButton.addEventListener("click", () => {
    nav.classList.toggle("open");
});


const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector("article");


gridbutton.addEventListener("click", () => {
	display.classList.add("grid");
	display.classList.remove("list");
});

listbutton.addEventListener("click", showList);

function showList() {
	display.classList.add("list");
	display.classList.remove("grid");
}

async function loadCafe() {
    try{
        const response = await fetch('data/cafes.json');
        if(!response.ok) throw new Error('Failed to fetch member data.');

        const cafes = await response.json();
        const display = document.querySelector('#cafeDisplay');

        cafes.forEach(cafe => {
            const card = document.createElement('section');
            card.classList.add('member-card');
            card.innerHTML = `
            <img src="${cafe.image}" alt="${cafe.name}">
            <h3>${cafe.name}</h3>
            <p>${cafe.description}</p>
            <p><strong>Address:</strong> ${cafe.address}</p>
            <a href="${cafe.website}" target="_blank">Visit Website</a>
            <p class="level">Membership Level: ${"*".repeat(cafe.membershipLevel)}</p>
        `;

            display.appendChild(card);
        });
    }catch (error){
        console.error('Error loading members:',error);
    }
}

loadCafe();


