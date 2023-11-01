"use client"

import Card from "./Card";
import { data } from "@/data";
import { ChangeEvent, Fragment, useEffect, useState } from "react";
import { motion } from 'framer-motion';
import { AiOutlineSearch } from "react-icons/ai";

const inputAnimation = {
    hidden: {
        x: 100,
        opacity: 0,
    },
    visible: (custom: number) => ({
        x: 0,
        opacity: 1,
        transition: { duration: custom * 0.2 }
    })
}

const Data = () => {
    const [inputText, setInputText] = useState<string>('');

    const inputHandler = (evt: ChangeEvent<HTMLInputElement>) => {
        const value = evt.target.value;
        setInputText(value.toLowerCase());
    }

    const filteredData = data.map((item) => ({
        ...item,
        links: item.links.filter((link) => link.name.toLowerCase().includes(inputText))
    })).filter((item) => item.links.length > 0)

    return (
        <Fragment>
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ amount: 0.2, once: true }}
                className="my-6 relative w-1/2 m-auto"
            >
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-2xl">
                    <AiOutlineSearch className="w-5 h-5 text-black" />
                </div>
                <motion.input
                    type="text"
                    className="search-input"
                    placeholder="Search"
                    onChange={inputHandler}
                    variants={inputAnimation}
                    custom={3}
                />
            </motion.div>
            {filteredData.map((item) => (
                <motion.div
                    key={item.id}
                    className="flex flex-col gap-7 mt-7"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ amount: 0.2, once: true }}
                >
                    <div className="h-[64px] w-1" id={item.title}></div>
                    <motion.h1
                        variants={inputAnimation}
                        custom={2}
                        className="text-center text-5xl"
                    >
                        React {item.title}
                    </motion.h1>
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ amount: 0.2 }}
                        className="flex flex-wrap justify-center items-center gap-5"
                    >
                        {item.links.map((item) => (
                            <Card
                                key={item.id}
                                name={item.name}
                                link={item.link}
                            />
                        ))}
                    </motion.div>
                </motion.div>
            ))}
        </Fragment>
    )
}

export default Data;