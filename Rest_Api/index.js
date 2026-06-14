import http from 'http'
import handleReqRes from './ReqResHanles/handlereqres.js';
import environment from './Handlers/environment.js';

//modulo scaffolding

const app={};



app.createserver = () =>{
  const server = http.createServer(app.handler);
  server.listen(environment.port, () =>{

    //console.log(`environment variable is : ${process.env.variable}`)
    console.log(`server listening to the port ${environment.port}`);
  })
}

app.handler = handleReqRes

app.createserver();