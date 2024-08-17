import "./Navbar.css"
import useScroll from "../hooks/useScroll"

const Navbar = () => {
  const { isScrolled } = useScroll()

  return (
    <nav className={`${isScrolled ? "active" : ""}`}>
      <a
        href="#"
        className="logo"
      >
        Your Logo
      </a>
      <ul>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Services</a>
        </li>
        <li>
          <a href="#">Portfolio</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
    </nav>
  )
}
export default Navbar
