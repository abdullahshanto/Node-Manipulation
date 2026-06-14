
import { StringDecoder } from 'string_decoder';
import url from 'url';

const handler = {};
handler.handleReqRes=(req,res) =>{
  const parseurl = url.parse(req.url , true );
  const path = parseurl.pathname;
  //console.log(parseurl);
  const trimmedpath = path.replace(/^\/+|\/+$/g, '');
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
  let realData='';



}
export default handler.handleReqRes;