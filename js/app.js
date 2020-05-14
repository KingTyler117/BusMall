'use strict';

// Create a constructor function that creates an object associated with each product, and has the following properties:
// Name of the product
// File path of image

var uniqueIndexArray = [];
var allBusMall = [];
var parentElement = document.getElementById('container');
var totalVotes = 0;
var names = [];
var votes = [];
var rounds = 25;

// Render images to the dom

function BusmallImage (name, extension, views=0 , votes=0) {
  this.filepath = `images/${name}${extension}`;
  this.alt = name;
  this.votes = votes;
  this.views = views;
  this.title = name;
  this.extension = extension;
  allBusMall.push(this);

}

BusmallImage.prototype.render = function (){

  var imageElement = document.createElement('img');
  imageElement.src = this.filepath;
  imageElement.alt = this.alt;
  imageElement.title = this.title;
  this.views++;
  parentElement.appendChild(imageElement);

};



function getTotals (){

  // Getting data from local storage.

  var data = localStorage.getItem('votes');

  if (data === null){
    totalVotes = 0;
  } else {
    var totalData = JSON.parse(data);
    totalVotes = totalData;

  }
}
getTotals();

// Step 1. turn the thing you want to save in Local Storage into JSON
// JSON.stringify()

// var stringifiedVotes = JSON.stringify(votes);
// console.log('this is the Json for the all Votes array' , stringifiedVotes);

// // Step 2. set the item into Local Storage. Give it any key you want as a string and set the value as the JSON

// localStorage.setItem('votes' , stringifiedVotes);

// // Step 3. to get something out of local storage, we are going to get an item

// var votesFromLocalStorage = localStorage.getItem('votes');

// console.log('this is my votes from Local Storage' , votesFromLocalStorage );

// // Step 4. turn it back into javascript

// var votesTurnedBackIntoJavaScript = JSON.parse(votesFromLocalStorage);
// console.log('my parsed votes' , votesTurnedBackIntoJavaScript);


// The returned votes array is now a normal array of objects and it has lost its connection to the constructor


//  Putting items all into an array.

function starter(){
  var save = localStorage.getItem('saveAllProducts');
  if (save === null ){
    new BusmallImage('bag', '.jpg');
    new BusmallImage ('banana', '.jpg');
    new BusmallImage ('boots' , '.jpg');
    new BusmallImage ('bathroom' , '.jpg');
    new BusmallImage('breakfast' , '.jpg');
    new BusmallImage ('bubblegum' , '.jpg');
    new BusmallImage ('chair' , '.jpg');
    new BusmallImage ('cthulhu' , '.jpg');
    new BusmallImage ('dog-duck' , '.jpg');
    new BusmallImage ('dragon' , '.jpg');
    new BusmallImage ('pen' , '.jpg');
    new BusmallImage ('pet-sweep' , '.jpg');
    new BusmallImage ('scissors' , '.jpg');
    new BusmallImage ('shark' , '.jpg');
    new BusmallImage ('sweep' , '.png');
    new BusmallImage ('tauntaun' , '.jpg');
    new BusmallImage('unicorn' , '.jpg');
    new BusmallImage ('usb' , '.gif');
    new BusmallImage ('unicorn' , '.jpg');
    new BusmallImage ('water-can' , '.jpg');
    new BusmallImage ('wine-glass' , '.jpg');

  }else{
    // This is where we re create Busmall images.
    var oldProducts = JSON.parse(save);
    for( var i =0; i<oldProducts.length; i ++){
      var name =  oldProducts[i] .alt;
      var extension = oldProducts[i] .extension;
      var votes = oldProducts[i].votes;
      var views = oldProducts[i].views;
      new BusmallImage (name , extension, views, votes);
    }
    // console.log(oldProducts);
  }
  displayImage();
  displayImage();
  displayImage();

  parentElement.addEventListener ('click' , handleClick);

}
starter();


function getRandomIndex (){

  var index = getRandomNumber (allBusMall.length);
  // While loop will will check to make sure that my index is unique will get a index if it is in the uniqueIndexArray
  while(uniqueIndexArray.includes (index)){
    index = getRandomNumber (allBusMall.length);
  }

  uniqueIndexArray.push(index);

  // if my array is more than 6 items long, I need to shift from the beginning

  if(uniqueIndexArray.length > 3 ){
    uniqueIndexArray.shift();
  }

  // / select a random image from that array to render
  // helper function to generate a random number between 0 and the length of the array
  // render the object instance at that index to the DOM

  // make sure that the images are unique (to each other and previous images)
  // -- come back to this in a minute

  return index;
}

function getRandomNumber (max) {

  return Math.floor(Math.random() * max);
}

function displayImage(){
  var index = getRandomIndex();
  allBusMall[index].render();
}

function handleClick(event){
  // first - empty everything out
  parentElement.textContent = '';

  // figure out what was clicked
  var titleOfTheThingThatWasClickedOn = event.target.title;

  //  Loop through all of my object instance to compare titles so that I can find the one that was clicked on

  for(var i=0; i<allBusMall.length; i++) {
    if (titleOfTheThingThatWasClickedOn === allBusMall[i].title){
      // To add a vote

      allBusMall[i].votes++;
      totalVotes++;
    }

  }

  localStorage.setItem('votes', totalVotes);
  var productString = JSON.stringify(allBusMall);
  localStorage.setItem('saveAllProducts', productString);

  if(totalVotes === rounds) {
    // To turn off the event listener

    parentElement.removeEventListener ('click' ,handleClick);
    localStorage.removeItem('votes');
    makeNamesArray();

  } else {
    displayImage();
    displayImage();
    displayImage();
  }

  // listen for a click and render new images when we hear it
  // need to keep track of views and votes

}



// only allow 25 votes
// show results at the end

// / loop over all of my items and make an array of just the names of my items

var names = new Array();
console.log(names.length);

var votes = new Array ();
console.log(votes.length);



function makeNamesArray(){
  for(var i=0; i<allBusMall.length; i++){
    names.push(allBusMall[i].title);
    votes.push(allBusMall[i].votes);
  }

  generateChart ();
}

// Product counter

// for(var i = 0; i <allBusMall.length; i++){
//   if(event.target.allText === allBusMall[i].altText){
//     allBusMall[i].votes++;
//     updateChartArrays();
//   }

//   if (totalVotes < 1) {
//     totalVotes.section.removeEventListener('click' ,newSet);
//     totalVotes.innerHTML = '';
//     localStorage.setItem('staredProducts' , JSON.stringify(allBusMall));
//     drawChart;
//   }
//   randomtotalVotes();

// }

// Updating info to the array

function updateChartArrays() {
  for (var i = 0; i< totalVotes.allProducts.length; i++) {
    names [i] = totalVotes.allProducts[i].name;
    votes[i] = totalVotes.allProducts[i].votes;
  }
}

// Chart stuff

function generateChart(){
  var ctx = document.getElementById('myChart').getContext('2d');
  var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: names,
      datasets: [{
        label: '# of Votes',
        data: votes,
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }
    }
  });
}
