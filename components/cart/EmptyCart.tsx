'use client'
import img from '@/public/cart.svg'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import Button from '../common/button/Button'

const EmptyCart = ({ title }: { title: string }) => {
  const router = useRouter();
  return (
    <div className='flex items-center flex-col gap-7 h-[500px] justify-center bg-bg-light'>
      <Image alt='cart img' src={img} width={200} height={200} />
      <div className='text-xl'>{title}</div>
      <div className='w-[400px]'>
        <Button btnLabel='Go to shopping' onSubmit={() => router.push('/')} /></div>
    </div>
  )
}

export default EmptyCart