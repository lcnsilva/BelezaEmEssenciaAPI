import mongoose from "mongoose";

async function dbConnection() {
    try{
        mongoose.connect(process.env.MONGODB_URI);        
        return mongoose.connection;
    } catch (error) {
        console.error('Erro ao conectar ao MongoDB:', error);
    }
}

export default dbConnection;