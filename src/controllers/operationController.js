import operationServices from "../services/operationServices.js";

const operationController = {
  findLastId: async (req, res) => {
    const operations = await operationServices.findLastId();
    let operationId = operations[0].dataValues.id;

    return res.status(200).json({
      status: 200,
      operationId,
    });
  },

  countByType: async (req, res) => {
    const { operation_type_id } = req.body;

    if (!operation_type_id) {
      return res.status(400).json({
        status: 400,
        message: "debes indicar el tipo de operación",
      });
    }

    const totalOperations = await operationServices.countByType(
      operation_type_id
    );

    console.log(totalOperations);

    return res.status(200).json({
      status: 200,
      message: "operaciones encontradas",
      total: totalOperations,
    });
  },
  store: async (req, res) => {
    const { warehouse_out, u_make, dep_in, operation_type_id } = req.body;

    console.log("whareouse: ", warehouse_out);
    console.log("user make: ", u_make);
    console.log("dep in: ", dep_in);
    console.log("operation type: ", operation_type_id);

    if (!warehouse_out || !u_make || !dep_in || !operation_type_id) {
      res.status(400).json({
        status: 400,
        message: "faltan una o varias claves foraneas",
      });
    }

    const newOperation = {
      warehouse_out,
      u_make,
      dep_in,
      operation_type_id,
    };

    console.log("New operation:", newOperation);
    const operationStored = await operationServices.store(newOperation);

    if (!operationStored) {
      return res.status(500).json({
        status: 500,
        message: "La operacion no pudo ser ejecutada",
      });
    }

    return res.status(201).json({
      status: 201,
      message: "Operacion creada",
      operation: operationStored,
    });
  },
};

export default operationController;
