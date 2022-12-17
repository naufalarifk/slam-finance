import Image from 'next/image';
import Link from 'next/link'
import { useRouter } from "next/router";
import MobileMenu from '../../mobile/menu';


const Header = () => {
    const router = useRouter()

  return (
    <>
    <section className='bg-transparent text-white font-bold align-baseline hidden lg:flex flex-row px-24 py-4 justify-between z-20 relative'>
       <Link href='/'><Image height={200} width={200} alt='icon' src='/icon.svg' className='py-10' /></Link>
        <ul className='flex flex-row justify-evenly py-12 w-1/2'>
            <li><Link href='/protocol' className={router.pathname === '/protocol' ? 'underline' : ''}>Protocol</Link></li>
            <li><Link href='/governance' className={router.pathname === '/governance' ? 'underline' : ''}>Governance</Link></li>
            <li><Link href='/voting' className={router.pathname === '/voting' ? 'underline' : ''}>Voting</Link></li>
            <li><Link href='/docs' className={router.pathname === '/docs' ? 'underline' : ''}>Docs</Link></li>
        </ul>
        <div><button className='border-white rounded-full px-10 py-4 my-8 bg-[#03CDAA]'><p>Coming Soon</p></button></div>
        <Image src='/jumbotron.svg' alt='jumbotron' width={1000} height={1000} className='absolute top-0 right-0 -z-20' />
    </section>
    <section className='w-full bg-transparent text-white font-bold align-baseline lg:hidden flex flex-row px-6 justify-between relative'>
    <div className='w-1/2 flex flex-row'>
    <MobileMenu/>
    <Image height={30} width={30} alt='icon' src='/mobile-icon.svg' className='' />
    </div>
    <div className='w-1/2'><button className='border-white rounded-full px-4 py-2 my-4 bg-[#03CDAA] float-right'><p>Coming Soon</p></button></div>
    <Image src='/mobile-cloud.svg' alt='jumbotron' width={1000} height={1000} className='absolute top-0 right-0' />
    </section>
    </>
  )
}

export default Header