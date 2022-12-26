// lessons [ 001 - 009 ]
// The code referred to as the first in the comments will not work because the element el
// has not been created, but in the second line the page has been loaded
// so the element has already been created

/*<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <title>Learn JavaScript</title>
    <script>
      // Code One
      // =====> document.getElementById("el").style.color = "red";  <=======
    </script>
    <script>
      // Code Two
      window.onload = function () {
        document.getElementById("el").style.color = "red";
      };
    </script>
  </head>
  <body>
    <h1 id="el">Page Title</h1>
    <script>
      // Code Three
      document.getElementById("el").style.color = "red";
    </script>
  </body>
</html>
*/

// 02

document.write("<h1> Elzero </h1>")
document.querySelector("h1").style.color = "blue"
document.querySelector("h1").style.fontSize = "80px"
document.querySelector("h1").style.textAlign="center"
document.querySelector("h1").style.fontWeight="bold"
document.querySelector("h1").style.fontFamily="Arial"

// 03

console.log("%cElzero %cWeb %cSchool",
"font-size:40px;color:red;",
"font-size:40px;color:green;font-weight:bold;",
"font-size:40px;background:blue;color:white")

console.log("===============================================")

// 04

console.group("Group 1")
console.log("Massage one")
console.log("Massage two")
console.group("Child Group")
console.log("Massage two")
console.log("Massage one")
console.group("Grand Child Group")
console.log("Massage one")
console.log("Massage two")
console.groupEnd()
console.groupEnd()
console.groupEnd()
console.group("Group 2")
console.log("Massage one")
console.log("Massage two")
console.groupEnd()
console.log("============================")

// 05

console.table(["Elzero", "Ahmed", "Sameh", "Gamal", "Aya"])
console.log("============================")
// 06

console.log("Iam In Console");
//console.log("Iam In Console");


document.write("Iam In Page");
/* document.write("Iam In Page"); */

console.log("============================")

//                                     -------------------------------

// lessons [ 010 - 017 ]

// 01

let NumberOne = 10
    , NumberTwo = 20;

console.log(NumberOne.toString() + NumberTwo.toString()) // 1020

console.log(typeof (NumberOne.toString() + NumberTwo.toString())) // string

console.log(`${NumberOne}${NumberTwo}`) // 1020

console.log(typeof `${NumberOne}${NumberTwo}`) // string

console.log(NumberTwo + "\n" + NumberOne)  // 20 (New Line) 10


console.log(`${NumberTwo}
${NumberOne}`)                  // 20 (New Line) 10

console.log("============================")

// // 02

/*

<!DOCTYPE html>
<html>
<head>
<title> Java Script (JS) </title>
</head>

<body>
    
    <script src="main.js"></script>

  ==>    <div id="elzero">hello</div>

    </body>

</html>

*/


// 03
console.log("\'I\'m In \n \\\\\n Love \\\\ \"\"\" \'\'\' \n ++ With ++ \n \\\"\"\" \\ \"\"\"\n \"\"JavaScript \"\"`` ")

console.log("============================")

// 04




//                                 -------------------------------

// lessons [ 018 - 022 ]

// 01

// Replace ? With Arithmetic Operators
//console.log(10 ? 20 ? 15 ? 3 ? 190 ? 10 ? 400); // 0

console.log(10 % 20 - 15 % 3 % 190 - 10 % 400); // 0

console.log("============================")

// 02

let num = 3;

console.log(num ** num / num - num);      // 6
console.log(num + + true + true + true); // 6
console.log(num + num)                  // 6
console.log(num * --num)               // 6
console.log(++num * num - num++ )     // 6
console.log(num * --num / --num)     // 6
console.log("============================")

// 03

num = "10"

console.log(parseInt(num * (+true + true))) // 20

console.log(+num + +num)                   // 20

console.log("============================")

// 04


let points = 10;

console.log(++points + true + true) // 13

console.log() // 8


//                                         --------------------------------------

// [ 023 - 026 ]

