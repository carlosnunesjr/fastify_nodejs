<h1 align="center">
    Exemplo de utilização do Fastify com Knex
</h1>

<p align="center">
 <a href="#sobre-o-projeto">Sobre o Projeto</a> •
 <a href="#tecnologias">Tecnologias</a> •
 <a href="#configurações-necessárias">Configurações necessárias</a> •
 <a href="#autor">Autor</a>
</p>

## Sobre o projeto

O projeto tem como objetivo o estudo e desenvolvimento de uma api simples para exemplificar o uso do framework Fastify com a lib Knex para interação com o banco de dados.

Foram feitos testes E2E para validação dos fluxos utilizando supertest e vitest.

---

## Tecnologias

Abaixo as tecnologias utilizadas para construção da aplicação

- [NodeJS](https://nodejs.org)
- [Fasttify](https://www.fastify.io)
- [TypeScript](https://www.typescriptlang.org/)
- [Knex](https://knexjs.org)
- [PostgreSql](https://www.postgresql.org) para produção
- [Sqlite](https://sqlite.org) para testes
- [Supertest](https://github.com/ladjs/supertest)
- [Vitest](https://vitest.dev)

---

### **Clone do projeto**

```bash
# Execute o comando git clone para realizar o clone do repositório
$ git clone https://github.com/carlosnunesjr/fastify_nodejs.git
# Entre na pasta do repositório clonado
$ cd fastify_nodejs
```

### **Iniciando o projeto**

```bash
# Execute npm para instalar as dependências
$ npm i

# Na raiz do projeto crie uma copia do arquivo .env.test.example
# Altere o nome da copia para .env para uso em dev
$ cp .env.test.example .env

#Executar o comando abaixo para criar a estrutura do banco sqlite
npm run knex migrate:latest

# Para iniciar a aplicação
$ npm run dev

```

---

## Autor

Feito por Carlos Nunes
