'use client'
import {  useCallback, useContext, useEffect, useState } from 'react';
import { BasketProduct } from '@/types/types';
import { createContext } from 'react';
interface Props {
    [propName: string]: any
}
interface BasketContextProps {
    basketList: BasketProduct[] 
    addToBasket: (product: BasketProduct) => void
    decreaseQuantity: (productId: string) => void
    increaseQuantity: (productId: string) => void
    deleteFromBasket: (productId: string) => void
    clearBasket: () => void
}


const BasketContext = createContext<BasketContextProps|null>(null);

export const BasketContextProvider = (props: Props) => {
    const [basketList, setBasketList] = useState<BasketProduct[]>([]);

    useEffect(() => {
        const storedBasket = JSON.parse(localStorage.getItem('basket') || '[]');
        setBasketList(storedBasket);
    }, []);

    const updateBasket = (newBasketList: BasketProduct[]) => {
        setBasketList(newBasketList);
        localStorage.setItem('basket', JSON.stringify(newBasketList));
    };


    const addToBasket = useCallback((product: BasketProduct) => {
        const newBasketList = [...basketList, product];
        updateBasket(newBasketList);
    }, [basketList])

    const deleteFromBasket = useCallback((productId: string) => {
        const newBasketList = basketList.filter((item) => item.id !== productId);
        updateBasket(newBasketList);
    }, [basketList])

    const increaseQuantity = useCallback((productId: string) => {
        const newBasketList = basketList.map((item) =>
            item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
        );
        updateBasket(newBasketList);
    }, [basketList])

    const decreaseQuantity = useCallback((productId: string) => {
        const newBasketList = basketList.map((item) => {
            if (item.id === productId && item.quantity > 1) {
                return { ...item, quantity: item.quantity - 1 };
            }
            return item;
        });
        updateBasket(newBasketList);
    }, [basketList])

    const clearBasket = useCallback(() => {
        updateBasket([]);
    }, [])


    const value = {
        basketList,
        addToBasket,
        increaseQuantity,
        decreaseQuantity,
        deleteFromBasket,
        clearBasket
    }
    return <BasketContext.Provider value={value} {...props}/>
}


const useBasket = () => {
const context=useContext(BasketContext);
if(context===null){
    throw new Error
}
return context
};

export default useBasket;
