import WAREHOUSE from "../models/warehouse.js";
import Colors from "colors";

const warehouseServices = {
  findOne: (description) => {
    try {
      const werehouse = WAREHOUSE.findOne({
        where: { of_description: description },
      });
      return werehouse;
    } catch (error) {
      console.log(error.message);
    }
  },
  store: (newWarehouse) => {
    console.log(Colors.red(newWarehouse));
    const { w_description } = newWarehouse;

    try {
      const warehouse = WAREHOUSE.create({ w_description });
      return warehouse;
    } catch (error) {
      console.log(error);
    }
  },
};

export default warehouseServices;
