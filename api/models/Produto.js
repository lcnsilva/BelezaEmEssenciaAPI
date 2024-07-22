import mongoose from "mongoose";

const produtoSchema = new mongoose.Schema({
    nome: { type: String, required: true },
    descricao: { type: String, required: true },
    preco : { type: Number, required: true },
    imgsource : { type: String, required: true },
    categoria: {type: String, required: true},
    linha: {type: String, required: true}, 
    ativo: {type: Boolean, required: true}
}, {
    versionKey: false
});

const produtos = mongoose.model('produtos', produtoSchema);

export default produtos;