'use strict';

// first drill

// function max(numbers) {
//     let currentMax = numbers[0];
//     let i = 0; 
//     while (i < numbers.length) {
//         if (numbers[i] > currentMax) {
//             currentMax = numbers[i];
//         }
//         i++;
//     }
//     return currentMax;
// };
 

  
//   function min(numbers) {
//     let currentMin = numbers[0];
//     let i = 0;
//     while (i < numbers.length) {
//         if (numbers[i] < currentMin) {
//             currentMin = numbers[i];
//         }
//         i++;
//     }
//     return currentMin;
//   };
  
//   /* From here down, you are not expected to 
//      understand.... for now :)  
     
     
//      Nothing to see here!
     
//   */
  
//   // tests
  
//   function testFunctionWorks(fn, input, expected) {
//     if (fn(input) === expected) {
//       console.log('SUCCESS: `' + fn.name + '` works on `[' + input + ']`');
//       return true;
//     } else {
//       console.log(
//         'FAILURE: `' +
//           fn.name +
//           '([' +
//           input +
//           '])` should be ' +
//           expected +
//           ' but was ' +
//           fn(input)
//       );
//       return false;
//     }
//   }
  
//   function testEmpty(fn) {
//     if (fn([]) === null || fn([]) == undefined) {
//       console.log(`SUCCESS: ${fn.name} works on empty arrays`);
//       return true;
//     } else {
//       console.log(
//         `FAILURE: ${fn.name} should return undefined or null for empty arrays`
//       );
//       return false;
//     }
//   }
  
//   (function runTests() {
//     // we'll use the variables in our test cases
//     const numList1 = [-5, 28, 98, -20013, 0.7878, 22, 115];
//     const realMin1 = numList1[3];
//     const realMax1 = numList1[6];
//     const numList2 = [0, 1, 2, 3, 4];
//     const realMin2 = numList2[0];
//     const realMax2 = numList2[4];
  
//     const testResults = [
//       testFunctionWorks(max, numList1, realMax1),
//       testFunctionWorks(max, numList2, realMax2),
//       testFunctionWorks(min, numList1, realMin1),
//       testFunctionWorks(min, numList2, realMin2),
//       testEmpty(max),
//       testEmpty(min),
//     ];
  
//     const numPassing = testResults.filter(function(result) {
//       return result;
//     }).length;
//     console.log(numPassing + ' out of ' + testResults.length + ' tests passing.');
//   })();




  
//   //compute average

//   function average(numbers) {
//     let numbersTotal = 0;
//     numbers.forEach(function(num) {
//         numbersTotal += num;
//     });
//     return numbersTotal / numbers.length;
//   }
  
//   /* From here down, you are not expected to 
//      understand.... for now :)  
     
     
//      Nothing to see here!
     
//   */
  
//   // tests
  
//   function testFunctionWorks(fn, input, expected) {
//     if (fn(input) === expected) {
//       console.log('SUCCESS: `' + fn.name + '` works on `[' + input + ']`');
//       return true;
//     } else {
//       console.log(
//         'FAILURE: `' +
//           fn.name +
//           '([' +
//           input +
//           '])` should be ' +
//           expected +
//           ' but was ' +
//           fn(input)
//       );
//       return false;
//     }
//   }
  
//   (function runTests() {
//     const numList1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//     const correctAns1 = 5.5;
//     const numList2 = [0, -1, 1];
//     const correctAns2 = 0;
  
//     const testResults = [
//       testFunctionWorks(average, numList1, correctAns1),
//       testFunctionWorks(average, numList2, correctAns2),
//     ];
//     const numPassing = testResults.filter(function(result) {
//       return result;
//     }).length;
//     console.log(numPassing + ' out of ' + testResults.length + ' tests passing.');
//   })();
  



//   function repeat(fn, n) {
//     for (let i = 0; i < n; i++) {
//       fn();
//     }
//   }

//   function hello() {
//     console.log("hello world");
//   }

//   function goodbye() {
//     console.log("goodbye world");
//   }

// let hi = repeat(hello, 5);
// let bye = repeat(goodbye, 5);

// console.log(hi);
// console.log(bye);




// function filter(arr, fn) {
//     let newArray = [];

//   arr.forEach(item => fn(item) === true ? newArray.push(item) : undefined)
      
      
      
    

//     return newArray;
  
// }
// function(item) {
//   newArray.push(item);
// });

// DO NOT EDIT BETWEEN THESE LINES, BUT DO READ THE CODE ----->
// First we setup an array of strings we plan to filter:
// const myNames = ['Rich', 'Joe', 'Bhaumik', 'Ray'];

// We use your `filter` function here, capturing a new array into `filteredNames`
// comprised of names that only begin with 'R'
// const filteredNames = filter(myNames, function (name) {
  // This is known as a "predicate function" - it's a function that 
  // only returns a boolean
//   return name[0] === 'R';
// });

// console.log(filteredNames) // => ['Rich', 'Ray']
// <---- DO NOT EDIT BETWEEN THESE LINES


function hazardWarningCreator(typeOfWarning) {
  let warningCounter = 0;

  return function(location) {

    warningCounter++
    if (warningCounter === 1) {
      console.log(`"DANGER! There is a ${typeOfWarning} hazard at ${location}!"`)
      console.log(`"The ${typeOfWarning} hazard alert has triggered ${warningCounter} time today!"`)

    } else {
    console.log(`"DANGER! There is a ${typeOfWarning} hazard at ${location}!"`)
    console.log(`"The ${typeOfWarning} hazard alert has triggered ${warningCounter} time(s) today!"`)
    }
  }

}
// const rocksWarning = hazardWarningCreator('Rocks on the Road');
// const rainWarning = hazardWarningCreator('Slippery road');
// const snowWarning = hazardWarningCreator('Icy roads')

// rocksWarning("Main st and Pacific Ave");
// rainWarning("Downtown");
// snowWarning("Parking lot");
// rocksWarning("random location");


//for each, filter, and map

let turtle = [[0, 0], [0, 5], [-1, -3], [-3, 1], [2, -4], [3, 2]];

let filteredTurtle = turtle.filter(num => (num[0] >= 0) && (num[1] >= 0));
console.log(filteredTurtle);

let mappedTurtle = filteredTurtle.map(num => num[0] + num[1]);
console.log(mappedTurtle);

let forEachTurtle = mappedTurtle.forEach((num, i) => console.log(`Movement #${i+1}: ${num} steps`));
console.log(forEachTurtle);


//reduce drill

let input = 'noggin oreo the moon time tele steed his tent apollo her lives though shoo tofu budapest';

function decodedSentence(str) {
  let wordArray = input.split(' ');
  let finalString= wordArray.reduce(function(string, val){
    if (val.length === 3) {
    return string + ' ';
    } 
    
    else {
      return string + val[val.length-1].toUpperCase();
    }
  }, ' ');
  return finalString;
}

let testingFunction = decodedSentence(input);
console.log(testingFunction);

