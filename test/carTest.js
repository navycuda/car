const chai = require('chai'); // 1
const assert = chai.assert;

const shouldBuyCar = require('../shouldBuyCar.js'); // 2

describe("#shouldBuyCar()", function() { // 3
  // Pink
  it(`should return true when the car is pink`, function() {
    const car = { color: `pink`};
    const shouldBuy = shouldBuyCar(car);
    assert.isTrue(shouldBuy);
  });
  // No details
  it(`should return false when there are no details about the car`, function() {
    const car = { };
    const shouldBuy = shouldBuyCar(car);
    assert.isFalse(shouldBuy);
  });
  // hatchback
  it("should return false if it's a hatchback", function() { // 4
    const car = {
      type: `hatchback`
    };
    const shouldBuy = shouldBuyCar(car);
    assert.isFalse(shouldBuy);
  });
  // hatchback, pink
  it(`should return false when the car is pink and a hatchback`, function() {
    const car = {
      color: `pink`,
      type: `hatchback`
    };
    const shouldBuy = shouldBuyCar(car);
    assert.isFalse(shouldBuy);
  });
  // 6L/100 && $$$ <= $5000
  it(`should return true when the car has 6 litres/100km and is under or equal to $5,000`, function() {
    const car = {
      price: 5000,
      litresPer100km: 6.0
    };
    const shouldBuy = shouldBuyCar(car);
    assert.isTrue(shouldBuy);
  });
  // 11L/100 && $$$ <= $5000
  it(`should return true when the car has 11 litres/100km and is under or equal to $5,000`, function() {
    const car = {
      price: 5000,
      litresPer100km: 11.0
    };
    const shouldBuy = shouldBuyCar(car);
    assert.isTrue(shouldBuy);
  });
  // 6L/100 $$$ > 5000
  it(`should return false when the car has 6 litres/100km and is over $5,000`, function() {
    const car = {
      price: 5001,
      litresPer100km: 6.0
    };
    const shouldBuy = shouldBuyCar(car);
    assert.isFalse(shouldBuy);
  });
  //11L/100 $$$ > 5000
  it(`should return false when the car has 11 litres/100km and is over $5,000`, function() {
    const car = {
      price: 5001,
      litresPer100km: 11.0
    };
    const shouldBuy = shouldBuyCar(car);
    assert.isFalse(shouldBuy);
  });
  // 5L/100 $$$ <= 5000
  it(`should return false when the car has 5 litres/100km and is under or equal to $5,000`, function() {
    const car = {
      price: 5000,
      litresPer100km: 5.0
    };
    const shouldBuy = shouldBuyCar(car);
    assert.isFalse(shouldBuy);
  });
  // 12L/100 $$$ <= 5000
  it(`should return false when the car has 12 litres/100km and is under or equal to $5,000`, function() {
    const car = {
      price: 5001,
      litresPer100km: 12.0
    };
    const shouldBuy = shouldBuyCar(car);
    assert.isFalse(shouldBuy);
  });
  // no car
  it(`should return undefined when there is no car `, function() {
    let car;
    const shouldBuy = shouldBuyCar(car);
    assert.isUndefined(shouldBuy);
  });
});