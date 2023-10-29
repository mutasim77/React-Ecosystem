"use client"

import useScroll from '@/lib/hooks/useScroll';
import Link from 'next/link';
import { AiFillGithub } from 'react-icons/ai'

const Navbar = () => {
    const scrolled = useScroll(30);

    return (
        <header className={`fixed top-0 w-full border-b border-[#888] ${scrolled
            ? ' bg-white/20 backdrop-blur-xl'
            : 'bg-white/0'
            } z-30 transition-all`}>
            <nav className="max-w-screen-xl m-auto flex justify-between h-16 items-center w-full px-5 font-bold">
                <p className='text-2xl'>ReactGalaxy 💫</p>
                <Link
                    href={'https://github.com/mutasim77/React-Ecosystem'}
                    target='_blank'
                    className='p-[.15rem] border border-white rounded-full'
                >
                    <AiFillGithub className='text-2xl' />
                </Link>
            </nav>
        </header>
    )
}

export default Navbar;
