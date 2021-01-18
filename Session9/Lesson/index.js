async function load() {
    conn = await fetch('https://pokeapi.co/api/v2/pokemon/pikachu');
    data = await conn.json();
    console.log(data.moves[0].move.name);
    return data;
}
console.log(load());
//
function genID() {
    const x = Math.random();
    const y = x.toString(36);
    const z = y.substr(2, 9);
    return z;
}
const myID = genID();
console.log(myID);
