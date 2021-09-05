# Projeto: Crie seu gerenciador de salas de reuniões com Java e Angular

## Requisitos:

- Java 8
- Angular CLI
- Git


Neste projeto foi desenvolvida uma API que responde à criação, listagens, atualização e remoção de salas para reunião.

Apesar de uma estrutura simples, o projeto aborda vários tópicos:

### FrontEnd
- Angular 9
- Bootstrap
- Conceitos de criação de componentes, serviços e roteamento;
- Inevitavelmente também aborda HTML, CSS e Javascript

### Backend
- API Spring Boot
- Lombok
- Banco de dados em memória H2
- Conceitos de REST e mapeamentos
- Java 8
- Tratamento e captura de exceções personalizadas

## Para executar o projeto

#### Clone o projeto
`git clone https://github.com/cassioliveira/bootcamp-dio-gerenciador-sala-reunioes.git`

## API
Entre no diretório `backend` e execute:
`mvn spring-boot:run`

## FrontEnd
Entre no diretório `backend` e entre com os seguintes comandos
`npm install`
`npm i bootstrap jquery --save`
`ng serve`

Execute a URL no navagador: `http://localhost:8082/api/v1/rooms`
