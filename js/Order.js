function Order() {
    this.coffees = [];
}

Order.prototype.addCoffee = function(coffee) {
    this.coffees.push(coffee);
};

Order.prototype.getPrice = function() {
    var coffeePrice = 0;
    for (var s = 0; s < this.coffees.length; s++){
        coffeePrice = coffeePrice + this.coffees[s].getPrice();
    }
    return coffeePrice;
}