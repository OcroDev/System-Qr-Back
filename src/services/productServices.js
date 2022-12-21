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
  findOneByDescription: (description) => {
    try {
      return PRODUCT.findOne({ where: { p_description: description } });
    } catch (error) {
      console.log(error);
    }
  },
  findOnebyId: (productId) => {
    try {
      return PRODUCT.findByPk(productId);
    } catch (error) {
      console.log(error);
    }
  },
  update: (id, product) => {
    try {
      return PRODUCT.update(
        {
          p_description: product.p_description,
          p_unit: product.p_unit,
          p_minstock: product.p_minstock,
          p_ubication: product.p_ubication,
        },
        { where: { id: id } }
      );
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
  delete: (productId) => {
    try {
      return PRODUCT.update({ isdeleted: true }, { where: { id: productId } });
    } catch (error) {
      console.log(error);
    }
  },
};

export default productServices;
