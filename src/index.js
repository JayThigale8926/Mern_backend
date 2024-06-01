import { connectDb } from "./db/index.js"
import dotenv from "dotenv"

import express from "express"
const app = express()

dotenv.config({
    path: './env'
})





connectDb();


// (async () => {
//     try {
//         await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//         app.on("error",(error)=>{
//             console.log("Error : ", error);
//             throw error
//         } )
//         app.listen(process.env.PORT, () => {
//             console.log(`App is listening on ${process.env.PORT}`)
//         });
//     } catch (error) {
//         console.log(error)
//         throw error
//     }
// })()


