import server from './shared/app';

server.listen(process.env.SERVER_PORT, () => {
  console.log('HTTP Server está rodando no port: '+process.env.SERVER_PORT);
})