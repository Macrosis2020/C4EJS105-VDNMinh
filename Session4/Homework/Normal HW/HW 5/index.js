let item1 = {
    name: 'Xiaomi portable charger 20000mah',
    brand: 'Xiaomi',
    price: 428,
    color: 'White',
    category: 'Charger',
}
let item2 = {
    name: 'VSmart Active 1',
    brand: 'VSmart',
    price: 5487,
    color: 'Black',
    category: 'Phone',
}
let item3 = {
    name: 'iPhone X',
    brand: 'Apple',
    price: 21490,
    color: 'Gray',
    category: 'Phone',
}
let item4 = {
    name: 'Samsung Galaxy A9',
    brand: 'Samsung',
    price: 8490,
    color: 'Blue',
    category: 'Phone',
}
let products = [item1, item2, item3, item4];
//5.1
{
    for (i = 0; i < products.length; i++) {
        console.log('-------------------------');
        console.log(`Name: ${products[i].name}`);
        console.log(`Price: ${products[i].price}`);
    }
}
//5.2
console.log(' ');
{
    for (i = 0; i < products.length; i++) {
        console.log(`#${i + 1}. ${products[i].name}`);
        console.log(`Price: ${products[i].price}`);
    }
}
console.log(' ');
let productPos = Number(prompt('Enter product position:')) - 1;
{
    for (i in products[productPos]) {
        console.log(`${String(i).charAt(0).toUpperCase()}${String(i).slice(1)}: ${products[productPos][i]}`);
    }
}
//5.3
console.log(' ');
let usrCategory = prompt('Enter your category');
{
    for (i = 0; i < products.length; i++) {
        if (usrCategory.toLowerCase() == products[i].category.toLowerCase()) {
            console.log('-------------------------');
            console.log(`Name: ${products[i].name}`);
            console.log(`Price: ${products[i].price}`);
        }
    }
}
//5.4
console.log(' ');
item1.providers = ['Phukienzero', 'Dientuccc'];
item2.providers = ['Tgdd', 'Ddghn', 'VhStore'];
item3.providers = ['Tgdd'];
item4.providers = ['Tgdd'];
{
    for (i = 0; i < products.length; i++) {
        console.log(`#${i + 1}. ${products[i].name}`);
        console.log(`Price: ${products[i].price}`);
        console.log(`Providers: ${products[i].providers}`);
    }
}
//5.5
console.log(' ');
let usrProvider = prompt('Enter your provider:');
{
    for (i = 0; i < products.length; i++) {
        for (k = 0; k < products[i]['providers'].length; k++) {
            if (usrProvider.toLowerCase() == products[i]['providers'][k].toLowerCase()) {
                console.log('-------------------------');
                {
                    for (property in products[i]) {
                        console.log(`${String(property).charAt(0).toUpperCase()}${String(property).slice(1)}: ${products[i][property]}`);
                    }
                }
            }
        }
    }
}
