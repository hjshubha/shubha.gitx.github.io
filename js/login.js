// JavaScript source code
function validate() {

    var isvalid = true;
    var email, password;    //  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  
    email = document.getElementById("email").value;
    password = document.getElementById("pass").value;
   
    if (email == '' && password == '') {
        isvalid = false;
        alert("Enter All Fields");
    }
    else if (email == '') {
        isvalid = false;
        alert("Please provide Email Id");
   }
    else if (password == '') {
        isvalid = false;
        alert("Please Enter password");
    }
   
    else if (!email.match(filter)) {
        alert("Invalid Email Id");
        isvalid = false;
    }
    else if (isvalid == true) {
        sigin();
    }
//   alert("Is Valid Value :" + isvalid);
    return isvalid;

}
var serviceURL = "http://rkmehta.samharsh.com/UserService.asmx/";

function sigin() {
    var email = $("#email").val();
    var password = $("#pass").val();

    var pdata = { "email": "email", "password": "password" };
    $.ajax({
        type: "POST",
        data: JSON.stringify(pdata),
        url: serviceURL + "sigin",
        contentType: "application/json;",
        dataType: "json",
        success: function (data) {
            alert(data.d);
        },
        error: function (xhr) {
            alert(xhr.responseText);
        }
    });
}