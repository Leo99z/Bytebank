//Criando e exportando a classe cliente
export class Cliente{  
    //Fazendo um get pro cpf e um return com o valor privado dele
    get cpf(){
        return this._cpf;
    }

    //Fazendo um construtor
    constructor(nome, cpf, senha){
        this.nome = nome;
        this._cpf = cpf;
        this._senha = senha;
    }

    autenticar(){
        return true;
    }
}
