# API RESTful Sing up/Sing in

## Utilizando

```
../singup
```
Endpoint SingUp recebe um usario com os seguintes campos:
nome, email, senha e uma lista de objetos telefone

```
../singin
```
Endpoint Singin recebo um objecto com e-mail e senha

```
../search/:id
```
Endpoint Search esse endpoint deve conteri um header na requisiçao de Authentication com o valor Bearer { token }
passado na criação do Sing in de um usuário.

