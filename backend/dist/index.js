"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT;
app.get('/', (req, res) => {
    res.send("Teste usando Expresss e TypeScript");
    //const cep = req.params.cep;
    //const url = `https://viacep.com.br/ws/${cep}/json/`;
    // fetch(url)
    // .then(res => res.json())
    // .then(data => {
    //     res.send(data)
    //     console.log(data)
    // })
    // .catch(error => res.send(error))
});
// faça uma busca no cep informando a api viacep
app.get('/cep/:cep', (req, res) => {
    const cep = req.params.cep;
    const url = `https://viacep.com.br/ws/${cep}/json/`;
    fetch(url)
        .then(res => res.json())
        .then(data => res.send(data))
        .catch(error => res.send(error));
});
// executa o app na porta informada pelo ENV
app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
