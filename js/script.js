async function buscaCep(cep) {
  var mensagemErro = document.getElementById("erro");
  mensagemErro.innerHTML = "";

  try {
    var rotaPadrao = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    var consultaConvertida = await rotaPadrao.json();
    if (consultaConvertida.erro) {
      Error("Cep Inválido");
    }
    var cep = document.getElementById("cep");
    var endereco = document.getElementById("endereco");
    var bairro = document.getElementById("bairro");
    var cidade = document.getElementById("cidade");
    var estado = document.getElementById("estado");

    endereco.value = consultaConvertida.logradouro;
    bairro.value = consultaConvertida.bairro;
    cidade.value = consultaConvertida.localidade;
    estado.value = consultaConvertida.uf;
  } catch (erro) {
    mensagemErro.innerHTML = "<p>Cep inválido</p>";
  }
  console.log(consultaConvertida);
}

var validar = document.getElementById("validar");

validar.addEventListener("change", function () {
  if (this.checked) {
    buscaCep(cep.value);
  } else {
    cep.value = "";
    endereco.value = "";
    bairro.value = "";
    cidade.value = "";
    estado.value = "";
  }
});
