import { Request, Response } from "express";
import { bookService } from "../service";

const getBookList = async (req: Request, res: Response) => {
    const  data = await bookService.getBooks();
    if (!data) return res.status(400).json({status: 400, message: "잘못된 요청입니다."});
    return res.status(200).json({status: 200, message: "bookList 조회 성공", data});
};

const getBookDetail = async (req: Request, res: Response) => {
    const { bookId } = req.params;

    const data = await bookService.getBookById(+bookId);

    if (!data) return res.status(400).json({status: 400, message: "잘못된 요청입니다."});
    
    return res.status(200).json({status: 200, message: "bookList 조회 성공", data});
};

const bookController = {
    getBookList,
    getBookDetail,
};

export default bookController;
