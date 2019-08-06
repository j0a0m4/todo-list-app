// Check Off Specific Todos By Clicking
$("#list").on("click", "li", function(){
    $(this).toggleClass("completed");
});

// Click on X to delete Todo
$("#list").on("click", ".delete", function(event){
    // returns the li and assigns to todo
    const todo = $(this).parent();
    //fades out and removes todo
    todo.fadeOut(function(){
        // $(this) refers to todo
        $(this).remove();
    });
    // prevents event bubbling
    event.stopPropagation();
});

// Enter to create Todo
$("#todoInput").keypress(function (event) {
    if (event.which === 13) {
        // passes todoInput obj to function
        createNewTodo($(this));
    }
});
// Addind todo to the list
const createNewTodo = (todo) => {
    // grab todo text from input
    const todoText = todo.val();
    // reset input text
    todo.val("");
    // remove icon
    const removeIcon = ' <span class="delete"><span class="icon"><i class="far fa-trash-alt"></i></span></span>';
    // create a new li and add to #list(ul)
    const newTodo = '<li class="border border-primary border-top-0 border-left-0 border-right-0 d-flex justify-content-between align-items-center pr-2 pl-2">' + todoText + " " + removeIcon + '</li>';
    $("#list").append(newTodo);
}
// Toggle input display
$("#todoDisplay").click(function(){
    const input = $("#todoInput")
    if (input.css("display") === "none"){
        $("ul").toggleClass("mt-1");
        $("#todoDisplay").removeClass("far fa-plus-square");
        $("#todoDisplay").addClass("far fa-minus-square");
        input.fadeIn(function(){
            input.toggleClass("inputDisplay");
        });
    } else {
        input.toggleClass("inputDisplay");
        input.fadeOut(function(){
            $("ul").toggleClass("mt-1");
            $("#todoDisplay").removeClass("far fa-minus-square");
            $("#todoDisplay").addClass("far fa-plus-square");
        });
    }
});
