var coffee1 = new Coffee("tall", "americano");

coffee1.addSubcomponent(new Subcomponent("espresso"));

console.log(coffee1.getName());
console.log(coffee1.getPrice());


var coffee2 = new Coffee("short", "latte");

coffee2.addSubcomponent(new Subcomponent("hazelnutSyrup"));
coffee2.addSubcomponent(new Subcomponent("sugar"));
coffee2.addSubcomponent(new Subcomponent("sugar"));
coffee2.addSubcomponent(new Subcomponent("cream"));

console.log(coffee2.getName());
console.log(coffee2.getPrice());
