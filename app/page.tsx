import Globe from "./components/Globe";

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
      <ul className="flex items-center gap-4 mt-7">
        <li className="px-5 py-2 border border-[#ccc] rounded-md text-black font-bold bg-gradient-to-br from-[#fff] to-[#adadad]">Hello</li>
      </ul>
    </>
  )
}

export default Home;
