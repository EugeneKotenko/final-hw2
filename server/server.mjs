import fastify from 'fastify';
import fastifyStatic from '@fastify/static';
import { fileURLToPath } from 'url';
import path from 'path';

const server = fastify();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const PORT = process.env.PORT || 5555;


server.register(fastifyStatic, {
   root: path.join(__dirname, '../dist'),
   prefix: '/'
});

server.get('/', (_, reply) => {
   reply.sendFile('index.html');
});


server.listen({ port: PORT })
   .then(() => {
      console.log(`Server started on port ${PORT}`);
   })
   .catch((error) => {
      console.log('Error', error);
   });

   