// 01

console.log(100000) //1000000

console.log(100_000) //1000000

console.log(1e5) //1000000

console.log(50000 + 50000) //1000000

console.log(5e4 + 5e4 ) //1000000

console.log(Number.parseInt("100000"))

console.log(Number.parseInt("1".concat("00000")))

console.log(Math.pow(100, 2.5))

console.log(Math.round(99999.9))

console.log(Math.trunc(100000.9))

console.log(Math.ceil(99999.1))

console.log(Math.floor(100000.9))

console.log(100 ** 2.5)

console.log("============================")

// 02

console.log(Number.MAX_SAFE_INTEGER) // 9007199254740991

console.log("============================")

// 03

console.log(Number.MAX_SAFE_INTEGER) // 16

console.log("============================")

// 04

let myVar = "100.56789 Views";

console.log(Number.parseInt(myVar))

console.log(Number.parseFloat(myVar).toFixed(2))

console.log("============================")

// 05

let num2 = 10

console.log(Number.isInteger(num2) + Number.isInteger(num2)) // 2

console.log("============================")

// 06

let flt = 10.4

console.log(Math.floor(flt)) // 10

console.log(Math.trunc(flt)) // 10

console.log(Math.round(flt)) // 10

console.log(parseInt(flt)) // 10

console.log("============================")
// 07

console.log(Math.floor(Math.random() * 5))

console.log("============================")

//                                                 ------------------------------------------


// [ 027 - 023 ]

// 01

let userName = "Elzero"

console.log(userName[0].toLowerCase()) // e

console.log(userName.charAt(0).toLowerCase()) //e

console.log(userName.substr(0,1).toLowerCase())

console.log(userName.substring(0, 1).toLowerCase()) // e

console.log(String.fromCharCode(userName.toLowerCase().codePointAt()).repeat(3)) // eee

console.log("============================")
// 02

let word = "Elzero";
let letterZ = "z";
let letterE = "e";
let letterO = "O";

console.log(word.includes(letterZ.toLowerCase())) // True

console.log(word.startsWith(letterE.toUpperCase())) // True

console.log(word.endsWith(letterO.toLowerCase()))

console.log("============================")
// [ 031 - 032 ]

// 01

console.log(100 == "100"); // true
console.log(100 < 1000); // true
console.log(110 > 100 || 10 < 20); // true
console.log(-10 == "-10"); // true
console.log(- -50 >= +"-40"); // true
console.log(- 10 < -"-40"); // true
console.log(+ "10" == 10); // true
console.log(!20 == false); // true
console.log("============================")
// 02

let One = 10
let Two = 20

console.log(One < Two) // True

console.log(One != Two) // True

console.log(One >! Two) // True

console.log(One !== Two) // True

console.log(!(One == Two)) // True

console.log(!(One > Two)) // True

console.log("============================")

// 03

let a1 = 20;
let b = 30;
let c = 10;

console.log(a1 == b && a1 != c || a1 < b); // true
console.log(a1 < b && a1 > c); // true
console.log(!(a1 == b) && !(a1 > b) && !(a1 < c) && !(a1 == c)); // true

console.log("============================")

                                            //-------------------------------------------

// [ 033 - 037 ]

//01

// Test Case 1
let n1 = 9; // "009"

// Test Case 2
let n2 = 20; // "020"

// Test Case 3
let n3 = 110; // "110"
let n=110

if (n < 10) {
    console.log(`0${n}`)
} else if (n > 10 && n < 100) {
    console.log(`0${n}`)
    
} else if (n >= 100 ) {
    console.log(n)
}

console.log("============================")

// 02

let num1 = 9;
let str = "9";
let str2 = "20";

if (num1 == str) 
    console.log(`"${num1} Is The Same Value As ${str}"`)

else if (num1 == str && typeof num1 != typeof str) 
    console.log(`"${num1} Is The Same Value As ${str} But Not The Same Type"`)

