$(function() {
        
    //UPDATE MODEL
    
    var updateModel = function() {
        // for each coffee in order
        // print its name
        // print its price
        for (var i = 0; i < order.coffees.length; i++) {
            var coffee = order.coffees[i];
            showOrders = coffee.getName();
            showPrices = coffee.getPrice();
            
            var row = '<tr id="orderRow">' +
            '    <td id="showOrders">' + showOrders + '</td>' +
            '    <td id="showPrices">' + showPrices + '</td>' +
            '    <td><button id="remove">Remove</button></td>' +
            '</tr>';
            $("#orderTable tbody").append(row);
        }
    };
    // Refelct the model - display the names and prices of all coffess ordered so far
    
    //UPDATE FORM
    
    var updateForm = function() {
        // Empty the form
        $("#coffeeOrder").find("#style").prop("checked", false);
        $("#coffeeOrder").find("#size").prop("checked", false);
        $("#coffeeOrder").find("#espressos").val("0");
        $("#coffeeOrder").find("#milk").val("0");
        $("#coffeeOrder").find("#cream").val("0");
        $("#coffeeOrder").find("#sugar").val("0");
        $("#coffeeOrder").find("#syrup").val("0");
        
        /*$("#coffeeOrder").find("#style").val("americano");
        $("#coffeeOrder").find("#size").val("short");
        $("#coffeeOrder").find("#espressos").val("0");
        $("#coffeeOrder").find("#milk").val("0");
        $("#coffeeOrder").find("#cream").val("0");
        $("#coffeeOrder").find("#sugar").val("0");
        $("#coffeeOrder").find("#hazelnutSyrup").val("0");
        $("#coffeeOrder").find("#caramelSyrup").val("0");*/
    }
    
    //REFRESH
    
    function refresh() {
        updateForm()
        // Empty the form
        updateModel()
        // Refelct the model - display the names and prices of all coffess ordered so far
    }
    
    //ORDER FORM
    
    $("#order").on("click", function(event) {
        
        event.preventDefault();
        
        var style = $('input[name="coffeestyle"]:checked').val();
        console.log(style);
        
        var size = $('input[name="coffeesize"]:checked').val();
        console.log(size);
        
        var espressos = parseInt($('input[name="shots"]:checked').val()); //$('#espressos').val();
        console.log(espressos);
        
        var milk = parseInt($('input[name="milkAdd"]:checked').val()); //$('#milk').val();
        console.log(milk);
        
        var cream = parseInt($('input[name="creamAdd"]:checked').val()); //$('#cream').val();
        console.log(cream);
        
        var sugar = parseInt($('input[name="sugars"]:checked').val()); //$('#sugar').val();
        console.log(sugar);
        
        var syrup = $('input[name="syrup"]:checked').val(); //var hazelnutSyrup = $('#hazelnutSyrup').val(); var caramelSyrup = $('#caramelSyrup').val();
        console.log(syrup);
        
        // Grab all the data from the form
        
        var coffee = new Coffee(size, style);
        // Create a new coffee object with the form data
        
        for (i = 0; i < espressos; i++){
            coffee.addSubcomponent(new Subcomponent("espresso"))
        }
        
        for (i = 0; i < milk; i++){
            coffee.addSubcomponent(new Subcomponent("milk"))
        }
        
        for (i = 0; i < cream; i++){
            coffee.addSubcomponent(new Subcomponent("cream"))
        }
        
        for (i = 0; i < sugar; i++){
            coffee.addSubcomponent(new Subcomponent("sugar"))
        }
        
        if (syrup === "hSyrup"){
            coffee.addSubcomponent(new Subcomponent("hazelnutSyrup"));
        }
        if (syrup === "cSyrup"){
            coffee.addSubcomponent(new Subcomponent("caramelSyrup"));
        }
        //Add components
        
        //ADD COFFEE
        
        order.addCoffee(coffee);
        console.log(order);
        // Add the coffee to the order object (in the model)
        
        var totalOrderPrice = $("#totalSoFar").append("R " + order.getPrice());
        
        
    
        var totalNormalPrice = $(".totalNormalOrder").append("R " + order.getPrice());
        var totalEmployeePrice = $("#totalEmployeeOrder").append("R " + order.getPrice() - (0.25 * order.getPrice()));
        //var totalEmployeePrice = $("#totalEmployeeOrder").append("R " + employeeOrder.getPrice());
        
        refresh()
        // refresh()
    });
    
    //RADIO BUTTONS
    
    $("input:radio").change(function () {
        //Show/hide elements
        if($('input:radio[name=coffeesize]:checked').val() == "short"){
            $('#1shot').show();
            $("label[for=2shot],#2shot").show();
            $("label[for=3shot],#3shot").show();
            $('#noShot').show();
        }
   });
    
    $("input:radio").change(function () {
        //Show/hide elements
        if($('input:radio[name=coffeesize]:checked').val() == "tall"){
            $('#1shot').show();
            $("label[for=2shot],#2shot").show();
            $("label[for=3shot],#3shot").hide();
            $('#noShot').show();
        }
   });
    
    $("input:radio").change(function () {
        //Show/hide elements
        if($('input:radio[name=coffeesize]:checked').val() == "grande"){
            $('#1shot').show();
            $("label[for=2shot],#2shot").hide();
            $("label[for=3shot],#3shot").hide();
            $('#noShot').show();
        }
    });
    
    //REMOVE ORDERS
    
    $("#orderTable").on('click','#remove',function(){
       $(this).closest('tr').remove();
    });
    
    //MODAL FUNCTIONALITY
    
    var modal = document.getElementById('paymentModal');
    var button = document.getElementById("ordernow");
    var close = document.getElementsByClassName("close")[0];

    button.onclick = function() {
        modal.style.display = "block";
    }
    close.onclick = function() {
        modal.style.display = "none";
    }
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    };
    
    var modal2 = document.getElementById('paymentModal2');
    var button2 = document.getElementById("employeeOrder");

    button2.onclick = function() {
        modal2.style.display = "block";
    };
    
});