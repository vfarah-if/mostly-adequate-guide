// impure
let minimum = 21;
const checkAge = age => age >= minimum;

// pure
const checkAge = (age) => {
  const minimum = 21;
  return age >= minimum;
};

// pure
const checkAgeImmutable = (age) => {
  const immutableState = Object.freeze({ minimum: 21 });
  return age >= immutableState.minimum;
};


