import collegeServices from "../services/collegeServices.js";

const collegesController = {
  store: async (req, res) => {
    const { co_description } = req.body;

    if (!co_description) {
      return res.status(400).json({
        status: 400,
        isStored: false,
        message: "El nombre del colegio no puede estar vacío",
      });
    }

    const collegeFound = await userServices.findOne(
      co_description.toUpperCase()
    );

    if (collegeFound) {
      return res.status(400).json({
        status: 400,
        isStored: false,
        message: `El colegio '${co_description}' ya se encuentra registrado en la base de datos`,
      });
    }

    const newCollege = {
      ...req.body,
      co_description: co_description.toUpperCase(),
    };

    const collegeStored = await collegeServices.store(newCollege);

    return res.status(201).json({
      status: 201,
      isStored: true,
      message: "El colegio fue agregado satisfactoriamente",
      college: collegeStored,
    });
  },
};

export default collegesController;
