import Globe from "./components/Globe";
import { data } from "@/data";
import Link from "next/link";
import Header from "./components/Header";
import Data from "./components/Data";

const Home = () => {
  return (
    <>
      <div className="z-10 w-full px-5 xl:px-0 sm:mt-[10%]">
        <Header />
        <Globe />
      </div>
      <p className="text-center mt-5 text-xl">
        Below, you&apos;ll find a list of fantastic things related to the React ecosystem
      </p>

      <div className="relative my-5 bg-gradient-to-br from-[#fff] to-[#adadad] rounded-md">
        <ul className="flex overflow-x-auto scrollbar-hide space-x-4 p-4 hide-scroll-bar">
          {data.map((item) => (
            <li key={item.id} className="whitespace-nowrap h-10 py-1 flex justify-center items-center px-5 rounded-md text-black text-sm text-center shadow-md bg-white cursor-pointer hover:scale-[1.03] transition-all">
              <Link href={`#${item.title}`}>{item.title}</Link>
            </li>
          ))}
          <div className="absolute left-[-20px] w-20 h-full top-0 bg-gradient-to-r from-[#090911e6] to-[#7272721a]"></div>
          <div className="absolute right-0 w-20 h-full  top-0 bg-gradient-to-l from-[#090911e6] to-[#7272721a]"></div>
        </ul>
      </div>

      <Data />
    </>
  )
}

export default Home;