else if (num1 != str2 && typeof num1 != typeof str2) 
    console.log(`"${num1} Is Not The Same Value Or The Same Type As ${str2}"`)

else if (str != str2 && typeof str == typeof str2) 
console.log(`"${str} Is The Same Type As ${str2} But Not The Same Value"`)

console.log("============================")

// 03

num1 = 10;
num2 = 30;
num3 = "30";

if (true) {
    
    num3 > num1 && num3 !== num2 ?
    console.log(`"30 Is Larger Than 10 And Type string Not The Same Type As number"`):
        
    num3 > num1 && num3 === num2 ?
            console.log(`"30 Is Larger Than 10 And Value Is The Same As 30 And Type string Not The Same Type As number"`) :
            
            num3 !== num1 && num3 !== num2 ?
            console.log(`"${num3} Value And Type Is Not The Same As ${num1} And Type Is Not The Same As ${num2}"`) : null;
}

console.log("============================")

// 04


//challenge  if
//ch 1

let a = 10;

a < 10 ?
    console.log(10) :
    a >= 10 && a <= 40 ?
        console.log("10 to 40 ") :
        a > 40 ?
            console.log(" > 40") :
            console.log("Unknown");
            
console.log("============================")

// ch 2

let st = "Elzero Web School";

if ((st.length + st.length ).toString() === "34")
console.log("Good")

if (st.includes("W")) 
console.log("Good")

if (st.length !== String)
console.log("Good")

if (st.length !== Number)
console.log("Good")

if(st.substr(0,6).repeat(2) === "ElzeroElzero")
console.log("Good")

console.log("============================")

// challenge switch
// ch 1 (convert if to switch)
// 1

let jop = "Manager"
let salary = 0 

switch (jop) {
    case jop === "Manager":
        salary = 8000;
        break;
    case jop === "IT":
    case jop === "Support":
        salary = 6000;
        break;
    case jop === "Developer" || jop === "Designer":
        salary = 7000;
        break;
    default:
        salary = 4000;
        break;
}
console.log(`My Jop : ${jop}`)
console.log(`My Salary : ${salary}`)

console.log("============================")

// ch 2

let holiday = 0 
let mony = 0

if (holiday === 0) {
    mony = 5000 
    console.log(`my mony is ${mony}`)
}
else if (holiday === 0 && holiday === 1) {
    mony = 3000
    console.log(`my mony is ${mony}`)
}
else if (holiday === 3) {
    mony = 2000
    console.log(`my mony is ${mony}`)
}
console.log("============================")

                                      //---------------------------------------


// console.clear() // clear console
// [ 038 - 039 ] 

// 01

let day = "Monday"

if (!(day.includes(" ") )) {
    switch (day) {
    
        case "Friday":
        case "Saturday":
        case "Sunday":
            console.log(`No Appointments Available`)
            break;
        case "Monday":
        case "Thursday":
            console.log("From 10:00 AM To 5:00 PM")
            break
        case "Tuesday":
            console.log("From 10:00 AM To 6:00 PM")
            break;
        case "Wednesday":
            console.log("From 10:00 AM To 7:00 PM")
            break;
        default:
            console.log("Its Not A Valid Day")
            break
    }
} else {
    console.log(`You Need To Remove Spaces And Make First Letter Capital => ${day}`)
}


// challenge Array

let zero = 0 
let counter2 = 3
let my = ["Ahmed", "Mazero", "Elham", "Osama", "Gamal", "Ameer"]

my.pop()
my.pop()
my.reverse()

console.log(my) // ['Osama', 'Elham', 'Mazero', 'Ahmed']

console.log(my.slice(++zero, counter2)) // ['Elham', 'Mazero']

console.log(my[zero].slice(--zero,--counter2).concat(my[counter2].slice(counter2))) // Elzero

console.log(my[counter2].slice(- counter2).charAt(zero).concat(my[counter2].slice(- --counter2).toUpperCase())) // rO

             //-----------------------------------------------------------------------

// [ 040 - 047 ]

// 01

