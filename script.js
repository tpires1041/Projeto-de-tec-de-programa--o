// divListaProduto.insertAdjacentHTML('afterbegin', '');
class Produto {
    constructor(nome, data_de_cadastro, descricao, preco){
        this.nome = nome;
        this.data_de_cadastro = data_de_cadastro;
        this.descricao = descricao;
        this.preco = preco
    }

    mostrarProduto(){

    }
}

class ProdutoDestaque extends Produto {
    constructor(nome, data_de_cadastro, descricao, preco, imagem_destaque){
        super(nome, data_de_cadastro, descricao, preco)
        this.imagem_destaque = imagem_destaque
    }
    
    mostrarProdutoDestaque(){
        
    }
}