function afullname_test(fn)
{
    var regfn=/^[A-Za-z]{4,29}$/;
    if(fn.match(regfn))
    {
        return true;
    }
    else
    {
            document.getElementById("anamem").innerHTML="enter valid name";
    }
}

function ffullname_test(fn)
{
    var regfn=/^[A-Za-z]{4,29}$/;
    if(fn.match(regfn))
    {
        return true;
    }
    else
    {
            document.getElementById("fnamem").innerHTML="enter valid name";
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
            document.getElementById("cnumberm").innerHTML="enter valid mobile number";
    }
}

function anumber(cn)
{
    var regcn=/^[0-9]{12}$/;
    if(cn.match(regcn))
    {
        return true;
    }
    else
    {
            document.getElementById("aadharm").innerHTML="enter valid aadhar number";
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

function gsvali(r)
 {
 if(r > 0)
 {
    return true;
 }
 else
 {
    
    document.getElementById("GENDERm").innerHTML='Please select a gender ';
 return false;
 }
 }

 function lsvali(s)
 {
 if(s > 0)
 {
return true;
 }
 else
 {
    document.getElementById("centerm").innerHTML='Please select a loccation ';
 return false;
 }
 }






function validateform()
{
    event.preventDefault();
    var x=document.myform.aname.value;
    var y=document.myform.fname.value;
    var z=document.myform.cnumber.value;
    var p=document.myform.email.value;
    var q=document.myform.aadhar.value;
    
    var r= document.forms["myform"]["gender"].selectedIndex;
    var s = document.forms["myform"]["center"].selectedIndex;
    
    var f=0;
    if(afullname_test(x))
    {
        f++;
    }
    if(ffullname_test(y))
    {
        f++;
    }
    if(anumber(q))
    {
        f++;
    }
    if(email_test(p))
    {
        f++;
    }
    if(mnumber(z))
    {
        f++;
    }
    if(gsvali(r))
    {
        f++;
    }
    if(lsvali(s))
    {
        f++;
    }
    if(f==7)
    {
        document.location.href = "payment.html";
    }

} 

