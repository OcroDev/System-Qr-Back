import OPERATION from "../models/operation.js";
import sequelize from "../database/index.js";

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
  findInOperations: () => {
    let operation;
    try {
      return (operation = sequelize.query(
        "select operations.id, operations.operation_type_id, products.p_description, movements.mov_quantity, operation_types.type as operationType from operations inner join movements on movements.operation_cod = operations.id inner join products on products.id = movements.product_id inner join operation_types on operation_types.id = movements.operation_type_id where operations.operation_type_id = 1 ",
        {
          type: sequelize.QueryTypes.SELECT,
        }
      ));
    } catch (error) {
      console.log(error);
    }
  },
  findOutOperations: () => {
    let operation;
    return (operation = new Date().toLocaleDateString("es-VE"));
    try {
      return (operation = sequelize.query(
        "operations.id, operations.operation_type_id, warehouses.w_description,products.p_description, movements.mov_quantity, operation_types.type as operationType, operations.createdAt from operations inner join movements on movements.operation_cod = operations.id inner join products on products.id = movements.product_id inner join operation_types on operation_types.id = movements.operation_type_id where operations.operation_type_id = 2 ",

        {
          type: sequelize.QueryTypes.SELECT,
        }
      ));
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
