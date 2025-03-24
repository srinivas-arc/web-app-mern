import Product from "../models/products.model.js";
import mongoose from "mongoose";

export const getAllProducts = async (req, res) => {
    try {
        const products = await Product.find({})
        res.status(200).json({success: true, data: products});
    }catch(error) {
        console.log("Error in getting product ", error.message)
        res.status(500).json({success: false, data: "Server is down"});
    }
}

export const insertProduct = async (req, res) => {
    const product = req.body;
    if(!product.name || !product.price || !product.image) {
        res.status(400).json({success: false, data: "Required Field"})
    }
    const newProduct = new Product(product);
    try{
        await newProduct.save();
        res.status(200).json({success: true, data: newProduct});
    }catch(error) {
        console.log("Error in saving product ", error.message)
        res.status(500).json({success: false, data: "Server is down"});
    }
}

export const deleteProduct = async (req, res) => {
    const {id} = req.params
    if(!mongoose.Types.ObjectId.isValid(id)) {
        res.status(400).json({success: false, data: "Invalid ID"});
    }
    try {
        const product = await Product.findByIdAndDelete(id)
        res.status(200).json({success: true, data: "deleted product"});
    }catch(error) {
        console.log("Error in getting product ", error.message)
        res.status(500).json({success: false, data: "Server is down"});
    }
}

export const updateProduct = async (req, res) => {
    const {id} = req.params
    const product = req.body
    if(!mongoose.Types.ObjectId.isValid(id)) {
        res.status(400).json({success: false, data: "Invalid ID"});
    }
    try {
        const updatedProduct = await Product.findByIdAndUpdate(id, product, {new: true})
        res.status(200).json({success: true, data: updatedProduct});
    }catch(error) {
        console.log("Error in getting product ", error.message)
        res.status(500).json({success: false, data: "Server is down"});
    }
}

export const getProductById = async (req, res) => {
    const {id} = req.params
    if(!mongoose.Types.ObjectId.isValid(id))  {
        res.status(400).json({success: false, message: "Invalid ID"})
    }
    try {
        const product = await Product.findById(id);
        res.status(200).json({success: true, data: product})
    }catch(error) {
        console.log("Error in getting product ", error.message)
        res.status(500).json({success: false, data: "Server is down"});
    }
}