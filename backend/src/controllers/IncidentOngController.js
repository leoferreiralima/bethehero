import {Incident} from "../models";

class IncidentController{
  
  async index (req,res){
    console.log(req.ongId);
    const incidents = await Incident.findAll({
      where:{
        ongId: req.ongId
      }
    });

    return res.json(incidents);
  }
  
}

export default new IncidentController();
