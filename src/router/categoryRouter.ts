import { Router } from "express";
import { categoryController } from "../controller";

const router: Router = Router();

router.get("/", categoryController.getAllCategory);

export default router;
