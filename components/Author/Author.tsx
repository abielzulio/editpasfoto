import { AUTHOR_IMG_URL, AUTHOR_NAME, AUTHOR_URL } from "data/author"

const Author = () => (
  <div className="text-white relative flex mx-auto gap-[5px] items-center text-sm">
    <span className="opacity-50">Dibuat oleh</span>
    <a
      className="flex gap-[10px] bg-white bg-opacity-0 hover:bg-opacity-[0.08] rounded-full p-[5px] transition border-white border-[0.125px] border-opacity-0 hover:border-opacity-[0.08]"
      href={AUTHOR_URL}
      rel="noopener noreferrer"
      target="_blank"
    >
      <img
        src={AUTHOR_IMG_URL}
        width={25}
        height={25}
        className="rounded-full"
      />
      <span className="pr-[8px]">{AUTHOR_NAME}</span>
    </a>
  </div>
)

export default Author
