import warehouseServices from "../services/warehouse.js";

const warehouseController = {
  store: async (req, res) => {
    const { w_description } = req.body;

    if (!w_description) {
      return res.status(400).json({
        status: 400,
        isStored: false,
        message: "El nombre del almacén no puede estar vacío",
      });
    }

    const warehouseFound = await warehouseServices.findOne(
      w_description.toUpperCase()
    );

    if (warehouseFound) {
      return res.status(400).json({
        status: 400,
        isStored: false,
        message: `El almacén'${w_description}' ya se encuentra registrado en la base de datos`,
      });
    }

    const newWarehouse = {
      ...req.body,
      of_description: w_description.toUpperCase(),
    };

    const warehouseStored = await warehouseServices.store(newWarehouse);

    return res.status(201).json({
      status: 201,
      isStored: true,
      message: "el almacén fue agregada satisfactoriamente",
      college: warehouseStored,
    });
  },
};

export default warehouseController;
