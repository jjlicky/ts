var someValue = 5;
someValue = 'hello'; // any type
var price = 5;
price = 'free'; // union type
var totalCost;
var orderID;
// type aliases
var calculateTotalCost = function (price, qty) {
};
var findOrderID = function (customer, productID) {
    return orderID;
};
var itemPrice;
var setItemPrice = function (price) {
    if (typeof price === 'string') {
        itemPrice = 0;
    }
    else {
        itemPrice = price;
    }
};
setItemPrice(50);