let myFriends = ["Ahmed", "Elham", "Osama", "Gamal"];
let num0 = 3;

console.log(myFriends.slice(Number.isInteger(myFriends),num0)) //  ['Ahmed', 'Elham', 'Osama']

myFriends.pop()
console.log(myFriends) // ['Ahmed', 'Elham', 'Osama']
console.log("==============================================")


// 02

let friends0 = ["Ahmed", "Eman", "Osama", "Gamal"];

friends0.pop()
friends0.shift()
console.log(friends0)  // ["Eman", "Osama"]
console.log("==============================================")

// 03

let arrOne = ["C", "D", "X"];
let arrTwo = ["A", "B", "Z"];
let finalArr = [];

// Write One Single Line Of Code
finalArr= arrOne.concat(arrTwo[arrTwo.length - true]).reverse().concat(arrTwo.slice(false,arrTwo.length - true).reverse())

console.log(finalArr); // ["Z", "X", "D", "C", "B", "A"]
console.log("==============================================")


// 04

let website = "Go";
let words = [`${website}ogle`, "Facebook", ["Elzero", "Web", "School"]];

console.log(words.splice()); // ZERO

console.log("==============================================")

// 05

let needle = "JS";
let haystack = ["PHP", "JS", "Python"];

console.log(haystack.includes(needle) ? "Found" : "")

console.log(haystack.indexOf(needle) !== -1 ? "Found" : "")


for (let i = 0; i < haystack.length; i++)
{ if (haystack[i] === needle ) {
    console.log("Found")
    break
} 
}     
console.log("==============================================")

// // 06

let arr1 = ["A", "C", "X"];
let arr2 = ["D", "E", "F", "Y"];
let allArrs = [];
let num01 = arr1.length
allArrs.push(arr2[--num01].toLowerCase().concat(arr1[num01].toLowerCase().concat(arr2[arr1.length].toLowerCase())))

console.log(allArrs.join(""))
console.log("============================")

             //-------------------------------------------------------

// [ 048 - 053 ]

// 01

let start = 10, end = 100, exclude = 40;

for (; start <= end; start += 10){
    if (start === 40) continue;
    console.log(start)
}
console.log("============================")

// 02


let stop = 3
start = 10, end = 0 

for (; end <= start; start--){
    
    start < 10 ? console.log(`0${start}`) : console.log(start.toString());
    if (start === 3) break;
}
console.log("============================")


// 03

let breaker = 2
start = 1, end = 6

for (; start <= end; start++){
    console.log(start)
    console.log(`--${breaker}
--${breaker*breaker}`)

}
console.log("============================")

// 04

let index0 = 10, jump = 2
end = 0

for (; ;){

    if (end < index0) {
        console.log(index0)
        index0 -= jump
    }
    
    if (index0 === jump) break
}
console.log("============================")

// 05

let friends2 = ["Ahmed", "Sayed", "Eman", "Mahmoud", "Ameer", "Osama", "Sameh"];
let letter = "a";
        
for (let i = 0; i < friends2.length; i++)
    
    if (!(friends2[i].toLowerCase().startsWith(letter)))
        console.log(`${i} => ${friends2[i]}`)
    
console.log("============================")

// 06

start = 0

let swappedName = "elZerO"
let value = ""
for (; start < swappedName.length; start++){

    if (swappedName[start] === swappedName[start].toLowerCase()) 
    value += swappedName[start].toUpperCase()
           
    else if (swappedName[start] === swappedName[start].toUpperCase())
    value += swappedName[start].toLowerCase()
        
}
    console.log(value)
    console.log("============================")


// 07

start = 0 
let max = [1, 2, 3, "A", "B", "C", 4];

for (++start; start < max.length; start++){

    if (typeof max[start] === "string")
        continue
    else
        console.log(max[start])

}
console.log("============================")

             //----------------------------------------------------


// [ 054 - 056 ]

// 01

let friends = ["Ahmed", "Sayed", "Ali", 1, 2, "Mahmoud", "Amany"];
let index = 0;
let counter = 0 , i1 =0;

