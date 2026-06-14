const requenstHandler = (req,res)=>
{
  if(req.url ==='/')
 {
  req.write(`
                <html lang="en">
          <head>
          
            <title>Calculator</title>
          </head>
          <body>
            <h1>Welcome to Calculator app</h1>
            <a href="/calculator">go to calculator app</a>
          </body>
          </html>
    `);
    res.end();
 }
 else if(req.url.toLowerCase() === '/calculator')
 {
    res.setHeader('Content-Type', 'text/html');
    res.write(`
     
            <html>
            <head>
              
              <title>Calculator_App</title>
            </head>
            <body>
                <form action="submit" method="post">
                  <h2>Enter two Number</h2>
                  <label for="num1">Num1 :</label>
                  <input type="number" name="Num1" id="Num1">
                  <br><br> <label for="num2">Num2 :</label>
                  <input type="number" name="Num2" id="Num2">
                  <br><br>
                  <button>Sum</button>
                </form>
            </body>
            </html>
      `)
      res.end();

 }

 else if(req.url.toLowerCase() === '/submit' && url.method=='post')
 {

 }
}