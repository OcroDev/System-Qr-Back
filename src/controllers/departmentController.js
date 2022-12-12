import departmentServices from "../services/departmentServices.js";
import Colors from "colors";

const departmentController = {
  findAll: async (req, res) => {
    const users = await departmentServices.findAll();
    return res.status(200).json({
      status: 200,
      count: users.length,
      users,
    });
  },

  store: async (req, res) => {
    const { d_name } = req.body;

    if (!d_name) {
      return res.status(400).json({
        status: 400,
        isStored: false,
        message: 'El campo "nombre" no puede estar vacío',
      });
    }
    console.log(Colors.bgCyan(d_name));

    const departmentFound = await departmentServices.findOne(
      d_name.toUpperCase()
    );

    if (departmentFound) {
      return res.status(400).json({
        status: 400,
        isStored: false,
        departmentFound: true,
        message: `El usuario '${d_name}' ya se encuentra registrado en la base de datos`,
      });
    }

    const newDepartment = { ...req.body, d_name: d_name.toUpperCase() };

    console.log(newDepartment);

    const departmentStored = await departmentServices.store(newDepartment);

    return res.status(201).json({
      status: 201,
      isStored: true,
      message: "El departamento fue creado satisfactoriamente",
      department: departmentStored,
    });
  },
};

export default departmentController;
