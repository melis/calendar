$('.form-check-input1').change(function(){
    if($(this).is(":checked")) {
        $('.buy_ticket').addClass("st_1");
    } else {
        $('.buy_ticket').removeClass("st_1");
    }
});
$('.form-check-input2').change(function(){
    if($(this).is(":checked")) {
        $('.buy_ticket').addClass("st_2");
    } else {
        $('.buy_ticket').removeClass("st_2");
    }
});

// Example starter JavaScript for disabling form submissions if there are invalid fields
(function() {
    "use strict";
    window.addEventListener("load", function() {
        var form = document.getElementById("needs-validation");
        form.addEventListener("submit", function(event) {
            if (form.checkValidity() == false) {
                event.preventDefault();
                event.stopPropagation();
            }
            form.classList.add("was-validated");
        }, false);
    }, false);
}());


$('.form-check-input1').change(function(){
    if($(this).is(":checked")) {
        $('.buy_ticket').addClass("st_1");
    } else {
        $('.buy_ticket').removeClass("st_1");
    }
});
$('.form-check-input2').change(function(){
    if($(this).is(":checked")) {
        $('.buy_ticket').addClass("st_2");
    } else {
        $('.buy_ticket').removeClass("st_2");
    }
});

$('input:checkbox').change(function(){
    if($(this).is(":checked")) {
        $('div.a_warning').addClass("active");
    } else {
        $('div.a_warning').removeClass("active");
    }
});
$("#close_this").click(function() { $('div.a_warning').removeClass("active");});