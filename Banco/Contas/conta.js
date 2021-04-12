export class Conta{
    constructor(saldoInicial, cliente, agencia){
        if(this.constructor == Conta){
            throw new Error("Você não deveria instanciar um objeto tipo do Conta diretamente, pois essa é uma classe abstrata");
        }
        this._saldo = saldoInicial;
        this._cliente = cliente;
        this._agencia = agencia;
    }

    //Criando um acessor set para o cliente
    set cliente(novoValor){
        if(novoValor instanceof Cliente){
            this._cliente = novoValor;
        }
    }

    //Criando um acessor get para o cliente e retornando o valor privado dele
    get cliente(){
        return this._cliente;
    }
    
    //Criando um acessor get para o saldo e retornando o valor privado dele
    get saldo(){
        return this._saldo;
    }

    //Método abstrato
    sacar(valor){
        throw new Error("O método sacar da conta é abstrato");

    }

    _sacar(valor, taxa){
        const valorSacado = taxa * valor;
        if(this._saldo >= valorSacado){
            this._saldo -= valorSacado;
            return valorSacado;
        }
        return 0;
    }
    
    //Método para depositar dinheiro
    depositar(valor){
        this._saldo += valor;
    }
    
    //Método para transferir dinheiro entre contas
    transferir(valor, conta){
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    }
}