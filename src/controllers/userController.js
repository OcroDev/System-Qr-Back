import userServices from "../services/userServices.js";

const userController = {
  findAll: async (req, res) => {
    const users = await userServices.findAll();
    return res.status(200).json({
      status: 200,
      count: users.length,
      users,
    });
  },

  store: async (req, res) => {
    const { u_firstname, u_username, u_password } = req.body;

    if (!u_firstname) {
      return res.status(400).json({
        status: 400,
        isStored: false,
        message: 'El campo "nombre" no puede estar vacío',
      });
    }

    if (!u_username || !u_password) {
      return res.status(400).json({
        status: 400,
        isStored: false,
        message: "el nombre de usuario y contraseña no puede estar vacío",
      });
    }

    const userFound = await userServices.findOne(u_username.toUpperCase());

    if (userFound) {
      return res.status(400).json({
        status: 400,
        isStored: false,
        message: `El usuario '${u_username}' ya se encuentra registrado en la base de datos`,
      });
    }

    const newUser = { ...req.body, u_username: u_username.toUpperCase() };

    console.log(newUser);

    const userStored = await userServices.store(newUser);

    return res.status(201).json({
      status: 201,
      isStored: true,
      message: "El usuario fue creado satisfactoriamente",
      college: userStored,
    });
  },
};

export default userController;