// console.log(typeof friends[3]=== "number")
while (counter < friends.length) {
    
    if (typeof friends[counter] === "string") {
        if (friends[counter][index].toLowerCase() === "a") {
            counter++
            continue
        }
        else {
            ++i1
            console.log(`${i1} ==> ${friends[counter]}`)
        }
    }
    counter ++
}
console.log("============================")


// challenge 
// ch 1

let myAdmins = ["Ahmed","Hissen","mahmoud" , "Osama", "Sayed", "Stop", "Samera"]
let myEmployees = ["Amgad", "Samah", "Ameer", "Omar", "Othman", "Amany", "Samia"]
let i = 0 ,count = 0;

for (; i < myAdmins.length; i++){
    
    if (myAdmins[i].toLowerCase() === "stop".toLowerCase()) {
        
        document.write(`<div> We Have ${i} Admins  </div>`)
        break;
    } 
}

for (let j = 0; j < i; j++){
    document.write("<hr>")
    document.write("<div>")
    
    count = 0
    document.write(`The Admin For Team ${j + 1} is ${myAdmins[j]}`)
    document.write("<h3>Team Members :</h3>")

    for (k = 0; k < myEmployees.length; k++){
        if (myAdmins[j].charAt(0).toLowerCase() === myEmployees[k].charAt(0).toLowerCase()) {
            count ++
            document.write(`<p>-  ${count} ${myEmployees[k]} </p>`)
        }
    }
    
    if (count === 0)
        document.write("<p> Sorry Your Team is Empty ! </p>");



    document.write("</div>")

}
console.log("============================")


// challenge Function

function showDetails(a, b, c) {
    let arr = [a, b, c] 

    for (let i = 0; i < arr.length; i++) {
        typeof arr[i] === "string" ?
            a = arr[i]
        
            : typeof arr[i] === "number" ?
                b = arr[i] :
        
                typeof arr[i] === "boolean" ?
                    c = arr[i] :null;
        
    }
    (c) ?
        console.log(`Hello ${a} , Your Age is ${b} , You Are Available Hire`)
        :
        console.log(`Hello ${a} , Your Age is ${b} , You Are Not Available Hire`);
    
}
    
showDetails("Mohammed", 22, true)      // Hello Mohammed , Your Age is 22 , You Are Available Hire
showDetails(22, "Mohammed", true)     // Hello Mohammed , Your Age is 22 , You Are Available Hire 
showDetails(true, 22,"Mohammed")     //  Hello Mohammed , Your Age is 22 , You Are Available Hire
showDetails(false, "Mohammed" , 22) //   Hello Mohammed , Your Age is 22 , You Are Not Available Hire
console.log("============================")

// [ 057 - 063 ]

// 01

function sayHello(theName, theGender = "Unknown") {
    if (theGender.toLowerCase() === "male")
        console.log(`Hello Mr ${theName}`)
    else if (theGender.toLowerCase() === "female")
        console.log(`Hello Miss ${theName}`)
    else
        console.log(`Hello ${theName}`)
}

sayHello("Osama" , "Male")   // Hello Mr Osama
sayHello("Eman" , "Female") // Hello Miss Eman
sayHello("Osama")          //  Hello Osama
console.log("============================")


// 02

function calculate(firstNum = 0, secondNum ="Unknown" , operator ="Unknown") {
    
    if (operator === "Unknown")
        console.log(firstNum + secondNum)
    
    else {

        switch (operator.toLowerCase()) {
            case 'add':
                console.log(firstNum + secondNum )
                break
            case 'subtract':
                console.log(firstNum - secondNum)
                break
            case 'multiply':
                console.log(firstNum * secondNum)
                break
            default:
                console.log(" Second Number Not Found")
                
        }
    }
}

calculate(20)                    // Second Number Not Found
calculate(20 , 30)               // 50 
calculate(20 , 30 , "add")      // 50
calculate(20 ,30 ,'subtract')   // -10
calculate(20 ,30 ,'multiply')   // 600
console.log("============================")


