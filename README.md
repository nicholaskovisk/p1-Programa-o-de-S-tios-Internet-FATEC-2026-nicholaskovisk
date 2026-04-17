#  Projeto: Busca de Personagens - Rick and Morty

##  Descrição

Este projeto é uma aplicação web simples que permite buscar personagens da série **Rick and Morty** utilizando uma API pública. O usuário digita o nome de um personagem e o sistema exibe até **3 resultados** em formato de cards, contendo imagem, nome e status.

---

##  Funcionalidades

*  Busca de personagens por nome
*  Consumo de API externa (Rick and Morty API)
*  Exibição de imagem do personagem
*  Informações básicas (nome e status)
*  Interface simples e responsiva
*  Botão "LEARN MORE" com alerta informativo

---

## Estrutura do Projeto

```
 projeto
├── index.html   # Estrutura da página
├── style.css    # Estilização visual
└── script.js    # Lógica da aplicação
```

---

##  Explicação dos Arquivos

###  `index.html`

Responsável pela estrutura da página:

* Contém um **campo de busca** para digitar o nome do personagem
* Um botão que chama a função `buscar()`
* Uma seção (`#resultado`) onde os cards são exibidos

---

###  `style.css`

Define o estilo visual da aplicação:

* Reset básico de CSS
* Layout centralizado e organizado
* Estilização do header
* Configuração dos cards (tamanho, bordas, imagens)
* Estilo dos botões e campos de entrada

---

###  `script.js`

Contém a lógica principal:

* Função `buscar()` que:

  * Captura o valor digitado pelo usuário
  * Faz uma requisição à API usando `fetch`
  * Converte a resposta em JSON
  * Limita os resultados a 3 personagens
  * Cria dinamicamente os cards no HTML
* Tratamento de erro caso nenhum personagem seja encontrado

---

## API Utilizada

* Rick and Morty API
* Endpoint:

```
https://rickandmortyapi.com/api/character/?name=...
```

---

## ▶Como Usar

1. Abra o arquivo `index.html` no navegador
2. Digite o nome de um personagem
3. Clique em **Pesquisar**
4. Veja os resultados exibidos na tela

---

## Tecnologias Utilizadas

* HTML5
* CSS3
* JavaScript (ES6)
* API REST

---

## Observações

* A busca depende da conexão com a internet
* Caso o personagem não seja encontrado, uma mensagem de erro é exibida
* O botão "LEARN MORE" atualmente mostra apenas um alerta (pode ser expandido futuramente)

---

## Possíveis Melhorias

* Página de detalhes do personagem
* Paginação de resultados
* Melhor tratamento de erros
* Animações e melhorias visuais
* Responsividade para dispositivos móveis

---

##  Aluno
Nicholas Guzzon Domingues Klaus

Projeto desenvolvido para fins de estudo e prática de desenvolvimento web.
