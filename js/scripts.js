// //~~~~~~~~Business Logic~~~~~~~~~~
//The constructor to store our customer order history
function CustomerDb() {
  this.customers = [];
  this.orderNumber = 0;
}
//This is our prototype to store both increment the order number and store the name and order number in the DB
CustomerDb.prototype.storeCustomers = function (customer) {
  customer.orderNumber = this.assignOrderNumber();
  this.customers.push(customer);
};

//This is where we will increment an order number by 1 to associate with each new order
CustomerDb.prototype.assignOrderNumber = function () {
  this.orderNumber += 1;
  console.log(this.orderNumber);
  return this.orderNumber;
};

//The constructor to build a customer with an associated id/order number
function Customer(name) {
  this.name = name;
  this.orderNumber = 0;
}

//This is our Pizza Object Constructor where user's choices will be stored
function CustomerOrder(crustValue, sizeValue, sauceValue, toppings, price) {
  this.crustValue = crustValue;
  this.sizeValue = sizeValue;
  this.toppings = toppings;
  this.price = price;
}

//~~~~~~~~~~~~UI logic~~~~~~~~~~~~
//This takes the users name from the html form and stores it in username. Then returns username

let customerDb = new CustomerDb();
$("document").ready(function () {
  $("form#customer-info").submit(function (event) {
    event.preventDefault();
    let name = $("input#username").val();
    // let newNumber = assignOrderNumber();
    let customer = new Customer(name);
    customerDb.storeCustomers(customer);
    $("input#username").val(" ");
    $("#username-output").html(
      "Welcome, " + customer.name + "! Please begin building your pizza."
    );
  });
});

//function to get size.
function getSize() {
  let sizeValue = " ";
  if (document.getElementById("small").checked == true) {
    sizeValue = "small";
  } else if (document.getElementById("medium").checked == true) {
    sizeValue = "medium";
  } else if (document.getElementById("large").checked == true) {
    sizeValue = "large";
  } else {
    sizeValue = "Please select a size.";
  }
  console.log(sizeValue);
  return sizeValue;
}

//function to get crust type.
function getCrust() {
  let crustValue = " ";
  if (document.getElementById("thin").checked == true) {
    crustValue = "thin-crust";
  } else if (document.getElementById("wheat").checked == true) {
    crustValue = "wheat-crust";
  } else if (document.getElementById("stuffed").checked == true) {
    crustValue = "stuffed-crust";
  } else {
    crustValue = "Please select a crust.";
  }
  console.log(crustValue);
  return crustValue;
}

//function to get sauce type.
function getSauce() {
  let sauceValue = " ";
  if (document.getElementById("robust-tomato").checked == true) {
    sauceValue = "robust-tomato";
  } else if (document.getElementById("honey-barbeque").checked == true) {
    sauceValue = "honey-barbeque";
  } else if (document.getElementById("garlic-parmesan").checked == true) {
    sauceValue = "garlic-parmesan";
  } else {
    sauceValue = "Please select a sauce.";
  }
  console.log(sauceValue);
  return sauceValue;
}

function getToppings() {
  let toppingsValue = [];
  if (document.getElementById("pepperoni").checked == true) {
    toppingsValue.push("pepperoni");
  }
  if (document.getElementById("ham").checked == true) {
    toppingsValue.push("ham");
  }
  if (document.getElementById("sausage").checked == true) {
    toppingsValue.push("sausage");
  }
  if (document.getElementById("anchovies").checked == true) {
    toppingsValue.push("anchovies");
  }
  if (document.getElementById("scrambled-eggs").checked == true) {
    toppingsValue.push("scrambled-eggs");
  }
  if (document.getElementById("chicken").checked == true) {
    toppingsValue.push("chicken");
  }
  if (document.getElementById("bacon").checked == true) {
    toppingsValue.push("bacon");
  }
  if (document.getElementById("onions").checked == true) {
    toppingsValue.push("onions");
  }
  if (document.getElementById("roasted-garlic").checked == true) {
    toppingsValue.push("roasted-garlic");
  }
  if (document.getElementById("fresh-sliced-tomato").checked == true) {
    toppingsValue.push("fresh-sliced-tomato");
  }
  if (document.getElementById("pineapple").checked == true) {
    toppingsValue.push("pineapple");
  }
  if (document.getElementById("green-peppers").checked == true) {
    toppingsValue.push("green-peppers");
  }
  if (document.getElementById("mushrooms").checked == true) {
    toppingsValue.push("mushrooms");
  }
  if (document.getElementById("black-olives").checked == true) {
    toppingsValue.push("black-olives");
  }
  if (document.getElementById("spinach").checked == true) {
    toppingsValue.push("spinach");
  }
  if (document.getElementById("sun-dried-tomatoes").checked == true) {
    toppingsValue.push("sun-dried-tomatoes");
  }
  if (document.getElementById("fresh-jalapenos").checked == true) {
    toppingsValue.push("fresh-jalapenos");
  }
  console.log(toppingsValue);
  return toppingsValue;
}

function getCheeses() {
  let cheesesValue = [];
  if (document.getElementById("mozarella").checked == true) {
    cheesesValue.push("mozarella");
  }
  if (document.getElementById("cheddar").checked == true) {
    cheesesValue.push("cheddar");
  }
  if (document.getElementById("shredded-parmesan").checked == true) {
    cheesesValue.push("shredded-parmesan");
  }
  if (document.getElementById("feta").checked == true) {
    cheesesValue.push("feta");
  }
  if (document.getElementById("provolone").checked == true) {
    cheesesValue.push("provolone");
  }
  console.log(cheesesValue);
  return cheesesValue;
}
