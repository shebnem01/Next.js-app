// import prisma from '@/libs/prisma';
// import { NextResponse } from 'next/server';

// export async function GET(request: Request) {
//   const url = new URL(request.url);
//   const search = url.searchParams.get('search') || '';
//   const category = url.searchParams.get('category') || '';

//   try {
//     const products = await prisma.product.findMany({
//       where: {
//         AND: [
//           {
//             name: {
//               contains: search,
//               mode: 'insensitive'
//             }
//           },
//           {
//             category: {
//               contains: category,
//               mode: 'insensitive'
//             }
//           }
//         ]
//       },
      
//       include: {
//         reviews: {
//           include: {
//             user: true
//           },
//           orderBy: {
//             createdDate: 'desc'
//           }
//         }
//       },
  
//     });

//     return NextResponse.json(products);
//   } catch (error) {
//     console.log(error);
//     return NextResponse.error();
//   }
// }
