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
