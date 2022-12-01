import USER from "../models/users";

const userServices = {
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
