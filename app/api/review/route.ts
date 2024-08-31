
import { getCurrentUser } from '@/app/actions/getCurrentUser';
import prisma from '@/libs/prisma'
import { NextResponse } from 'next/server';
export async function POST(requset: Request) {
    const currentUser = await getCurrentUser();
    if (!currentUser) {
        return NextResponse.error();
    }
    const body = await requset.json();
    const { productId, userId, rating, comment } = body;

    const review = await prisma.review.create({
        data: {
           productId, userId, rating, comment
        }
    })
    return NextResponse.json(review);
}