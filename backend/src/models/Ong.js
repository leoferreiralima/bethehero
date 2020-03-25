import jwt from "jsonwebtoken";
import { Model, DataTypes } from "sequelize";
import uuid from "uuid/v4";

export default class Ong extends Model {
  static init (sequelize) {
    super.init(
      {
        name: DataTypes.STRING,
        code: DataTypes.STRING,
        email: DataTypes.STRING,
        whatsapp: DataTypes.STRING,
        city: DataTypes.STRING,
        uf: DataTypes.STRING
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

  generateToken (){
    return jwt.sign({id: this.id},process.env.JWT_SECRET,{
      expiresIn: process.env.JWT_EXPIRATION
    });
  }

  static associate (models){
    this.incidents = this.hasMany(models.Incident,{ as: "incidents",foreignKey:"ongId" });
  }
}
