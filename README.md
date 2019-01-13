# ToDo API with Node.JS + MongoDB
Projeto de apresentação demonstrando o uso da tecnologia Node.JS com as bibliotecas:
- express.js
- body-parser
- mongoose
- node-restful

O intuito deste projeto é mostrar habilidades para compor ferramentas em backend ultilizando tecnologias node.js

## Configuração
Para funcionamento será necessario
- Ter instalado em maquina o node.js juntamente com um gerenciador de pacotes da sua preferencia. Para esta aplicação ultilizei o yarn, mas pode ser substituido pelo npm.
- Para persistencia e manipulação dos dados foi ultilizado a base de dados NoSQL MongoDB

1. Com o node devidamente instalado em sua maquina execute o comando:
``` yarn install ```

2. Dentro do diretorio source/config/database.js procure pela linha 4 onde se encontra a configuração da base de dados, e altere para o endereço da sua base.
```
    module.exports = mongoose.connect(
        'mongodb://192.168.33.10:27017/todo',
        { useNewUrlParser: true }
    );
```

3. Após tudo configurado rode o desenvolvimento com os comandos:
```yarn dev``` para ambiente de desenvolvimento
```yarn prod``` para o ambiente de produção

## Rotas
``` http://localhost:3003/api/todo ```

OBS: A aplicação tem por padrão o uso das rotas GET, POST, PUT e DELETE para gerenciamento dos seviços.

### Author
***Bruno Assis de Tassis***