// 03
function ageInTime(theAge) {
    if (theAge > 10 && theAge < 100) {
        
        console.log(`The Months ${theAge * 12}`)
        console.log(`The Weeks ${(theAge * 12) * 7}`)
        console.log(`The Hours ${(theAge * 12) * 7 * 168}`)
        console.log(`The Minutes ${((theAge * 12) * 7 * 168) * 60}`)
        console.log(`The Seconds ${((theAge * 12) * 7 * 168) * 120}`)
        

    }
    else
        console.log("Age Out Of Range !")
}

ageInTime(22)
console.log("============================")


// 04


function cheackStatus(a, b, c) {
    
    let arr =  [a, b, c]
    for (let i = 0; i < arr.length; i++){
        if (typeof arr[i] === "string")
            a = arr[i]
        else if (typeof arr[i] === "number")
            b = arr[i]
        else if (typeof arr[i] === "boolean")
            c = arr [i]
    }
    if (c) 
        console.log(`Hello ${a} , Your Age is ${b} , You Are Available For Hire `)
    
    else 
        console.log(`Hello ${a} , Your Age is ${b} , You Are Not Available For Hire `)
}


cheackStatus("Mohammed" , 22 , true)    // Hello Mohammed , Your Age is 22 , You Are Available For Hire

cheackStatus(22 , "Mohammed" , true)    // Hello Mohammed , Your Age is 22 , You Are Available For Hire 

cheackStatus(true, 22, "Mohammed")      // Hello Mohammed , Your Age is 22 , You Are Available For Hire 

cheackStatus(false, "Mohammed", 22)   // Hello Mohammed , Your Age is 22 , You Are Not Available For Hire 
console.log("============================")


// 05

function creatSelectBox(startYear, endYear) {
    
    document.write("<select>")
    for (let i = startYear; i <= endYear; i++){

        document.write(`<option value=${i}>${i}</option>`)
    }
    document.write("</select>")
}



creatSelectBox(2000,2021)
console.log("============================")


// 06

function multiply(...numbers) {
    let result = 1
    
    for (let i = 0; i < numbers.length; i++){
        if (typeof numbers[i] === "string")
            continue
        
        else if  (typeof numbers[i] === "number") {
            Number.isInteger(numbers[i]) ?
                result *= numbers[i] :
                result *= Number.parseInt(numbers[i]);
        }
    }
    console.log(result)
}


multiply(20,10)                         // 200
multiply("A", 10, 30)                   // 300
multiply(100.43325,10.34342324,"B")     // 1000
multiply(100.5,10,"B")                  // 1000
console.log("============================")

// challenge Function 
// ch 01

let names = function (...printName) {
    return `String [${printName.join("], [")}] => Done !`
}
console.log(names("Osama", "khalid", "Mohammed", "Aya"))


let names2 = (...printName) => `String [${printName.join("], [")}] => Done ! `;


console.log(names2("Osama", "khalid", "Mohammed", "Aya"))
console.log("============================")

// ch 2
// Arrow Function 

let myNumbers = [20, 50, 10, 60]

let calc = (one, two, ...nums) => parseInt(nums) + one + two 

    console.log(calc(10, myNumbers[0], myNumbers[1]))

// Regular Function

function clac2(one, two, ...nums) {
    return parseInt(nums) + one + two 
}
console.log(clac2(10 , myNumbers[1], myNumbers[0]))
console.log("============================")


// [ 064 - 070 ]

// 01

function getDetails(zName,zAge , zCountry) {

    function amePattren(zName) {
        return zName.substr(0,zName.indexOf(" ")) .concat(` ${zName.substr(zName.indexOf(" ")).charAt(1).toUpperCase()}.`)
    }

    function ageWithMassage(zAge) {
        return `Your Age Is ${parseInt(zAge)}`
    }

    function countryTowLetters(zCountry) {
        
        return `You Live In ${zCountry.substr(0,2).toUpperCase()}`
    }
    
    function fullDetails() {
        
        return `Hello ${amePattren(zName)} , ${ageWithMassage(zAge)} , ${countryTowLetters(zCountry)}`
    }

    return fullDetails()
}

