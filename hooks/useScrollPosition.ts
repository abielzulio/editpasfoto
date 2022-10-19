import { useEffect, useState } from "react"

const useScrollPosition = () => {
  const [scrollPosition, setScrollPosition] = useState(0)

  const handleScroll = () => {
    setScrollPosition(window.scrollY)
  }

  useEffect(() => {
    if (typeof window !== "undefined" && window.scrollY !== 0) {
      handleScroll()
    }

    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll)
    }

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("scroll", handleScroll)
      }
    }
  }, [])

  return scrollPosition
}

export default useScrollPosition
