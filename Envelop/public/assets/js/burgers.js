// Html button Actions
// When user enter a burger name and click submit
$(function(){
        $(".burger-form").on("submit", function(event){
        event.preventDefault();
        // get the user input from textarea
        const value = $("#burgerentered").val().trim();
        const newBurger = {burger_name:value};

       // Send the request to store in database
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger

        }).then(function(){
            location.reload();
        }); 
    });
// This function is used to devour a burger
    $(".devour-it").on("click", function(event){
        event.preventDefault();
        // Get the id of burger to devour it
        const  burgerId = $(this).data("id");
        const devouredState = {devoured: 1};
        // Update request to devour a burger
        $.ajax("/api/burgers/"+ burgerId, {
            type: "PUT",
            data: devouredState
        }).then(function(){
            location.reload();
        });
    });
});