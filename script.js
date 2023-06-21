// divListaProduto.insertAdjacentHTML('afterbegin', '');
class Produto {
    constructor(nome, data_de_cadastro, descricao, preco){
        this.nome = nome;
        this.data_de_cadastro = data_de_cadastro;
        this.descricao = descricao;
        this.preco = preco
    }

    mostrarProduto(){
        return `<div class="grid-item">
                <h1 class="nome">${this.nome}</h1>
                <h2 class="preco">R$${this.preco}</h1>
                <h3 class="descricao">${this.descricao}</h3>
                <h4 class="data_de_cadastro">${this.data_de_cadastro}</h4>
        </div>`
        //return this.nome + this.data_de_cadastro + this.descricao + this.preco
}
}

class ProdutoDestaque extends Produto {
    constructor(nome, data_de_cadastro, descricao, preco){
        super(nome, data_de_cadastro, descricao, preco)
}


mostrarProdutoDestaque(){
    return `
            <h2 class="nome">${this.nome}</h2>
            <img src="opala.jpg" height="300px" width=auto>
            <h2 class="preco">R$${this.preco}</h1>
            <h3 class="descricao">${this.descricao}</h3>
            <h4 class="data_de_cadastro">${this.data_de_cadastro}</h4>`
            //return this.nome + this.data_de_cadastro + this.descricao + this.preco
}

}

const opala = new ProdutoDestaque("Chevrolet Opala", "05/03/23", "Carro massa.", 100000)
const produtoDestaque = document.getElementById("produtoDestaque");
produtoDestaque.insertAdjacentHTML('afterbegin', opala.mostrarProdutoDestaque());


const fusca = new Produto("Volkswagen Fusca", "25/01/23", "Fusca muito bem cuidado.", 40000);
const produto1 = document.getElementById("listaProdutos");
produto1.insertAdjacentHTML('beforeend', fusca.mostrarProduto());

const maverick = new Produto("Ford Maverick", "20/11/22", "Maverick 1974 preparado.", 200000);
const produto2 = document.getElementById("listaProdutos");
produto2.insertAdjacentHTML('beforeend', maverick.mostrarProduto());

const kombi = new Produto("Volkswagen Kombi", "20/05/22", "Aceito troca.", 42000);
const produto3 = document.getElementById("listaProdutos");
produto3.insertAdjacentHTML('beforeend', kombi.mostrarProduto());
