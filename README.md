# User-CRUD
Exercício de CRUD para registro de usuário com Nodejs + ReactJs + MySql

## Clonando o Repositório

```bash
git clone --recursive https://github.com/Allan-Wariss/User-CRUD
```

## Query MySql
```sql
CREATE TABLE `usuarios` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(245) NOT NULL,
  `email` varchar(245) NOT NULL,
  `tel` varchar(45) NOT NULL,
  `data_nascimento` date NOT NULL,
  PRIMARY KEY (`id`)
)
```
Na API está sendo usado a lib `mysql2`
```bash
npm install mysql2
```

## Como iniciar

Ambos os diretórios, para baixar as dependências
```bash
npm install
```

API
```bash
npm run start
```
A API deve rodar na porta `8800`
ex: `localhost:8800`

FrontEnd
```bash
npm run start
```



## Links Pessoais

- [Perfil no GitHub](https://github.com/Allan-Wariss)
- [Perfil no LinkedIn](https://www.linkedin.com/in/allan-feitosa-wariss-maia/)
