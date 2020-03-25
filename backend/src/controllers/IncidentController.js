import {Incident,Ong} from "../models";

class IncidentController{
  async store (req,res){
    const {title,description,value} = req.body;

    const incident = await Incident.create({
      title,
      description,
      value,
      ongId: req.ongId
    });

    res.status(201).json(incident);
  }

  async index (req,res){
    let {page=1,pageSize=5} = req.query;
    if(page< 1){
      page = 1;
    }

    const {rows:incidents,count} = await Incident.findAndCountAll({
    
      limit: pageSize,
      offset:(page-1)*pageSize,
      include: [{
        model: Ong,
        as: "ong",
        attributes:{
          exclude:["createdAt","updatedAt","code"]
        }
      }]
    });

    res.header("X-TOTAL-COUNT",count);
    res.header("X-TOTAL-PAGE",Math.ceil(count/pageSize));
    res.header("X-PAGE-SIZE",pageSize);
    res.header("X-PAGE",page);

    return res.json(incidents);
  }

  async destroy (req,res){
    const ongId = req.ongId;
    const { id } = req.params;

    const incident = await Incident.findOne({
      where:{
        id,
        ongId
      }
    });
    
    if(!incident){
      return res.status(404).send();
    }
    
    await incident.destroy();

    return res.status(204).send();
  }
}

export default new IncidentController();
