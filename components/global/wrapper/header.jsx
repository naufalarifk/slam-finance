import Image from 'next/image';
import Link from 'next/link'
import { useRouter } from "next/router";


const Header = () => {
    const router = useRouter()

  return (
    <section className='bg-transparent text-white font-bold align-baseline flex flex-row px-24 py-4 justify-between -z-10 relative'>
        <Image height={200} width={200} alt='icon' src='/icon.svg' className='py-10' />
        <ul className='flex flex-row justify-evenly py-12 w-1/2'>
            <li><Link href='/' className={router.pathname === '/' ? 'underline' : ''}>Protocol</Link></li>
            <li><Link href='/about' className={router.pathname === '/about' ? 'underline' : ''}>Governance</Link></li>
            <li><Link href='/services' className={router.pathname === '/services' ? 'underline' : ''}>Voting</Link></li>
            <li><Link href='/works' className={router.pathname === '/works' ? 'underline' : ''}>Docs</Link></li>
        </ul>
        <div><button className='border-white rounded-full px-10 py-4 my-8 bg-[#03CDAA]'><p>Coming Soon</p></button></div>
        <Image src='/jumbotron.svg' alt='jumbotron' width={800} height={800} className='absolute top-0 right-0' />
    </section>
  )
}

export default Header