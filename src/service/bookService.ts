const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const getBooks = async () => {
    const data = await prisma.book.findMany();
    const author = await getAuthorInfo(data.authorId);

    return data;
};

const getBookById = async(bookId: number) => {
    const book = await prisma.book.findUnique({
        where: {
            id: bookId
        },
    })

    const author = await getAuthorInfo(book.authorId);
    const authorInfo = {
        name: author.name,
        authorIntroduct: author.authorIntroduct
    }

    return Object.assign(book, authorInfo);
};

const getAuthorInfo = async(authorId: number) => {
    const data = await prisma.author.findUnique({
        where: {
            id: authorId
        },
    })

    return data
};


const bookService = {
    getBooks,
    getBookById,
    getAuthorInfo,
};

export default bookService;
