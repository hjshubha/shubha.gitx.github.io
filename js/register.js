// JavaScript source code
function validate1() {
    
    var isvalid = true;
    var fname, lname, mbl, emailid, password, confirmpw;

    //  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    
    fname = document.getElementById("txtFname").value;
    alert("fname" + fname);
    lname = document.getElementById("txtLname").value;
    mbl = document.getElementById("txtMobile").value;
    emailid = document.getElementById("txtEmail").value;
    //  emailExp = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([com\co\.\in])+$/; // to validate email id
    password = document.getElementById("txtPass").value;
    confirmpw = document.getElementById("txtCpass").value;
   

    if (fname == '' && mbl=='' && emailid == '' && password == '' && confirmpw == '' ) {
        isvalid = false;
        alert("Enter All Fields");
    }

    else if (fname == '') {
        isvalid = false;
        alert("Please Enter your first name");
    }
    else if (mbl == '') {
        isvalid = false;
        alert("Please Enter your Mobile number");
    }
    else if (emailid == '') {
        isvalid = false;
        alert("Please provide Email Id"); 
         
    }
    else if (password == '') {
        isvalid = false;
        alert("Please Enter password");
    }

    else if (password != '' && confirmpw == '') {
        isvalid = false;
        alert("Please Confirm password");
    }

    else if (password != confirmpw) {
        isvalid = false;
        alert("password does not match");
    }
    else if (!emailid.match(filter)){
    alert("Invalid Email Id");
    isvalid=false;
}
    else if (isvalid == true) {
        Signup();
    }
    return isvalid;
}
var serviceURL = "http://rkmehta.samharsh.com/UserService.asmx/";

function Signup() {
    var name = $("#txtFname").val();
    var lastname = $("#txtLname").val();
    var mobile = $("#txtMobile").val();
    var email = $("#txtEmail").val();
    var password = $("#txtPass").val();

    var pdata = { "name": name, "lname": lastname, "mobile": mobile, "email": email, "password": password };
    $.ajax({
        type: "POST",
        data: JSON.stringify(pdata),
        url: serviceURL + "Signup",
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
