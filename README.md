##### プロジェクトの作成
```
yarn init
yarn create next-app sample --ts
```

##### ライブラリのインストール

```
# ORM関連
yarn add -D prisma

# GraphQL関連
yarn add graphql
yarn add @apollo/client

yarn add -D @graphql-codegen/cli @graphql-codegen/typescript @graphql-codegen/typescript-resolvers
yarn add -D @graphql-codegen/typed-document-node @graphql-codegen/typescript-operations

# prismaのスキーマ定義からGraphQLのリゾルバを生成するライブラリ
yarn add -D type type-graphql typegraphql-prisma graphql-scalars graphql-fields
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

