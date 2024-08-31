'use client'
import ProductCard from '../products/ProductCard';
import EmptyCart from '../cart/EmptyCart';
import PageContainer from '../containers/PageContainer';
import Heading from '../common/heading/Heading';
import useWishlist from '@/hooks/useWishlist';
import { User } from '@prisma/client';
const LikedProduct = ({ currentUser }: { currentUser: User | null }) => {
    const { wishList } = useWishlist();
    if (wishList.length == 0) {
        return <EmptyCart title='Your wishlist is empty' />
    }
    return (
        <>
            <Heading categoryName='Wishlist' />
            <PageContainer>
                <div className="my-6 flex flex-wrap gap-6">
                    {wishList.map((item) => (
                        <ProductCard currentUser={currentUser} product={item} key={item.id} />
                    ))}
                </div>
            </PageContainer>
        </>
    )
}

export default LikedProduct