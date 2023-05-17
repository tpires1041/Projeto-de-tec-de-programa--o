// divListaProduto.insertAdjacentHTML('afterbegin', '');
class Produto {
    constructor(nome, data_de_cadastro, descricao, preco){
        this.nome = nome;
        this.data_de_cadastro = data_de_cadastro;
        this.descricao = descricao;
        this.preco = preco
    }

    mostrarProduto(){
        return `
                <h1 class="nome">${this.nome}</h1>
                <h2 class="descricao">${this.descricao}</h2>`
        //return this.nome + this.data_de_cadastro + this.descricao + this.preco
}
}

class ProdutoDestaque extends Produto {
    constructor(nome, data_de_cadastro, descricao, preco){
        super(nome, data_de_cadastro, descricao, preco)
}


mostrarProdutoDestaque(){
    return `
            <h1 class="nome">${this.nome}</h1>
            <img src="opaleira.jpg" height="300px" width=auto>
            <h2 class="descricao">${this.descricao}</h2>`
            //return this.nome + this.data_de_cadastro + this.descricao + this.preco
}

}

const opala = new ProdutoDestaque("Opala", "05/03/23", "Carro massa", 100000)
console.log(opala.mostrarProdutoDestaque());
const produtoDestaque = document.getElementById("produtoDestaque");
produtoDestaque.insertAdjacentHTML('afterbegin', opala.mostrarProdutoDestaque());


const fusca = new Produto("Fusca", "25/01/23", "Fusca muito bem cuidado", 40000)
console.log(fusca.mostrarProduto());
const produto1 = document.getElementById("listaProdutos");
produtoDestaque.insertAdjacentHTML('afterbegin', fusca.mostrarProduto());