import Globe from "./components/Globe";

const Home = () => {
  return (
    <>

      <h1
        className="animate-fade-up bg-gradient-to-br from-[#fff] to-[#adadad] bg-clip-text text-center font-display text-4xl font-bold tracking-[-0.02em] text-transparent drop-shadow-sm [text-wrap:balance] md:text-7xl md:leading-[5rem]"
        style={{ animationDelay: "0.15s", animationFillMode: "forwards" }}
      >
        Discover React&apos;s Full Universe
      </h1>

      <Globe />
    </>
  )
}

export default Home;
