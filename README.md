
# Todo List

Este projeto foi o primeiro desafio do curso Ignite da Rocketseat. E tem como objetivo de consólidar os colhecimento de **api** com Node.

As informações enviada a api são amazenada em memória.

<br/>

## Documentação da API

<br/>

#### Middleware

```http
  HEADERS
```

| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `username` | `string` | **Obrigatório**|

<br/>

#### Registra novo usuário

```http
  POST /users
```

| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `name` | `string` | **Obrigatório**|
| `username` | `string` | **Obrigatório**|

<br/>

#### Resultado
```json
  {
    "id": "6ea0f539-1254-470f-bca8-698b8b1b3f51",
    "name": "John Doe",
    "username": "John",
    "todos": []
  }
```
<hr/>

<br/>

#### Retorna todos os TODO

```http
  GET /todos
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `string` | **Obrigatório**. O ID do item que você quer |

<br/>

#### Resultado
```json
  [
    {
      "id": "f40d2d5b-5499-46e7-ad73-2ce1417951e1",
      "title": "TODO 1",
      "done": false,
      "deadline": "2022-09-30T00:00:00.000Z",
      "created_at": "2022-09-28T19:08:56.588Z"
    }
  ]
```
<hr/>

<br/>

#### Registra um novo TODO

```http
  POST /todos
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `user`      | `objeto` | **Obrigatório**. Vem do middleware com as infornações da pessoa |
| `title`      | `string` | **Obrigatório**|
| `deadline`      | `string` | **Obrigatório**|

<br/>

#### Resultado
```json
  {
    "id": "f40d2d5b-5499-46e7-ad73-2ce1417951e1",
    "title": "TODO 1",
    "done": false,
    "deadline": "2022-09-30T00:00:00.000Z",
    "created_at": "2022-09-28T19:08:56.588Z"
  }
```
<hr/>

<br/>

#### Atualizar TODO

```http
  PUT /todos/:id
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `user`      | `objeto` | **Obrigatório**. Vem do middleware com as infornações da pessoa |
| `id`      | `string` | **Obrigatório**. vem do params |
| `title`      | `string` | **Obrigatório**. vem do body |
| `deadline`      | `string` | **Obrigatório**. vem do body |

<br/>

#### Resultado
```json
  {
    "id": "f40d2d5b-5499-46e7-ad73-2ce1417951e1",
    "title": "TODO 2",
    "done": false,
    "deadline": "2022-09-27T00:00:00.000Z",
    "created_at": "2022-09-28T19:08:56.588Z"
  }
```
<hr/>
<br/>

#### Marca com feito o TODO

```http
  PATCH /todos/:id/done
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `user`      | `objeto` | **Obrigatório**. Vem do middleware com as infornações da pessoa |
| `id`      | `string` | **Obrigatório**. vem do params |

<br/>

#### Resultado
```json
  {
    "id": "268cf7b1-2cf2-4f6e-abe2-b29d85d83203",
    "title": "TODO",
    "done": true,
    "deadline": "2022-09-27T00:00:00.000Z",
    "created_at": "2022-09-29T00:42:24.726Z"
  }
```
<hr/>

<br/>

#### Deletar TODO

```http
  DELETE /todos/:id
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `user`      | `objeto` | **Obrigatório**. Vem do middleware com as infornações da pessoa |
| `id`      | `string` | **Obrigatório**. vem do params |