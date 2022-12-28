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
  findOneByName: (department_name) => {
    try {
      return DEPARTMENT.findOne({
        where: { d_name: department_name },
      });
    } catch (error) {
      console.log(error);
    }
  },
  findOnebyId: (departmentId) => {
    try {
      return DEPARTMENT.findByPk(departmentId);
    } catch (error) {
      console.log(error);
    }
  },
  update: (id, department) => {
    try {
      return DEPARTMENT.update(
        {
          d_name: department.d_name,
        },
        { where: { id: id } }
      );
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
  delete: (departmentId) => {
    try {
      return DEPARTMENT.update(
        { isdeleted: true },
        { where: { id: departmentId } }
      );
    } catch (error) {
      console.log(error);
    }
  },
};

export default departmentServices;
