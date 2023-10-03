import fastify from 'fastify';
import fastifyStatic from '@fastify/static';
import { fileURLToPath } from 'url';
import path from 'path';
import smoothiesIngredients from './smoothiesIngredients.mjs';
import smoothiesData from './smoothiesData.mjs';

const server = fastify();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

server.register(fastifyStatic, {
  root: path.join(__dirname, '../dist'),
  prefix: '/',
});

server.get('/', (_, reply) => {
  reply.sendFile('index.html');
});

server.get('/data', (_, reply) => {
   reply.send(smoothiesData);
 });

server.get('/ingredients', (_, reply) => {
  reply.send(smoothiesIngredients);
});

const port = process.env.PORT || 5555;
const host = process.env.HOST || "localhost";

server
  .listen({ port, host })
  .then(() => {
    console.log("Server is running");
  })
  .catch((error) => {
    console.error(error);
  });
 