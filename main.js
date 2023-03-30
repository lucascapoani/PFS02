const clienteNegocio = require("./negocio/cliente_negocio")

const cli1 = {
    cpf: "1111111", 
    nome: "Fulano",
    telefone: "(51)9999-9999"
};

const cli2 = {
    cpf: "2222222", 
    nome: "Sicrano",
    telefone: "(51)9999-9009"
};

const cli3 = {
    cpf: "3333333", 
    nome: "Beltrano",
    telefone: "(51)3339-9009"
};

const cli4 = {
    cpf: "4444444", 
    nome: "Neymar",
    telefone: "(51)3449-9009"
};

clienteNegocio.inserir(cli1);
clienteNegocio.inserir(cli2);
clienteNegocio.inserir(cli3);

clienteNegocio.deletar(2);

clienteNegocio.atualizar(3, cli4);

console.log(clienteNegocio.listar());

console.log(clienteNegocio.buscarPorId(1));