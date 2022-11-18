import { Router } from "express";
import { bookController } from "../controller";

const router: Router = Router();

router.get('/', bookController.getBookList);  
router.get('/:bookId', bookController.getBookDetail);

export default router;
