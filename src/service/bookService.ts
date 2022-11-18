const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const getBooks = async () => {
    const books = await prisma.book.findMany();
    const bookList = []

    for (const book of books) {
        const bookInfo = {
            id: book.id,
            title: book.title,
            description: book.description,
            image: book.image
        }

        const authorInfo = {
            author: (await getAuthorInfo(book.authorId)).name
        }

        bookList.push(Object.assign(bookInfo, authorInfo));
    }

    return bookList;
};

const getBookById = async(bookId: number) => {
    const book = await prisma.book.findUnique({
        where: {
            id: bookId
        },
    })
    
    if(!book) return;

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