console.log(getDetails("Osama Mohammed", "38 is the age", "Egypt"))

console.log(getDetails("mohammed khalid" , "22 is the age" ,"Egypt"))

console.log(getDetails("Ahemd ali", "32 is the age", "syria"))
console.log("============================")


// 02
// Regular
function itsMe() {
    return `Iam A Normal Function`;
  }
  
  console.log(itsMe()); // Iam A Normal Function

// Arrow
let itsMeArrow = _ => `Iam A Arrow Function`

console.log(itsMeArrow())

//  Regular
function urlCreate(protocol, web, tld) {
    return `${protocol}://www.${web}.${tld}`;
  }
  
console.log(urlCreate("https", "elzero", "org")); // https://www.elzero.org

// Arrow
let urlCreateArrow = (protocol, web, tld) => `${protocol}://www.${web}.${tld}`

console.log(urlCreateArrow("https", "elzero","org"))
console.log("============================")


// 03
// Search (Currying Function Technique)
// Currying Function

function checker(zName) {
    return function (status) {
        return function (salary) {
            return status.toLowerCase() === "available" ? `${zName} , My Salary is ${salary}` : `Iam Not Available`;
        }
    }
}

console.log(checker("Mohammed")("available")(4000))      // Mohammed , My Salary is 4000
console.log(checker("Mohammed")("not available")(4000))  // Iam Not Available

// Arrow Currying Function
let checkerArrow = (zName) => {
    return (status) =>
    {
        return (salary) => {
            return status.toLowerCase() === "available" ? `${zName} , My Salary is ${salary}` : `Iam Not Available`;
        }
    }
}

console.log(checkerArrow("Mohammed")("available")(4000))      // Mohammed , My Salary is 4000
console.log(checkerArrow("Mohammed")("not available")(4000))  // Iam Not Available
console.log("============================")



// 04
function speciaMix(...data) {
    let result = 0
    for (let i = 0; i < data.length; i++){
        if (typeof data[i] === "number") 
            result += data[i]
        // return (NaN) from parseInt(data[i]) , in case was parseInt("Testing") //(or String Type)        
        else if (parseInt(data[i]) === parseInt(data[i]))
            result += parseInt(data[i])
        
        else 
            continue
    }
    if (result === 0)
        return `All is Strings`
    else 
        return result
}

console.log(speciaMix(10,20,30))                             // 60
console.log(speciaMix("10Test" ,"Testing" , "20Cool"))       // 30
console.log(speciaMix("Testing" , "10Testing" ,"40Cool"))   // 50
console.log(speciaMix("Test" , "Cool" ,"Test"))             // All is Strings
console.log(speciaMix("Test" , "Cool" ,"10Test"))           // 10
console.log(speciaMix("Test" , "20Cool" ,"Test"))           // 20
console.log("============================")


// [ 071 - 078 ]
// challenge

let myString1 = "1,2,3,EE,l,z,e,r,o,_,W,e,b,_,S,c,h,o,o,l,2,0,Z"
let num02 = myString1[myString1.length - true]
let solution = myString1
    .split("")
    .filter(function (ele) {
    return isNaN(ele) && ele !== num02
})
    .map(function (ele) {
    return ele.replace(",","") && ele.replace("_" , " ") 
})
    .reduce(function (acc, next) {
        return acc === next ? acc : `${acc}${next}` 
    
},)

console.log(num02)
console.log(solution)
console.log("============================")

// 01

let mix = [1, 2, 3, "E", 4, "l", "z", "e", "r", 5, "o"];

let sol0 = mix
    .map((ele) => 
        (isNaN(ele)) ? ele : "")
    
    .reduce((acc, next) => `${acc}${next}`)

console.log(sol0)
console.log("============================")

