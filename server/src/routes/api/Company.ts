import { Router } from "express";
import CompanyController from "../../controllers/CompanyController";

import { checkJwt } from "../../middlewares/checkJwt";
import { checkRole } from "../../middlewares/checkRole";

const router = Router();

//Get all companies
router.get("/", CompanyController.listAll);

// Get one company
router.get(
  "/:id([0-9]+)",
  CompanyController.getOneById
);

//Create a new company
router.post("/", [checkJwt, checkRole(["ADMIN"])], CompanyController.newCompany);

//Edit one company
router.patch(
  "/:id([0-9]+)",
  [checkJwt, checkRole(["ADMIN"])],
  CompanyController.editCompany
);

//Delete one company
router.delete(
  "/:id([0-9]+)",
  [checkJwt, checkRole(["ADMIN"])],
  CompanyController.deleteCompany
);

export default router;
