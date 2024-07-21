import mongoose from "mongoose";

const produtoSchema = new mongoose.Schema({
    nome: { type: String },
    descricao: { type: String },
    preco : { type: Number },
    imgsource : { type: String }
}, {
    versionKey: false
});

const produtos = mongoose.model('produtos', produtoSchema);

export default produtos;