import Sequelize from "sequelize";
import sequelize from "../configs/sequelize.config";

class BogModel extends Sequelize.Model {}
BogModel.init(
  {
    name: {
      type: Sequelize.STRING,
      allowNull: false
    },
    title: {
      type: Sequelize.STRING,
      allowNull: false
    }
  },
  {
    sequelize,
    modelName: "blogs"
  }
);

export default BogModel;
