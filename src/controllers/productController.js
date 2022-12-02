import productServices from "../services/productServices.js";

const productController = {
  store: async (req, res) => {
    const { p_description, p_measurementUnit, p_location } = req.body;

    if (!p_description || !p_location) {
      return res.status(400).json({
        status: 400,
        isStored: false,
        message: "El nombre y la ubicación del producto no puede estar vacía",
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
      p_measurementUnit: p_measurementUnit.toUpperCase(),
      p_location: p_location.toUpperCase(),
    };

    console.log(newProduct);

    const productStored = await productServices.store(newProduct);

    return res.status(201).json({
      status: 201,
      isStored: true,
      message: "El producto fue creado satisfactoriamente",
      prodct: productStored,
    });
  },
};

export default productController;
