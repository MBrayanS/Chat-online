# Rota de cadastro

Utilizada para cadastrar novos usuários.

<br>

## Corpo da Solicitação

``` js
POST /api/cadastrar

body: {
    "nome": "John Doe",
    "chave": "Chave12!",
    "senha": "Senha12!"
}
```

<br>

Deve conter os seguintes campos:

- **nome :** <**string**>
    > Minímo de 3 e máximo de 50 caracteres.

- **chave :** <**string**>
    > Minímo de 4 e máximo de 255 caracteres.
    >
    > Sendo obrigatório ao menos um número, uma letra minúscula, uma letra maiúscula e um caractere especial.

- **senha :** <**string**>
    > Minímo de 8 e máximo de 255 caracteres.
    >
    > Sendo obrigatório ao menos um número, uma letra minúscula, uma letra maiúscula e um caractere especial.

<br>

`* Todos obrigatórios`

<br>

# Respostas

Possiveis respostas da requisição. 

## Sucesso

### 201 CREATE

> Sem resposta

## Erro

### 400 Bad Request

``` js
{ message: 'O campo {#label} é obrigatório' }
```

``` js
{ message: 'O campo {#label} deve conter pelo menos uma letra maiúscula, uma letra minúscula e um caractere especial' }
```

``` js
{ message: 'O campo {campoReferente} não pode estar vazio' }
```

``` js
{ message: 'O campo {campoReferente} deve ser uma string' }
```

``` js
{ message: 'O campo {#label} deve conter pelo menos {#limit} caracteres' }
```

``` js
{ message: 'O campo {#label} deve conter no máximo {#limit} caracteres' }
```

### 409 Conflict

``` js
{ message: 'Já existe um usuário com esta chave' }
```

### 500 Internal Server Error

``` js
{ message: 'Falha na requisição' }
```

---

<br>

<h4 align="right"> <a href="#rota-de-cadastro">⬆️ Voltar ao topo ⬆️</a> </h4>
<h4 align="left"> <a href="../documentacao.md">Voltar ao arquivo principal</a> </h4>