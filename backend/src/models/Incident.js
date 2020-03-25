import { Model, DataTypes } from "sequelize";
import uuid from "uuid/v4";

export default class Incident extends Model {
  static init (sequelize) {
    super.init(
      {
        title: DataTypes.STRING,
        description: DataTypes.STRING,
        value: DataTypes.DECIMAL
      },
      {
        sequelize
      }
    );
    this.addHook("beforeSave",(ong)=>{
      if(!ong.id){
        ong.id= uuid();
      }
    });
  }

  static associate (models){
    this.belongsTo(models.Ong,{as: "ong"});
  }
}
