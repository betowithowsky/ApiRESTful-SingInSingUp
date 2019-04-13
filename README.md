# API RESTful Sing up/Sing in

## Tutorial

### Cadastro / SingUp

> POST: https://apirestful-testsky.herokuapp.com/singup

Endpoint SingUp recebe um objeto JSON com os seguintes campos:
nome, email, senha e uma lista de objetos telefone

ex:
```
{
	"nome": "test",
	"email": "test@test.com.br",
	"senha": "test",
	"telefones": [{ "numero": "9999999", "ddd": "11"}]
}
```

*Response*

```
{
    "user": {
        "_id": "5cb172ddab9e7700172ebd1b",
        "nome": "test",
        "email": "test@test.com.br",
        "senha": "$2a$05$1vyz5.g.VAYzAAejexzXr.LrHu1qMAHZUbzIDKcryOIkH8ANsb9KK",
        "telefones": [
            {
                "numero": 9999999,
                "ddd": 11
            }
        ],
        "data_criacao": "2019-04-13T05:25:49.250Z",
        "data_atualizacao": "2019-04-13T05:25:49.250Z",
        "ultimo_login": "2019-04-13T05:25:49.250Z",
        "id": "127ffdb8-28da-7805-bc92-dc45da6e4cf8"
    },
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjEyN2ZmZGI4LTI4ZGEtNzgwNS1iYzkyLWRjNDVkYTZlNGNmOCIsImlhdCI6MTU1NTEzMzE0OSwiZXhwIjoxNTU1MTM0OTQ5fQ.QeLSSnbMwtcLxeM3SE6exkHLrcz8nXXDAvgRoj6j9vk"
}
```
### Login / SingIn

> POST: https://apirestful-testsky.herokuapp.com/singin

Endpoint Singin recebe um objeto JSON com E-mail e Senha.
*Caso o email e senha estejam correto a API retornará o usuario*

Ex:
```
{
	"email": "test@test.com.br",
	"senha": "picapau"
}
```

*Response*

```
{
    "user": {
        "_id": "5cb158910ecda820b4c942ba",
        "nome": "Roberto",
        "email": "test@test.com.br",
        "senha": "$2a$05$USzXbhlRnFkjGSM4d9d2IO28f9OECjk5Tp07d6d8XNXUhq8UG/nHi",
        "telefones": [
            {
                "numero": 9999999,
                "ddd": 11
            }
        ],
        "data_criacao": "2019-04-13T03:33:37.227Z",
        "data_atualizacao": "2019-04-13T03:33:37.228Z",
        "ultimo_login": "2019-04-13T05:04:21.440Z",
        "id": "4ca1eb57-3eb4-942f-e615-554822da0db8"
    },
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjRjYTFlYjU3LTNlYjQtOTQyZi1lNjE1LTU1NDgyMmRhMGRiOCIsImlhdCI6MTU1NTEzMTg2MiwiZXhwIjoxNTU1MTMzNjYyfQ.3iLe-HbrYcUUn8dE5HAPMzzN45LYXRfQaOP6xlkPMX0"
}
```

### Buscar Usuario / SingIn

> POST: https://apirestful-testsky.herokuapp.com/search/:id

Endpoint Search deve conter no Header Authorization com o valor Bearer { token } e o Id do Usuario no Path.
*Caso o ID do path seja o mesmo ID retornado pelo token ele retorna o Usuario*

*Response*

```
{
    "user": {
        "_id": "5cb16ac9cd809d14800e2fd2",
        "nome": "test",
        "email": "test@test.com.br",
        "senha": "$2a$05$jVzFPf0r8.4XqRyA.pedX.41Z5083/fa9/RWsWKtoWZWWc5ONbZv.",
        "telefones": [
            {
                "numero": 9999999,
                "ddd": 11
            }
        ],
        "data_criacao": "2019-04-13T04:51:21.051Z",
        "data_atualizacao": "2019-04-13T04:51:21.051Z",
        "ultimo_login": "2019-04-13T04:51:21.051Z",
        "id": "773e64d2-4745-971e-c6fb-656fe8139798"
    }
}
```

