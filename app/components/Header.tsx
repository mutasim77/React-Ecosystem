"use client"

import { motion } from 'framer-motion';

const Header = () => {
    return (
        <motion.h1
            className='bg-gradient-to-br from-[#fff] to-[#adadad] bg-clip-text text-center font-display text-4xl font-bold tracking-[-0.02em] text-transparent drop-shadow-sm [text-wrap:balance] md:text-7xl md:leading-[5rem]'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
        >
            Discover React&apos;s Full Universe
        </motion.h1>
    )
}

export default Header;
