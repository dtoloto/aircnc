# AirCnC

Este projeto foi criado durante a semana OmniStack da Rocketseat, com o objetivo de aplicar nossos conhecimentos em NodeJS, React e React Native. Para isso, foi desenvolvida uma aplicação muito similar ao famoso AirBnB, mas com a finalidade de conectar programadores e spots que trabalham com as mesmas tecnologias, afim de promover uma troca de experiências e conhecimento.

## Tecnologias Utilizadas
#### API (NodeJS)
 - **Express** para construção de uma API REST
 - **Socket io** para a comunicação em tempo real entre aplicação web e mobile;
 - **Multer** para o upload de imagens dos spots;
 - **MongoDB** como banco de dados da aplicação.

#### Frontend (ReactJS)
- **Axios** para comunicação HTTP com a api.

#### Mobile (React Native)
- **Axios** para comunicação HTTP com a api;
- **Expo** para emular de forma simples e prática o app nos devices.

## Instalação e Execução
Dentro de cada uma das pastas (api, frontend e mobile), será necessário a execução dos seguintes comandos:

    $ yarn install

Seguido de:

    $ yarn start

Caso necessário, dentro do diretório `mobile` faça a instalação separada do *Expo* através do comando:

    $ npm install -g expo-cli

Dentro da `api`, não esqueça de alterar o arquivo `server.js`, inserido as suas credenciais do MongoDB:

	   const  urlMongo  =  'mongodb://<DB_USER>:<DB_PASS>@<DB_HOST>';
