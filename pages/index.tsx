import Author from "components/Author"
import Editor from "components/Editor"
import Hero from "components/Hero"
import type { NextPage } from "next"

const Home: NextPage = () => {
  return (
    <section className="min-w-screen min-h-screen py-[30px] text-center flex flex-col align-center justify-center">
      <Hero />
      <Editor />
      <Author />
    </section>
  )
}

export default Home
