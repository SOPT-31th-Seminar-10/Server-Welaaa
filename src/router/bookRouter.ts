import { Router } from "express";
import { bookController } from "../controller";

const router: Router = Router();

router.get('/', bookController.getBookList);  

export default router;
