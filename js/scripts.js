//~~~~~~~~~~~Business Logic~~~~~~~~~~\\
///\/\/\/\/\/\CONSTRUCTORS\/\/\/\/\/\\\
//The constructor to store our customer order history

function CustomerDb() {
  this.customerOrders = [];
  this.currentNumber = -1;
}

//The constructor to build a customer with an associated id/order number
// function Customer(name) {
// }

//This is our Pizza Object Constructor where user's choices will be stored
function CustomerOrder(name, size, crust, sauce, cheese, toppings, total) {
  this.name = name;
  this.size = size;
  this.crust = crust;
  this.sauce = sauce;
  this.cheese = cheese;
  this.toppings = toppings;
  this.total = total;
}

///\/\/\/\/\/\PROTOTYPES\/\/\/\/\/\\\
//This is our prototype to store the customers order in the DB
CustomerDb.prototype.storeOrders = function (newCustomerOrder) {
  newCustomerOrder.id = this.assignId();
  this.customerOrders.push(newCustomerOrder);
};

CustomerDb.prototype.assignId = function () {
  this.currentNumber += 1;
  return this.currentNumber;
};

function assignPrice(size, toppings) {
  let small = 6.99;
  let medium = 8.99;
  let large = 10.99;
  let total = 0;
  let topTotal = 0;
  let addTop = 0.75;

  for (let i = 0; i <= toppings.length; i++) {
    topTotal = topTotal + addTop;
  }
  size = size.toString();
  if (size == "small") {
    total = small;
    total += topTotal;
    return total.toFixed(2);
  } else if (size == "medium") {
    total = medium;
    total += topTotal;
    return total.toFixed(2);
  } else if (size == "large") {
    total = large;
    total += topTotal;
    return total.toFixed(2);
  }
  total += topTotal;
  return total.toFixed(2);
}

// UI logic
let newCustomerDb = new CustomerDb();
$("document").ready(function () {
  $("form#submit-pizza").submit(function (event) {
    event.preventDefault();

    let size = $("#size").val();
    let crust = $("#crust").val();
    let sauce = $("#sauce").val();
    let name = $("input#username").val();
    const cheese = [];
    const toppings = [];
    $("input:checkbox[name=cheeses]:checked").each(function () {
      const cheeses = $(this).val();
      cheese.push(cheeses);
    });
    $("input:checkbox[name=topping]:checked").each(function () {
      const topping = $(this).val();
      toppings.push(topping);
    });

    let total = assignPrice(size, toppings);
    let newCustomerOrder = new CustomerOrder(
      name,
      size,
      crust,
      sauce,
      cheese,
      toppings,
      total
    );
    newCustomerDb.storeOrders(newCustomerOrder);
    $("input#username").val(" ");
    alert(
      "Thank you, " +
        name +
        "! You've ordered a " +
        newCustomerOrder.size +
        " " +
        newCustomerOrder.crust +
        " with " +
        newCustomerOrder.sauce +
        " sauce, and " +
        newCustomerOrder.cheese +
        " cheese(s). Your toppings are " +
        newCustomerOrder.toppings +
        ". Your order number is " +
        newCustomerDb.currentNumber +
        ". You're total is " +
        newCustomerOrder.total
    );
    console.log(newCustomerDb);
  });
});
