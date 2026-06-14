import e from "express";
const app = e();
//app.use(e.json())
//app.use(e.raw()); // req.body becomes a Buffer
//app.use(e.text());
app.use(e.urlencoded());

app.get('/', (req, res) => {
  res.send("get request");
});

app.post('/', (req, res) => {
  res.send("post request");
  console.log(req.body);
  console.log(typeof req.body);
});

app.listen(3000, () => {
  console.log("server running");
});