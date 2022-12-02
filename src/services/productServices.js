import PRODUCT from "../models/product.js";

const productServices = {
  findOne: (description) => {
    try {
      return PRODUCT.findOne({ p_description: description });
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
