# Site

https://flyrics.herokuapp.com/

# Protótipo
https://www.figma.com/file/TOwvnlFf0A35PtbLnQCtUW/Flyrics?node-id=0%3A1

# Ferramentas Necessárias
* Para executar o projeto é preciso ter instalado na máquina [NodeJS](https://nodejs.org/en/).
* Possuir uma conta em [MongoDB Atlas](https://www.mongodb.com/cloud/atlas):
  * [Criar um Cluster](https://docs.atlas.mongodb.com/tutorial/create-new-cluster);
  * Conectar ao Cluster:
    1. Clique no botão "Connect".
    2. Escolha a opção "Connect your application".
    3. Será apresentado uma string para conectar ao cluster:
    
    `mongodb+srv://<username>:<password>@cluster0.uwxvb.mongodb.net/<dbname>?retryWrites=true&w=majority`

# Execução
Instale as dependências: `npm install`

## Modificações
* Altere os scripts em `package.json`:
```
"scripts": {
  "start": "react-scripts start",
  "build": "react-scripts build",
  "test": "react-scripts test",
  "eject": "react-scripts eject",
  "server": "node backend/server.js",
  "heroku-postbuild": "NPM_CONFIG_PRODUCTION=false npm install && npm run build"
},
```

* Dentro de `src\services` altere `db.js`:
```
const db = axios.create({
  baseURL: "http://localhost:4000"
});
```

* Dentro de `backend\server.js` comente as seguintes linhas:
```
// app.use(express.static(path.join(__dirname, '../build')));
// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, '../build'))
// })
```
* Crie um arquivo `.env` dentro de `backend` e adicione:

`ATLAS_URI=mongodb+srv://<username>:<password>@cluster0.uwxvb.mongodb.net/<dbname>?retryWrites=true&w=majority`
 * Substitua os campos por:
   * `<username>` = nome do usuário administrador criado ao se conectar ao cluster 
   * `<password>` = senha criada ao se conectar ao cluster
   * `<dbname>` = nome do banco (invente um)

## Iniciando o front-end
`npm start`

## Iniciando o banco
`node ./backend/server.js` ou `npm server`
