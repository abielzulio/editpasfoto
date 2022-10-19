import { AUTHOR_IMG_URL, AUTHOR_NAME, AUTHOR_URL } from "data/author"
import NextImage from "next/image"

const Author = () => (
  <div className="text-white relative flex mx-auto gap-[5px] items-center text-sm my-[40px]">
    <span className="opacity-50">Dibuat oleh</span>
    <a
      className="flex gap-[10px] bg-white bg-opacity-0 hover:bg-opacity-[0.08] rounded-full px-[5px] py-[5px] transition border-white border-[0.125px] border-opacity-0 hover:border-opacity-[0.08]"
      href={AUTHOR_URL}
      rel="noopener noreferrer"
      target="_blank"
    >
      <NextImage
        src={AUTHOR_IMG_URL}
        width={25}
        height={25}
        className="rounded-full object-cover overflow-hidden relative"
      />
      <span className="pr-[8px] -mb-[10px]">{AUTHOR_NAME}</span>
    </a>
  </div>
)

export default Author
