function Subcomponent(ingredient) { 
    
    this.ingredient = ingredient;
}

Subcomponent.prototype.getName = function() {
        var subcomponentName = {
            
            "espresso": " ",
            "milk": " with milk",
            "cream": " with cream",
            "sugar": "sweet ",
            "hazelnutSyrup": "hazelnut ",
            "caramelSyrup": "caramel ",
            "initialMilk": "",
            "initialCream": ""
        
        
        };

        return subcomponentName[this.ingredient];
}

Subcomponent.prototype.getPrice = function() {
        var subcomponentPrice = {
            
            "espresso": 0.75,
            "milk": 0.50,
            "cream": 1.00,
            "sugar": 0.20,
            "hazelnutSyrup": 5.00,
            "caramelSyrup": 5.00,
            "initialMilk": 0.50,
            "initialCream": 1.00
            
        };

        return subcomponentPrice[this.ingredient];
}
