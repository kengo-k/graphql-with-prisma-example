yarn init
yarn create next-app sample --ts
yarn add graphql

##### サーバの定義を生成
yarn add -D @graphql-codegen/cli @graphql-codegen/typescript @graphql-codegen/typescript-resolvers
yarn run graphql-codegen --config graphql/codegen-server.yaml

##### クライアントの定義を生成
yarn add -D @graphql-codegen/typed-document-node @graphql-codegen/typescript-operations
