import { BsInstagram, BsFacebook, BsYoutube } from "react-icons/bs";
import PageContainer from '../containers/PageContainer'
import Link from 'next/link'
import { links } from '@/constant/Constant'
import Logo from '../navbar/Logo'

const Footer = () => {
    return (
        <div className='pt-10 bg-bg-light mt-5'>
            <PageContainer>
                <div className='flex flex-wrap'>
                    <div className='mb-3 lg:w-1/4 sm:w-1/2 w-full'>
                        <Logo />
                        <ul className="flex  items-center gap-2 mt-6">
                            <li>
                                <Link className="text-primary-red text-lg rounded-full flex items-center justify-center border border-border-gray shadow-md w-[35px] h-[35px]" href='/'><BsInstagram /></Link>
                            </li>
                            <li>
                                <Link className="text-primary-red text-lg rounded-full flex items-center justify-center border border-border-gray shadow-md w-[35px] h-[35px]" href='/'><BsFacebook /></Link>
                            </li>
                            <li>
                                <Link className="text-primary-red text-lg rounded-full flex items-center justify-center border border-border-gray shadow-md w-[35px] h-[35px]" href='/'><BsYoutube /></Link>
                            </li>
                        </ul>
                    </div>
                    <div className='mb-3 lg:w-1/4 sm:w-1/2 w-full'>
                        <div className="text-lg mb-3 font-medium">Links</div>
                        <ul>
                            {links.map((link, i) => (
                                <li key={i}><Link href={link.url}>{link.name}</Link></li>


                            ))}
                        </ul>
                    </div>
                    <div className="mb-3  lg:w-1/4 sm:w-1/2 w-full">
                        <div className="text-lg mb-3 font-medium">Service</div>
                        <ul>
                            <li><Link href='/'>My profile</Link></li>
                            <li><Link href='/'>Orders</Link></li>
                            <li><Link href='/wishlist'>Wishlist</Link></li>
                            <li><Link href='/cart'>Cart</Link></li>
                        </ul>
                    </div>

                </div>

            </PageContainer >
            <div className='text-center border-t border-border-gray text-text-dark font-medium py-4'>
                ©2024  All rights reserved
            </div>
        </div >
    )
}

export default Footer