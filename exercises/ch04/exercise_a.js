// Refactor to remove all arguments by partially applying the function.

// words :: String -> [String]
const split = (delimiter, str) => str.split(delimiter);
const words = str => split(' ', str);
