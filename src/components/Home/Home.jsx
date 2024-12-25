import AnchorLink from 'react-anchor-link-smooth-scroll'

import './Home.css'

const Home = () => {
  return (
    <div id="home" className="home">
      <img
        src="https://res.cloudinary.com/dvgymshsh/image/upload/v1714475607/IMG_20191124_164935_082_mhurd1.jpg"
        alt="SSP"
        className="home-img"
      />
      <div className="home-details">
        <h1>
          Hey, I am <span>Sai Siva Prasad</span>
        </h1>
        <p>I am a Full-Stack Developer based in India</p>
        <div>
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            <button className="connect-btn">Connect with Me</button>
          </AnchorLink>
          <a
            className="anchor-link"
            href="https://drive.google.com/file/d/1QPRlX-qrkpUzB1kiW-r8jXW7fVcFR37v/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="resume-btn">My Resume</button>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Home
