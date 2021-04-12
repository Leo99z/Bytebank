//Importando a classe para o arquivo conta.js
import { Conta } from "./Contas/conta.js";

//Criando e exportando a classe da conta corrente
export class Conta_Corrente extends Conta{
    static numeroDeContas = 0;
    
    //Criando um construtor para a agencia e cliente
    constructor(cliente, agencia){
        super(0, cliente, agencia);   
        Conta_Corrente.numeroDeContas += 1;
    }

    //Sobreescrevendo o comportamento de sacar
    sacar(valor){
        let taxa = 1.1;
        return super._sacar(valor, taxa);
    }
}

