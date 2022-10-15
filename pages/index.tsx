import type { NextPage } from "next"

const Home: NextPage = () => {
  return (
    <section className="w-screen h-screen text-center flex flex-col align-center justify-center bg-black-radial-gradient">
      <h1 className="text-[54px] text-transparent bg-white-linear-gradient bg-clip-text tracking-tight leading-[54px]">
        Hello, world
      </h1>
    </section>
  )
}

export default Home
