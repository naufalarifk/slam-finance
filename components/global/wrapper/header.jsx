import Link from 'next/link'
import { useRouter } from "next/router";


const Header = () => {
    const router = useRouter()

  return (
    <section className='bg-black text-white font-bold align-baseline flex flex-row px-12 py-4 justify-between'>
        <h1 className='py-4'>Nav/Logo</h1>
        <ul className='flex flex-row justify-evenly py-4 w-1/2'>
            <li><Link href='/' className={router.pathname === '/' ? 'underline' : ''}>Home</Link></li>
            <li><Link href='/about' className={router.pathname === '/about' ? 'underline' : ''}>About</Link></li>
            <li><Link href='/services' className={router.pathname === '/services' ? 'underline' : ''}>Services</Link></li>
            <li><Link href='/works' className={router.pathname === '/works' ? 'underline' : ''}>Works</Link></li>
        </ul>
        <button className='border-white border-2 p-2'>Button</button>
    </section>
  )
}

export default Header