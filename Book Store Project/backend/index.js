import express, { request, response } from "express";
import  { PORT, mongoDBURL} from "./config.js";
import mongoose from "mongoose";
import booksRoute from './routes/booksRoute.js';
import cors from "cors";


const app = express();


// Middleware for pasing requst body
app.use(express.json());

// Allow All Origins with Default of cors(*)
app.use(cors());

// Allow Custome Origins
// app.use(
//   cors({
//     origin: "http://localhost:3000",
//     methods: ["GET", "POST", "PUT", "DELETE"],
//     allowedHearders: ["Content-Type"],
//   })
// )

app.get('/', (request, response)=>{
  console.log(request);
  return response.status(234).send("Welcome to MERN Statck Tutorial")
});

app.use('/books', booksRoute);


mongoose.connect(mongoDBURL)
.then(()=>{
  console.log("successfully connect to database");
  app.listen(PORT, ()=>{
    console.log(`APP is listenning to port: ${PORT}`)
  })
}).catch((error)=>{
  console.log(error);
});

