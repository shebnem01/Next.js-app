import { getServerSession } from "next-auth";
import prisma from '@/libs/prisma'
import { authOptions } from "@/pages/api/auth/[...nextauth]";

export async function getSession() {
    return await getServerSession(authOptions);
}

export async function getReview() {
    try {
        const session = await getSession();

        if (!session?.user?.email) {
            return null;
        }

        const currentUser = await prisma.user.findUnique({
            where: {
                email: session.user.email
            }
        });

        if (!currentUser) {
            return null;
        }

        const userReviews = await prisma.review.findMany({
            where: {
                userId: currentUser.id
            },
            include: {
                product: true, 
            },
            orderBy: {
                createdDate: 'desc'
            }
        });

        return userReviews;

    } catch (error: any) {
        console.error( error);
        return null;
    }
}
