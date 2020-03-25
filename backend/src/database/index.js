import Sequelize from "sequelize";

import dbConfig from "../config/database";
import * as models from "../models";

const sequelize = new Sequelize(dbConfig);

const modelsKeys = Object.keys(models);

modelsKeys.forEach( key => {
  models[key].init(sequelize);
});

modelsKeys.forEach( key => {
  models[key].associate(models);
});

export default sequelize;
