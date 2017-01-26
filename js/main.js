$(".menu").mousedown(funtion(){
                     $(this).toggleClass("closed");

if($(this).hasClass("closed")){
    $(".main.button").text("Menu");
} else {
    $(".menu.button").text("Close");
}
                     });