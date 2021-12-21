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

## Dependencias | Instalando o proejcto

# Normal

- Rode um yarn | npm install para baixar todas as dependências

# Via DOCKER

1. `docker-compose build/sudo docker-compose build` - no windows/Linux
2. `docker-compose up -d/sudo docker-compose up -d` - Para rodar a o container em backGround
3. `docker-compose up/docker-compose up` - Para rodar a aplicação também
4. Rode um `docker ps/sudo docker ps` - Para verificar se os containers estão rodando

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
- Ou pode simplesmente continuar usando banco de dados em cloud hospedado em `https://api.elephantsql.com/`
- Cujo os dados de acesso estão localizado em `.env.development`

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

    ```
      {
        "name": "Faz certo - que dá certo!",
      }

    ```

- Response 201 (application/json)

  - Body

    ```
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

    ```

Caso a requisição não conter nenhuma resposta ou falhar o retorno será:

- Response 400(Aplication/json)

  ```
    {
      "code": "E_VALIDATION_FAILURE",
      "message": "O campo \"name\" é obrigatório."
    }

  ```

### Pesquisar um nome por ID [GET]

- Request (url/params)

  - params example
    {{ _.baseURL }}decripted/7da66bdb-4b84-4587-92a3-44d159074bb3

- Response 200 (application/json)

  - Body

        ```
          {
            "success": true,
            "message": "Name Decripted",
            "data": [
              {
                "id": "7da66bdb-4b84-4587-92a3-44d159074bb3",
                "decripted_name": "Luís Afonso Caputo"
              }
            ]
          }

        ```

    Caso a requisição não conter nenhuma resposta ou falhar o retorno será:

- Response 400(Aplication/json)

  ```
    {
      "success": false,
      "message": "Name not found."
    }

  ```

E quando o ID for inválido

- Response 500(Aplication/json)

  ```
    {
      "success": false,
      "message": "invalid input syntax for type uuid: \"7da66bdb-4b84-4587--44d159074bb8\""
    }

  ```

### Listando todos os nomes gravados na base de dados [GET]

- Request (url)

  - Headers

- Response 200 (application/json)

  ```
    {
      "success": true,
      "message": "All Names",
      "data": [
        {
          "id": "2df1cf4b-8feb-4b20-b385-33c1c231c656",
          "name": "Teste",
          "encriptedName": "VGVzdGU=",
          "createdAt": "2021-12-19T16:53:42.552Z",
          "updatedAt": "2021-12-19T16:53:42.552Z"
        },
        {
          "id": "7da66bdb-4b84-4587-92a3-44d159074bb3",
          "name": "Luís Afonso Caputo",
          "encriptedName": "THXDrXMgQWZvbnNvIENhcHV0bw==",
          "createdAt": "2021-12-19T17:19:47.765Z",
          "updatedAt": "2021-12-19T17:19:47.765Z"
        },
        {
          "id": "ad9f4365-2f55-4349-96d7-05e78be34e8d",
          "name": "Faz certo - que dá certo!",
          "encriptedName": "RmF6IGNlcnRvIC0gcXVlIGTDoSBjZXJ0byE=",
          "createdAt": "2021-12-19T17:29:52.993Z",
          "updatedAt": "2021-12-19T17:29:52.993Z"
        },
        {
          "id": "ca9520c6-e193-45e8-b64f-9f7c790e8136",
          "name": "Faz certo - que dá certo",
          "encriptedName": "RmF6IGNlcnRvIC0gcXVlIGTDoSBjZXJ0bw==",
          "createdAt": "2021-12-19T17:31:03.434Z",
          "updatedAt": "2021-12-19T17:31:03.434Z"
        },
        {
          "id": "02c12128-4019-4f72-9ec3-addc6c271dfc",
          "name": "Faz certo - que dá cert",
          "encriptedName": "RmF6IGNlcnRvIC0gcXVlIGTDoSBjZXJ0",
          "createdAt": "2021-12-19T17:31:50.299Z",
          "updatedAt": "2021-12-19T17:31:50.299Z"
        }
      ]
    }

  ```

## Funcionalidades

Os recursos funcionais da aplicação são:

- [x] Criação de um nome e salvando de forma encriptada
- [x] Encriptar uma string base64
- [x] Desencriptar uma string encriptada base64 para UTF-8
- [x] Não permite a criação de um nome já existente na apliação
- [x] Não Permite a criação de um nome vazio like ""
- [x] Listagem de nome desencriptado por ID
- [x] Não Permite buscar um nome com ID inválido
- [x] Não Permite buscar um nome com ID Inexistente
- [x] Listagem de todos os gravados na aplicação

## Testando a Aplicação

Para testar as funcionalidades acima descritas, basta abrir o insomnia do seu computador e lá dentro, importar o ficheiro `facile_challenge-routes.json` localizado em `src/insomnia/`.

## Tecnologias/Ferramentas Usadas

- NodeJs
- TypeScript
- PostgreSQL
- PSQL in shell mode
- ExpressJs
- typeorm
- Docker
- Docker Compose
- Jest
- Lint
- Prettier
- Heroku Cloud
- Insomnia
- Elephantsql
- Babel

<hr>

<h4>Desenvolvido por: <strong style="color: #1f6feb; align: center">Luís Afonso Caputo</strong></h4>
