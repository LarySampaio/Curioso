function pesquisar() {
  // Seleciona a seção onde os resultados da pesquisa serão exibidos
  let section = document.getElementById("resultados-pesquisa");
  let campoPesquisa = document.getElementById("campo-pesquisa").value;

  // Se o campoPesquisa for uma string vazia
  if (!campoPesquisa) {
    section.innerHTML = "<p>Digite o que quer procurar.</p>";
    return;
  }
  campoPesquisa = campoPesquisa.toLowerCase();

  // Inicializa uma string vazia para armazenar os resultados da pesquisa
  let resultados = "";
  let titulo = "";
  let descricao = "";
  let tags = "";

  // Itera sobre cada resultado da pesquisa (cada item do array 'dados')
  for (let dado of dados) {
    titulo = dado.titulo.toLowerCase();
    descricao = dado.descricao.toLowerCase();
    tags = dado.tags.toLowerCase();

    // Verifica se o campoPesquisa está em algum dos dados
    if (
      titulo.includes(campoPesquisa) ||
      descricao.includes(campoPesquisa) ||
      tags.includes(campoPesquisa)
    ) {
      // Cria um novo elemento com link interno ajustado
      resultados += `
      <div class="item-resultado">
        <h2>
          <a href="${dado.link}">${dado.titulo}</a>
        </h2>
        <p class="descricao-meta">
          ${dado.descricao}
        </p>
        <a href="${dado.link}">
          Saiba mais.
        </a>
      </div>`;
    }
  }

  if (!resultados) {
    resultados = "<p>Opa! Nada foi encontrado.</p>";
  }

  // Insere o HTML gerado na seção de resultados
  section.innerHTML = resultados;
}
