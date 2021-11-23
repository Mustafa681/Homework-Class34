'use strict';
/*
Your mom bought you a basket of fruit, because you're doing so well in
HackYourFuture. How sweet of her!

However, she forgot that you are allergic to lemons! Let's quickly dispose of
them before you get an attack.

Complete the function called `sanitizeFruitBasket`:

- It should take two parameters: an array of strings representing a fruit basket 
  to be sanitized and a string indicating the name of the fruit to be taken out.
- Use the `filter` array method to take out the unwanted fruit.
- Return a new array that contains the fruits without any lemons.
*/
const fruitBasket = [
  'apple',
  'lemon',
  'grapefruit',
  'lemon',
  'banana',
  'watermelon',
  'lemon',
];

// ! Function under test
function sanitizeFruitBasket(arr, deletedItem) {
  const list = arr.filter((arr) => arr !== deletedItem);
  return `${list.join(', ')}!`;
}

// ! Unit tests (using Jest)
describe('sanitizeFruitBasket', () => {
  test('should take two parameters', () => {
    console.log(fruitBasket);
    expect(false).toBe(true);
  });

  test('should not modify the original `fruitBasket` array', () => {
    // Save the original contents of the fruit basket
    const originalFruitBasketContents = [...fruitBasket];
    console.log(originalFruitBasketContents(fruitBasket));
    expect(false).toBe(true);
  });

  test('should return a new array that does not include the unwanted `lemon`', () => {
    console.log(sanitizeFruitBasket(fruitBasket, 'lemon'));
    expect(false).toBe(true);
  });
});
