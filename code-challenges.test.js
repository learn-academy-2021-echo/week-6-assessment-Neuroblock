// ASSESSMENT 6: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// describe("name of function",() => {
//   it ("description of functionanlity what iy does", () => {
//      expect ("invoke function").toEqual("expected result")
//   })
// }

// --------------------1) Create a function that takes in an array of objects and returns an array with a sentence about each person with their name capitalized.

// a) Create a test with an expect statement using the variable provided.

// Expected output: ["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."]


describe("arrayOfNames",() => {
  it("takes in an array of objects and returns an array with a sentence about each person with their name capitalized", () => {
    const people = [
      { name: "ford prefect", occupation: "a hitchhiker" },
      { name: "zaphod beeblebrox", occupation: "president of the galaxy" },
      { name: "arthur dent", occupation: "a radio employee" }
    ]
    expect(arrayOfNames(people)).toEqual(["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."])
  })
})


// b) Create the function that makes the test pass.

////PSEUDO//////

// Take in an array of objects and map them through
// returns a string inside an array
// Names need to be capetalized

const arrayOfNames = (array) => {
  return array.map(nameDescription => {
    let name = nameDescription.name.split(" ").map(value => value.replace(value[0],value[0].toUpperCase()))
    let fullname = name.join(" ")
    let description = nameDescription.occupation
    let sentence = `${fullname} is ${description}.`
  return sentence
  })
}
  


// --------------------2) Create a function that takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.

// a) Create a test with an expect statement using the variables provided.

const hodgepodge1 = [23, "Heyyyy!", 45, -10, 0, "Yo", false]
// Expected output: [ 2, 0, -1, 0 ]
const hodgepodge2 = [5, "Hola", 43, -34, "greetings", true]
// Expected output: [ 2, 1, -1 ]

describe("hodgepodge",() => {
  it ("takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3", () => {
     expect ("hodgepodge1").toEqual([ 2, 0, -1, 0 ])
     expect ("hodgepodge2").toEqual([ 2, 1, -1 ])
  })
}

// b) Create the function that makes the test pass.

 const hodgepodge = (array) => {
    arrayfilter = array.filter(value => {
    return typeof value === "number"
      }).map(value => value % 3)
    return arrayfilter
  }

// --------------------3) Create a function that takes in an array of numbers and returns the sum of all the numbers cubed.

// a) Create a test with an expect statement using the variables provided.

const cubeAndSum1 = [2, 3, 4]
// Expected output: 99
const cubeAndSum2 = [0, 5, 10]
// Expected output: 1125

describe("cubeAndSum",() => {
  it ("takes in an array of numbers and returns the sum of all the numbers cubed", () => {
     expect ("cubeAndSum1").toEqual(99)
     expect ("cubeAndSum2").toEqual(1125)
  })
}


// b) Create the function that makes the test pass.

//   PSEUDO   //

// -Input an array of numbers and outputs the cubed result.
// -Perform an iteration to sum the previous and current value ** 3 "cubed"
// -Output a numberical result

const sumCubed= (arrayOfNumbers) => {
    result = arrayOfNumbers.reduce((previous,current)=>{
      return previous + current ** 3
    },0)
    return result
  }