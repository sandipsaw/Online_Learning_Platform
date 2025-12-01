require('dotenv').config();
const app = require('./Src/app');
const connectedToDb = require('./Src/db/db')

connectedToDb()

app.listen(3000,()=>{
    console.log("Server is running on port 3000");
})