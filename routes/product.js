import express from "express";

const router = express.Router();

// controllers
import { create, findAll, findOne, updateOne, deleteOne  } from "../controllers/product";


// Create a new Tutorial
router.post("/products", create);

// Retrieve all Tutorials
router.get("/products", findAll);

// Retrieve a single Tutorial with id
router.get("/products/:id", findOne);

// Update a Tutorial with id
router.put("/products/:id", updateOne);

// Delete a Tutorial with id
router.delete("/products/:id", deleteOne);


module.exports = router;
