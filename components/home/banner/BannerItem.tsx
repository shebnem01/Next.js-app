'use client'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Button from '@/components/common/button/Button'
interface BannerItemProps {
    title: string
    subTitle: string
    image: any
}

const BannerItem: React.FC<BannerItemProps> = ({ title, subTitle, image }) => {
    return (
        <div className='2xl:h-[650px] xl:h-[500px] lg:h-[400px] sm:h-[300px] h-[200px] mb-10 relative'>
            <div className="block">
                <Image   sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 33vw" alt='slider bg' src={image} fill />
            </div>
            <div
                className='absolute z-[100] left-1/2 md:top-1/2 top-[30px] md:-translate-y-1/2 -translate-y-0 -translate-x-1/2 xl:max-w-[1200px] md:max-w-[720px] sm:max-w-[540px] sm:block hidden w-full mx-auto'>
                 <div className="left-1/2 w-[50%] relative">
                    <h1 className='2xl:text-[56px] xl:text-[55px] lg:text-[38px] md:text-[32px] text-[30px] font-bold xl:leading-[58px] lg:leading-[45px] leading-[35px] mb-4'>
                        {title}
                    </h1>
                    <h6 className='text-text-dark font-medium xl:text-lg lg:leading-6 leading-4  sm:text-normal text-xs'>{subTitle}</h6>
                    <div className="lg:max-w-[300px] max-w-[240px] mt-4">
                        <Button btnLabel=''>
                            <Link href='/products'>Shop now</Link>
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BannerItem
