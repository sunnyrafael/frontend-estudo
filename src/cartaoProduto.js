import { catalogo } from "./utilidades";

export function renderizarCatalogo() {
  for (const produtoCatalogo of catalogo) {
    const cartaoProduto = `<div class='border-solid border-2 border-sky-500 w-48 m-2 flex flex-col pb-2' id="card-produto-${produtoCatalogo.id}">
        <img 
             src="./assets/img/${produtoCatalogo.imagem}" 
             alt="Produto 1 do Magazine Hashtag."
             style="height: 300px;"
          />
          <p class='marca'>${produtoCatalogo.marca}</p>
          <p>${produtoCatalogo.nome}</p>
          <p>$${produtoCatalogo.preco}</p>
          <button class = 'bg-slate-950 text-slate-200'
          ><i class="fa-solid fa-cart-plus"></i></button>
        </div>`;

    document.getElementById("container-produto").innerHTML += cartaoProduto;
  }
}
