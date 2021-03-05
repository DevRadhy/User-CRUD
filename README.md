# User Info

## Introdução

API para cadastro de usuário com endereço, feita com **Node.js** e **Typescript**.

## Rotas

Aqui você pode ver quais são as rotas e como usar.

### Auth

Rotas para autenticação de usuário.

```http
// Rota de login
POST '/login'
```

### User

Rotas para CRUD de usuário.

```http
// Rota para criação de usuário
POST '/user'

// Rota para deletar um usuário
DELETE '/delete-user'

// Rota para atualizar um usuário
PATCH '/user/:id'

// Rota para mostrar um usuário
GET '/user/:id'

// Rota para mostrar todos os usuário
GET '/list-users'
```

### Address

Rotas para CRUD de Address.

```http
// Rota para atualizar um endereço
PATCH '/update-address/:id'

// Rota para listar um endereço
GET '/address/:id'

// Rota para listar todos os endereços
GET '/addresses'
```
