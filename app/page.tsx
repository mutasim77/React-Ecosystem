import Card from "./components/Card";
import Globe from "./components/Globe";
import { data } from "@/data";

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
        {data.map((item) => (
          <Card
            key={item.id}
            title={item.title}
            size="px-5 py-2"
          />
        ))}
      </ul>

      <div className="my-6">
        <input type="text" />
      </div>

      {data.map((item) => (
        <div key={item.id}>
          <h1 className="text-center text-2xl" id={item.title}>React {item.title}</h1>

          <ul className="flex flex-wrap justify-center items-center gap-2">
            {item.links.map((item) => (
              <Card
                key={item.id}
                title={item.name}
                link={item.link}
                size="w-[200px] h-[150px]"
              />
            ))}
          </ul>

        </div>

      ))}
      {/* <h1 className="mt-9" id="State Management">HELLOO</h1> */}
    </>
  )
}

export default Home;
