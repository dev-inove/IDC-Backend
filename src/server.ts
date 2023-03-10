import server from './shared/app';

server.listen(process.env.SERVER_PORT, () => {
  console.log('HTTP Server tá rodanu mo port '+process.env.SERVER_PORT+' caraio!');
})