import { funcionario } from "./Funcionario.js";

export class Gerente extends funcionario{
    constructor(nome, salario, cpf){
        super(nome, salario, cpf);
        this._bonificacao = 1.1;
    }

}
