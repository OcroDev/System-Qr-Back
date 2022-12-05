import movementServices from "../services/movementServices.js";

const movementController = {
  store: async (req, res) => {
    const { p_id } = req.body;

    if (p_id.length <= 0) {
      return res.status(400).json({
        status: 400,
        message: "El id del producto no puede estar vacio",
      });
    }

    const newMovement = { ...req.body };

    const movementStored = await movementServices.store(newMovement);

    return res.status(200).json({
      status: 200,
      movementStored,
    });
  },
};

export default movementController;
