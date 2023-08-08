function validateform()
{
    event.preventDefault();

    var fn=document.myform.firstname.value;
    var noc=document.myform.cardname.value;
    var cn=document.myform.cardnumber.value;
    var expy=document.myform.expyear.value;
    var cv=document.myform.cvv.value;
    var mn=document.myform.expmonth.value;
    var em=document.myform.email.value;
    var f=0;
    if(fullname_test(fn))
    {
        f++;
    }
     if(noc_test(noc))
    {
        f++;
    }
    if(credit_test(cn))
    {
        f++;
    }
    if(expyear_test(expy))
    {
        f++;
    }
    if(cvv_test(cv))
    {
        f++;
                  
    }
    if( month_test(mn))
    {
        f++;
    }
    if(email_test(em))
    {
        f++;
    }
    if(f==7)
    {
        document.location.href = "success";
    }
}

function fullname_test(fn)
{
    var regfn=/^[A-Za-z]{4,29}$/;
    if(fn.match(regfn))
    {
        return true;
    }
    else
    {
            document.getElementById("fnm").innerHTML="enter valid name";
    }
}

function noc_test(noc)
{
    var regcna=/^[A-Za-z]{4,29}$/;
    if(noc.match(regcna))
    {
        return true;
    }
    else
    {
            document.getElementById("cnamem").innerHTML="enter valid name";
    }
}

function credit_test(cn)
{
    var regcn=/^[0-9]{16}$/;
    if(cn.match(regcn))
    {
        return true;
    }
    else
    {
            document.getElementById("cnumm").innerHTML="enter valid credit card number";
    }
}

function expyear_test(expy)
{
    var regy=/^(20)\d{2}$/;
    if(expy.match(regy))
    {
        return true;
    }
    else
    {
            document.getElementById("expym").innerHTML="enter valid year";
    }
}

function cvv_test(cv)
{
    var regcv=/^\d{3}$/;
    if(cv.match(regcv))
    {
        return true;
    }
    else
    {
            document.getElementById("cvm").innerHTML="enter valid cvv";
    }
}

function month_test(mn)
{
    var regmn=/^[A-Za-z]{3,20}$/;
    if(mn.match(regmn))
    {
        return true;
    }
    else
    {
            document.getElementById("expmm").innerHTML="enter valid month";
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