// //~~~~~~~~Business Logic~~~~~~~~~~
//The constructor to store our customer order history
function CustomerDb() {
  this.customers = [];
}

CustomerDb.prototype.storeCustomers = function (customer) {
  this.customers.push(customer);
};

//The constructor to build a customer with an associated id/order number
function Customer(name) {
  this.name = name;
  //this.orderNumber = 0;
}

//This is where we will increment an order number by 1 to associate with each new order
Customer.prototype.assignOrderNumber = function () {
  this.orderNumber += 1;
  return this.orderNumber;
};

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
  });
});
