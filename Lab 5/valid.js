function visibility() 
{
    var x = document.getElementById("pass");
    console.log(x.type);
    if (x.type == "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
}
// REGEX Check //
function containsNumbers(str) {
    return /\d/.test(str);
  }
function checkemail(str)
{
    return /[a-z A-Z 0-9 _]*[@][a-z]*[.][a-z]*/gm.test(str);
}
function checkphn(str)
{
    return /^[0-9]{10}$/gm.test(str);
}
function checkpass(str)
{
        return /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/.test(str);
}

// Validate REGEX //
function checkname()
{
    var x = document.getElementById("fname");
    console.log(x.value.trim());
    var y = document.getElementById("lname");
    if (x.value.trim() == "" ) 
    {
            document.getElementById("fname_msg").style.display = "block";
            document.getElementById("fname").style.border = "2px solid red";
            
    }
    else if(containsNumbers(x.value.trim()))
        {
            document.getElementById("fname_msg").style.display = "block";
            document.getElementById("fname_msg").innerHTML ="Name cannot have numbers"
            document.getElementById("fname").style.border = "2px solid red";
        }

    else{
        document.getElementById("fname").style.border = "1px solid lightgrey"
        document.getElementById("fname_msg").style.display = "none";
    }
    if (y.value.trim() == "")
    {
        document.getElementById("lname_msg").style.display = "block";
        document.getElementById("lname").style.border = "2px solid red";
    }
    else if(containsNumbers(y.value.trim()))
        {
            document.getElementById("lname_msg").style.display = "block";
            document.getElementById("lname_msg").innerHTML ="Name cannot have numbers"
            document.getElementById("lname").style.border = "2px solid red";
        }
    else{
        document.getElementById("lname").style.border = "1px solid lightgrey"
        document.getElementById("lname_msg").style.display = "none";
    }

}
function email()
{
    var e = document.getElementById("email");
    if (e.value.trim() == "")
    {
        document.getElementById("email_msg").style.display = "block";
        document.getElementById("email").style.border = "2px solid red";
    }
    else if(checkemail(e.value.trim()))
    {
        
        document.getElementById("email").style.border = "1px solid lightgrey"
        document.getElementById("email_msg").style.display = "none";
    }
    else
    {
        document.getElementById("email_msg").style.display = "block";
        document.getElementById("email_msg").innerHTML ="Email is not valid"
        document.getElementById("email").style.border = "2px solid red";
    }
}
function phn()
{
    var e = document.getElementById("phn");
    if (e.value.trim() == "")
    {
        document.getElementById("phn_msg").style.display = "block";
        document.getElementById("phn").style.border = "2px solid red";
    }
    else if(!checkphn(e.value))
    {
        
        document.getElementById("phn_msg").style.display = "block";
        document.getElementById("phn_msg").innerHTML ="Phone number is not valid"
        document.getElementById("phn").style.border = "2px solid red";
    }
    else
    {
        document.getElementById("phn").style.border = "1px solid lightgrey"
        document.getElementById("phn_msg").style.display = "none";
    }
}

function pasword()
{
    var p = document.getElementById("pass");
    if(p.value.trim()=="")
    {
        document.getElementById("pass_msg").style.display = "block";
        document.getElementById("pass").style.border = "2px solid red";
    }
    else if(!checkpass(p.value.trim()))
    {
        document.getElementById("pass_msg").style.display = "block";
        document.getElementById("pass_msg").innerHTML ="Password number is not valid"
        document.getElementById("pass").style.border = "2px solid red";
    }
    else
    {
        document.getElementById("pass").style.border = "1px solid lightgrey"
        document.getElementById("pass_msg").style.display = "none";
    }

}
function cnf_pass()
{
    var p = document.getElementById("cnf_pass");
    var mp = document.getElementById("pass");
    if(p.value.trim()=="")
    {
        document.getElementById("cnfpass_msg").style.display = "block";
        document.getElementById("cnf_pass").style.border = "2px solid red";
    }
    else if(p.value!=mp.value)
    {
        document.getElementById("cnfpass_msg").style.display = "block";
        document.getElementById("cnf_pass").style.border = "2px solid red";
        document.getElementById("cnfpass_msg").innerHTML ="Password not matching";
    }
    else{
        document.getElementById("cnf_pass").style.border = "1px solid lightgrey"
        document.getElementById("cnfpass_msg").style.display = "none";
    }
}

function validate()
{
    checkname();
    email();
    phn();
    pasword();
    cnf_pass();
}
