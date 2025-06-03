const app =require("./app");

const dotenv = require('dotenv');
const connectDatabase =require("./config/database");

// handling uncaught error
process.on("uncaughtException",(err)=>{
    console.log(`Error: ${err.message}`);
    console.log(`shutting down the server due to uncaught exception`);
    process.exit(1);
})


