/*1.starting off with number ofbars as 20 and an 
    empty array to store them. */

let numberOfBars = 20;
let arrayOfBars = [];

/*This initilizes bars at every refresh of page.*/
init()

/*2.This function initilizes bars.*/

function init() {
  for (let i = 0; i < numberOfBars; i++) {
    arrayOfBars[i] = 100 * Math.random();
  };
  createBars();
}

/*This starts the animation process.*/
function play() {
  const copy = [...arrayOfBars];
  const swaps_2 = bubbleSort(copy);
  animateBars(swaps_2);
}

/*4.This function will Controll the sorting process*/
function animateBars(swaps_2) {

  /*This conditional statment get executed when 
  there is no more elements left unsorted.*/
  if (swaps_2.length == 0) {

    /*One last call to the function to show the all
      bars in black.*/
    createBars();

    return;
  }
  const [i, j] = swaps_2.shift();
  [arrayOfBars[i], arrayOfBars[j]] =
    [arrayOfBars[j], arrayOfBars[i]];
  createBars([i, j]);

  /*This timeOut function controlls animation speed*/
  setTimeout(() => {
    animateBars(swaps_2);
  }, 50);
}

/*function to sort the bars in ascending order 
    using Bubble Sort.*/
function bubbleSort(arrayOfBars) {

  /*This array (swaps_1) logs the array element 
  which are being compaired.*/
  const swap_1 = [];

  do {
    var swapped = false;
    for (let i = 1; i < arrayOfBars.length; i++) {
      if (arrayOfBars[i - 1] > arrayOfBars[i]) {
        swapped = true;
        swap_1.push([i - 1, i]);
        [arrayOfBars[i], arrayOfBars[i - 1]] = [
          arrayOfBars[i - 1],
          arrayOfBars[i]
        ];
      };
    };
  } while (swapped);

  /* this return statment returns the logged values 
  to the function call inside the play function.*/
  return swap_1;

}

/*3.This is to generate bars and display.*/
function createBars(indices) {
  container.innerHTML = "";
  for (let i = 0; i < arrayOfBars.length; i++) {
    let bar = document.createElement("div");
    bar.style.height = `${arrayOfBars[i]}%`;
    bar.classList.add("bar");

    /*This conditional statement is to change the 
      color of elements that are being compaired.*/
    if (indices && indices.includes(i)) {
      bar.style.backgroundColor = 'red';
    };
    container.appendChild(bar);
  }
}
