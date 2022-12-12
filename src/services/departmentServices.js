import DEPARTMENT from "../models/departments.js";

const departmentServices = {
  findAll: () => {
    try {
      const allDepartment = DEPARTMENT.findAll({ where: { isdeleted: false } });
      return allDepartment;
    } catch (error) {
      console.log(error);
    }
  },
  findOne: (department_name) => {
    try {
      return DEPARTMENT.findOne({
        where: { d_name: department_name },
      });
    } catch (error) {
      console.log(error);
    }
  },
  store: (newDepartment) => {
    try {
      const department = DEPARTMENT.create(newDepartment);
      return department;
    } catch (error) {
      console.log(error);
    }
  },
};

export default departmentServices;
