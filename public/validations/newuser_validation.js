function afullname_test(fn)
{
    var regfn=/^[A-Za-z]{4,29}$/;
    if(fn.match(regfn))
    {
        return true;
    }
    else
    {
            document.getElementById("unamem").innerHTML="enter valid name";
    }
}

function mnumber(cn)
{
    var regcn=/^[0-9]{10}$/;
    if(cn.match(regcn))
    {
        return true;
    }
    else
    {
            document.getElementById("phonem").innerHTML="enter valid mobile number";
    }
}

function email_test(em)
{
    var regem=/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;
    if(em.match(regem))
    {
        return true;
    }
    else
    {
        document.getElementById("emailm").innerHTML="enter valid email";
    }
}

function pass_check(x,y)
{
    if(x=="" && y=="")
    {
        return false;
    }
    else
    {
        if(x==y)
        {
            return true;
        }
        else
        {
            document.getElementById("psm").innerHTML="both password and confirm password should be same";
            return false;
        }
    }


}

function validateform()
{
    event.preventDefault();
    var fn=document.myform.uname.value;
    var z=document.myform.phone.value;
    var em=document.myform.email.value;
    var x=document.myform.crepassword.value;
    var y=document.myform.conpassword.value;
    var f=0;
    if(afullname_test(fn))
    {
        f++;
    }
    if(mnumber(z))
    {
        f++;
    }
    if(email_test(em))
    {
        f++;
    }
    if(pass_check(x,y))
    {
        f++
    }
}   