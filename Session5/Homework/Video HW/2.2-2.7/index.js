//2.2 & 2.3
const inventory = [
    {
        name: 'HP Envy 13aq',
        price: 21000,
        brand: 'HP',
        quantity: 5,
    },
    {
        name: 'Dell XPS 9370',
        price: 30000,
        brand: 'Dell',
        quantity: 1,
    },
    {
        name: 'Dell Inspiron 3567',
        price: 9300,
        brand: 'Dell',
        quantity: 12,
    },
    {
        name: 'Dell Latitude E5450',
        price: 8600,
        brand: 'Dell',
        quantity: 2,
    },
    {
        name: 'Asus Zenbook',
        brand: 'Asus',
        price: 20000,
        quantity: 4,
    },
    {
        name: 'HP Pavilion',
        brand: 'HP',
        price: 14000,
        quantity: 7,
    },]

let inventoryByBrand = {};
for (i = 0; i < inventory.length; i++) {
    brandName = inventory[i].brand.toLowerCase();
    if (inventoryByBrand[brandName] == null) {
        inventoryByBrand[brandName] = [];
        inventoryByBrand[brandName].push(inventory[i]);
    } else {
        inventoryByBrand[brandName].push(inventory[i]);
    }
}
console.log(inventoryByBrand);
//2.4
// let usrBrand = prompt('Which brand do you want to check?');
// if (inventoryByBrand[usrBrand.toLowerCase()] == null) {
//     alert('This brand is unavailable in your inventory');
// } else {
//     let brandCount = 0;
//     for (i in inventoryByBrand) {
//         if (String(i).toLowerCase() == usrBrand.toLowerCase()) {
//             brandCount = brandCount + inventoryByBrand[i].length;
//         }
//     }
//     alert(`There are ${brandCount} generations of '${usrBrand}' in your inventory`);
// }
//2.5
// let usrBrand = prompt('Which brand do you want to check?').toLowerCase();
// let brandItemDisplay = '';
// if (inventoryByBrand[usrBrand] == null) {
//     alert('This brand is unavailable in your inventory');
// } else {
//     let brandCount = 0;
//     for (i in inventoryByBrand) {
//         if (String(i).toLowerCase() == usrBrand) {
//             brandCount = brandCount + inventoryByBrand[i].length;
//             for (i2=0; i2<inventoryByBrand[i].length; i2++) {
//                 brandItemDisplay = brandItemDisplay + `${inventoryByBrand[i][i2].name}\n`
//             }
//         }
//     }
//     alert(`There are ${brandCount} generations of '${usrBrand}' in your inventory

// ${brandItemDisplay}`);
// }
//2.6 & 2.7
let usrBrand = prompt('Which brand do you want to check?').toLowerCase();
let brandItemDisplay = '';
let productsPrice = 0;
if (inventoryByBrand[usrBrand] == null) {
    alert('This brand is unavailable in your inventory');
} else {
    let brandCount = 0;
    for (i in inventoryByBrand) {
        if (String(i).toLowerCase() == usrBrand) {
            brandCount = brandCount + inventoryByBrand[i].length;
            for (i2 = 0; i2 < inventoryByBrand[i].length; i2++) {
                brandItemDisplay = brandItemDisplay + `${inventoryByBrand[i][i2].name}\n`;
                productsPrice = productsPrice + inventoryByBrand[i][i2].price * inventoryByBrand[i][i2].quantity;
            }
        }
    }
    alert(`There are ${brandCount} generations of '${usrBrand}' in your inventory

${brandItemDisplay}
Total price of all '${usrBrand}' products in your inventory: ${(productsPrice*1000).toLocaleString('it-IT', {style: 'currency', currency: 'VND'})}`);
}