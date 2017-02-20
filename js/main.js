/*
var picture_location = "";
function newpicpage(picname, picheading) {
    "use strict";
    var location = picname;
    picture_location = location;
    window.alert(picture_location);
    var newurl = "picpage.html?" + "location=" + picture_location +  "&heading=" + picheading; 
    window.open(newurl);
}

function validateEmail(email) {
    "use strict";
    var re =  /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    return re.test(email);
}*/
 $(function() {
    $(".mainmenu").draggable();});
        
        var b=true;
        function moggle() {
            if(b) {
                document.getElementById("fn").className = "menu";
                document.getElementById("btnmenu").innerHTML="Close";
                b = false;
            } else {
                b = true;
                document.getElementById("fn").className += " closed";
                document.getElementById("btnmenu").innerHTML= "Menu";
            }
        }
         

function validateEmail(email) {
  var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  return regex.test(email);
}
