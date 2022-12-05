import officeServices from "../services/officeServices.js";

const officeController = {
  store: async (req, res) => {
    const { of_description } = req.body;

    if (!of_description) {
      return res.status(400).json({
        status: 400,
        isStored: false,
        message: "El nombre del colegio no puede estar vacío",
      });
    }

    const officeFound = await officeServices.findOne(
      of_description.toUpperCase()
    );

    if (officeFound) {
      return res.status(400).json({
        status: 400,
        isStored: false,
        message: `La oficina '${of_description}' ya se encuentra registrado en la base de datos`,
      });
    }

    const newOffice = {
      ...req.body,
      of_description: of_description.toUpperCase(),
    };

    const collegeStored = await officeServices.store(newOffice);

    return res.status(201).json({
      status: 201,
      isStored: true,
      message: "la oficina fue agregada satisfactoriamente",
      college: collegeStored,
    });
  },
};

export default officeController;
