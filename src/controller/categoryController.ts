import { Request, Response } from "express";
import { categoryService } from "../service";

const getAllCategory = async (req: Request, res: Response) => {
  const data = await categoryService.getAllCategory();
  
  return res.status(200).json({ status: 200, message: "카테고리 전체 조회 성공", data });
};

const categoryController = {
  getAllCategory,
};

export default categoryController;
