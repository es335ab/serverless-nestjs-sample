## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ yarn global add serverless && yarn global add @nestjs/cli
```

```bash
$ yarn install
```

Dynamodb local

```bash
$ docker pull amazon/dynamodb-local
$ docker images
$ docker run -d -p 8000:8000 amazon/dynamodb-local -jar DynamoDBLocal.jar -inMemory -sharedDb
$ docker ps --no-trunc
```

Dynamodb admin

```bash
$ npm install dynamodb-admin -g

// run admin server
$ DYNAMO_ENDPOINT=http://localhost:8000 dynamodb-admin
```

## Running the app

```bash
# development
$ yarn start

# watch mode
$ yarn start:dev

# production mode
$ yarn start:prod
```

## Test

```bash
# unit tests
$ yarn test

# e2e tests
$ yarn test:e2e

# test coverage
$ yarn test:cov
```

## AWS Configure

You can execute command below, then these credentials set to ~/.aws/credentials as [default]
```
$ serverless config credentials --provider aws --key EXAMPLE --secret EXAMPLEKEY
```
or you can set your credentials to ~/.aws/credentials as [your aws profile] and set below option to every serverless command.
```
--aws-profile [your aws profile]
```
※ `~/.aws/credentials`には`[default]`のprofileが存在しなくてはなりません。

## Create dynamo db local

```bash
// TODO serverless.ymlに記載する
$ aws dynamodb create-table --table-name local-sls-nest-abe07-store \
--attribute-definitions AttributeName=id,AttributeType=S \
--key-schema AttributeName=id,KeyType=HASH \
--provisioned-throughput ReadCapacityUnits=1,WriteCapacityUnits=1 \
--endpoint-url http://localhost:8000
```

## seed data

```bash
$ DYNAMO_ENDPOINT=http://localhost:8000 dynamodb-admin

// TODO serverless.ymlに記載する
// 現状adminから{"id": "1", "name": "test商店"} のようなデータを手入力しています
```

### Deploy to AWS Development Environment

### build

```
$ nest build
```

#### Deploy
```
$ serverless deploy
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

  Nest is [MIT licensed](LICENSE).
