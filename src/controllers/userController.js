import userServices from "../services/userServices";

const userController = {
  store: async (req, res) => {
    const { u_fulltname, u_username, u_password, u_admin } = req.body;

    if (!u_fulltname) {
      return res.status(400).json({
        status: 400,
        isStored: false,
        message: "Debes el campo de nombre completo no puede estar vacío",
      });
    }

    if (!u_username || !u_password) {
      return res.status(400).json({
        status: 400,
        isStored: false,
        message: "el nombre de usuario y contraseña no puede estar vacío",
      });
    }
    if (u_admin) {
      u_normal;
    }

    const newUser = { ...req.body };

    const collegeStored = await collegeServices.store(newCollege);

    return res.status(201).json({
      status: 201,
      isStored: true,
      message: "El colegio fue agregado satisfactoriamente",
      college: collegeStored,
    });
  },
};

export default userController;
