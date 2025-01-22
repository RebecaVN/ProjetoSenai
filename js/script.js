async function caixaSenhaGestao() {
  const { value: password } = await Swal.fire({
    title: "Senha de Acesso",
    input: "password",
    inputPlaceholder: "Senha",
    icon: "info",
    inputAttributes: {
      maxlength: 40,
      autocapitalize: "off",
      autocorrect: "off",
    },
  });

  if (password) {
    location.assign(`direcionamentoLogin.php?sg=${password}`);
    //Swal.fire(`Entered password: ${password}`)
  }
}

//Script Do Cadastro
const botaoCriarConta = document.getElementById("criarConta");

const inputSenha = document.getElementById("senhaCadastro");
const inputConfirmarSenha = document.getElementById("confirmarSenhaCadastro");
const comparacaoSenhasP = document.getElementById("comparacaoSenhas");
const verificacaoNomeCompletoP = document.getElementById(
  "verificacaoNomeCompleto"
);
const inputNomeCompleto = document.getElementById("nomeCompleto");
//confirmar se as senhas conferem

inputSenha.addEventListener("input", validarCadastro);
inputConfirmarSenha.addEventListener("input", validarCadastro);
inputNomeCompleto.addEventListener("input", validarCadastro);

function validarCadastro() {
  //capturar a qauntidades de palavras no nome input
  const palavrasinputNomeCompleto = inputNomeCompleto.value
    .split(/\s+/)
    .filter(Boolean).length;

  //verificar se há no minimo duas palavras em nome
  comparacaoSenhasP.style.display =
    inputSenha.value === inputConfirmarSenha.value ? "none" : "block";
  verificacaoNomeCompletoP.style.display =
    palavrasinputNomeCompleto > 1 ? "none" : "block";

  if (
    inputSenha.value === inputConfirmarSenha.value &&
    palavrasinputNomeCompleto > 1
  ) {
    botaoCriarConta.removeAttribute("disabled");
  } else {
    botaoCriarConta.setAttribute("disabled", "true");
  }
}
/////////////////////////

//alertas de erro no login
function erroLogin(n) {
  switch (n) {
    case 1:
      Swal.fire("Senha invalida");
      break;
    case 2:
      Swal.fire("A conta não está apta para verificação");
      break;
    case 3:
      Swal.fire("Erro ao cadastrar conta");
      break;
    case 4:
      Swal.fire("Esse email já está cadastrado");
      break;
    case 5:
      Swal.fire("usuario ou senha invalidos");
      break;
    case 6:
      Swal.fire("Email invalido");
      break;
    case 7:
      Swal.fire("Erro ao autenticar senha");
      break;
  }
}

//Script de Criar a sala (home professor)

//SCRIPTS DO HOME PROFESSOR//

//exibir o formulario de criar sala
function exibirFormCriarSala() {
  document.querySelector("#form_cria_sala").style.opacity = "1";
  document.querySelector("#form_cria_sala").classList.add("FormOpen");
  document.querySelector("#form_cria_sala").classList.add("");
}
function naoExibirFormCriarSala() {
  document.querySelector("#form_cria_sala").style.opacity = "0";
}

//TRECHO DO CODIGO QUE LIBERA A CRIAÇÃO DE SALA, HOME PROFESSOR
document.addEventListener("DOMContentLoaded", function () {
  // aplicando os inputs qye precisam ser preechidos em variaveis
  const checkboxes = document.querySelectorAll('input[type="checkbox"]');
  const codigoTurmaInput = document.querySelector("#codigoTurma");
  const cadastrarSalaButton = document.querySelector("#submitCadastrarSala");

  //  ouvinte de eventos de mudança a todos os checkboxes
  checkboxes.forEach(function (checkbox) {
    checkbox.addEventListener("change", verificarFormulario);
  });

  // ouvinte ao input  de codigo da turma
  codigoTurmaInput.addEventListener("input", verificarFormulario);

  // Funçao que verificar o formulario(para habiliyar ou na a criação)
  function verificarFormulario() {
    // Veridica se pelo menos um checkbox esta selecionado e o codigo esta preenchido
    const checkboxSelecionado = Array.from(checkboxes).some(
      (checkbox) => checkbox.checked
    );
    const codigoTurmaPreenchido = codigoTurmaInput.value.trim() !== "";

    // Habilita ou desabilita a criaçao
    if (checkboxSelecionado && codigoTurmaPreenchido) {
      cadastrarSalaButton.removeAttribute("disabled");
    } else {
      cadastrarSalaButton.setAttribute("disabled", "disabled");
    }
  }
});
// //////////////////////////////////////////////////

//script editar perfil
const edit_button = document.getElementById("imgEditIcon");
const cancel_button = document.getElementById("botaoCancelar");
function liberarEdicaoPerfil() {
  const form_perfil = document.getElementById("form_perfil");
  const inputs = form_perfil.querySelectorAll("input");
  cancel_button.style.display = 'block';  
  inputs.forEach(function (input) {
    input.removeAttribute('readonly');
    if(input.placeholder == 'Nome' || input.placeholder == 'Turma'){
        input.focus();
    }
  });
}
function cancelarEdicaoPerfil(){
    location.reload()
}

////


