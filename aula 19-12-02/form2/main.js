function validateForm(){
  
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var emailValid = false;
    var senhaValid = false;

    var userAdminEmail = "admin@gmail.com";
    var userAdminsenha = "admin123";

    var userComumEmail = "user@gmail.com";
    var userComumsenha = "user123";


    if(email.length == 0){
        document.getElementById("alert-email").innerHTML = "Campo de entrada inválido. O email deve ter pelo menos 1 caractere!";
        document.getElementById("alert-email").style.visibility = "visible";
    }else if(email.match(/@/ && /.com/)){  
        document.getElementById("alert-email").innerHTML = "";    
        document.getElementById("alert-email").style.visibility = "hidden";
        emailValid = true;
    }
    
    if(password.length == 0){
        document.getElementById("alert-password").innerHTML = "Campo de entrada inválido. A senha deve ter pelo menos 1 caractere!";
        document.getElementById("alert-password").style.visibility = "visible";
    }else{
        document.getElementById("alert-password").innerHTML = "";
        document.getElementById("alert-password").style.visibility = "hidden";
        senhaValid = true;
    }
    name = email.indexOf("@");
    
    if (emailValid == true && senhaValid == true) {
        if(email === userAdminEmail){
            document.getElementById("user").innerText = "Admin " + email.substring(0, name);
            window.location.href = "blog.html";
        }else if (email === userComumEmail){
            document.getElementById("user").innerText = "User " + email.substring(0, name);
            window.location.href = "blog.html";
        }else{
            alert("Usuário não cadastrado.");
        }
    }
    else{
        alert("deu ruim");
    }
 
}