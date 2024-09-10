function rot13(str) {
  // Step 1: Initialize an empty string to store the decoded result
  let decodedStr = '';

  // Step 2: Iterate over each character in the input string
  for (let i = 0; i < str.length; i++) {
    let char = str[i];

    // Step 3: Check if the character is an uppercase letter (A-Z)
    if (char >= 'A' && char <= 'Z') {
      // Step 4: Find the character's ASCII code, shift it by 13, and handle wrapping around the alphabet
      let charCode = str.charCodeAt(i); // Get the ASCII code of the letter
      let shiftedCharCode = charCode + 13; // Shift the letter's code by 13

      // Step 5: If the shifted code goes beyond 'Z', wrap it back to the start of the alphabet
      if (shiftedCharCode > 90) { // 90 is the ASCII code for 'Z'
        shiftedCharCode = shiftedCharCode - 26; // Subtract 26 to wrap it back to 'A'
      }

      // Step 6: Convert the shifted ASCII code back to a character and add it to the decoded string
      decodedStr += String.fromCharCode(shiftedCharCode);
    } else {
      // Step 7: If the character is not a letter, just add it to the decoded string as it is (spaces, punctuation)
      decodedStr += char;
    }
  }

  // Step 8: Return the fully decoded string
  return decodedStr;
}

// Test the function
console.log(rot13("SERR PBQR PNZC")); // Output: FREE CODE CAMP
