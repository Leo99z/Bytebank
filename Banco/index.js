//Importando arquivos 
import {Cliente} from "./Cliente.js";
import {Gerente} from "./Funcionarios/Gerente.js";
import {Diretor} from "./Funcionarios/Diretor.js";
import {SistemaAutenticacao} from "./SistemaAutenticacao.js"

const diretor = new Diretor("Fulano1", 10000, 12345678900);
diretor.cadastrarSenha("123456");
const gerente = new Gerente("Fulano2", 5000, 122324314254);
gerente.cadastrarSenha("234556");
const gerenteestaLogado = SistemaAutenticacao.login(gerente, "234556");
const diretorestaLogado = SistemaAutenticacao.login(diretor, "123456");
console.log(gerenteestaLogado, diretorestaLogado);

const cliente = new Cliente("Leo", 507208, "456");
const clienteEstaLogado = SistemaAutenticacao.login(cliente, "456");
console.log(clienteEstaLogado);