import productServices from "../services/productServices.js";

const productController = {
  findAll: async (req, res) => {
    const allProducts = await productServices.findAll();

    return res.status(200).json({
      status: 200,
      count: allProducts.length,
      allProducts,
    });
  },

  store: async (req, res) => {
    const { p_description, p_unit, p_ubication } = req.body;

    if (!p_description || !p_ubication) {
      return res.status(400).json({
        status: 400,
        isStored: false,
        message: "El nombre y la ubicación del producto no pueden estar vacíos",
      });
    }

    const productFound = await productServices.findOne(
      p_description.toUpperCase()
    );

    if (productFound) {
      return res.status(400).json({
        status: 400,
        isStored: false,
        message: `El producto '${p_description}' ya se encuentra registrado en la base de datos`,
      });
    }

    const newProduct = {
      ...req.body,
      p_description: p_description.toUpperCase(),
      p_unit: p_unit.toUpperCase(),
      p_ubication: p_ubication.toUpperCase(),
    };

    console.log(newProduct);

    const productStored = await productServices.store(newProduct);

    return res.status(201).json({
      status: 201,
      isStored: true,
      message: "El producto fue creado satisfactoriamente",
      product: productStored,
    });
  },
};

export default productController;
