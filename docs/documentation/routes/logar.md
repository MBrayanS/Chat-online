# Rota de login

Utilizada para efetuar o login de usuários já cadastrados.

<br>

## Corpo da Solicitação

``` js
POST /api/logar

body: {
    "chave": "Chave12!",
    "senha": "Senha12!"
}
```

<br>

Deve conter os seguintes campos:

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

### 200 OK

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

### 404 Not Found

``` js
{ mensagemDeErro: 'Usuário não encontrado' }
```

### 500 Internal Server Error

``` js
{ mensagemDeErro: 'Falha na requisição' }
```

---

<br>

<h4 align="right"> <a href="#rota-de-login">⬆️ Voltar ao topo ⬆️</a> </h4>
<h4 align="left"> <a href="../documentacao.md">Voltar ao arquivo principal</a> </h4>