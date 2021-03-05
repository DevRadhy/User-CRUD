# User Info

## Introdução

API para cadastro de usuário com endereço, feita com **Node.js** e **Typescript**.

## Tópicos :ok_person:

Você pode navegar usando os tópicos.

* **[Rotas](#rotas)**
* **[Usage](#usage)**
  * **[Auth](#auth)**
  * **[User](#user)**
  * **[Address](#address)**

## Rotas

Aqui você pode ver quais são as rotas e como usar.

### Routes - Auth

Rotas para autenticação de usuário.

```http
// Rota de login
POST '/login'
```

### Routes - User

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



### Routes - Address

Rotas para CRUD de Address.

```http
// Rota para atualizar um endereço
PATCH '/update-address/:id'

// Rota para listar um endereço
GET '/address/:id'

// Rota para listar todos os endereços
GET '/addresses'
```

## Usage

## Auth

### Login

> POST '/login'

```json
{
  "email": "user@mail.com"
}
```

## User

### Criar um usuário

> POST '/user'

> Ethnicities: 1.Brancos, 2.Pardos, 3.Pretos, 4.Amarelos, 5.Indigenas, 6.Outros

```http
authorizatoin: Bearer JWT-TOKEN
```

```json
{
  "name": "User",
  "age": "18",
  "email": "user@mail.com",
  "phone": "(00) 9 12345678",
  "weight": "50",
  "ethnicity_id": "ETNIA",
  "address": {
    "address": "R. 7 de Setembro",
    "number": 0,
    "complement": "casa",
    "cep": "12345-000",
    "city": "CIDADE",
    "state": "ESTADO"
  }
}
```

### Deletar um usuário

> DELETE '/delete-user'

```http
authorizatoin: Bearer JWT-TOKEN
```

```json
{
  "email": "user@mail.com"
}
```

### Atualizar um usuário

> PATCH '/user/:id'

```http
authorizatoin: Bearer JWT-TOKEN
```

```json
{
  "name": "User",
  "age": "18",
  "email": "user@mail.com.br",
  "phone": "(00) 9 12345678",
  "weight": "52",
  "ethnicity_id": "ETNIA"
}
```

### Listar um usuário

> GET '/user/:id'

```
host:port/user/4a965989-6342-43a6-b68b-0e7637808dc6
```

### Listar todos os usuários

> GET '/users'

```
host:port/users
```

## Address

### Atualizar um endereço

> PATCH '/update-address/:id'

```http
authorization: Bearer TOKEN
```

```json
{
  "address": "R. 7 de Setembro",
  "number": 0,
  "complement": "casa",
  "cep": "12345000",
  "city": "Timbó Grande",
  "state": "Santa Catarina"
}
```

### Listar um usuário

> GET '/address/:id'

```
//host:port/address/4a965989-6342-43a6-b68b-0e7637808dc6
```

### Listar todos os usuários

> GET 'addresses' 

```
//host:port/addresses
```
