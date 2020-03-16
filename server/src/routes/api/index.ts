import { Router, Request, Response } from "express";

import auth from "./Auth";
import user from "./User";
import company from "./Company";

const routes = Router();

routes.use("/auth", auth);
routes.use("/users", user);
routes.use("/companies", company);

routes.use('/', (req: Request, res: Response) => res.send({
    message: 'Welcome to the API dude!',
}))

export default routes;
