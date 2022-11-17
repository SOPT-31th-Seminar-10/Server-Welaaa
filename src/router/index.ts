import { Router } from "express";
import bookRouter from "./bookRouter";
import categoryRouter from "./categoryRouter";

const router: Router = Router();

router.use("/book", bookRouter);
router.use("/category", categoryRouter);

export default router;
