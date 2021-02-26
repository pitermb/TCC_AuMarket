# TCC_AuMarket

Esse projeto foi criado por um grupo formado de 4 integrantes, sendo eles: Lucas Vanzuita, Nathalya Neumann, Piter Merlo Bruner e Samuel Mendes. 
Com o intuito de apresentar todas as tecnologias estudadas durante o programa Entra21.

Essa programação se utiliza das seguintes tecnologias.

Front-end
  JavaScript
  CSS
  Bootstrap 
  React

Back-end 
  NodeJs
  Express
  MongoDB
  Mongoose
  Nodemailer

------------------------------------

Uso do framework React: Pelo fato de se tratar de uma aplicação em single page, dessa forma é possível renderizar componentes independentes e não toda a estrutura.

Uso do Bootstrap: Usado do bootstrap faz parte de uns 10% da nossa aplicação, só usado mais para estilos de buttons, como de certo modo é uma biblioteca um pouco pesada usamos mais o CSS para estilo.

Uso do NodeJs: Usamos o NodeJs para fazer parte do nosso back-end e a biblioteca Express, para fazer a ligação do back com o front.

Uso do MongoDB: O MongoDB representa nosso banco de dados relacional junto da ferramenta Mongoose.

Uso do NodeMailer: É um requerimento que usamos para fazer envios de confirmações de compra para nosso cliente via e-mail.

------------------------------------
 Para que seja possível o funcionamento desta aplicação em sua máquina, é necessário instalar o NodeJS e MongoDB Community.
------------------------------------

Ao instalar o MongoDB, você deverá criar uma pasta "data" dentro do seu disco local C, dentro da pasta "data", você irá criar a pasta "db".

Para dar o primeiro passo de como iniciar o bando de dados Mongo, você deve acessar essa rota no seu documento do windows após a instalação: 
C:\Program Files\MongoDB\Server\4.4\bin

Executar o programa chamado "mongod.exe" e deixar rodando ao fundo

------------------------------------

Instalando o node_modules para iniciar a aplicação, você deverá entrar na sua pasta TCC_AuMarket, ir na url do diretorio e escrever "cmd".

Após abrir o cmd, você irá escrever "npm i", deixar efetuar o download das dependencias do package.json.

Após feito o primeiro install, você irá escrever "cd au-market", e novamente escrever "npm i".

Após todos downloads terem sido realizado, você irá digitar "cd.." e logo em seguida "npm run dev", isso na pasta TCC_AuMarket.
