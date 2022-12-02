import USER from "../models/users.js";

const userServices = {
  findOne: (username) => {
    try {
      return (username = USER.findOne({ u_username: username }));
    } catch (error) {
      console.log(error);
    }
  },
  store: (newUser) => {
    try {
      const user = USER.create(newUser);
      return user;
    } catch (error) {
      console.log(error);
    }
  },
};

export default userServices;
