let botãoSubmit = document.getElementsByClassName("btn btn-success")[0];
let botãoErase = document.getElementsByClassName("btn btn-secondary")[0];
let nome = document.getElementById("nome");
let email = document.getElementById("email");
let destino1 = document.getElementsByClassName("form-check-input")[0];
let destino2 = document.getElementsByClassName("form-check-input")[1];
let destino3 = document.getElementsByClassName("form-check-input")[2];
let destino4 = document.getElementsByClassName("form-check-input")[3];
let motivo = document.getElementById("motivo");
let data = document.getElementById("data-viagem");
let oportunidades = document.getElementById("oportunidades");
let divulgação = document.getElementById("divulgação");
let final = document.getElementById("final");

// A função abaixo interrompe o comportamento padrão do submit
 
botãoSubmit.addEventListener('click', stopSubmit) ;

function stopSubmit(event) {
    event.preventDefault();
}

// A função abaixo apaga as informações quando o botao é clicado
botãoErase.addEventListener('click', eraseSubmit);

function eraseSubmit() {
    nome.value = " ";
    email.value = " ";
    destino1.checked = false;
    destino2.checked = false;
    destino3.checked = false;
    destino4.checked = false;
    motivo.value = " ";
    data.value = "";
    oportunidades.checked = false;
    divulgação.checked = false;
}

// A TrybeTrip precisa muito de fotos para divulgar seus concursos. 
// Tendo isso em mente, faça com que somente quem autorizar o uso de imagens possa enviar suas informações.
botãoSubmit.addEventListener('click', autorizaçaoCheck) ;

function autorizaçaoCheck() {
    if (divulgação.checked == false) {
        event.preventDefault();
        alert("A TrybeTrip precisa muito de fotos para divulgar seus concursos! Marque a autorização");       
    }
}

/* Faça a validação dos campos com limite de caracteres. Caso não estejam dentro do esperado ao clicar no botão de 
submit, um alerta deve ser mostrado com a mensagem: 'Dados Inválidos'. Caso contrário, a mensagem 'Dados enviados com
sucesso! Obrigado por participar do concurso TrybeTrip.' deverá aparecer na tela.
 */

botãoSubmit.addEventListener("click", verificationChar)

function verificationChar() {
    if (nome.value.length < 10 && nome.value.length > 40) {
        alert("Dados Inválidos")
    } else if (email.value.length < 10 && email.value.length > 50) {
        alert("Dados Inválidos")
    } else if (motivo.value.length > 500) {
        alert("Dados Inválidos")
    } else {
        final.innerText = "Dados enviados com sucesso! Obrigado por participar do concurso TrybeTrip.";
    }
}