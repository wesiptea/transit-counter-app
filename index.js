// TRANSIT COUNTER APP

// pseudo code:
// 1 intialize the count as 0
// 2 listen for clicks on the increment button
// 3 increment the count variable when the button is clicked
// 4 change the count-el in the HTML to reflect the new count

let saveEl = document.getElementById("save-el");
// 4 step one
let countEl = document.getElementById("count-el");
// console.log(countEl); - used to verify that the element is accessed

// 1 initialize count as 0
let count = 0;

// 2 listen for clicks on the increment button; this function will run each time button is clicked
function increment() {
    // console.log("Click"); - used to check for bugs

    // 3 increment the count when button is clicked
    count += 1;
    // shorthand for: count = count + 1;

    // 4 step two - update to the number counter on screen with click
    countEl.textContent = count;
}

function save() {
    let counterStr = count + " - ";
    saveEl.textContent += counterStr;
    // to make sure spacing remains intact: textContent preserves all info in strings - inc non-human readable content (i.e., spaces) - as innerText does not
}


// Notes:

// increment counter
// let count = 5
// count = count + 1
// console.log(count)

// logging out a specific number within a function
// function myNumber() {
//     console.log(42);
// }
// myNumber();
// 42

//  number of laps and total count logged out
// let lap1 = 34
// let lap2 = 33
// let lap3 = 36
// function lapCounter() {
//     console.log(lap1 + lap2 + lap3);
// }
// lapCounter();
// 103

// Create a function that increments the lapsCompleted variable with one
// Run it three times
// let lapsCompleted = 0
// function incrementLap() {
//     lapsCompleted = lapsCompleted + 1;
// }
// incrementLap();
// incrementLap();
// incrementLap();
// console.log(lapsCompleted);
// 3 -- for each incrementLap() function called



