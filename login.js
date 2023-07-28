let signUp = document.querySelector("a");
let pragh = document.querySelector("b")
let bg = document.querySelector(".bg-d")
let show = Array.from(document.querySelectorAll(".d-none"));
let apperness = document.querySelector(".b-js");
let clickk = "true" ;
// ------inputs
let N =document.getElementById("id");
let E =document.getElementById("E-mail");
let P =document.getElementById("password");
// ========
let icon = document.querySelector(".p-viewer");
let iconn = document.getElementById("iconn");
let buttSignUp = document.getElementById("Up");
let count;
//=========validation
let checkN = /^[A-Z][a-z]*$/;
let checkE = /[a-z0-9]+@[a-z]+\.[a-z]/
let buttlogin =  document.getElementById("In");
let divOpicty = document.querySelector(".opacity-0")
let buttlogout =  document.getElementById("Out");


// =================دول عشان الصفحه التانيه
    signUp.addEventListener ("click",function ()
    {
        if (clickk=="true") 
        {
            showD(); 
        }
        else if (clickk=="false")
        {
            hide()
        }
    })   
function hide() 
{
    for (let i = 0; i < show.length; i++) 
    {
        show[i].classList.add("d-none");   
        apperness.classList.remove("d-none"); 
    }
    clickk = "true";
    console.log(clickk);
    document.getElementById("Sgin-in").innerHTML="Sign Up";
    document.getElementById("pSgin-in").innerHTML="Don’t have an account?";

}

function showD() 
{
    for (let i = 0; i < show.length; i++) 
    {
        show[i].classList.remove("d-none");   
        apperness.classList.add("d-none"); 
    }
    clickk = "false";
    console.log(clickk);
    document.getElementById("Sgin-in").innerHTML="Sign In";
    document.getElementById("pSgin-in").innerHTML="You have an account?";
    document.getElementById("valid1").innerHTML = ``;

}
// ============بدايه شغل المشروع
        if(localStorage.getItem("mystorge")==null){
            count=[];
        }
        else{
            count=JSON.parse(localStorage.getItem("mystorge"))
        }


//  ==================button sign up  
buttSignUp.addEventListener("click", add)
  
function add()
{
      if (N.value == "" && E.value=="") 
            {
                document.getElementById("valid1").innerHTML = `<h4 class = "text-white">Please complete data</h4>`;
                return
            }
            else if (N.value!= ""&& E.value!="") 
            {
                document.getElementById("valid1").innerHTML = `<h4 class = "text-white">complete the steps</h4>`;
            }
    // ===========validation
    
    for (let i = 0; i < count.length; i++) 
    {
            if (count[i].name == N.value ) 
            {
                document.getElementById("valid1").innerHTML = `<h4 class = "text-warning">Aready here</h4>`;
                clear();
                return  
            }
    }
    // ================= 
    let data =
    {
        name:N.value,
        mail:E.value,  
        pass:P.value,
    }
    if (checkN.test(N.value) && checkE.test(E.value))
    {
        document.getElementById("valid1").innerHTML = `<h4 class = "text-green">Valid Name and E-mail(successfully)</h4>`;
        document.getElementById("valid1").innerHTML = ``;
        clear();
    }
    else
    {
        document.getElementById("valid1").innerHTML = `<h4 class = "text-danger">Invalid data</h4>`;
        clear();
        return
    }
    count.push(data);
    localStorage.setItem("mystorge",JSON.stringify(count));

    console.log(count);
    clear();
}

function clear() 
{
        N.value ="";
        E.value =""; 
        P.value ="";
}
// ==============button login
buttlogin.addEventListener("click",function () 
    {
        for (let i = 0; i < count.length; i++) 
        {
            // console.log(count[i].mail);   
            if (E.value==count[i].mail) 
            {
                divOpicty.classList.replace("opacity-0","opacity-100");
                bg.classList.replace("d-flex","d-none");
                document.getElementById("naame").innerHTML = `<h1 class="text-center pt-5" >Welcome ${count[i].name}</h1>`;
                clear();
                return
            } 
            else
            {
                document.getElementById("valid1").innerHTML = `<h4 class = "text-warning">Not Exist</h4>`;
            }
        }
        clear();    
    })
// =================== buton log out
buttlogout.addEventListener("click",function () 
    {
        
        
            
        divOpicty.classList.replace("opacity-100","opacity-0");
        bg.classList.replace("d-none","d-flex");            
        
    })

// =============دول عشان العين 
icon.addEventListener("click",function()
{
    if(clickk=="false")
    {
        showico();
    }
    else if (clickk== "true") 
    {
        noShowico();
    }
})

function showico()
{
    document.getElementById("password").type = "text";
    clickk = "true";
    // iconn.classList.remove("d-none");

}
function noShowico() 
{
    document.getElementById("password").type = "password";
    clickk="false";
}