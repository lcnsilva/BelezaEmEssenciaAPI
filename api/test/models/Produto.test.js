import { describe, expect, it, jest } from '@jest/globals';
import Produto from '../../models/Produto.js'

describe('Testando o modelo Produto', () => {
    const produtoTeste = {
        "nome": "Desodorante Teste",
        "descricao": "Desodorante 100ml",
        "preco": 200.15,
        "imgsource": "link test",
        "categoria": "desodorante",
        "linha": "Teste",
        "ativo": true
    };

    test('Deve instanciar um novo Produto', () => {
        const produto = new Produto(produtoTeste);
        expect(produto).toEqual(
            expect.objectContaining(produtoTeste),
        )
    })
})