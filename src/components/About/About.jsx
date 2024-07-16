import Skill from '../Skills/Skill'
import './About.css'

const About = () => {
  return (
    <>
      <div id="about" className="about">
        <img
          src="https://res.cloudinary.com/dvgymshsh/image/upload/v1714480012/IMG_20200220_174226_iaevin.jpg"
          alt="SSP"
          className="about-img"
        />
        <div className="about-content">
          <h1>About me</h1>
          <img
            src="https://res.cloudinary.com/dvgymshsh/image/upload/v1714480012/IMG_20200220_174226_iaevin.jpg"
            alt="SSP"
            className="about-img2"
          />
          <p>
            Hey there! I&#39;m Sai Siva Prasad, a recent graduate in Computer
            Science and Engineering, class of 2023. With a passion for
            technology and a hunger for new challenges, I&#39;m currently
            seeking opportunities in Full Stack Development.
          </p>
          <p>
            During my academic journey, I delved into programming and software
            development in Nxtwave, honing my problem-solving skills with
            Python, Java. My journey into Full Stack Development was an
            immersive experience at Nxtwave, mastering Spring Boot, SQLite, MERN
            (MongoDB, Express.js, React, Node.js) Stack—a cutting-edge
            technology stack known for its versatility and scalability and QA
            with Selenium and Cucumber expanding my toolkit for diverse
            projects.
          </p>
          <p>
            I&#39;m excited to apply my skills to real-world projects,
            collaborating with passionate teams to create innovative solutions.
            With a drive for learning and growth, I&#39;m eager to explore new
            technologies and contribute to the ever-evolving landscape of
            software development.
          </p>
          <p>
            Let&#39;s connect and explore how we can work together to turn ideas
            into reality!
          </p>
        </div>
      </div>
      <Skill />
    </>
  )
}

export default About
