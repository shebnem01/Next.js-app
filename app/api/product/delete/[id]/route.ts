import { NextResponse } from 'next/server';
import prisma from '@/libs/prisma';
import { getCurrentUser } from '@/app/actions/getCurrentUser';

export async function DELETE(request: Request, { params }: { params: { id: string } }) {
  const currentUser = await getCurrentUser();
  if (!currentUser || currentUser.role !== 'ADMIN') {
    return NextResponse.error();
  }
  const { id } = params;
  try {
    await prisma.review.deleteMany({
      where: { productId: id },
    });
    const deletedProduct = await prisma.product.delete({
      where: { id },
    });

    return NextResponse.json(deletedProduct);
  } catch (error) {
    console.error('Ürün silme hatası:', error);
    return NextResponse.json({ error: 'Ürün silinemedi' }, { status: 500 });
  }
}
