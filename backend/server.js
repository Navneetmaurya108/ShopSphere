const app =require("./app");
const cloudinary = require("cloudinary");
const dotenv = require('dotenv');
const connectDatabase =require("./config/database");

// handling uncaught error
process.on("uncaughtException",(err)=>{
    console.log(`Error: ${err.message}`);
    console.log(`shutting down the server due to uncaught exception`);
    process.exit(1);
})

// config
dotenv.config({path:"backend/config/config.env"});

//connecting to database
connectDatabase();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const server = app.listen(process.env.PORT,()=>{

console.log(`Server is working on http://localhost:${process.env.PORT}`);

})

//unhandled promise rejection
process.on("unhandledRejection",(err)=>{
    console.log(`Error: ${err.message}`);
console.log(`shutting down the server due to unhandled promise rejection`);
server.close(()=>{
process.exit(1);
});
});




