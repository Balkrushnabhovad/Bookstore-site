function logout(){
    a =localStorage.setItem("code","logout")
window.location.href="login-page.html"

}
var x =localStorage.getItem("code");
if(x=="secret"){
    
}else {
    window.location.href="login-page.html";
}
