// Import the function sum from the app.js file
const { fromDollarToYen, fromEuroToDollar, fromYenToPound } = require('./app.js');

test("One dollar should be 146.26 yens", function() {
    const yens = fromDollarToYen(3.5);

    const expected = 3.5 * 146.26; 

     expect(yens).toBe(expected);
})

test("One euro should be 1.07 dollars", function() {
    const dollars = fromEuroToDollar(3.5);

    const expected = 3.5 * 1.07; 

     expect(dollars).toBe(expected);
})

test("One yen should be 0.0056 pounds", function() {
    const pounds = fromYenToPound(3.5);

    const expected = 3.5 * 0.0056; 

     expect(pounds).toBe(expected);
})
