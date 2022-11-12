//import jsonServer from 'json-server';
const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middleware = jsonServer.defaults();
const port = process.env.PORT || 3200;

server.use(middleware);
server.use(router);

servidor.listen(port, ()=> {
    console.log(`Pegou Bro ${port}`)
});