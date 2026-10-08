import dotenv from 'dotenv';

dotenv.config();

import{Server} from './server';

const PORT=Number(process.env.PORT)||3000;

const server=new Server({port:PORT})

server.start();