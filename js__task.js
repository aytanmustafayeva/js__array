// // 4
// let user = {
//   name: "name1",
//   surname: "surname1",
//   age: "age1",
//   gmail: "gmail@gmail.com",
// };

// user["address"] = "address1";
// console.log("address" in user);
// console.log(user);

// // 1
// let object = { name: "name1", surname: "surname1", age: "age1" };

// let address = "address";

// if (object.address == "address") {
//   console.log(true);
// } else {
//   console.log(false);
// }

// console.log(object);

// // 2
// let person = ["person1", "person2", "person3"];

// let person4 = "person4";

// if (!person.includes(person4)) {
//   person.push(person4);
//   console.log(person.indexOf(person4));
// } else {
//   console.log(false);
// }

// console.log(person);

// // 3

// let cars = ["Mercedes", "Volvo", "BMW"];

// let color = "brown";

// if (!cars.includes(color)) {
//   cars.push(color);
// }

// console.log(cars);

// // 5
// let student = {
//   name: "name1",
//   age: "20",
// };

// student["height"] = 1.75;

// console.log(student);

// function nameString(name){
// 	var a = "Edabit"
// 	var result = name + a
//   	return result
// }

// let arr = [ 2, 4, 5, 8, 40, 12, 15, 19];

// let n = 0;

// for (let i in arr) {
//   n++;
// }

// console.log(n);

// let array = [2, 4, 6, 8, 10];

// let array1 = [];
// for (let i = 0; i < array.length; i++) {
//   array1[i] = array[i] * 3;
// }

// console.log(array1);

// // 2
// let b = ["apple", "banana", "cherry", "date"];

// let longest = [];

// for (let index = 0; index < b.length; index++) {
//   if (longest[0] && longest[0].leng == b[i].length)
//     if (!longest[0] || longest[0].leng <= b[i].length) {
//       longest.length = 0;
//       longest.push({
//         word: (b = [i]),
//         leng: b[i].length,
//       });
//     }
// }

// longest.forEach(word);
// console.log(word.word);

// console.log(longest);

// // 3

// const students = [
//   { name: "Alice", grade: 90 },
//   { name: "Bob", grade: 85 },
//   { name: "Charlie", grade: 92 },
// ];

// let sum = 0;
// for (let i = 0; i < array.length; i++) {
//   sum += students[i].grade;
// }

// console.log(sum / students.length);

// // calculate bmi
// const person = {
//   weight: 65,
//   height: 1.85,
// };

// const bmiCalc = () => {
//   let bmi = person.weight / person.height ** 2;
//   return bmi;
// };

// let bmiValue = bmiCalc();
// console.log(bmiValue);
// if (bmiValue < 16) {
//   console.log("severe Thinness");
// } else if (bmiValue >= 18.5 && bmiValue <= 25) {
//   console.log("normal");
// } else if (bmiValue >= 25 && bmiValue <= 40) {
//   console.log("obese class 22");
// } else {
//   console.log("obese class111");
// }

// 7
// function addUp(num) {
//   let sum = 0;
//   for (let i = 1; i <= num; i++) {
//     sum += i;
//   }
//   return sum;
// }

// 8

// let str = "hello world";
// function myFunc(str) {
//   let sum = 0;
//   for (let i = 0; i < str.length; i++) {
//     sum++;
//   }
//   return sum;
// }

// console.log(myFunc(str));

// 11
// let arr = [1, 2, 4, 10, 5, 7, 8, 11, 13, 14, 125];
// let arr1 = [];
// let arr2 = [];
// function myFunction(arr) {
//   for (let i = 0; i <= arr.length; i++) {
//     if (i % 2 == 0) {
//       arr1.push(arr[i]);
//     } else {
//       arr2.push(arr[i]);
//     }
//   }
//   return [arr1, arr2];
// }

// console.log(myFunction(arr));

