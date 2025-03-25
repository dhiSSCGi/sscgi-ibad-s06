/**
 * JSON Objects
 *  - stands for JavaScript Object Notation
 *  - it is used in other programming languages and the Core
 * JavaScript has a built in JSON object that contains methods for parsing JSON objects and converting strings into JavaScript Objects
 *  - JavaScript object are not to be confused with JSON
 * JSON is used for serializing different data types into bytes
 *  -- serialization is the process of converting data into series of bytes for easier transmission/ transfer of information
 *
 * - syntax:
 * {
 *      "propertyA": "value",
 *      "propertyB": "value",
 *
 * }
 */
//JSON Objects
// {
//     "city":"Quezon City",
//     "province":"Metro Manila",
//     "country":"Philippines",
// }

// JSON Methods
// JSON Object contain methods for parsing and converting data in stringified JSON
//Stringified is a JavaScript object converted into string to be used in other functions of the JavaScript applications

let batchesArr = [
  { batchName: "Batch 01" },
  { batchName: "Batch 02" },
  { batchName: "Batch 03" },
];

// The "stringify" method is used to convert JavaScript objects into a string

console.log("Result from stringify method: ");
let bastchesJSONString = JSON.stringify(batchesArr);

console.log(bastchesJSONString);
console.log("Result from parse method: ");
let parsedBatchesArr = JSON.parse(bastchesJSONString);

console.log(parsedBatchesArr);
//User details
let firstName = prompt("What is your first name: ");
let lastname = prompt("What is your last name: ");
let age = prompt("What is your age: ");
let address = {
  city: prompt("Which city do you live in?: "),
  country: prompt("Which country does your city address belongs to?: "),
};

let otherData = JSON.stringify({
  firstName: firstName,
  lastname: lastname,
  age: age,
  address: address,
});

console.log(otherData);
