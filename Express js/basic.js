import e from "express";
const app = e();

app.get('/',(req,res)=>{
  res.send("get request");
})

app.post('/',(req,res)=>{
  res.send("post request");
  console.log(req.body)
})

app.listen(3000,()=>{
  console.log("server ruunning");
})