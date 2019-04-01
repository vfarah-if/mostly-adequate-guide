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
const result =
add(
  multiply(flockB, add(flockA, flockC)),
  multiply(flockA, flockB)
); // 16
