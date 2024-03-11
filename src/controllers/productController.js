import Product from "../model/productModel";

export const getProducts = async (req, res) => {
   try {
      const products = await Product.find();
      res.status(200).json(products);
   } catch (error) {
      res.status(500).json({ message: error.message });
   }
};

export const getProductById = async (req, res) => {
   try {
      const products = await Product.findOne({ _id: req.params.id });
      res.status(200).json(products);
   } catch (error) {
      res.status(500).json({ message: error.message });
   }
};

export const createProduct = async (req, res) => {
   try {
      const data = await Product(req.body).save();
      res.status(201).json(data);
   } catch (error) {
      res.status(500)
   }
};

export const updateProduct = async (req, res) => {
   try {
      const product = await Product.findOneAndUpdate({ _id: req.params.id }, { $set: req.body }, { new: true });
      res.status(200).json(product);
   } catch (error) {
      res.status(500).json({ message: error.message });
   }
};

export const deleteProduct = async (req, res) => {
   try {
      const products = await Product.findOneAndDelete({ _id: req.params.id });
      res.status(200).json(products);
   } catch (error) {
      res.status(500).json({ message: error.message });
   }
}