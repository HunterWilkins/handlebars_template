$(document).ready(function(){
    $("#signup").on("click", function(){
        $.ajax({
            type: "POST",
            url: "/api/signup",
            data: {
                username: $("input[name = username]").val(),
                password: $("input[name = password]").val()
            }
        })
    });

    $("#signin").on("click", function(){
        $.ajax({
            type: "POST",
            url: "/api/signin",
            data: {
                username: $("input[name = username]").val(),
                password: $("input[name = password]").val()
            },
            error: function(data) {
                alert("No User Found. Try again.");
            }
        });
    });
});