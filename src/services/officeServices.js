import OFFICE from "../models/office.js";
import Colors from "colors";

const officeServices = {
  findOne: (description) => {
    try {
      const office = OFFICE.findOne({ where: { of_description: description } });
      return office;
    } catch (error) {
      console.log(error.message);
    }
  },
  store: (newOffice) => {
    console.log(Colors.red(newOffice));
    const { of_description } = newOffice;

    try {
      const office = OFFICE.create({ of_description });
      return office;
    } catch (error) {
      console.log(error);
    }
  },
};

export default officeServices;
