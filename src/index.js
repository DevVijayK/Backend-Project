// require('dotenv').config({path: './env'})
import dotenv from "dotenv";
import connectDB from "./db/index.js";

dotenv.config({
  path: "./env",
});

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log(`Server is running at port : ${process.env.PORT}`);
      app.on("ERROR: ", (error) => {
        console.log("error", error);
        throw error;
      });
    });
  })
  .catch((err) => {
    console.log("Mongo DB connection failed !!!", err);
  });

/*

import express from "express"
const app = express()

(async() =>{
    try{
       await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
       app.on("ERROR: ", (error) => {
        console.log("error", error);
        throw error
       }) 

       app.listen(process.env.PORT, ()=>{
        console.log(`App is listening on port ${process.env.PORT}`);
        })
    }
    catch(error){
        console.error("ERROR: ", error)
    }

})()

*/
