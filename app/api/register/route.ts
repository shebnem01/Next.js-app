import bcrypt from 'bcrypt'
import prisma from '@/libs/prisma'
import { NextResponse } from 'next/server';
export async function POST(requset: Request) {
    const body=await requset.json();
    const { name, email, password } = body;
    const hashedPassword = await bcrypt.hash(password, 12)
    const user = await prisma.user.create({
        data: {
            name,
            email,
            hashedPassword
        }
    })
    return NextResponse.json(user);
}