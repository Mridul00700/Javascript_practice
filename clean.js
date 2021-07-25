const sc = [
  { product: 'bread', quantity: 6 },
  { product: 'pizza', quantity: 2 },
  { product: 'milk', quantity: 4 },
  { product: 'water', quantity: 10 },
];

const allow = {
  lisbon: 5,
  others: 7,
};

let description = '';

const check = function (city) {
  if (sc.length > 0) {
    let allowed;
    city === 'lisbon' ? allowed = allow.lisbon : allowed = allow.others;
    // if (city == 'lisbon') {
    //   allowed = allow.lisbon;
    // } else {
    //   allowed = allow.others;
    // }

    for (const item of sc) {
      item.quantity > allowed ? item.quantity = allowed : null;
    }
  }
};
check('lisbon');
console.log(sc);

const createDescription = function () {
  const first = sc[0];
  const p = first.product;
  const q = first.quantity;

  sc.length > 1 ? description = `Order with  ${q}   ${p} , etc...` : description = `Order with  ${q} ${p} .`

  // if (sc.length > 1) {
  //   description = 'Order with ' + q + ' ' + p + ', etc...';
  // } else {
  //   description = 'Order with ' + q + ' ' + p + '.';
  // }
};
createDescription();

console.log(description);
