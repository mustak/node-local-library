# Express-Typescript-template

A Node, Express and Typescript template with Nunjucks view engine.

## Steps

1. Run the express-generator in project directory:
    - `npx express-generator --no-view`
1. Update dependencies to the latest version:
    - `npm i cookie-parser@latest debug@latest express@latest morgan@latest`
1. Add nodemon
    - `npm i -D nodemon`
1. Add dev script with nodemon
    - `"dev": "nodemon ./bin/www.js",`
1. Add typescript dependencies:
    - `npm i -D typescript ts-node`
1. add http-errors dependency
    - `npm i http-errors`
1. Convert ./app.js to ./app.ts
1. Convert ./bin/wwww to ./bin/www.ts
1. Add nunjucks dependency
    - `npm i nunjucks`
1. Add typescript @type dependencies:
    - @types/cookie-parser
    - @types/debug
    - @types/express
    - @types/http-errors
    - @types/morgan
    - @types/node
    - @types/nunjucks
    - `npm i -D @types/cookie-parser @types/debug @types/express @types/http-errors @types/morgan @types/node @types/nunjucks`
1. Create tsconfig.json file:
    - `./node_modules/.bin/tsc --init`
1. Add support for .env:
    - `npm i dotenv`
    - Update script: `"dev": "nodemon -r dotenv/config ./bin/www.ts",`
1. Add nunjuck views
1. Add support for eslint and prettier
    - `npm i -D eslint`
    - `npx eslint --init`
    - modify `.eslint.js` to use esm: `export default config;`

## [Robert Cooper](https://robertcooper.me/post/using-eslint-and-prettier-in-a-typescript-project)

-   `npm i -D prettier eslint-config-prettier eslint-plugin-prettier`
-   add .prettierrc.js with:

    ```
    module.exports = {
    	"parser": "typescript",,
    	semi: true,
    	trailingComma: "all",
    	singleQuote: true,
    	printWidth: 120,
    	tabWidth: 4,

    };
    ```

-   update `.eslintrc.js`:
    ```
    extends: [
    	"plugin:react/recommended",
    	"plugin:@typescript-eslint/recommended",
    	"prettier/@typescript-eslint",
    	"plugin:prettier/recommended"
    ],
    ```

# Misc

[dev.to](https://dev.to/nabeelahmed1721/setting-up-typescript-with-eslint-prettier-on-vscode-25na)

-   eslint-config-standard
-   eslint-plugin-node
-   eslint-plugin-promise
-   ts-node-dev
