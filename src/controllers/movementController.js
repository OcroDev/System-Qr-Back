import movementServices from "../services/movementServices.js";

const movementController = {
  store: async (req, res) => {
    const newMovement = { ...req.body };

    const movementStored = await movementServices.store(newMovement);
    return res.status(200).json({
      status: 200,
      movementStored,
    });
  },
};

export default movementController;
