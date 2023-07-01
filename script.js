// Prompt the user to enter a phrase
let phrase = prompt("Enter a phrase");

let vowels = ""; // Store the vowels found in the phrase
let vowelCount = 0; // Keep track of the number of vowels

const vowelCharacters = "aeiou"; // Define the vowel characters

// Iterate through each character in the phrase
for (let i = 0; i < phrase.length; i++) {
  // Get the current character and convert it to lowercase for comparison
  let currentCharacter = phrase[i].toLowerCase(); 

  // Check if the character is a vowel (a, e, i, o, u)
  if (vowelCharacters.includes(currentCharacter)) {
    // Add the vowel to the vowels string
    vowels += currentCharacter;
    // Increase the vowel count
    vowelCount++;
  }
}

console.log(vowels); // Log the found vowels to the console

// Display the vowels that appear in the phrase
document.getElementById('myDiv1').innerHTML = "Vowels found: " + vowels;
// Display the count of vowels
document.getElementById('myDiv2').innerHTML = "Total vowels: " + vowelCount;
