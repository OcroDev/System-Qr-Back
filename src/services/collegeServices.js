import COLLEGE from "../models/college.js";

const collegeServices = {
  store: (newCollege) => {
    try {
      const college = COLLEGE.create(newCollege);
      return college;
    } catch (error) {
      console.log(error);
    }
  },
};

export default collegeServices;
