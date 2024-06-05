$(document).ready(function(){
    $(".loading2").slideUp(200);

    $("#color").change(function() {
        let back = $(".gradient-animation");
        var optionValue = $(this).val();
        switch (optionValue) {
            case "standart":
                back.css("background-color", "");
                break;
            case "blue":
                back.css("background-color", "blue");
                break;
            case "light-blue":
                back.css("background-color", "lightblue");     
                break;
            case "green":
                back.css("background-color", "green");
                break;
        }
    });
});

//

function Change(page) {
    $(".loading22").slideDown(200);
    setTimeout(function() {
        $.ajax({
            url: page,
            dataType: "html",
            success: function(response) {
                $("body").html(response);
            }
        });
    }, 200);
};