// const tree = [
//   "ulu baba",
//   "ulu nene",
//   ["baba", "nene", ["ogul", "qiz", ["neve", "neve2", ["kotukce", "kotukce2"]]]],
// ];

// console.log(tree);

// let arr=[];

// const nestedArray = [
//   [1, 2],
//   [3, 4],
//   [5, [6, 7]]
// ];

// const flatArray = [];

// for (let i = 0; i < nestedArray.length; i++) {
//   const subArray = nestedArray[i];
//   for (let j = 0; j < subArray.length; j++) {
//     const element = subArray[j];
//     if (Array.isArray(element)) {
//       // If the element is an array, flatten it further
//       for (let k = 0; k < element.length; k++) {
//         flatArray.push(element[k]);
//       }
//     } else {
//       flatArray.push(element);
//     }
//   }
//     for (let j = 0; j < subArray.length; j++) {
//     const element = subArray[j];
//     if (Array.isArray(element)) {
//       // If the element is an array, flatten it further
//       for (let k = 0; k < element.length; k++) {
//         flatArray.push(element[k]);
//       }
//     } else {
//       flatArray.push(element);
//     }
//   }
// }

// console.log(flatArray);

// const tree = [
//   "ulu baba",
//   "ulu nene",
//   ["baba", "nene", ["ogul", "qiz", ["neve", "neve2", ["kotukce", "kotukce2"]]]],
// ];

// const mainArray = [];

// for (let i = 0; i < tree.length; i++) {
//   const array1 = tree[i];
//   if (Array.isArray(array1)) {
//     for (let j = 0; j < array1.length; j++) {
//       const array2 = array1[j];
//       if (Array.isArray(array2)) {
//         for (let k = 0; k < array2.length; k++) {
//           const array3 = array2[k];
//           if (Array.isArray(array3)) {
//             for (let l = 0; l < array3.length; l++) {
//               const array4 = array3[l];
//               if (Array.isArray(array4)) {
//                 for (let m = 0; m < array4.length; m++) {
//                   mainArray.push(array4[m]);
//                 }
//               } else {
//                 mainArray.push(array4);
//               }
//             }
//           } else {
//             mainArray.push(array3);
//           }
//         }
//       } else {
//         mainArray.push(array2);
//       }
//     }
//   } else {
//     mainArray.push(array1);
//   }
// }

// console.log(mainArray);

// let str = "hello world";
// function myFunc(str) {
//   let sum = 0;
//   for (let i = 0; i < str.length; i++) {
//     sum++;
//   }
//   return sum;
// }

// console.log(myFunc(str));

// const n = [4, 9, 3, 7, 8, 2, 48, 65, 14, 54, 58];

// const k = 3;

// let max = n[0];

// let array = [];

// function myFunction(n) {

//   for (let i = 0; i < k; i++) {
//     if (n[i] > max) {
//       array.push(n[i]);
//     } else {
//     }
//   }
//   return array;
// }

// console.log(myFunction(n));

// const n = [4, 9, 3, 7, 8, 2, 48, 65, 14, 54, 58];

// const k = 3;

// let max = n[0];

// let array = [];

// function myFunction(n) {
//   for (let i = 0; i < n.length; i++) {
//     for (let j = 0; j < k; j++) {
//       if (n[j] > max) {
//         array.push(n[j]);
//         n.shift(k-k);
//         for (let a = 0; a < k; a++) {
//           if (n[a] > max) {
//             array.push(n[a]);
//             n.shift(k-k);
//               for (let l = 0; l < k; l++) {
//               if (n[l] > max) {
//                 array.push(n[l]);
//                 n.shift(k-k);
//             }else {

//             }

//           }
//         }else {

//         }

//       }
//     } else {

//       }
//     }
//     return array;
//   }
// }

// console.log(myFunction(n));

// function isPalindrome(str) {
//   // Remove all non-alphanumeric characters and convert the string to lowercase
//   let cleanedStr = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();

//   // Reverse the cleaned string
//   let reversedStr = cleanedStr.split('').reverse().join('');

