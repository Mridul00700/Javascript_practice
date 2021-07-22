// // Exporting Module
// console.log("Exporting Module");

// const shippingCost = 10;
// export const cart = [];

// // Named and default exports 
// // Named
// export const addToCart = (product, quantity) => {
//     cart.push({ product, quantity });
//     console.log(`${quantity} ${product} was added to the cart.`);
// }

// const totalPrice = 237;
// const totalQuantity = 23;

// export { totalPrice, totalQuantity as tq };

// // No name is involved in exporting default
// export default function (product, quantity) {
//     cart.push({ product, quantity });
//     console.log(`${quantity} ${product} was added to the cart.`);
// }


// CommonJS

export.addToCart = function (product, quantity) {
    cart.push({ product, quantity });
    console.log(`${quantity} ${product} was added to the cart.`);
}