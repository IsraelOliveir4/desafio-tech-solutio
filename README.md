Desafio Tech - Solutio
=======================
Sistema de gerenciamento de produtos com arquitetura moderna baseada em microsservicos,
utilizando Spring Boot, PostgreSQL, Docker e Angular.

Backend - Microsservico de Produtos
-----------------------------------

Desenvolvido com Java 17 + Spring Boot, Angular e PostgreSQL.

Endpoints da API:
- GET /api/produtos - Lista todos os produtos
- GET /api/produtos/{id} - Busca um produto por ID
- POST /api/produtos - Cria um novo produto
- PUT /api/produtos/{id} - Atualiza um produto existente
- DELETE /api/produtos/{id} - Remove um produto

Tecnologias Utilizadas
-----------------------

- Java 17
- Spring Boot
- Spring Data JPA
- PostgreSQL
- Liquibase (Migrations)
- Docker
Frontend:
- Angular 17
- Angular Material
- SCSS

Execucao via Docker
--------------------

 **Rodar o projeto**:

```bash
#1 Clone o repositório do projeto
git clone https://github.com/IsraelOliveir4/desafio-tech-solutio.git

#2 Entre no diretorio do projeto
cd desafio-tech-solutio

#3 Inicie os containers
docker-compose up --build
```


Acesse:
- Frontend: http://localhost:4200
- Backend: http://localhost:8080/api/produtos

------------------------


Israel Oliveira

Desenvolvedor Fullstack | Java & Angular

LinkedIn: https://www.linkedin.com/in/israeloliveir4