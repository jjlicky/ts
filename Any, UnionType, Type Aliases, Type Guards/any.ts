 let someValue: any = 5;
 someValue = 'hello'; // any type

 let price: number | string = 5;
 price = 'free'; // union type

 type StrOrNum = number | string;
 let totalCost: number;
 let orderID: StrOrNum;

 // type aliases
 const calculateTotalCost = (price: StrOrNum, qty: number)
 :void => {

 };

 const findOrderID = (customer: { costomerID: StrOrNum, name:
string}, productID: StrOrNum): StrOrNum => {
    return orderID;
}

// typeof operator를 사용하여 코드검증을 수행하는것 : typeguard
type StringOrNum = string | number;
let itemPrice: number;

const setItemPrice = (price: StringOrNum):void => {
    if(typeof price === 'string') {
        itemPrice = 0;
    }else {
    itemPrice = price;
    }
};

setItemPrice(50);
