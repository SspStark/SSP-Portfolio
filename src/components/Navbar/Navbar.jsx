import AnchorLink from 'react-anchor-link-smooth-scroll'
import { GiHamburgerMenu } from 'react-icons/gi'
import { AiOutlineClose } from 'react-icons/ai'

import './Navbar.css'
import { useState } from 'react'

const Navbar = () => {
  const [sidebar, setSidebar] = useState('close-sidebar')

  const openSidebar = () => setSidebar('show-sidebar')
  const closeSidebar = () => setSidebar('close-sidebar')

  return (
    <nav>
      <div className="navbar">
        <AnchorLink
          className="navbar-logo anchor-link"
          offset={100}
          href="#home"
        >
          <img
            src="https://res.cloudinary.com/dvgymshsh/image/upload/v1714458514/profile-logo1-copy_t92uhq.jpg"
            alt="navlogo"
            className="nav-logo"
          />
          <span>SSP</span>
        </AnchorLink>
        <GiHamburgerMenu className="menu-icon" onClick={openSidebar} />
        <ul className={`nav-menu ${sidebar}`}>
          <AiOutlineClose className="close-icon" onClick={closeSidebar} />
          <li className="nav-item" onClick={closeSidebar}>
            <AnchorLink className="anchor-link" offset={100} href="#home">
              Home
            </AnchorLink>
          </li>
          <li className="nav-item" onClick={closeSidebar}>
            <AnchorLink className="anchor-link" offset={100} href="#about">
              About Me
            </AnchorLink>
          </li>
          <li className="nav-item" onClick={closeSidebar}>
            <AnchorLink className="anchor-link" offset={100} href="#services">
              Services
            </AnchorLink>
          </li>
          <li className="nav-item" onClick={closeSidebar}>
            <AnchorLink className="anchor-link" offset={50} href="#projects">
              Portfolio
            </AnchorLink>
          </li>
          <li className="nav-item" onClick={closeSidebar}>
            <AnchorLink className="anchor-link" offset={50} href="#contact">
              Contact
            </AnchorLink>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
