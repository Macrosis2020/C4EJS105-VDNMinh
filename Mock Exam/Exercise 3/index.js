let abnoPages = [
    {
        name: 'Blood',
        abno: 'Bloodbath',
        tier: 2,
        image: 'Images/blood.png',
        type: 'Breakdown',
        effects: `[Single Ally] \nDefensive dice gain 1-2 Power.\nReceive 3-5 additional Stagger damage upon taking a hit.`,
        flavor: 'Unbearable depression overwhelms all who look into the bath.'
    },
    {
        name: 'Scars',
        abno: 'Bloodbath',
        tier: 1,
        image: 'Images/scars.png',
        type: 'Awakening',
        effects: `[Single Ally]\nTake 2-5 less damage from Slash attacks.\nUpon taking a hit, reduce the damage of the attack to 0 at a 20% chance.`,
        flavor: 'When I saw the latticework of scars on her severed wrist, I was reminded of our wine cabinet. That day, I popped the cork off the last one.'
    },
    {
        name: 'Pale Hands',
        abno: 'Bloodbath',
        tier: 1,
        image: 'Images/pale-hands.png',
        type: 'Awakening',
        effects: `[Single Ally]\nAfter three successful attacks on the same target, deal 3-10 additional Stagger damage. (Resets upon attacking a different target)`,
        flavor: 'Many hands float in the bath. They are the hands of the people I once loved.'
    },
    {
        name: 'Pulsation',
        abno: 'Heart of Aspiration',
        tier: 1,
        image: 'Images/pulsation.png',
        type: 'Breakdown',
        effects: `[All Allies]\n
        Gain 1-2 Strength at the end of each Scene.\n
        At the end of each Scene, if the librarian did not deal any damage with Offensive dice, lose 25% of the Max HP. (Max 30)`,
        flavor: 'Excessive Aspiration would bring about unwarranted frenzy.'
    },
    {
        name: 'Aspiration',
        abno: 'Heart of Aspiration',
        tier: 2,
        image: 'Images/aspiration.png',
        type: 'Awakening',
        effects: `[Single Ally]\n
        Increase Max HP by 15%. (Current HP increases accordingly)\n
        Gain 1-2 Speed.`,
        flavor: 'When borrowed, its rate of contraction will double, enhancing the borrower\'s vigor and strength.'
    },
    {
        name: 'Fervent Beats',
        abno: 'Heart of Aspiration',
        tier: 2,
        image: 'Images/fervent-beats.png',
        type: 'Breakdown',
        effects: `[Single Ally]\n
        The selected librarian dies at the end of the third Scene after this page was chosen.\n
        Gain 4 Strength, Endurance, Haste, and Protection each Scene until death. All Stagger Damage resistances change to "Ineffective".`,
        flavor: 'A heart without an owner; it still beats even after being removed from its body.',
    },
    {
        name: 'Sword of Frost',
        abno: 'The Snow Queen',
        tier: 2,
        image: 'Images/sword-of-frost.png',
        type: 'Awakening',
        effects: `[Single Ally]\n
        Upon winning a clash, inflict 1-3 Bind to the opponent at a 50% chance.\n
        Deal 2-5 additional Stagger damage against targets with Bind.`,
        flavor: 'A queen lives alone in the frosty winter forest.',
    },
    {
        name: 'A Kiss',
        abno: 'The Snow Queen',
        tier: 2,
        image: 'Images/a-kiss.png',
        type: 'Awakening',
        effects: `[Single Ally]\n
        After winning 2 or more clashes with a single Combat page, inflict Ice Splinter to the opponent.\n
        At the end of each Scene, characters with 3 or more Ice Splinters become Immobilized for the next Scene.`,
        flavor: 'The Snow Queen’s kiss froze his heart, and he couldn’t feel the cold anymore.',
    },
    {
        name: 'Blizzard',
        abno: 'The Snow Queen',
        tier: 3,
        image: 'Images/blizzard.png',
        type: 'Breakdown',
        effects: `[All Characters]\n
        All characters except the selected librarian become Immobilized for this Scene.\n
        Next Scene, all enemies are inflicted with 6 Bind.`,
        flavor: 'Spring arrived with blossoming roses. Its warmth melted the Snow Queen’s palace. No one remembered her, sleeping underneath.',
    },
];
function loadImages() {
    for (i=0;i<abnoPages.length;i++) {
        document.getElementById(`tier-${abnoPages[i].tier}`).insertAdjacentHTML('beforeend',
        `
        <img src="${abnoPages[i].image}" alt="img not found" id="abno-page-${i}" onclick="openDetailModal(${i})">
        `)
    }
}
function openDetailModal(i) {
    document.getElementById("page-details").innerHTML = `
    <div id='page-image'></div>
    <div id='page-name'></div>
    <div id='page-tier'></div>
    <div id='page-abno'></div>
    <div id='page-type'></div>
    <div id='page-effect'></div>
    <div id='page-flavor' style="font-style: italic"></div>`;
    document.getElementById('page-image').innerHTML = `
    <img src="${abnoPages[i].image}" alt="img not found">
    `;
    document.getElementById('page-name').textContent = abnoPages[i].name;
    document.getElementById('page-tier').textContent = `Tier: ${abnoPages[i].tier}`;
    document.getElementById('page-abno').textContent = `Abnormality: ${abnoPages[i].abno}`;
    document.getElementById('page-type').textContent = `Type: ${abnoPages[i].type}`;
    document.getElementById('page-effect').textContent = abnoPages[i].effects;
    document.getElementById('page-flavor').textContent = abnoPages[i].flavor;
    document.getElementById("detailsModal").style.display = 'block';
}
function closeModal() {
    document.getElementById("detailsModal").style.display = 'none';
}
loadImages();