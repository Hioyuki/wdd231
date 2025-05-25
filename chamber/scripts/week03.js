async function loadSpotlights() {
    try {
        const response = await fetch('./data/members.json');
        if (!response.ok) throw new Error('Failed to fetch spotlight data.');

        const members = await response.json();

        const eligibleMembers = members.filter(m => m.membershipLevel === 3 || m.membershipLevel === 2);

        const numberToShow = Math.floor(Math.random() * 2) + 2; // 2 または 3
        const shuffled = eligibleMembers.sort(() => 0.5 - Math.random());
        const selectedMembers = shuffled.slice(0, numberToShow);

        const spotlightContainer = document.getElementById('spotlight-container');

        selectedMembers.forEach(member => {
            const card = document.createElement('div');
            card.classList.add('spotlight-card');

            card.innerHTML = `
                <img src="${member.image}" alt="${member.name} logo">
                <h4>${member.name}</h4>
                <p><strong>Phone:</strong> ${member.phone}</p>
                <p><strong>Address:</strong> ${member.address}</p>
                <a href="${member.website}" target="_blank">Visit Website</a>
                <p class="level">Membership Level: ${member.membershipLevel === 3 ? "Gold" : "Silver"}</p>
            `;

            spotlightContainer.appendChild(card);
        });

    } catch (error) {
        console.error('Error loading spotlight members:', error);
    }
}

loadSpotlights();
