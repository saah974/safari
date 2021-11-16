var nome = document.getElementById("nome");
var email = document.getElementById("email");
var telefone = document.getElementById("telefone");

document.getElementById("botao-enviar").addEventListener("click", validaFormulario)

function validaFormulario(){
    if(nome.value != "" && email.value != "" && telefone.value != ""){
    alert("Prontinho! Você receberá as novidades por e-mail.")
    }else{
    alert("Por favor, preencha os campos nome, e-mail e telefone.")
    }
}



/*document.getElementById("botao-enviar").addEventListener("click", validaFormulario)

function validaFormulario(){
    if(document.getElementById("nome").value != "" && document.getElementById("email").value != "" && document.getElementById("telefone").value != ""){
    alert("Prontinho! Você receberá as novidades por e-mail.")
    }else{
    alert("Por favor, preencha os campos nome, e-mail e telefone.")
    }
}*/
