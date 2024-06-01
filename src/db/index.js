import mongoose from "mongoose"
import { DB_NAME } from "../constants.js"

export const connectDb = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`db connected at ${connectionInstance.connection.host}`)

    } catch (error) {
        console.log("Error : ", error)
        process.exit(0);
    }
}