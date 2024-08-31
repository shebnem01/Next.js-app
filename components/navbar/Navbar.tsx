"use client"
import Logo from './Logo'
import Search from './Search'
import Cart from './Cart'
import UserMenu from './UserMenu'
import NavLinks from './NavLinks'
import { usePathname } from 'next/navigation'
import { User } from '@prisma/client'
import Link from 'next/link'
import { LuMenu } from "react-icons/lu";
import { SlHeart } from "react-icons/sl";
import PageContainer from '../containers/PageContainer'
import { useState } from 'react'
import MobileMenu from './MobileMenu'
interface UserProps {
    currentUser: User | null | undefined
}
const Navbar: React.FC<UserProps> = ({ currentUser }) => {
    const pathname = usePathname();
    if (pathname?.includes("dashboard")) {
        return null
    }
    const [showMobileMenu, setShowMobileMenu] = useState(false);
    const toggleMenu=()=>{
        setShowMobileMenu(prevShowMenu=>!prevShowMenu)
    }
    return (
        <header>
            <PageContainer>
                <div className='flex gap-6 justify-between items-center h-[75px]'>
                    <div className="md:w-[20%] w-1/2"><Logo /></div>
                    <div className="md:block hidden  md:w-[60%] w-full">
                        <Search />
                    </div>
                    <div className='flex items-center justify-end lg:gap-6 gap-3 md:w-[20%] w-1/2'>
                        <div className="rounded-full bg-primary-red w-[40px] h-[40px] flex items-center justify-center">
                            <Cart />
                        </div>
                        <button onClick={toggleMenu} className="lg:hidden  rounded-full bg-primary-red w-[40px] h-[40px] flex items-center justify-center">
                            <LuMenu color="#fff" size={22} />
                        </button>
                        <div className="rounded-full bg-primary-red w-[40px] h-[40px] lg:flex hidden items-center justify-center">
                            <Link href='/wishlist'>
                                <SlHeart color="#fff" size={22} /></Link>
                        </div>
                        <div className="rounded-full bg-primary-red w-[40px] h-[40px] lg:flex hidden items-center justify-center">
                            <UserMenu currentUser={currentUser} />
                        </div>
                    </div>

                </div>
                <div className="md:hidden block w-full mb-3">
                    <Search />
                </div>
            </PageContainer>
           {showMobileMenu&&<MobileMenu currentUser={currentUser} toggleMenu={toggleMenu}  />} 
            <NavLinks />
        </header>
    )
}

export default Navbar