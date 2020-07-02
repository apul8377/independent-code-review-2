// //~~~~~~~~Business Logic~~~~~~~~~~
//The constructor to store our customer order history
function CustomerDb() {
  this.customers = [];
  this.orderNumber = 0;
}
//This is our prototype to store both increment the order number and store the name and order number in the DB
CustomerDb.prototype.storeCustomers = function (customer) {
  customer.id = this.assignOrderNumber();
  this.customers.push(customer);
};

//This is where we will increment an order number by 1 to associate with each new order
CustomerDb.prototype.assignOrderNumber = function () {
  this.orderNumber += 1;
  return this.orderNumber;
};

//The constructor to build a customer with an associated id/order number
function Customer(name) {
  this.name = name;
  //this.orderNumber = 0;
}

//This is our Pizza Object Constructor where user's choices will be stored
function CustomerOrder(crust, size, toppings, price) {
  this.crust = crust;
  this.size = size;
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
