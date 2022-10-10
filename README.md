##### create project

```
yarn init
yarn create next-app sample --ts
```

##### install packages

```
#
# base
#

# seed.shを実行するときにts-nodeを使う
yarn add -D ts-node

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

以下コマンドを実行し初期データを投入する

```
./seed.sh
```

実際にテーブルが作成されていること、データが投入されていることを以下のコマンドで確認する

```
npx prisma studio
```

ローカルにサーバが起動しDBの構成を参照できる。

##### generate graphql schema

下記コマンドを実行しGraphQLのスキーマを生成する

```
yarn generate
```

yarn add -D @graphql-codegen/cli @graphql-codegen/typescript @graphql-codegen/typescript-operations @graphql-codegen/typescript-graphql-request @graphql-codegen/typescript-react-apollo