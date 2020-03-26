import {Ong} from "../models";

class SessionController{
  async store (req,res){
    const {code} = req.body;
    
    const ong = await Ong.findOne({
      attributes:["id","name"],
      where:{
        code
      }
    });

    if(!ong){
      return res.status(400).json({
        "message": "Invalid Code!"
      });
    }

    res.status(201).json({
      token: ong.generateToken(),
      ong
    });
  }

}

export default new SessionController();
