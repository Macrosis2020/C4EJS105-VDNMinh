//using fetch()
async function getData() {
    const fetchPromise = await fetch('https://pokeapi.co/api/v2/pokemon/stakataka');
    return await fetchPromise.json();
}
getData();
//using .then()
getData().then(
    result => {
        console.log(result);
        let firstAbility = result.abilities[0].ability.name;
        console.log(firstAbility);
        document.getElementById("pkm-abilities").insertAdjacentHTML("beforeend", firstAbility)
    },
)