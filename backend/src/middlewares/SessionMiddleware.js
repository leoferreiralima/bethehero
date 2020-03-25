import jwt from "jsonwebtoken";

export default function (req,res,next){

  const { authorization} = req.headers;

  if(!authorization){
    return res.status(401).send();
  }
 
  const [,token] = authorization.split(" ");

  try{
    const {id} = jwt.verify(token,process.env.JWT_SECRET);
    req.ongId = id;
    return next();
  }catch(e){
    return res.status(401).send();
  }

}
