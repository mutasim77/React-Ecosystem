import Link from 'next/link';
import React from 'react'
import { AiFillGithub } from 'react-icons/ai';

const Footer = () => {
    return (
        <footer className='pt-10 pb-1 px-5 mt-10 border-t-[1px] border-t-[#888] text-center flex justify-center items-center text-[#ccc] text-sm'>
            <Link href='https://github.com/mutasim77' className='flex items-center gap-2'>
                @mutasim ~ {new Date().getFullYear()}
                <AiFillGithub />
            </Link>
        </footer>
    )
}

export default Footer;