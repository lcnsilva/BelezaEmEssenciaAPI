import express from 'express';
import cors from 'cors'
import 'dotenv/config'
import routes from './routes/index.js';
import dbConnection from './config/dbConnection.js';

const app = express();
const conexao = await dbConnection();
const PORT = process.env.PORT;

conexao.once("open", () => {
    console.log("Conectado ao banco.");
})

app.use(express.json())

app.use(cors({
    origin: '*'
}));

app.use(routes);

app.listen(PORT, () => {
    console.log(`Servidor escutando em http://localhost:${PORT}`);
});

export default app;