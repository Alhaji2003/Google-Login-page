var Password=document.getElementById("txtpassword")
var checkbox=document.getElementById("show")

checkbox.addEventListener("click",function(){
    var type=Password.getAttribute("type")=== "password" ? "text" : "password";
    Password.setAttribute("type",type);

})