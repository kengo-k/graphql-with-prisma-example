##### create project

```
yarn init
yarn create next-app sample --ts
```

##### install packages

```
#
# ORM
#

# テーブル生成やマイグレーションに使用するCLIツール
yarn add -D prisma
# プログラムから使用するクライアント
yarn add @prisma/client

#
# GraphQL
#

# GraphQL本体
yarn add graphql
# GraphQLクライアント
yarn add @apollo/client
# GraphQLサーバ
yarn add apollo-server-micro
# CORS対応
yarn add micro-cors
yarn add -D @types/micro-cors

#
# TypeGraphQL
# (Prismaの定義からGraphQLのスキーマ/リゾルバを自動生成する)
#
yarn add type-graphql typegraphql-prisma

# 生成コードが必要になる依存パッケージ追加
yarn add graphql-fields graphql-scalars
yarn add class-validator reflect-metadata
yarn add -D @types/graphql-fields
```

##### DBの初期化〜マイグレーション

```
# schemaファイルを生成する
npx prisma init --datasource-provider sqlite

# shemaファイルにモデルを定義しマイグレーションを実行する
# --nameで指定した名称でマイグレーションSQLを生成する
npx prisma migrate dev --name init
```

実際にテーブルが作成されたかどうかを以下のコマンドで確認する

```
npx prisma studio
```

ローカルにサーバが起動しDBの構成を参照できる。

##### yamlファイルから型定義を生成する

- サーバ側の定義を生成

```
yarn run graphql-codegen --config graphql/codegen-server.yaml
```

- クライアント側の定義を生成

```
yarn run graphql-codegen --config graphql/codegen-client.yaml
```

