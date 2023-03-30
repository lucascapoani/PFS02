// ============== Import do Express ==================
const express = require('express');
const clienteNegocio = require("./negocio/cliente_negocio")
// ============== Criar o framework/Instanciar o Framework =========
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get('/api/clientes', (req, res) => {
    //Obtem os dados do request
    //Trata a funcionalidade de negócio
    const listaClientes = clienteNegocio.listar()
    //Gera o response adequadamente
    res.json(listaClientes);
    //res.send("Listagem de Clientes");
})

app.get('/api/clientes/:id', (req, res) => {
    //Obtem os dados do request e da URI
    const id = req.params.id;
    console.log("ID: ", id)
    //Trata a funcionalidade de negócio
    const cliente = clienteNegocio.buscarPorId(id);
    //Gera o response adequadamente
    res.json(cliente);

    //res.send("Buscar Cliente por Id");
})

app.post('/api/clientes', (req, res) => {
    //Obtem os dados do request
    const cliente = req.body;
    //Trata a funcionalidade de negócio
    const clienteInserido = clienteNegocio.inserir(cliente);
    //Gera o response adequadamente
    res.status(201).json(clienteInserido);

    //res.send("Inserir Cliente");
})

app.put('/api/clientes/:id', (req, res) => {
    res.send("Atualizar Cliente");
})

app.delete('/api/clientes/:id', (req, res) => {
    res.send("Deletar Cliente");
})


app.listen (3000, () => {
    console.log("Iniciando o servidor...");
})