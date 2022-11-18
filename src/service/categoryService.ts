const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const getAllCategory = async () => {
  const data = await prisma.category.findMany({
    orderBy: {
      id: 'asc'
    }
  });

  return data;
};

const categoryService = {
  getAllCategory,
};

export default categoryService;