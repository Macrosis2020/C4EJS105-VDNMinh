function genID() {
    const x = Math.random();
    const y = x.toString(36);
    const z = y.substr(2, 9);
    return z;
}
//GET
async function getAPI() {
    const conn = await fetch('https://sheetdb.io/api/v1/cugxsja8yqu5p')
    const data = await conn.json();
    console.log(data);
    document.getElementById("item-body").innerHTML = "";
    for (i in data) {
        document.getElementById("item-body").insertAdjacentHTML("beforeend",
            `<li id="${i}">
        <span>${data[i].name}</span>
        <button onclick="delItem(this.parentElement.id)">Remove</button>
        </li>`)
    }
}
getAPI();
//POST
function addItem(name) {
    let id = genID();
    axios.post('https://sheetdb.io/api/v1/cugxsja8yqu5p', {
        "data": { "name": name, "id": id }
    }).then(
        response => {
            console.log(response);
            document.getElementById('insert_item').value = "";
            getAPI();
        }
    )
}
//DELETE
function delItem(i) {
    console.log(document.getElementById(i).firstElementChild.textContent);
    axios.delete(`https://sheetdb.io/api/v1/cugxsja8yqu5p/name/${document.getElementById(i).firstElementChild.textContent}`)
        .then(response => {
            console.log(response.data);
            document.getElementById(i).remove();
            getAPI()
        });
}
//SEARCH
function searchItem(name) {
    axios.get(`https://sheetdb.io/api/v1/cugxsja8yqu5p/search?name=*${name}*&casesensitive=true`)
        .then(
            response => {
                console.log(response.data);
                function reloadData() {
                    document.getElementById("item-body").innerHTML = "";
                    for (i in response.data) {
                        document.getElementById("item-body").insertAdjacentHTML("beforeend",
                            `<li id="${i}">
                            <span>${data[i].name}</span>
                            <button onclick="delItem(this.parentElement.id)">Remove</button>
                            </li>`)
                    }
                }
                reloadData();
            }
        )
}
