// //~~~~~~~~Business Logic~~~~~~~~~~

//The constructor to build a customer with an associated id/order number
function CustomerDb() {
  (this.name = []), (this.orderNumber = 0);
}

//This is where we will increment an order number by 1 to associate with each new order
CustomerDb.prototype.assignOrderNumber = function () {
  this.orderNumber += 1;
  return this.orderNumber;
};

CustomerDb.prototype.storeCustomers = function (customer) {};

//~~~~~~~~~~~~UI logic~~~~~~~~~~~~
//This takes the users name from the html form and stores it in username. Then returns username

$("document").ready(function () {
  $("form#customer-info").submit(function (event) {
    event.preventDefault();
    let name = $("input#username").val();
    let newName = name;
    // let newNumber = assignOrderNumber();
    let newCustomer = new Customer(name, newNumber);
    storeCustomers(newCustomer);
    console.log(newCustomer);
  });
});
