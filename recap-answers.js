//STRINGS

//1. Is it a string?
const isStr = (testWord) => typeof testWord === "string";

console.log(isStr("Javascript")); //true


//2. Is the string empty?
const strIsEmpty = (testStr) => {
  if (typeof testStr !== "string") {
    return "This is not a string!";
  } else if (testStr.length < 1) {
    return "This string is empty"
  } else {
    return "This string is not empty";
  }
}
console.log(strIsEmpty("")); //This string is empty

//OR:

const strIsEmptySimple = (testStrSimple) => testStrSimple.length < 1;
console.log(strIsEmptySimple("")); //true


//3. String in abbreviated form
const abbStr = function(fullStr) {
  splitStr = fullStr.split(" ");
  firstStr = splitStr[0];
  lastChar = splitStr[1][0];
  abbResult = firstStr.concat(" " + lastChar);
  // return abbResult;
  return `The name is ${firstStr}. ${abbResult}.`;
}

console.log(abbStr("John Smith")); //The name is John. John S.


//4. Hide email address
const hideEmail = (email) => {
  if (email.includes("@")) {
    //split email into two, removing @ sign
    const splitEmail = email.split("@");
    //grab three first letters
    const hideName = splitEmail[0].slice(0, 3);
    //add three letters, dots, @ and last part together
    const secretEmail = hideName + "...@" + splitEmail[1];
    return secretEmail;
  } else {
    return "This is not a valid email address. Please try again."
  }
}
console.log(hideEmail("trine_54@hotmail.com"));


//5. Change string format
const strFormat = (originalStr) => {
  const originalToLower = originalStr.toLowerCase();
  const splitOriginal = originalToLower.split(" ");
  const joinOriginal = splitOriginal.join("-");
  return joinOriginal;
}
console.log(strFormat("John Smith is old")); //john-smith-is-old


//6. Convert to camel case
const toCamelCase = (normalCase) => {
  const toLower = normalCase.toLowerCase();
  const splitNormal = toLower.split(" ");
  let camelStr = [];
  for (let i = 0; i < splitNormal.length; i++) {
    if (i === 0) {
      //if first element, push without upper case
      camelStr.push(splitNormal[i]);
    } else {
      //convert first character to upper case
      const toUppper = splitNormal[i][0].toUpperCase();
      //grab last part of element
      const rest = splitNormal[i].slice(1);
      //push both parts to result array
      camelStr.push(toUppper + rest);
    }
  }
  //join together to string
  return camelStr.join("");
}
console.log(toCamelCase("John Smith Johnson Fix")); //johnSmithJohnsonFix


//7. Return ordinal numbers
const toOrdinal = (originalNumber) => {
  //convert number to string
  const numToStr = originalNumber.toString();
  //target last digit
  const lastDigit = numToStr[numToStr.length - 1];
  if (lastDigit === "1" && numToStr !== "11") {
    return originalNumber + "st";
  } else if (lastDigit === "2" && numToStr !== "12") {
    return originalNumber + "nd";
  } else if (lastDigit === "3" && numToStr !== "13") {
    return originalNumber + "rd";
  } else {
    return originalNumber + "th";
  }

}
console.log(toOrdinal(120)); //120th


//8. Sort characters
const sortFunction = (unsorted) => {
  const toArr = unsorted.split("");
  return toArr.sort();
}
console.log(sortFunction("word")); //dorw


//9. Hyphens for numbers
const hyphenNums = (number) => {
  let hyphenResult = [];
  for (let i = 1; i <= number; i++) {
    if (i >= 1 && i <= 60) {
      hyphenResult.push("-");
    } else {
      return "This number is out of the range 1 - 60!"
    }
  }
  return hyphenResult.join("");
}
console.log(hyphenNums(5)); //-----


//ARRAYS

// 1. Leap years
const leapYearTest = (startYear, endYear) => {
  let allYears = [];
  for (let i = startYear; i <= endYear; i++) {
    allYears.push(i);
  }
  let leapYears = [];
  for (let i = 0; i < allYears.length; i++) {
    if ((allYears[i] % 4 === 0 && allYears[i] % 100 !== 0) || (allYears[i] % 100 === 0 && allYears[i] % 400 === 0)) {
      leapYears.push(allYears[i]);
    }
  }
  return leapYears;
}
console.log(leapYearTest(2000, 2005)); //2000, 2004


//2. First and last
const firstAndLast = (array) => {
  let newArray = [];
  newArray.push(array[0], array[array.length - 1]);
  return newArray;
}
console.log(firstAndLast([1, 2, 3, 4])); //[1, 4]


//3. Smallest number
const smallestNum = (numArray) => {
  sortedArray = numArray.sort((x, y) => x - y)
  return sortedArray[0];
}
console.log(smallestNum([30, 2, -13.4, 4])); //-13.4


//4. Return student names
const studentNames = (studentList) => {
  let studentArray = [];
  for (let i = 0; i < studentList.length; i++) {
    studentArray.push(studentList[i].name)
  }
  return studentArray;
}
console.log(studentNames([
  { name: "Steve"},
  { name: "Mike"},
  { name: "John"}
])); //[Steve, Mike, John]


//5. Spell it out
const spelling = (fullWord) => {
  let spellArray = [];
  for (let i = 1; i <= fullWord.length; i++) {
    let splitWord = fullWord.substring(0, i);
    spellArray.push(splitWord);
  }
  return spellArray;
}
console.log(spelling("happy")); //[h, ha, hap, happ, happy]


//OBJECTS

//1. Properties of object
const student = {
firstName: "Vikram",
lastName: "Patel",
class: 12
};
const studentProperties = Object.keys(student);
console.log(studentProperties);


//2. Person object
const person = {
  firstName: "Jürgen",
  lastName: "Müller",
  age: 67,
  occupation: "retired teacher",
  address: {
    street: "Unter den Linden",
    city: "Berlin",
    country: "Germany"
  },
  pets: "snakes"
}
console.log(`${person.firstName} ${person.lastName} is a ${person.age} year old ${person.occupation}. ${person.firstName} lives on ${person.address.street} in ${person.address.city}, ${person.address.country} with his many ${person.pets}.`);


//3. Delete class from object
delete person.pets;
console.log(person); //pets: snakes -> deleted


//4. Length of object
const objectLength = (newObj) => Object.keys(newObj).length;

const friend = {
  firstName: "Billy",
  lastName: "Albert Einstein",
  age: 5
}
console.log(objectLength(friend)); //3


//5. Reading status
const libraryStatus = (library) => {
  let libraryStr = [];
  for (let i = 0; i < library.length; i++) {
    const haveRead = library[i].readingStatus ? "Already read" : "You still need to read";
    const newStr = `${haveRead} ${library[i].title} by ${library[i].author}`;
    libraryStr.push(newStr);
  }
  return libraryStr;
}

const library = [
  {
    author: 'Jean Genet',
    title: 'Funeral Rites',
    readingStatus: true
  },
  {
    author: 'JG Ballard',
    title: 'Crash',
    readingStatus: true
  },
  {
    author: 'B.Catling',
    title:  'The Erstwhile',
    readingStatus: false
  }];

console.log(libraryStatus(library));
