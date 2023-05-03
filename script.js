// divListaProduto.insertAdjacentHTML('afterbegin', '');
class Produto {
    constructor(nome, data_de_cadastro, descricao, preco){
        this.nome = nome;
        this.data_de_cadastro = data_de_cadastro;
        this.descricao = descricao;
        this.preco = preco
    }

    mostrarProduto(){
        return this.nome + this.data_de_cadastro + this.descricao + this.preco
    }
    
    
}

class ProdutoDestaque extends Produto {
    constructor(nome, data_de_cadastro, descricao, preco){
        super(nome, data_de_cadastro, descricao, preco)
}


mostrarProdutoDestaque(){
    return `
            <h1 class="teste">${this.nome}</h1>`
            //return this.nome + this.data_de_cadastro + this.descricao + this.preco
}

}

const produto = new ProdutoDestaque("Opala", "05/03/23", "Carro massa", 1000000)
console.log(produto.mostrarProdutoDestaque());
const produtoDestaque = document.getElementById("produtoDestaque");
produtoDestaque.insertAdjacentHTML('afterbegin', produto.mostrarProdutoDestaque());