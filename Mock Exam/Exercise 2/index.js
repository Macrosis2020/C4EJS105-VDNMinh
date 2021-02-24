function add(x,y) {
    if (typeof(x)=='number' && y == undefined) {
        return function(y) {
            return x+y;
        };
    } else if (typeof(x)=='number' && typeof(y)=='number') {
        return x+y;
    } else {
        return undefined;
    }
}
console.log(add(2,3));
console.log(add(2)(3));
console.log(add("2","3"));
