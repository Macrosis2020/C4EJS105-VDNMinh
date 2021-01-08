let items = ['Backpack', 'MiBand Watch', 'Ring'];
let list = document.getElementsByTagName('li');
{
    for (i = 0; i < items.length; i++) {
    document.getElementById('itemList').insertAdjacentHTML("beforeend", `
    <li id=\`${i}\`>${items[i]}
    <button onClick="delItem(this.parentElement.id)">
    Remove
    </button>
    </li>`);
    }
}
let newItem;
let deleteBtn = document.getElementsByClassName('removeBtn');
function addItem(newItem) {
    console.log('Add button clicked');
    newItem = document.getElementById('itemInput').value;
    document.getElementById('itemList').insertAdjacentHTML("beforeend", `<li id=\`${list.length}\`>${String(newItem)}
    <button onClick="delItem(this.parentElement.id)">
    Remove
    </button>
    </li>`);
    items.push(String(newItem));
    for (k = 0; k < list.length; k++) {
        list[k].id = k;
    }
    console.log(newItem);
    console.log(items);
    document.getElementById('itemInput').value = '';
    console.log(document.getElementById('itemList'));
}
function delItem(i) {
    console.log('Remove button clicked');
    console.log(`Index: ${i}`);
    document.getElementById(i).remove();
    for (k = 0; k < list.length; k++) {
        list[k].id = k;
    }
    console.log(document.getElementById('itemList'));
}
