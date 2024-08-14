
# Beleza em Essência API

API Rest criada em NodeJS, express e MongoDB.

### Link para o repositório do front-end:

https://github.com/lcnsilva/BelezaEmEssencia
## Documentação da API

#### Retorna todos os produtos.

```http
  GET /produtos
```

| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `JSON` | `string` | Retorna todos os produtos ativos |

#### Retorna um produto.

```http
  GET /produtos/${id}
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `integer` | O ID do produto desejado |

#### Retorna todos os produtos de uma categoria específica.

```http
  GET /produtos/categorias/${categoria}
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `categoria`      | `string` | A categoria do produto desejado |

#### Retorna todos os produtos de uma linha específica.

```http
  GET /produtos/linha/${linha}
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `linha`      | `string` | A linha do produto desejado |

#### Cria um produto.

```http
  POST /produtos
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `JSON`      | `body` | Cria um produto de acordo com o modelo |

#### Atualiza um produto.

```http
  PUT /produtos/${id}
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `integer` | O ID do produto a ser atualizado |

#### Desativa um produto.

```http
  DELETE /produtos/${id}
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `integer` | O ID do produto a ser desativado |
