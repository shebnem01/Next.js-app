import Image from 'next/image'
import Link from 'next/link'
const Logo = () => {
    return (
        <Link href='/' >
           <Image alt='img' width={100} height={100} src='/logo.webp'></Image>
        </Link>
    )
}
export default Logo