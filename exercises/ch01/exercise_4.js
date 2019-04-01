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

// associative
add(add(flockA, flockB), flockC) === add(flockA, add(flockB, flockC));

// commutative
add(flockA, flockB) === add(flockB, flockA);

// identity
add(flockA, 0) === flockA;

// distributive
multiply(flockA, add(flockB,flockC)) === add(multiply(flockA, flockB), multiply(flockA, flockC));
