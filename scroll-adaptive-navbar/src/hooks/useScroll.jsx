import { useState, useEffect, useRef } from "react"

const useScroll = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const lastScrollTopRef = useRef(0)

  useEffect(() => {
    const handleScroll = () => {
      let scrollTop = window.scrollY || document.documentElement.scrollTop
      setIsScrolled(scrollTop > lastScrollTopRef.current)
      lastScrollTopRef.current = scrollTop
    }
    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return { isScrolled }
}
export default useScroll
