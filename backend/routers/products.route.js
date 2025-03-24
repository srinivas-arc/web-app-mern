import express from "express";
import { deleteProduct, getAllProducts, getProductById, insertProduct, updateProduct } from "../controller/products.controller.js";

const router = express.Router()

router.get('/', getAllProducts)
router.post('/', insertProduct)
router.delete('/:id', deleteProduct)
router.put('/:id', updateProduct)
router.get('/:id', getProductById)


export default router