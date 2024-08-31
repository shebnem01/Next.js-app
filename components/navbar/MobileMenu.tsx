'use client'
import React from 'react'
import { RiCloseLargeFill } from "react-icons/ri";
import { usePathname } from 'next/navigation'
import PageContainer from '../containers/PageContainer'
import Link from 'next/link'
import Logo from './Logo';
import { SlHeart } from 'react-icons/sl';
import Cart from './Cart';
import { User } from '@prisma/client';
import { signOut } from 'next-auth/react';
interface MobileMenuProps {
    currentUser: User | null | undefined
    toggleMenu: () => void
}

const MobileMenu: React.FC<MobileMenuProps> = ({ toggleMenu, currentUser }) => {
    const pathname = usePathname();
    const links = [
        { name: "Shop", url: "/products" },
        { name: "Blog", url: "/blog" },
        { name: "About", url: "/about" },
        { name: "Contact", url: "/contact" }
    ]
    return (
        <div className='bg-white fixed h-screen left-0 top-0 shadow w-full pt-5 z-[999]'>
            <PageContainer>
                <div className='flex justify-between items-center pb-4 border-b border-border-gray'>
                    <Logo />
                    <button onClick={toggleMenu} className='w-10'><RiCloseLargeFill size={22} /></button>
                </div>
                <ul className='pb-4  border-b border-border-gray'>
                    {links.map((link, i) => (
                        <li key={i} className='mt-4'>
                            <Link className='font-medium p-2 rounded-md text-lg' href={link.url}>{link.name}</Link>
                        </li>
                    ))}
                </ul>
                <div className='flex items-center gap-3 py-5  border-b border-border-gray'>
                    <div className="rounded-full bg-primary-red w-[40px] h-[40px] flex  items-center justify-center">
                        <Link href='/wishlist'>
                            <SlHeart color="#fff" size={22} /></Link>
                    </div>
                    <div className="rounded-full bg-primary-red w-[40px] h-[40px] flex items-center justify-center">
                        <Cart />
                    </div>
                </div>
                <ul className='list-none'>
                    {currentUser ? (
                        <>
                            <li className="py-2 px-4 border-b border-border-gray text-sm" >
                                <Link href='/profile'>Profile</Link>
                            </li>
                            <li className="py-2 px-4 border-b border-border-gray text-sm" >
                                <Link href='/orders'>Orders</Link>
                            </li>
                            {currentUser.role === "ADMIN" && (
                                <li className="py-2 px-4 border-b border-border-gray text-sm" >
                                    <Link href='/dashboard'>Dashboard</Link>
                                </li>
                            )}
                            <li className="py-2 px-4 text-sm" onClick={() => signOut()}>
                                Sign out
                            </li>
                        </>
                    ) : (
                        <>
                            <li className="py-2 px-4 border-b border-border-gray text-sm" >
                                <Link href='/login'>Sign in</Link>
                            </li>
                            <li className="py-2 px-4 text-sm">
                                <Link href='/register'>Sign up</Link>
                            </li>
                        </>
                    )}
                </ul>
            </PageContainer>
        </div>

    )
}

export default MobileMenu