import http from 'http'
import handleReqRes from './ReqResHanles/handlereqres.js';

//modulo scaffolding

const app={};

app.config = {
  port : 3000,
}

app.createserver = () =>{
  const server = http.createServer(app.handler);
  server.listen(app.config.port , () =>{
    console.log(`server listening to the port ${app.config.port}`);
  })
}

app.handler = handleReqRes

app.createserver();