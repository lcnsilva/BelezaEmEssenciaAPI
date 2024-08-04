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

const allowedOrigins = ['http://localhost:3000',
                        'https://beleza-em-essencia-api.vercel.app',
                        'https://beleza-em-essencia.vercel.app',
                        'http://127.0.0.1:5500'];

const corsOptions = {
    origin: function (origin, callback) {
        if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
            callback(null, true);
        } else {
            console.log('Origin:', origin);
            callback(new Error('Not allowed by CORS'));
        }
    },
};

app.use(cors(corsOptions));

app.use(express.json())

app.use(cors(corsOptions));

app.use(routes);

app.listen(PORT, () => {
    console.log(`Servidor escutando em http://localhost:${PORT}`);
});

export default app;