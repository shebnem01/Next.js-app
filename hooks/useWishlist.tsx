'use client'
import { useCallback, useContext, useEffect, useState } from 'react';
import { createContext } from 'react';
import { Product } from '@prisma/client';
import toast from 'react-hot-toast';
interface Props {
    [propName: string]: any
}
interface WishlistContextProps {
    isWishlist: boolean
    wishList: Array<Product>
    wishlistFunc:(product:Product)=>void
}

const WishlistContext = createContext<WishlistContextProps | null>(null);

export const WishlistContextProvider = (props: Props) => {
    const [isWishlist, setIsWishlist] = useState<boolean>(false);
    const [wishList, setWishList] = useState<Array<Product>>([]);

    useEffect(() => {
        const storedisWishlist = JSON.parse(localStorage.getItem("isWishlist") || `false`);
        const storedWishlist = JSON.parse(localStorage.getItem("wishlist") || '[]');
        setIsWishlist(storedisWishlist);
        setWishList(storedWishlist);
    }, []);

    const wishlistFunc = useCallback((product: Product) => {
        const productIndex = wishList.findIndex((item: any) => item.id === product.id);
    
        let updatedWishList;
    
        if (productIndex >= 0) {
            toast.error("Product removed from wishlist");
            updatedWishList = wishList.filter((item: any) => item.id !== product.id);
            setIsWishlist(false);
        } else {
            toast.success("Product added to wishlist");
            updatedWishList = [product, ...wishList];
            setIsWishlist(true);
        }
    
        setWishList(updatedWishList);
        localStorage.setItem('wishlist', JSON.stringify(updatedWishList));
        localStorage.setItem('isWishlist', JSON.stringify(updatedWishList.some((item: any) => item.id === product.id)));
    }, [wishList]);
    


    const value = {
        isWishlist,
        wishList,
        wishlistFunc,

    }
    return <WishlistContext.Provider value={value} {...props} />
}


const useWishlist = () => {
    const context = useContext(WishlistContext);
    if (context === null) {
        throw new Error
    }
    return context
};

export default useWishlist;
