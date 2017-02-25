
var picture_location = "";

/*
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
///////////////////////////////////////////////////////////////////////


function newpicpage(imgid) {
    var imgid1= 'i'.concat(imgid);
    //window.alert(imgid1);
    var modal= document.getElementById('myModal');
    var modalImg= document.getElementById("img01");
    var captionT = document.getElementById("captionme");
    var ss = document.getElementById(imgid);
    var ds= document.getElementById(imgid1);
    modal.style.display = "block";
    modalImg.src = ds.src;
    captionT = ss.getElementsByClassName("caption").content;
}
var span = document.getElementsByClassName("close")[0];
function closeme() { 
     var modal= document.getElementById('myModal');
    modal.style.display = "none";
}
///////////////////////////////////////////////////////////////////////

function validateEmail(email) {
  var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  return regex.test(email);
}
