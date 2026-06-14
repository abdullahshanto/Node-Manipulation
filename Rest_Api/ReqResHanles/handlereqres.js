
import { StringDecoder } from 'string_decoder';
import url from 'url';
import routes from '../routes.js';
import notfoundhandler from '../Handlers/routeHandlers/notfound.js';


const handler = {};
handler.handleReqRes=(req,res) =>{
  const parseurl = url.parse(req.url , true );
  const path = parseurl.pathname;
  //console.log(parseurl);
  const trimmedpath = path.replace(/^\/+|\/+$/g, '') || 'home';
  const method = req.method.toLowerCase();
  //console.log(method);

  const queryStringObject = parseurl.query;
  const headersObject = req.headers;

  const requestProperties ={
   
    parseurl,
    path,
    trimmedpath,
    method,
    queryStringObject,
    headersObject,

  };


  const decoder = new StringDecoder('utf-8');
  let realData = '';

  req.on('data', (buffer) => {
    realData += decoder.write(buffer);
  });

  req.on('end', () => {
    realData += decoder.end();

    requestProperties.body = realData;

    const chosenHandler = routes[trimmedpath] ? routes[trimmedpath] : notfoundhandler;

    chosenHandler(requestProperties, (statusCode, payload) => {
      statusCode = typeof statusCode === 'number' ? statusCode : 500;
      payload = typeof payload === 'object' ? payload : {};

      const payloadString = JSON.stringify(payload);

      res.writeHead(statusCode, { 'Content-Type': 'application/json' });
      res.end(payloadString);
    });
  });

}
export default handler.handleReqRes;