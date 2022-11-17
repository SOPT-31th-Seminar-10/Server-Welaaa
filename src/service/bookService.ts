const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const getBooks = async () => {
    const data = await prisma.book.findMany();
    return data;
};

const bookService = {
    getBooks,
};

export default bookService;
