/* 
=================================================================
LAB TITLE: Advance JavaScript
INSTRUCTIONS:
• Each task is written as a TODO.
• Read the TODO description.
• Use the Console (F12 → Console) to view outputs.
=================================================================
*/

//You can uncomment the console.log code to check if your js file is connected with html file or not.
console.log(
  "%cJS Lab Connected — Start completing the TODOs for Advance JavaScript!",
  "font-weight:bold; font-size:14px"
);

// ==========================
// TODO-1: OBJECT with GETTERS & SETTERS
// ==========================
/*
Task:
1) Create an object representing a Student with at least: firstName, lastName, and gpa.
2) Add a getter fullName that returns "firstName lastName".
3) Add a setter updateGpa(newGpa) or use a set accessor for gpa that validates 0.0–4.0.
4) Create an instance/object and output its attributes using the getter(s).
*/
let student = {
  firstName: "Yousef",
  lastName: "Abdelaziz",
  _gpa: 3.5,
  get fullName() {
    return this.firstName + " " + this.lastName;
  },
  get gpa() {
    return this._gpa;
  },
  set updateGpa(value) {
    if (value >= 0 && value <= 4.0) {
      this.gpa = value;
    }
  },
};

y = student;
console.log(y.fullName);
console.log(y.gpa);

// ====================================
// TODO-2: OBJECT AS MAP + for...in LOOP
// ====================================
/*
Task:
1) Make an object used as a "map" (key → value), e.g., course codes → titles.
2) Iterate over it with for...in and display each key and value.
*/

let courses = {
  Math101: "Caculus 1",
  Math102: "Caculus 2",
  Math201: "Caculus 3",
};

for (course in courses) {
  console.log(course + ": " + courses[course]);
}

// =========================================
// TODO-3: STRING OBJECT — charAt() & length
// =========================================
/*
Task:
1) Create a String object or plain string.
2) Use .charAt(index) and .length to output characters and size.
*/
let str = "My name is Yousef";
console.log(str.charAt(3));
console.log(str.length);
// ===================================
// TODO-4: DATE — day, month, and year
// ===================================
/*
Task:
1) Create a Date for the current moment (new Date()).
2) Find and display the current day of month, month (0–11), and year.
//    (Hint: getDate(), getMonth(), getFullYear() )
*/
let now = new Date();
console.log(`Today is ${now.getDay()}`);
console.log(`the current month is ${now.getMonth()}`);
console.log(`the current year is ${now.getFullYear()}`);

// ============================================================
// TODO-5: ARRAY + SPREAD — find MIN and MAX from 10 numbers
// ============================================================
/*
Task:
1) Declare an array with 10 numbers (any values).
2) Use spread syntax with Math.min(...) and Math.max(...) to find extremes.
3) Display both values.
*/
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(`the max is ${Math.max(...arr)}`);
console.log(`the min is ${Math.min(...arr)}`);
// ===================================================================
// TODO-6: EXCEPTIONS — try/catch/finally with EMPTY ARRAY edge case
// ===================================================================
/*
Task:
1) Write a function that expects a non-empty array and returns the maximum element of the array.
2) Intentionally pass an empty array to trigger an error.
3) Handle the error using try { ... } catch (e) { ... } finally { ... } and log messages
   in each block so you can see the flow of control.
*/
function maxArr(arr) {
  if (!arr.length) {
    throw new TypeError("The array is empty");
  }
  return Math.max(...arr);
}
try {
  maxArr([]);
} catch (e) {
  console.log(e.message);
} finally {
  console.log("this is the final log");
}

// ===================================================================================
// TODO-7: REGEX + forEach — find words containing 'ab' and log matches from the list
// ===================================================================================
/*
Task:
Given: const words = ["ban", "babble", "make", "flab"];
1) Create a RegExp that detects the substring "ab" anywhere in a word.
2) Loop with .forEach() and use pattern.test(word) to check matches.
3) For matches, log "<word> matches!".
4) Display the words that matches the pattern.
*/
const words = ["ban", "babble", "make", "flab"];
words.forEach((word) => {
  if (/ab/.test(word)) {
    console.log(`${word} matches!`);
  }
});

// End of Advance JavaScript Lab — good luck!
