function EmployeeOrder() {
    Order.call(this);
}

EmployeeOrder.prototype = Object.create(Order.prototype);

EmployeeOrder.prototype.getPrice = function() {
    var employeePrice = Order.getPrice * 0.75;
    return employeePrice;
}