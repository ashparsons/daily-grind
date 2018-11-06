function EmployeeOrder() {
    Order.call(this);
}

EmployeeOrder.prototype = Object.create(Order.prototype);

EmployeeOrder.prototype.getPrice = function() {
    var employeePrice = 0.25 * Order.getPrice;
    return Order.getPrice - employeePrice;
}