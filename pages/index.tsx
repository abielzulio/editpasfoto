import Dropzone from "components/Dropzone"
import type { NextPage } from "next"

const Home: NextPage = () => {
  return (
    <section className="min-w-screen min-h-screen py-[100px] text-center flex flex-col align-center justify-center bg-black-radial-gradient">
      <h1 className="text-[64px] text-transparent bg-white-linear-gradient bg-clip-text tracking-tight leading-[64px]">
        Edit pas foto. <br /> Tanpa skill edit foto.
      </h1>
      <Dropzone />
    </section>
  )
}

export default Home
