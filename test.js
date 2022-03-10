const hasBalancedBrackets = (string) => {
  // if the string has no length then there are no brackets to balance: return true
  if (string.length <= 0) return true;

  const bracketPairs = {
    "[": "]",
    "(": ")",
    "{": "}",
  };

  let openBrackets = [];

  for (let i = 0; i < string.length; i++) {
    let currentBracket = string[i];

    // Check if currentBracket is a key(open bracket) in the dictionary
    if (currentBracket in bracketPairs) {
      openBrackets.push(currentBracket);
    }
    // if current bracket is a closing bracket
    else {
      // bracket to watch becomes the last element in the openBrackets array
      let bracketToMatch = openBrackets[openBrackets.length - 1];

      // Use dictionary to check if the corresponding bracket of bracketToMatch is currentBracket:

      // if so: POP
      if (bracketPairs[bracketToMatch] === currentBracket) openBrackets.pop();
      // if not: return false
      else return false;
    }
  }
  // finally, if the openBrackets array is empty(no open brackets left to pair) return true
  // else return false
  return openBrackets.length === 0;
};

// Test Cases
console.log(hasBalancedBrackets("({})")); //true
console.log(hasBalancedBrackets("({}{(())})")); //true
console.log(hasBalancedBrackets("([)])})")); //false
console.log(hasBalancedBrackets("")); //true
console.log(hasBalancedBrackets("[[[")); //false
