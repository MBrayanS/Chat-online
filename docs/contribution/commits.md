# Padrão para commits

Logo abaixo está definido as regras para os commits feitos nessa aplicação.

## Estrutura base

Os commits devem conter um título e um corpo. Assim como o exemplo abaixo.

```
:emoji: TIPO_DO_COMMIT: Título curto descrevendo as alterações

Corpo descrevendo mais detalhadamente o que foi feito e o porquê.
```

## Os tipos de commit

### :sparkles: FEAT:
  > Usado na adição de uma nova funcionalidade ao projeto.
  #### Exemplo: 
  > Uma nova class, função ou método.

<br>

### :bug: FIX:
  > Utilizado quando há correção de erros que estão gerando bugs no sistema.
  #### Exemplo: 
  > Aplicar tratativa para uma função que não está tendo o comportamento esperado e retornando erro.

<br>

### :test_tube: TEST:
  > Indica qualquer tipo de criação ou alteração de códigos de teste.
  #### Exemplo: 
  > Criação de testes unitários.

<br>

### :recycle: REFACTOR:
  > Usado quando houver uma refatoração de código que não tenha qualquer tipo de impacto na lógica/regras de negócio do sistema.
  #### Exemplo: 
  > Mudanças de código após um code review

<br>

### :wrench: CHORE:
  > Indica mudanças no projeto que não afetem o sistema ou arquivos de testes. São mudanças de desenvolvimento.
  #### Exemplo: 
  > Mudar regras do eslint, adicionar prettier, adicionar mais extensões de arquivos ao .gitignore

<br>

### :books: DOCS:
  > Usado quando há mudanças na documentação do projeto.
  #### Exemplo: 
  > adicionar informações na documentação da API, mudar o README, etc.

<br>

### :construction: BUILD:
  > Utilizada para indicar mudanças que afetam o processo de build do projeto ou dependências externas.
  #### Exemplo: 
  > Gulp, adicionar/remover dependências do npm, etc.

<br>

### :bricks: CI:
  >  Utilizado para mudanças nos arquivos de configuração de CI.
  #### Exemplo:
  > Um action do github