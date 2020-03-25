import {randomBytes} from "crypto";

import {Ong} from "../models";

class OngController{
  async store (req,res){
    const {name,email,whatsapp,city,uf} = req.body;
    
    let ong = await Ong.findOne({
      attributes:{
        include:["id"]
      },where:{
        email
      }
    });

    if(ong){
      return res.status(400).json({
        "message": "Ong alredy exists!"
      });
    }
    const code = randomBytes(4).toString("HEX");

    ong = await Ong.create({
      name,
      email,
      whatsapp,
      city,
      code,
      uf
    });

    res.status(201).json({
      token: ong.generateToken(),
      code: ong.code
    });
  }

  async index (req,res){
    const ongs = await Ong.findAll({
      attributes:{
        exclude:["code"]
      }
    });

    return res.json(ongs);
  }
}

export default new OngController();
