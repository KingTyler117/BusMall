'use strict';

// Create a constructor function that creates an object associated with each product, and has the following properties:
// Name of the product
// File path of image

function Product(productName,filePath) {
  this.productName = productName;
  this.filePath = filePath;
  this.timesClicked = 0;
  this.timesDisplayed = 0;
  allProducts.push(this);

}


var totalClicks = 0;

//  Putting items all into an array.

var allProducts = ('bag', '/images/bag.jpg');
new Product ('banana', '/ images/banana.jpg');
new Product ('boots' , '/images/bag.jpg'); 
new Product ('bathroom' , '/images/bathroom.jpg');
new Product ('breakfast' , '/images/breakfast.jpg');
new Product ('bubblegum' , '/images/bubble gum.jpg');
new Product ('chair' , '/images/chair.jpg');
new Product ('cthulhu' , '/images/cthulhu.jpg');
new Product ('dog-duck , '/images/dog-duck.jpg'); 
new Product ('dragon' , '/images/dragon.jpg');
new Product ('pen' , '/images/pen.jpg');
new Product ('pet-sweep' , '/images/pet-sweep.jpg');
new Product ('scissors' , '/images/scissors.jpg');
new Product ('shark , '/images/shark.jpg');
new Product ('sweep' , '/images/sweep.jpg');
new Product ('tauntaun' , '/images/tauntaun.jpg');
new Product ('unicorn' , '/images/unicorn.jpg');
new Product ('usb' , '/images/usb.jpg');
new Product ('unicorn' , '/images/unicorn.jpg');
new Product ('water-can' , '/images/water-can.jpg');
new Product ('wine-glass' , '/images/wine-glass.jpg');

ProductImage.prototype.products = function()[
    // creating a element img
    var imageElement = document.createElement('img');
    imageElement.setAttribute('src', this.filePath');
    imageElement.setAttribute('alt' , this.alt);
    parent.appendChild(imageElement);
]

// helper function 
function randomNumber (min=0,max){
    return Math.floor(Math.random() * (max-min + 1)) + min;
}

function getRandomProduct(){
    parent.textContent = '';
}

// Call my random number function to get a random index position. That will be my random index position.

var randomIndex === (0,allProducts.length-1);

var secondRandomIndex = randomNumber (0, allProducts.length-1 );

allProducts[secondRandomIndex] .products();
allProducts[secondRandomIndex] .views++;
}

getRandomProduct();

