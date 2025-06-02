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

async function loadMembers() {
    try{
        const response = await fetch('./data/members.json');
        if(!response.ok) throw new Error('Failed to fetch member data.');

        const members = await response.json();

        members.forEach(member => {
            const card = document.createElement('section');
            card.classList.add('member-card');

            card.innerHTML = `
            <img src="${member.image}" alt="${member.name}">
            <h3>${member.name}</h3>
            <p>${member.description}</p>
            <p><strong>Address:</strong> ${member.address}</p>
            <p><strong>Phone:</strong> ${member.phone}</p>
            <a href="${member.website}" target="_blank">Visit Website</a>
            <p class="level">Membership Level: ${"*".repeat(member.membershipLevel)}</p>
        `;

            display.appendChild(card);
        });
    }catch (error){
        console.error('Error loading members:',error);
    }
}

loadMembers();