
import { getCurrentUser } from '@/app/actions/getCurrentUser';
import prisma from '@/libs/prisma'
import { NextResponse } from 'next/server';
export async function POST(requset: Request) {
    const currentUser = await getCurrentUser();
    if (!currentUser || currentUser.role !== 'ADMIN') {
        return NextResponse.error();
    }
    const body = await requset.json();
    const { name, description, image, brand, category, inStock, price } = body;

    const product = await prisma.product.create({
        data: {
            name, description, image, brand, category, inStock, price:parseFloat(price)
        }
    })
    return NextResponse.json(product);
}