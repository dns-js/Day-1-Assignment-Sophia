// STEP 1
function rectangleArea(width,height){
  return width * height;
}

let labelWidth = 10;
let labelHeight = 4;

labelArea = rectangleArea(labelWidth, labelHeight);
console.log(">>> STEP 1 =", labelArea);

// STEP 2 - Convert to arrow function
const rectangleAreaArrow = (width, height) => width * height;
labelAreaArrow = rectangleAreaArrow(labelWidth, labelHeight);
console.log("\n>>> STEP 2 =", labelAreaArrow);
// opsi: rectangleAreaArrow(10,4);


// STEP 3 - Menggunakan Map dan Object Destructuring

const cart = [
  { product: { name: "Notebook", price: 25000 }, qty: 2 },
  { product: { name: "Pen", price: 5000 }, qty: 6 },
  { product: { name: "Bag", price: 150000 }, qty: 1 },
];

function calcSubtotals(cart) {
  return cart.map(({ product: { name, price }, qty}) => ({
    name,
    subtotal: qty * price
  }));
}

console.log("\n>>> STEP 3 =", calcSubtotals(cart));

// STEP 4 - Menggunakan Spread Operator
function addItem(cart, newItem) {
  return [...cart, newItem];
}

const newItem = {
  product: { name: "Sticker", price: 2000 },
  qty: 10
};

const updatedCart = addItem(cart, newItem);

console.log("\n>>> STEP 4 =", updatedCart);
console.log("Original cart =", cart);

// STEP 5 - Menggabungkan semuanya (Total + Validasi)
function cartCalculator(cart) {
  // 1. Validation
  cart.forEach(({ qty, product }) => {
    if (typeof qty !== "number" || qty <= 0) {
      throw new Error(
        `Qty tidak valid = ${qty}. Quantity harus lebih dari 0.`
      );
    }

    if (typeof product.price !== "number" || product.price < 0) {
      throw new Error(
        `Harga tidak valid "${product.name}"= ${product.price}. Harga harus lebih >= 0.`
      );
    }
  });

  // 2. Subtotal calculation
  const items = calcSubtotals(cart);

  // 3. Aggregation
  const totalQty = cart.reduce((sum, { qty }) => sum + qty, 0);
  const totalPrice = items.reduce((sum, { subtotal }) => sum + subtotal, 0);

  // 4. Final return value
  return {
    labelArea: labelArea,
    items: items,
    totalQty: totalQty,
    totalPrice: totalPrice
  };
}
console.log("\n>>> STEP 5 =", cartCalculator(cart));

