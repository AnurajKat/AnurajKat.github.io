
function alertuser() {
    "use strict";
    window.alert("abhi kaam nhi karega pagle!!");
}
function closeNav() {
    "use strict";
    document.getElementById("menubtn").style.marginLeft = "0px";
    document.getElementById("mysidenav").style.width = "0";
    
}
function openNav() {
    "use strict";
    document.getElementById("menubtn").style.marginLeft = "225px";
    document.getElementById("mysidenav").style.width = "225px";
   
}

function clickCheck() {
    "use strict";
    var x = document.getElementById("menubtn");
    if (x.checked === 1) {
        openNav();
    } else {
        closeNav();
    }
}
function gotoLogin() {
    "use strict";
    window.location.href = 'index.html';
}
