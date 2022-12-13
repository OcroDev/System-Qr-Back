import PRODUCT from "../models/product.js";

const productServices = {
  findAll: () => {
    try {
      return PRODUCT.findAll({
        where: { isdeleted: false },
        // attributes: ["p_description", "p_stock", "p_stockmin"],
      });
    } catch (error) {
      console.log(error);
    }
  },
  findOne: (description) => {
    try {
      return PRODUCT.findOne({ where: { p_description: description } });
    } catch (error) {
      console.log(error);
    }
  },
  store: (newProduct) => {
    try {
      const product = PRODUCT.create(newProduct);
      return product;
    } catch (error) {
      console.log(error);
    }
  },
};

export default productServices;
