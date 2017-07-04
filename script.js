$( document ).ready(function() {
    $('.option-plus-icon').on('click', function(){
      $("#myform").show(500);
    });

    $("#btn-cancel").click(function() {
        $("#myform").hide(400);
    });

    $("#btn-ok").click(function() {
        $("#myform").hide(400);
    });

    $(".new-task").on('click', function(){
      $("#myform-task").show(500);
    });

    $("#btn-cancel").click(function() {
        $("#myform-task").hide(400);
    });

    $("#btn-ok").click(function() {
        $("#myform-task").hide(400);
    });

    // initialize draggable    
    $(".name-box-view").draggable({ disabled: true });
    $(".name-box-icon").draggable({ disabled: true });
    
    $(".name-box-view").draggable("enable");
    $(".name-box-icon").draggable("enable");
});