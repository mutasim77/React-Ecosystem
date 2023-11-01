"use client"

import { motion } from "framer-motion"

const cardAnimation = {
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 1,
        transition: { duration: 3 }
    }
}

const Card = ({ name, link }: {
    name: string,
    link: string
}) => {
    return (
        <motion.a
            href={link}
            target="_blank"
            className="card"
            variants={cardAnimation}
        >
            {name}
        </motion.a>
    )
}

export default Card;