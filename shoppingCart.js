// Exporting Module
console.log("Exporting Module");

const shippingCost = 10;
const cart = [];

// Named and default exports 
// Named
export const addToCart = (product, quantity) => {
    cart.push({ product, quantity });
    console.log(`${quantity} ${product} was added to the cart.`);
}
