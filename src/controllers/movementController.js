import movementServices from "../services/movementServices.js";

const movementController = {
  store: async (req, res) => {
    const { product_id, operation_type_id, mov_quantity } = req.body;

    if (!product_id || !operation_type_id || !mov_quantity) {
      return res.status(400).json({
        status: 400,
        message:
          "El id del producto, el tipo de operación, y la cantidad no pueden estar vacíos",
      });
    }

    const newMovement = { ...req.body };

    const movementStored = await movementServices.store(newMovement);

    if (movementStored) {
      return res.status(200).json({
        status: 200,
        movementStored,
      });
    } else {
      return res.status(400).json({
        status: 400,
        message: "el id del producto no es válido",
      });
    }
  },
};

export default movementController;
