let inStock = ['Jeans', 'Shirts', 'Shoes'];
let stockDisplay = 'The current items are:\n'
while (true) {
    let comm = prompt('You have accessed the store\'s admin panel, please input your desired command (C, R, U, D, Esc):');
    if (comm == 'r') {
        for (i = 0; i < inStock.length; i++) {
            stockDisplay = stockDisplay + `${i + 1}. ${inStock[i]}\n`;
        }
        alert(stockDisplay);
        stockDisplay = 'The current items are:\n'
    } else if (comm == 'c') {
        let newItem = prompt('Enter the new item:');
        inStock.push(newItem);
        alert('Item added successfully!');
    } else if (comm == 'u') {
        let updatePos = Number(prompt('Enter the position of the item you want to update'));
        let newName = prompt('Enter the new name');
        inStock[updatePos-1] = newName;
        alert('Item updated successfully!');
    } else if (comm == 'd') {
        let deletePos = Number(prompt('Enter the position of the item you want to delete'));
        inStock.splice(deletePos-1, 1);
        alert('Item deleted successfully!');
    } else if (comm == 'esc') {
        break;
    } else {
        alert('Invalid command');
    }
}