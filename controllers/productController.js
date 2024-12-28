const { getAllProducts } = require('../queries/productQueries');
const { addProduct } = require('../services/productService');

async function addProductController(req, res) {
  try {
    const data = req.body;
    const result = await addProduct(data);
    res.status(201).json({
      message: 'Product added successfully',
      productID: result.productID,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

const getProduct = async () => {
  const pool = await sql.connect(config);  
  const result = await pool.request().query(getAllProducts); 
  return result.recordset;  
};

const getProductController = async (req, res) => {
  try {
    const result = await getProduct();
    res.status(200).send({
      message: "Products fetched successfully",
      success: true,
      data: result,
    });
  } catch (error) {
    console.error("Error while fetching product:", error);
    res.status(400).send({
      message: "Error while fetching product",
      success: false,
    });
  }
};


module.exports = { addProductController , getProductController};
