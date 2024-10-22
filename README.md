# User-CRUD
Exercício de CRUD para registro de usuário com Nodejs + ReactJs + MySql

## Clonando o Repositório

```bash
git clone --recursive https://github.com/Allan-Wariss/User-CRUD
```

## Query MySql
```Query
CREATE TABLE `usuarios` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(245) NOT NULL,
  `email` varchar(245) NOT NULL,
  `tel` varchar(45) NOT NULL,
  `data_nascimento` date NOT NULL,
  PRIMARY KEY (`id`)
)
```

##Como iniciar
API
```bash
npm run start
```

FrontEnd

```bash
npm run start
```

A API deve rodar na porta 8800
ex: localhost:8800


## Links Pessoais

- [Perfil no GitHub](https://github.com/Allan-Wariss)
- [Perfil no LinkedIn](https://www.linkedin.com/in/allan-feitosa-wariss-maia/)
