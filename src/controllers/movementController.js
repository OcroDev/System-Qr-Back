import movementServices from "../services/movementServices.js";

const movementController = {
  store: async (req, res) => {
    const { product_id, operation_type_id, mov_quantity, operation_cod } =
      req.body;

    /** Variables para el movimiento
     * ID (primary key)
     * mov_notes
     * mov_quantity
     *
     * FOREING KEY
     * operation_code_id
     * product_id
     * operation_type_id
     */
    if (!product_id || !operation_type_id || !mov_quantity) {
      return res.status(400).json({
        status: 400,
        message:
          "El id del producto, el tipo de operación, y la cantidad no pueden estar vacíos",
      });
    }

    const newMovement = {
      mov_quantity: operation_type_id === 1 ? mov_quantity : mov_quantity * -1,
      operation_cod,
      product_id,
      operation_type_id,
    };

    const movementStored = await movementServices.store(newMovement);

    if (!movementStored) {
      return res.status(500).json({
        status: 500,
        message: "no se pudo crear el movimiento",
      });
    }

    return res.status(201).json({
      status: 201,
      movementStored,
    });
  },
};

export default movementController;
