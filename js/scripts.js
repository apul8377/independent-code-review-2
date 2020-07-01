function CustomerId() {
  (this.customerInfo = []), (this.currentId = 0);
}

CustomerId.prototype.addCustomer = function (customer) {
  customer.id = this.assignId();
  this.customerInfo.push(customer);
};

CustomerId.prototype.assignId = function () {
  this.currentId += 1;
  return this.currentId;
};
function Customer(userName, passWord) {
  (this.userName = userName), (this.passWord = passWord);
}

//UI logic~~~~~~~~~~~~~~~~~~~~
let customerId = new CustomerId();
$(document).ready(function () {
  $("form#customer-info").submit(function (event) {
    event.preventDefault();

    const userName = $("input#username").val();
    const passWord = $("input#password").val();

    console.log("input received, validating....");
    let newCustomer = new Customer(userName, passWord);
    customerId.addCustomer(newCustomer);
  });
});
