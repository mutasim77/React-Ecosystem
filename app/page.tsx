import { AiOutlineSearch } from "react-icons/ai";
import Card from "./components/Card";
import Globe from "./components/Globe";
import { data } from "@/data";
import Link from "next/link";

const Home = () => {
  return (
    <>
      <div className="z-10 w-full px-5 xl:px-0 sm:mt-[10%]">
        <h1
          className="animate-fade-up bg-gradient-to-br from-[#fff] to-[#adadad] bg-clip-text text-center font-display text-4xl font-bold tracking-[-0.02em] text-transparent drop-shadow-sm [text-wrap:balance] md:text-7xl md:leading-[5rem]"
        >
          Discover React&apos;s Full Universe
        </h1>
        <Globe />
      </div>
      <p className="text-center mt-5 text-xl">
        Below, you&apos;ll find a list of fantastic things related to the React ecosystem
      </p>

      <div className="relative my-5 bg-gradient-to-br from-[#fff] to-[#adadad] rounded-md">
        <ul className="flex overflow-x-auto scrollbar-hide space-x-4 p-4 hide-scroll-bar">
          {data.map((item) => (
            <li key={item.id} className="whitespace-nowrap h-10 py-1 flex justify-center items-center px-5 rounded-md text-black text-sm text-center shadow-md bg-white cursor-pointer">
              <Link href={`#${item.title}`}>{item.title}</Link>
            </li>
          ))}
          <div className="absolute left-[-20px] w-20 h-full top-0 bg-gradient-to-r from-[#090911e6] to-[#7272721a]"></div>
          <div className="absolute right-0 w-20 h-full  top-0 bg-gradient-to-l from-[#090911e6] to-[#7272721a]"></div>
        </ul>
      </div>


      <div className="my-6 relative w-1/2 m-auto">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-2xl">
          <AiOutlineSearch className="w-5 h-5 text-black" />
        </div>
        <input type="text" className="search-input" placeholder="Search" />
        <button className="search-input-button">Search</button>
      </div>

      {data.map((item) => (
        <div key={item.id} className="flex flex-col gap-7 mt-7">
          <h1 className="h-[64px] w-1" id={item.title}></h1>
          <h1 className="text-center text-5xl">React {item.title}</h1>
          <div className="flex flex-wrap justify-center items-center gap-2 ">
            {item.links.map((item) => (
              <Card
                key={item.id}
                name={item.name}
                link={item.link}
              />
            ))}
          </div>
        </div>
      ))}
    </>
  )
}

export default Home;
