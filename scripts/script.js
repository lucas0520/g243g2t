const btn = document.querySelector("#btnLoguin");
const inputUsuario = document.querySelector("#usuario");
const inputSenha = document.querySelector("#senha");

(()=>{
    let usuario = localStorage.getItem("usuario");
    if(usuario){
        Window.Location.href = "http://www.uou.com.br";
    }
})();

btn.onclick = (e) =>{
    let usuario = inputUsuario.value;
    let senha = inputSenha.value;
    if(!usuario && !senha){
        inputUsuario.focus();
        return;
    }
    if(usuario === "carmed"){
        if(senha === "123"){
            localStorage.setItem("usario",usuario);
            Window.Location.href = "http://www.uou.com.br";
        }else{
            inputUsuario.focus();
        }
    }
}