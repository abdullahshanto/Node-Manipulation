import *as http from 'node:http';

const server = http.createServer()

const port=3000;
server.listen(port,()=>
{
  console.log(`server listening http://localhost:${port}`);
})