'use client'
import React from 'react'
import NavLink from './NavLink'
import { usePathname } from 'next/navigation'
import PageContainer from '../containers/PageContainer'
import { links } from '@/constant/Constant'

const NavLinks = () => {
    const pathname = usePathname();

    return (
        <ul className='bg-primary-red py-5 lg:flex hidden'>
            <PageContainer>
                <div className='flex  items-center gap-10'>
                    {links.map((link, i) => (
                        <li key={i}>
                            <NavLink name={link.name} url={link.url} selected={link.url === pathname} />
                        </li>
                    ))}
                </div>
            </PageContainer>

        </ul>
    )
}

export default NavLinks