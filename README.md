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

# 生成されたコードが依存するパッケージ追加
yarn add graphql-fields graphql-scalars
yarn add class-validator reflect-metadata
yarn add -D @types/graphql-fields
```

##### init database

下記コマンドを実行し`.env`、`schema.prisma`を生成する
(一度だけ実行すればよい。※すでに実行＆コミット済み)

```
# schemaファイルを生成する
npx prisma init --datasource-provider sqlite
```

下記コマンドを実行しデータベースファイルの生成＆マイグレーションを実施する

```
npx prisma migrate dev
```

実際にテーブルが作成されたかどうかを以下のコマンドで確認する

```
npx prisma studio
```

ローカルにサーバが起動しDBの構成を参照できる。

##### generate graphql schema

下記コマンドを実行しGraphQLのスキーマを生成する

```
yarn generate
```