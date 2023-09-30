// const itemInput = document.getElementById("itemInput");
// const addItemButton = document.getElementById("addItemButton");
// const itemList = document.getElementById("itemList");

// function addItem() {
//   const newItemText = itemInput.value.trim();

//   if (newItemText !== "") {
//     const listItem = document.createElement("li");
//     listItem.textContent = newItemText;

//     itemList.appendChild(listItem);

//     itemInput.value = "";
//   }
// }

// addItemButton.addEventListener("click", addItem);

 //Counter

// const num = document.getElementById("number");
// const plusButton = document.getElementById("btn");
// const minusButton = document.getElementById("btn1");
// let count = 0;

// function updateCounter() {
//     num.textContent = count;
// }

// plusButton.addEventListener("click", function () {
//     count = count + 1; 
//     updateCounter(); 
// });


// minusButton.addEventListener("click", function () {
//     if (count > 0) {
//         count--; 
//         updateCounter(); 
//     }
// });

// const first = parseFloat(document.getElementById("first").value);
// const second= (document.getElementById("operator").value);
// const third = parseFloat(document.getElementById("second").value);
// const plus = document.getElementById("plus");
// const btn = document.getElementById("btn");

// btn.addEventListener("click", function () {
//     const num1 = parseFloat(first.value);
//     const num2 = parseFloat(third.value);
//     const operator = second.value;

//     let result;
//     if(operator === '+') {
//    result = num1 + num2; 
//    }
//    if(operator === '-') {
//     result = num1 - num2; 
//     }
//     if(operator === '*') {
//         result = num1 * num2; 
//         }
//         if(operator === '/') {
//             result = num1 / num2; 
//             }
//    plus.textContent = `Result: ${result}`;
//    console.log(result);

// })
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }
  
  const generateRandomNumber = getRandomInt(1, 100); // Generates a random integer between 1 and 99
  console.log(generateRandomNumber);
  var i = 0;
  while(i<10){
  function checkRandomNumber() {
    const userInput = document.getElementById("userInput").value;
    const randomNumber = generateRandomNumber();
  
    const resultElement = document.getElementById("result");
  
    if (parseInt(userInput) === randomNumber) {
      resultElement.textContent = "true";
    } else {
      resultElement.textContent = "false";
    }
  }
i++;
  }

      
    
     
     
        
           
    
   



