import { HiOutlinePhone } from 'react-icons/hi'
import { MdOutlineMailOutline } from 'react-icons/md'
import { GrMapLocation } from 'react-icons/gr'
import { BsGithub } from 'react-icons/bs'
import { ImLinkedin } from 'react-icons/im'
import { FaTwitter } from 'react-icons/fa'

import './Footer.css'

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-details">
        <div className="footer-profile">
          <img
            src="https://res.cloudinary.com/dvgymshsh/image/upload/v1714655302/IMG_20200220_174226_zhosb8.jpg"
            alt="profile"
            className="footer-image"
          />
          <div>
            <h1>Sai Siva Prasad</h1>
            <p>Full-Stack Developer</p>
          </div>
        </div>
        <div className="footer-info">
          <h1>Phone No.</h1>
          <div>
            <HiOutlinePhone className="footer-icon" />
            <p>9949636006</p>
          </div>
        </div>
        <div className="footer-info">
          <h1>Email</h1>
          <div>
            <MdOutlineMailOutline className="footer-icon" />
            <p>sspchowdary00@gmail.com</p>
          </div>
        </div>
        <div className="footer-info">
          <h1>Address</h1>
          <div>
            <GrMapLocation className="footer-icon" />
            <p>Ongole, Andhra Pradesh, India</p>
          </div>
        </div>
      </div>
      <hr className="footer-line" />
      <div className="socials">
        <a
          href="https://www.linkedin.com/in/sspstark/"
          target="_blank"
          rel="noreferrer"
        >
          <ImLinkedin className="socials-logo" color="#0077b5" />
        </a>
        <a href="https://github.com/SspStark" target="_blank" rel="noreferrer">
          <BsGithub className="socials-logo" color="white" />
        </a>
        <a
          href="https://twitter.com/ssp_stark"
          target="_blank"
          rel="noreferrer"
        >
          <FaTwitter className="socials-logo" color="#1DA1F2" />
        </a>
      </div>
      <p className="copyright">
        &copy; 2024 Sai Siva Prasad - All rights reserved.
      </p>
    </div>
  )
}

export default Footer
