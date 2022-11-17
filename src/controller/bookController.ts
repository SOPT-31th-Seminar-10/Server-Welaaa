import { Request, Response } from "express";
import { bookService } from "../service";

const getBookList = async (req: Request, res: Response) => {
    const data = await bookService.getBooks();

    if (!data) return res.status(404).json({status: 404, message: "NOT FOUND"});
    return res.status(200).json({status: 200, message: "GET Book List SUCCEED", data});
};

const bookController = {
    getBookList,
};

export default bookController;
