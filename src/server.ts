// const express = require('express')
// const app = express()
// const mongoose = require('mongoose');
// const port = 3000



// async function bootstrap() {
//     try{
//   await mongoose.connect('mongodb://127.0.0.1:27017/Mongoose-Assignment-2');
//   console.log("successful")
// } catch(error){
//     console.log(error)
// }
// }

// bootstrap();

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })

import mongoose from "mongoose";
import app from "./app";

const port: number = 5000;

//database connection
async function bootstrap() {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/practice-mongoose");
    console.log(`🛢 Database connection successful`);

    app.listen(port, () => {
      console.log(`Server is  listening on port ${port}`);
    });
  } catch (err) {
    console.log(`Failed to connect database`, err);
  }
}

bootstrap();