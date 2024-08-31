import prisma from '@/libs/prisma'

export interface IProductParams {
  category?: string | null;
  search?: string | null;
}

export default async function getProduct(params: IProductParams) {
  try {
    const { search, category } = params;
    const searchString = search || '';

    let query: any = {};
    if (category) {
      query.category = category;
    }

    const products = await prisma.product.findMany({
      where: {
        ...query,
        OR: [
          {
            name: {
              contains: searchString,
              mode: 'insensitive'
            },
            description: {
              contains: searchString,
              mode: 'insensitive'
            }
          }
        ]
      },
      include: {
        reviews: {
          include: {
            user: true
          },
          orderBy: {
            createdDate: 'desc'
          }
        }
      }
    });

    return products;
  } catch (error) {
    console.error(error);
    return []; 
  }
}
