import http from 'http';
import fs from 'fs';
import url from 'url';

// create a server 

// 127.0.0.1:8000
//localhost:8000

http
.createServer((req,res)=>{

    // console.log(req.method);

    let parsedUrl = url.parse(req.url,true);
    // console.log(parsedUrl);

    // reading the file as string 
    let products=fs.readFileSync("./products.json","utf-8");

    res.setHeader("Access-Control-Allow-Origin","*");
    res.setHeader("Access-Control-Allow-Headers","*");
    res.setHeader("Access-Control-Allow-Methods","GET,PUT,POST,PATCH,DELETE,OPTIONS")
   
    // handling options preflight request which comes before post,put and delete automically 
    if(req.method=="OPTIONS")
    {
        res.end();
    }
    // fetch all the products 
     if(parsedUrl.pathname=="/products" && req.method=="GET" && parsedUrl.query.id==undefined)
    {
       
        res.end(products);
      
    }
    // fetch product based on id 
    else if(parsedUrl.pathname=="/products" && req.method=="GET" && parsedUrl.query.id!=undefined)
    {
        let productArray=JSON.parse(products);

        let product = productArray.find((product)=>{
            return product.id==parsedUrl.query.id;
        })

        if(product!=undefined)
        {
            res.end(JSON.stringify(product));
        }
        else 
        {
            res.end(JSON.stringify({"message":"Product Not Found"}))
        }
     
    }


    // create new product 
    else if(req.method=="POST" && parsedUrl.pathname=="/products")
    {
          let body = '';
      req.on('data', chunk => {
        body += chunk.toString();
      });

      req.on('end', () => {
  const newProduct = JSON.parse(body); // convert JSON string to object
  console.log(newProduct);
  // optionally push it to your products array and save
});
    }


    

  
   
    

  

})
.listen(8000,()=>{
  console.log("server is running on http://localhost:8000");
})