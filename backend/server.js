import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./configs/db.js";
import Product from "./models/products.model.js";
import mongoose from "mongoose";
import router from "./routers/products.route.js";
import cors from "cors"

dotenv.config()

const app = express()

app.use(cors())
app.use(express.json())
app.use('/products/api', router)

app.listen(5000, () => {
    connectDB()
    console.log("Server running on port 5000")
})