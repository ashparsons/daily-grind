function Coffee(size, style) { 
    
    this.subcomponents = [];
    this.size = size;
    this.style = style;
    
    this.sizePrice = 0;
    this.sugars = 0;
    this.espressos = 0;
    
    if(this.size === "short") {
        this.sizePrice = 12;
        this.addSubcomponent(new Subcomponent("espresso"));
    } else if(this.size === "tall") {
        this.sizePrice = 14;
        this.addSubcomponent(new Subcomponent("espresso"));
        this.addSubcomponent(new Subcomponent("espresso"));
    } else if(this.size === "grande") {
        this.sizePrice = 16;
        this.addSubcomponent(new Subcomponent("espresso"));
        this.addSubcomponent(new Subcomponent("espresso"));
        this.addSubcomponent(new Subcomponent("espresso"));
    }

    if(this.style === "americano"){
        //Nothing extra added
    } else if(this.style === "latte"){
        this.addSubcomponent(new Subcomponent("initialMilk"));
    } else if(this.style === "cappuccino"){
        this.addSubcomponent(new Subcomponent("initialCream"));
    }
    
    //initialmilk/cream (Subcomps) empty strings
}

Coffee.prototype.addSubcomponent = function(subcomponent) {
    this.subcomponents.push(subcomponent);
};

Coffee.prototype.getName = function() {
    var coffeeName = "";
    
    coffeeName = this.style;
    for (var r = 0; r < this.subcomponents.length; r++){
        if (this.subcomponents[r].getName() === " with cream" || this.subcomponents[r].getName() === " with milk") {
            coffeeName = coffeeName + this.subcomponents[r].getName();
        } else if (this.subcomponents[r].getName() === "Sweet ") {
            this.sugars = this.sugars +1;
        } else if (this.subcomponents[r].getName() === " ") {
            this.espressos = this.espressos +1;
        } else {
            coffeeName = this.subcomponents[r].getName() + coffeeName;
        }
    } 
    
    if (this.sugars === 1 || this.sugars === 2) {
        coffeeName = "Sweet " + coffeeName;
    }
    if (this.size === "small" && this.espressos > 1) {
        coffeeName = "redeye " + coffeeName;
    }
    if (this.size === "tall" && this.espressos > 2) {
        coffeeName = "redeye " + coffeeName;
    }
    if (this.size === "grande" && this.espressos > 3) {
        coffeeName = "redeye " + coffeeName;
    } 
    
    coffeeName = this.size + " " + coffeeName;
    return coffeeName;
}

Coffee.prototype.getPrice = function() {
    var coffeePrice = this.sizePrice;
    
    for (var r = 0; r < this.subcomponents.length; r++){
        var coffeePrice = coffeePrice + this.subcomponents[r].getPrice();
    }
    
    return coffeePrice;
}