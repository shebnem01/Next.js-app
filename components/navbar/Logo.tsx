import Image from 'next/image'
import Link from 'next/link'
const Logo = () => {
    return (
        <Link href='/' >
           <Image   sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 33vw" alt='img' width={100} height={100} src='/logo.webp'></Image>
        </Link>
    )
}
export default Logo