import OPERATION from "../models/operation.js";

const operationServices = {
  findLastId: () => {
    try {
      return OPERATION.findAll({
        order: [["id", "DESC"]],
      });
    } catch (error) {
      console.log(error);
    }
  },
  countByType: (operation_type) => {
    try {
      return OPERATION.count({
        where: {
          operation_type_id: operation_type,
          //isdeleted: false,
        },
      });
    } catch (error) {
      console.log(error);
    }
  },
  store: (newOperation) => {
    try {
      console.log("operation in services", newOperation);
      const operation = OPERATION.create(newOperation);
      return operation;
    } catch (error) {
      console.log(error);
    }
  },
};

export default operationServices;
