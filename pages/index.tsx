import Dropzone from "components/Dropzone"
import type { NextPage } from "next"

const Home: NextPage = () => {
  return (
    <section className="min-w-screen min-h-screen md:py-[100px] py-[50px] text-center flex flex-col align-center justify-center">
      <h1 className="md:text-[64px] text-[36px] text-transparent bg-white-linear-gradient bg-clip-text tracking-tight md:leading-[64px] leading-[36px]">
        Edit pas foto. <br /> Tanpa skill edit foto.
      </h1>
      <Dropzone />
    </section>
  )
}

export default Home
