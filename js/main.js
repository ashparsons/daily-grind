$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip(); 

    $(".navbar a, footer a[href='#myPage']").on('click', function(event) {

        if (this.hash !== "") {

            event.preventDefault();

            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 900, function(){
                window.location.hash = hash;
            });
        } // End if
    });

    $("#addorder").click(function(){
        if(document.getElementById("coffeesize").value === "none") {
            alert("Please select a size for your coffee");
        }

        if(document.getElementById("coffeestyle").value === "none") {
            alert("Please select a style for your coffee");
        }
    }); 

    
})
// $("#post_code").attr("disabled", "disabled");