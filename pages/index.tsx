import Dropzone from "components/Dropzone"
import Author from "components/Author"
import Hero from "components/Hero"
import type { NextPage } from "next"

const Home: NextPage = () => {
  return (
    <section className="min-w-screen min-h-screen md:py-[100px] py-[50px] text-center flex flex-col align-center justify-center">
      <Hero />
      <Dropzone />
      <Author />
    </section>
  )
}

export default Home
