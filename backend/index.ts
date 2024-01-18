import express, { Express, Request, Response} from 'express';
import dotenv from 'dotenv'

dotenv.config()

const app: Express = express();
const port = process.env.PORT;

app.get('/', (req: Request, res: Response) => {
    res.send("Teste usando Express e TypeScript");
})

// faça uma busca no cep informando a api viacep
app.get('/cep/:cep', (req: Request, res:Response) => {
    
    const cep = req.params.cep;
    const url = `https://viacep.com.br/ws/${cep}/json/`;

    fetch(url)
    .then(res => res.json())
    .then(data => res.send(data))
    .catch(error => res.send(error))
})

// executa o app na porta informada pelo ENV
app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`)

     // 
})