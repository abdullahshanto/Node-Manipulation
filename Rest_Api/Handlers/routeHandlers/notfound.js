const handler={};

handler.notfoundhandler=(requestProperties , callback)=>{
  callback(404,{
    message : "your request url is not found",
  });
}

export default handler.notfoundhandler