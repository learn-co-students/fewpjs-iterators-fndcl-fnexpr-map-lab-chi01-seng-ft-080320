const tutorials = [
  'what does the this keyword mean?',
  'What is the Contutorialuctor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = (input) => {
  let target = tutorials.map(element => {
    let splitString = element.split(' ')
    let capitalized = splitString.map(string => {
      string = string.charAt(0).toUpperCase() + string.slice(1)
      return string
    })
    return capitalized.join(' ')
  });
  return target
  }

console.log(titleCased())