//   // Check if the cleaned string is equal to the reversed string
//   return cleanedStr === reversedStr;
// }

// const n = [4, 9, 3, 7, 8, 2, 48, 65, 14, 54, 58];

// const k = 3;

// let max = n[0];

// let array = [];

// function myFunction(n) {
//   for (let i = 0; i <= n.length; i++) {
//       for (let j = 0; j < k; j++) {
//         if (n[j] > max) {
//           array.push(n[j]);
//           n.shift(k - k);
//         } else {
//         }
//       }
//     }

//     return array;
//   }

// console.log(myFunction(n));

// let str = "car";

// function myFunction(str) {
//   let str2 = str.split("").reverse().join("");
//   if (str2 === str) {
//     console.log(true);
//   } else {
//     console.log(false);
//   }
//   return str2
// }

// console.log(myFunction(str));

//  let str = '12321455';
//  let arr=[];
// function myFunction(str) {
//   for (let i = 0; i < str.length; i++) {
//     arr.push(str[i]);
//   }
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] !== arr.pop())
//       return false;
//   }

//   return true;
// }

// console.log(myFunction(str));

// let str = '12321455';
// let str1='12356828'
// let arr1=[];
// let arr=[];
// function myFunction(str) {
//  for (let i = 0; i < str.length; i++) {
//    arr.push(str[i]);
//  }
//  for (let i = 0; i < str1.length; i++) {
//   arr1.push(str1[i]);
// }
//  for (let i = 0; i < str.length; i++) {
//    if (arr.length) {
//     arr.shift() !== arr1.pop()
//          return false;

//    }
//  }
//  if(arr1.length) {
//   return false;
// }

//  return true;
// }

// console.log(myFunction(str));

// let text = 'hello world';

// const vowels='aioueAEUIO';

// let result='';

// function replace(text) {
//          for (let i = 0; i < text.length; i++) {
//            if(vowels.includes(text[i])) {
//              result[i] += "*";

//           }
//           else {
//              result+=text[i];
//           }

// }
// return result;
// }

// console.log(replace(text));

//task - count of words

// let text = "hello world shfgnikfg grge gfegreg egegerg"

// let count = 0;

// function counts(text) {
// for (let i = 0; i < text.length; i++) {
// if(text[i]!== ' ' ){
//      count++;

// }

// }

// return count;

// }

// console.log(counts(text));

//task -  find uppercase words

// let text = " ahi Hi my Name Is Qytan dkdkdkd"

// let uppercaseLetters=[];

// function myFunc(text) {
//   for(let i=0; i<text.length; i++) {
//    let char= text[i];
//    if (char >= 'A' && char <= 'Z') {
//     uppercaseLetters.push(char);
// }

//   }
//   return uppercaseLetters;

// }

// console.log(myFunc(text));

// task -  count vowels in text
// function countVowels(text) {
//   const vowels = "aeiouAEIOU";
//   let vowelCount = 0;

//   for (let i = 0; i < text.length; i++) {
//       if (vowels.indexOf(text[i]) !== -1) {
//           vowelCount++;
//       }
//   }

//   return vowelCount;
// }

// console.log(countVowels(text));

//  task - cumlede butun sozleri ters cevir

// let task = 'cumlede butun sozleri ters cevir'
// let newstr='';

// function name(task) {
//     for (let i = 0; i < task.length; i++) {
// if(task[i]  )
//     }

// }

// var a = 90;
// doit();
// function doit(){
//   console.log(a);
//   var a = 10;
// }

// console.log(4.toString());
// console.log(4.2.toString());
// console.log(4*undefined);

// const n = [4, 9, 3, 7, 8, 2, 48, 65, 14, 54, 58];

// const k = 3;

// let max = n[0];

// let array = [];

// function myFunction(n) {
//   for (let i = 0; i <= n.length; i++) {
//       for (let j = 0; j < k; j++) {
//         if (n[j] > max) {
//           array.push(n[j]);
//           n.shift(k - k);
//         } else {
//         }
//       }
//     }

