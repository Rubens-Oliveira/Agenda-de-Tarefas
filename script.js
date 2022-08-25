var atividade = document.getElementById("atividade");
var dtAtv = document.querySelector("#dataAtv");
var btnCadastrar = document.querySelector("input[type=submit]");
var indice = 0;

btnCadastrar.addEventListener("click", (e) => {
  //evitar o envio dos dados do submit
  e.preventDefault();

  let lista = document.getElementById("lista");

  let linha = document.createElement("tr");

  let celId = document.createElement("th");
  celId.innerText = ++indice;

  let celAtv = document.createElement("td");
  celAtv.innerText = atividade.value;

  let celData = document.createElement("td");
  let dataFormatada = new Date(dtAtv.value).toLocaleDateString("pt-br", {
    timeZone: "utc",
  });
  celData.innerText = dataFormatada;

  let celAcao = document.createElement("td");
  let concluir = document.createElement("input");
  concluir.type = "checkbox";
  concluir.id = "atv" + indice;
  celAcao.appendChild(concluir);

  linha.appendChild(celId);
  linha.appendChild(celAtv);
  linha.appendChild(celData);
  linha.appendChild(celAcao);
  lista.appendChild(linha);

  //inserir evento de click no checbox para remover a linha
  concluir.addEventListener("change", () => {
    let resposta = confirm(
      "Ação ja foi realizada, tem certeza que deseja excluir?"
    );
    if (resposta) {
      linha.style.backgroundColor = "red";
      linha.style.textDecoration = "line-through";
      linha.style.transition = "2s";

      setTimeout(() => {
        linha.remove();
      }, 2000);
    }
  });
});
