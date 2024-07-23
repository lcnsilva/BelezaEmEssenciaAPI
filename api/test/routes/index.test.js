import request from 'supertest';
import app from '../../index.js'
import mongoose from 'mongoose';
//import 'dotenv/config'
import {
    afterEach, beforeEach, describe, expect,
    it,
} from '@jest/globals';

let server;
beforeEach(() => {
    const port = process.env.PORT_TEST
    server = app.listen(port);
})

afterEach(() => {
    server.close();
})

let idResposta;
const produtoTeste = {
    "nome": "Desodorante Teste",
    "descricao": "Desodorante 100ml",
    "preco": 200.15,
    "imgsource": "link test",
    "categoria": "desodorante",
    "linha": "Teste",
    "ativo": true
}

describe('GET em /produtos', () => {
    it('Deve retornar uma lista de produtos', async () => {
        const resposta = await request(app)
            .get('/produtos')
            .expect('content-type', /json/)
            .expect(200);

        expect(resposta._body[0]._id).toEqual(expect.any(String));        
    })
})

describe('POST em /produtos', () => {
    it('Deve adicionar um novo produto', async () => {
        const resposta = await request(app)
            .post('/produtos')
            .send(produtoTeste)
            .expect(201);
        idResposta = resposta._body._id;
    });
});

describe('PUT em /produtos', () => {
    const cases = [
        ['nome', { nome: "Desodorante Teste" }],
        ['descricao', { descricao: "Desodorante 100ml" }],
        ['preco', { preco: 200.15 }],
        ['imgsource', { imgsource: "link test" }],
        ['categoria', { categoria: "desodorante" }],
        ['linha', { linha: "Teste" }],
        ['ativo', { ativo: true }],
    ]
    it.each(cases)('Deve alterar o campo %s, com', async (chave, param) => {
        await request(app)
            .put(`/produtos/${idResposta}`)
            .send(param)
            .expect(204);
    });
})

describe('DELETE em /produtos/id', () => {
    it('Deletar o produto adicionado', async () => {
        await request(app)
            .delete(`/produtos/${idResposta}`)
            .expect(200);
    });
});

describe('GET em /produtos/id', () => {
    it('Deletar o produto adicionado', async () => {
        await request(app)
            .get(`/produtos/${idResposta}`)
            .expect(200);
    });
});

describe('GET em /produtos/categoria/:categoria', () => {
    it('Deve retornar um produto pertinente a categoria', async () => {
        let categoriaTeste = 'desodorante';
        const resposta = await request(app)
            .get(`/produtos/categoria/${categoriaTeste}`)
            .expect(200);
        
        expect(resposta._body[0].categoria).toEqual(categoriaTeste.toLowerCase());        
    })
})

describe('GET em /produtos/linha/:linha', () => {
    it('Deve retornar um produto pertinente a categoria', async () => {
        let linhaTeste = 'Liz';
        const resposta = await request(app)
            .get(`/produtos/linha/${linhaTeste}`)
            .expect(200);
        
        expect(resposta._body[0].linha).toBe(linhaTeste.toLowerCase());        
    })
})