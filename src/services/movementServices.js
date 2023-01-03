import MOVEMENT from "../models/movements.js";

const movementServices = {
  countByType: (movementType) => {
    try {
    } catch (error) {}
  },
  store: (newMovement) => {
    try {
      const movement = MOVEMENT.create(newMovement);
      return movement;
    } catch (error) {
      console.log(error);
    }
  },
};

export default movementServices;
