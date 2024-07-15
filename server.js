import express from "express";
//import cors from "cors";
import path from "path";

const port = 8080;
const app = express();
let applianceStatus = 0;
// let corsOptions = { 
//     origin : ['http://localhost:4200'], 
//  } 

 const __dirname = path.resolve();
// app.use(cors(corsOptions));
app.use(express.static(path.join(__dirname, '/UserInterfaceModule/appliances-manager/browser')));

app.use(express.json());

app.post('/setStatus', (req,res)=>{
    console.log(req.body.status);
    console.log("setstatus API called...");
    applianceStatus = req.body.status;
    const responseData = {status:applianceStatus};
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(responseData));
  });

app.post('/fetchStatus', (req,res)=>{
  console.log("getstatus API called...");
    const responseData = {status: applianceStatus};
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(responseData));
})
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/UserInterfaceModule/appliances-manager/browser/index.html'));
});



app.listen(port, () => {
    console.log("Server is listening on port "+port);
});