// 02

let myString = "EllElllzzzezzzzeereoeeeo"
let sol01 = myString.split("").filter(function (value , index ,arr) {
    return arr.indexOf(value) === index;
}).join("")

console.log(sol01)
console.log("============================")

// 03

let myArray = ["E", "l", "z", ["e", "r"], "o"];

let newArray = myArray.reduce(function (ele , next) {
    return `${ele}${next}`
}).replace(",","").split("")

console.log(newArray)
console.log("============================")


// 04

let numsAndStrings = [1, 10, -10, -20, 5, "A", 3, "B", "C"];

let sol = numsAndStrings
    .filter((ele) => !isNaN(ele))
    .map((ele) => -ele)

console.log(sol)
console.log("============================")


// 05

let nums = [2, 12, 11, 5, 10, 1, 99];

let result = nums.reduce(function (acc, curr) {
    return curr % 2 === 0 ? curr * acc : curr + acc;
},1)

console.log(result)
console.log("============================")

// [ 079 - 085 ]

// 01
// Create Your Object Here

let member = {
    name: "Elzero", 
    age: 38, 
    country: "Egypt", 
    fullDetails: function () {
        return `My Name Is ${member.name}, My Age Is ${member.age}, I Live In ${member.country}`
    }
}
console.log(member.name); // Elzero
console.log(member.age); // 38
console.log(member.country); // Egypt
console.log(member.fullDetails());
// My Name Is Elzero, My Age Is 38, I Live in Egypt
console.log("============================")

// 02


// Method One
// Create Your Object Here
let objMethodOne = {property:"Method One"}
console.log(objMethodOne.property); // "Method One"

// Method Two
// Create Your Object Here
let objMethodTwo = new Object({property:"Method Two"})
console.log(objMethodTwo.property); // "Method Two"

// Method Three
// Create Your Object Here
let objMethodThree = Object.create({property:"Method Three"})
console.log(objMethodThree.property); // "Method Three"

// Method Four
// Create Your Object Here
let objMethodFour = Object({property:"Method Four"})
console.log(objMethodFour.property); // "Method Four"
console.log("============================")


// 03

let a2 = 1;

let threeNums = {
  b: 2,
  c: 3,
  d: 4,
};

let twoNums = {
  e: 5,
  f: 6,
};

// Create Your Object Here in One Line
let finalObject = Object.assign({a} , threeNums , twoNums )
console.log(finalObject);
console.log("============================")

/*
  a: 1
  b: 2  
  c: 3
  d: 4
  e: 5
  f: 6
*/


// 04

let myFavGames = {
    "Trinity Universe": {
      publisher: "NIS America",
      price: 40,
    },
    "Titan Quest": {
      publisher: "THQ",
      bestThree: {
        one: "Immortal Throne",
        two: "Ragnarök",
        three: "Atlantis",
      },
      price: 50,
    },
    YS: {
      publisher: "Falcom",
      bestThree: {
        one: "Oath in Felghana",
        two: "Ark Of Napishtim",
        three: "origin",
      },
      price: 40,
    },
};

let objectLength = Object.keys(myFavGames).length ;

for (let i = 0 ; i < objectLength ; i++){
    console.log(`My Game is ${Object.keys(myFavGames)[i]}`)
    console.log(`my publisher ${myFavGames[Object.keys(myFavGames)[i]].publisher}`)
    console.log(`my publisher ${myFavGames[Object.keys(myFavGames)[i]].price}`)

    if (myFavGames[Object.keys(myFavGames)[i]].bestThree !== undefined) {
    console.log("- Game Has Releases");
      console.log(`First => ${myFavGames[Object.keys(myFavGames)[i]].bestThree.one}`);
      console.log(`Second => ${myFavGames[Object.keys(myFavGames)[i]].bestThree.two}`);
      console.log(`Third => ${myFavGames[Object.keys(myFavGames)[i]].bestThree.three}`);
    }

    console.log("#".repeat(20))
}


