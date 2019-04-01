class Flock {
  constructor(n) {
    this.seagulls = n;
  }
}

const add = (left, right) => left + right;
const multiply = (left, right) => left * right;

const flockA = 4;
const flockB = 2;
const flockC = 0;

// (1) original
add(
  multiply(flockB, add(flockA, flockC)),
  multiply(flockA, flockB)
); // 16

// (2) Apply the identity property to remove the extra add
add(
  multiply(flockB, flockA),
  multiply(flockA, flockB)
); // (2 * 4)+ (4 * 2) = 16

// (3) Apply distributive property to achieve our result
multiply(flockB, add(flockA, flockA)); // 2 * (4 + 4) = 16

