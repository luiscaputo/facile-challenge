# facile_challenge

Este foi o test ou desafio que me foi proposto pela empresa **Facile Sistemas** a fim de testar as minhas competências como desenvolvedor nas tecnologias `JavasCript - NodeJs`, `ExpressJs` e `PostgreSQL`.

A aplicação desenvolvida tem a finalidade encriptar nomes e salvar no banco de dados.

Recursos disponíveis para acesso via API ou endpoints(URI):

- **baseURL** - localhost:3333/
- **encripts** - /encript

| Método | Descrição                         |
| ------ | --------------------------------- |
| `POST` | `/encript`                        |
| `GET`  | `/decripted/:id` e `/encript-all` |

um exemplo do funcionamento das rotas.

## Dependencias

- Rode um yarn | npm install para baixar todas as dependências

Para rodar a aplicação siga os seguintes passos:
Primeiro: Crie as variáveis de ambiente `.env`, `.env.example` e `.env.development` e dentro delas configure as seguintes variáveis:

- POSTGRES_HOST=localhost
- POSTGRES_PORT=5432
- POSTGRES_USER=
- POSTGRES_PASSWORD=
- POSTGRES_DATABASE=facile_challenge

_OBS: Atualize o user e password de acordo aos dados da sua máquina_

Segundo: crie uma base de dados com o nome `facile_challenge`

- Nesse Passo certifique-se | ou rode o comando
  `CREATE EXTENSION IF NOT EXISTS "uuid-ossp" WITH SCHEMA public;`
  Actualize as configurações da base de dados, colocando o `user`, `password`, `host`

```nodeJs - ormconfig.js
  module.exports = [
  {
    name: "default",
    type: "postgres",
    host: process.env.POSTGRES_HOST,
    port: process.env.POSTGRES_PORT,
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DATABASE,
    synchronize: false,
    logging: false,
    entities: ["**/models/**/*.ts"],
    migrations: ["src/database/migration/**/*.ts"],
    subscribers: ["src/database/subscriber/**/*.ts"],
    cli: {
      entitiesDir: "src/models",
      migrationsDir: "src/database/migration",
      subscribersDir: "src/database/subscriber",
    },
  },
}
```

Após isso, rode as migrations de formas a criar as tabelas na base de dados

```shell
  yarn typeorm migration:run || npm run typeorm migratiom:run
```

Ou importe o ficheiro script.sql localizado em `src/dump/script.sql`

## Métodos

Requisições para a API devem seguir os padrões:
| Método | Descrição |
| -------- | ----------------------------------------------------- |
| `GET` | Retorna informações de um ou mais registros. |
| `POST` | Utilizado para criar um novo registro. |

## Rode o Projeto

- Para executar, basta:

| Comando                       | Descrição                      |
| ----------------------------- | ------------------------------ |
| `yarn test` ou `npm run test` | Rodando os testes da Aplicação |
| `yarn dev` ou `npm run dev`   | Rodando a aplicação em geral   |
| `yarn test`                   | Rodando os testes da Aplicação |

## Respostas

| Código | Descrição                                                          |
| ------ | ------------------------------------------------------------------ |
| `200`  | Requisição executada com sucesso (success).                        |
| `201`  | Registro Criado com sucesso.                                       |
| `400`  | Erros de validação ou os campos informados não existem no sistema. |
| `500`  | Erro interno do servidor.                                          |

## Exemplo de criação de nome encriptando

- Request (application/json)

  - Body

    {
    "name": "Faz certo - que dá certo!",
    }

- Response 201 (application/json)

  - Body
    {
    "success": true,
    "message": "Name encripted",
    "data": [
    {
    "id": "69a9eff3-d4e6-43c1-a38d-a32367f6918b",
    "encripted_name": "dGVzdGU="
    }
    ]
    }

Caso a requisição não conter nenhuma resposta ou falhar o retorno será:

- Response 400(Aplication/json)
  {
  "code": "E_VALIDATION_FAILURE",
  "message": "O campo \"name\" é obrigatório."
  }

### Listar module e aula (List) [GET]

- Request (application/json)

  - Headers

        Authorization: Bearer [access_token]

- Response 200 (application/json)

        {
            "id": 1,
            "name": "Desenvolvimento FrontEnd Master",
            "lessons": [
                "http://127.0.0.1:8000/api/v1/lessons/5/",
                "http://127.0.0.1:8000/api/v1/lessons/1/",
                "http://127.0.0.1:8000/api/v1/lessons/2/",
                "http://127.0.0.1:8000/api/v1/lessons/3/",
                "http://127.0.0.1:8000/api/v1/lessons/4/"
            ]
        }

## Funcionalidades

Os recursos funcionais da aplicação são:

- [x] Criação, remoção e actualização de usuário
- [x] Criação, remoção, actualização e deleção de módulo
- [x] Criação, remoção, actualização e deleção de aula
- [x] Authenticação de usuário
- [x] Listagem das aulas em ordem alfabética
- [x] Validação dos campos antes da inserção
