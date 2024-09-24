const express = require ("express");
require('dotenv/config');
const env = process.env;
const app = express();
const hostname = env.HOST;
const port = env.PORT;
app.listen( port,hostname,()=>{
console.log(`Server running at http://${hostname}:${port}`);
});