//     return array;
//   }

// console.log(myFunction(n));

const n6 = [
  [7, 3, 11, 5, 20, 4],
  [8, 1, 6, 2, 5, 11],
  [4, 19, 9, 22, 12, 1],
  [13, 16, 15, 8, 2, 6],
];

let array = [];
let max1 = n6[0][0];

// [2,3]

function myFunc(n6) {
  for (let i = 0; i < n6.length; i++) {
    for (let j = i; j < n6[i].length; j++) {
      if (max1 < n6[i][j]) {
        max1 = n6[i][j];
        array = [i, j];
      }
    }
  }
  return array;
}

console.log(myFunc(n6));




// let num1='2';
// let num2='3';
// let num = '0';
// var multiply = function(num1, num2) {
//    if(num1 ===0 || num2===0) {
// return '0';
//    } 
//    for (let i = 0; i < array.length; i++) {
    
//    }


// };

// console.log(multiply(num1,num2));



// task from leetcode - sum two elements in array 9


// let nums = [2,7,11,15];
// let target = 9;
// let twoSum = function(nums, target) {

// for(var i =0;i<nums.length;i++){
//   let item = nums[i];   
//   for(var j=0; j < nums.length;j++){
//       let item2 = nums[j];
//       let sum = item + item2;
      
//   if(sum === target ){
//     return [i,j];
    
//   }
// }
// }

// }

// console.log(twoSum(nums, target));



// 1. menfileri silin

const nums1 = [ -1, 5, 2, -4, -5, 7, 9 ];
 
let result = nums1.filter(newArray) 

function newArray(nums) {
  return nums>=0;
}

console.log(result);


// 2. ededlerin cemini tapin

const nums2 = [ -2, 5, -3, 4, 8, -8 ];

// function sum(nums2) {
//   let sum = 0;
// for (const item of nums2) {
//     sum += item;
//   }
//   return sum;
// }

// console.log(sum(nums2));



let arr1 =nums2.reduce((sum,value) => {
  return sum+=value
},0)

console.log(arr1);


// 3. ededlerin her birini kvadrati ile evez edin

const nums3 = [ -1, 0, 3, 2, 8 ];

const newArr = nums3.map(square);

function square(num) {
  return num * num;
   
}

console.log(newArr);

// 4. yasi 18den yuxari olanlari saxlayi, qalanlarini silin.

const users4 = [
    {
        name: "User1",
        age: 18
    },
    {
        name: "User2",
        age: 16
    },
    {
        name: "User3",
        age: 21
    },
    {
        name: "User4",
        age: 23
    },
    {
        name: "User5",
        age: 15
    },
    {
        name: "User6",
        age: 13
    },
    {
        name: "User7",
        age: 19
    },
    {
        name: "User8",
        age: 17
    },
]


let result1 = users4.filter(newArray1) 

function newArray1(arr) {
  return arr.age>=18;
}

console.log(result1);
 


// 5. users4'da her userin yasinin uzerine 1 gelin

let result2 = users4.filter(newArray2) 

function newArray2(arr) {
  return arr.age ++;
}

console.log(result2);
 


// 1. Bir funksiya təyin edin və bu funksiyanı 4 saniyədən sonra çağıraraq konsola bir mesaj yazdırın.

// let timeout;

// function setTimeout() {
//   timeout = setTimeout(function myFunction() {
//     alert("Hello!");
//   }, 4000);
// }

setTimeout(() => {
  console.log("hi");
}, 4000);



console.log("start");

setTimeout(() => console.log("A"), 1);
setTimeout(() => console.log("b"), 5);
setTimeout(() => console.log("c"), 0);
setTimeout(() => console.log("d"), 6);

console.log("end");

// 2. Təsadüfi bir vaxt erzinde (1 ile 5 Saniyə Arasında) Gözləyib, Konsola Bir Mesaj  yazdirin