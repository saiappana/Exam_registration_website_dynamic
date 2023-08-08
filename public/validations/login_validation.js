function mnumber(cn)
{
    var regcn=/^[0-9]{10}$/;
    if(cn.match(regcn))
    {
        return true;
    }
    else
    {
            document.getElementById("userm").innerHTML="enter valid mobile number";
          
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
        document.getElementById("userm").innerHTML="enter valid email";
        
    }
}

function validateform()
{
    event.preventDefault();
    var fn=document.myform.user.value;
    var f=0;
    if(mnumber(fn) ||  email_test(fn))
    {
        f++;
    }
    if(f==1)
    {
        document.location.href = "home.html";
    }
}
