import Image from 'next/image';
import Link from 'next/link';

const Logo = () => {
    return (
        <Link href='/' className='w-[100px] h-[25px] relative block'>
            <Image 
                alt='img' 
                src='/logo.webp' 
                fill 
                sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 100px" 
            />
        </Link>
    );
}

export default Logo;
