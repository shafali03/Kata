// Complete the method / function so that it converts dash / underscore delimited words into camel casing.The first word within the output should be capitalized only if the original word was capitalized(known as Upper Camel Case, also often referred to as Pascal case).

//   Examples
// toCamelCase("the-stealth-warrior") // returns "theStealthWarrior"

// toCamelCase("The_Stealth_Warrior") // returns "TheStealthWarrior"




function toCamelCase(str) {
  return str.split(/-|_/g).reduce((camelCase, word, index) => {
    return index === 0 ? word : camelCase + word[0].toUpperCase() + word.slice(1)
  }, '')
}