# Vowel Counter

This JavaScript program prompts the user to enter a phrase and counts the number of vowels in it. It displays the individual vowels found in the phrase and the total count of vowels.

## Usage

1. Follow this link https://vowelcountertotal.netlify.app/
2. A prompt will appear asking you to enter a phrase. Type in the desired phrase and click "OK" or press Enter.
3. The program will process the input and display the vowels found in the phrase and their count.

## Example

**Input:**
```
Enter a phrase: The soul of the warrior never ceases in its quest
```

**Output:**
```
Vowels found: eouoaieeiieeai
Total vowels: 13
```

## Explanation

The program iterates through each character in the entered phrase. If a character is one of the vowel characters (a, e, i, o, u), it adds it to the `vowels` string and increments the `vowelCount` variable. The program then displays the found vowels and their count.

## Notes

- The program treats uppercase and lowercase vowels as the same. It converts all characters to lowercase for comparison.
- Spaces and non-alphabetic characters are ignored and not considered as vowels.

