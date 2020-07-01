function CustomerId() {
  (this.customerInfo = []), (this.currentId = 0);
}

CustomerId.prototype.addCustomer = function (customer)({
  customer.id = this.assignId();
  this.customerInfo.push(customer),
})

CustomerId.prototype.assignId = function () {
  this.currentId += 1;
  return this.currentId;
}

  
  //UI logic~~~~~~~~~~~~~~~~~~~~
  
  CustomerId.prototype.getCustomerInfo()
{
  let username = document.getElementById("username").value
  let password = document.getElementId("password").value
 
    console.log("input received, validating....");
  let customer = [];
  customer.push(username, password);
  return customer;
}