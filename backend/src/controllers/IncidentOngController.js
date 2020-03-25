import {Incident} from "../models";

class IncidentController{
  
  async index (req,res){
    let {page=1,pageSize=5} = req.query;
    if(page< 1){
      page = 1;
    }
    const {rows:incidents,count} = await Incident.findAndCountAll({
      limit: pageSize,
      offset:(page-1)*pageSize
    });

    res.header("X-TOTAL-COUNT",count);
    res.header("X-TOTAL-PAGE",Math.ceil(count/pageSize));
    res.header("X-PAGE-SIZE",pageSize);
    res.header("X-PAGE",page);

    return res.json(incidents);
  }
  
}

export default new IncidentController();
