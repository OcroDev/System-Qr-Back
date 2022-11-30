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

    const newCollege = { ...req.body };

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
