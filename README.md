# User Info

## Introdução

API para cadastro de usuário com endereço, feita com **Node.js** e **Typescript**.

## Tópicos

Você pode navegar usando os tópicos.

* **[Rotas](#rotas)**
  * **[Auth](#auth)**
  * **[User](#user)**
  * **[Address](#address)**

## Rotas

Aqui você pode ver quais são as rotas e como usar.

### Auth

Rotas para autenticação de usuário.

```http
// Rota de login
POST '/login'
```

> Usage POST '/login' 

```json
{
  "email": "user@mail.com"
}
```

> Return

```json
{
  "id": "UUID-FORMAT",
  "auth": true,
  "token": "JWT-TOKEN"
}
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

> Usage POST '/user'

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
		"address": "R. NOME DA RUA",
		"number": 0,
		"complement": "casa",
		"cep": "12345-000",
		"city": "CIDADE",
		"state": "ESTADO"
	}
}
```

> Return

```json
{
  "createUser": {
    "name": "User",
    "age": "18",
    "email": "user@mail.com",
    "phone": "(00) 9 12345678",
    "weight": "50",
    "ethnicity_id": 6,
    "id": "UUID-FORMAT"
  },
  "userAddress": {
    "user_id": "UUID-FORMAT",
    "address": "R. NOME DA RUA",
    "number": 0,
    "complement": "casa",
    "cep_id": 6,
    "city_id": 6,
    "state_id": 6
  }
}
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
