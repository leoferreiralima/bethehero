import { Router } from "express";

import IncidentController from "./controllers/IncidentController";
import IncidentOngController from "./controllers/IncidentOngController";
import OngController from "./controllers/OngController";
import SessionController from "./controllers/SessionController";
import SessionMiddleware from "./middlewares/SessionMiddleware";

const routes = Router();

routes.post("/session",SessionController.store); 

routes.route("/ongs")
  .post(OngController.store)
  .get(OngController.index);

routes.get("/incidents",IncidentController.index);

routes.use(SessionMiddleware);

routes.post("/incidents",IncidentController.store);
routes.delete("/incidents/:id",IncidentController.destroy);
routes.get("/ongs/incidents",IncidentOngController.index);

export default routes;
