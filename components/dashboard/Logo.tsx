import Link from 'next/link'
const Logo = () => {
  return (
    <Link className='text-primary-red bg-white rounded-lg p-2 uppercase font-semibold' href='/'><span className='font-bold 
    rounded-md bg-primary-red py-1 px-2  me-1 text-white'>B</span>ooks</Link>
  )
}

export default Logo