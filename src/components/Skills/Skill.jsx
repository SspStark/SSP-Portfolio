import html from '../../assets/html.svg'
import css from '../../assets/css.svg'
import javascript from '../../assets/javascript.svg'
import react from '../../assets/react.svg'
import nodejs from '../../assets/nodejs.svg'
import bootstrap from '../../assets/bootstrap.svg'
import tailwindcss from '../../assets/tailwindcss.svg'
import npm from '../../assets/npm.svg'
import git from '../../assets/git.svg'
import postman from '../../assets/postman.svg'
import python from '../../assets/python.svg'
import sqlite from '../../assets/sqlite.svg'
import mongodb from '../../assets/mongodb.svg'
import { BsGithub } from 'react-icons/bs'
import { SiExpress } from 'react-icons/si'
import { RiNextjsFill } from 'react-icons/ri'
import java from '../../assets/java.svg'
import springboot from '../../assets/springboot.png'

import './Skill.css'

const Skill = () => {
  return (
    <div className="skills">
      <h1>Skills</h1>
      <ul>
        <li className="list-item">
          <img src={html} alt="html logo" />
          <span>HTML</span>
        </li>
        <li className="list-item">
          <img src={css} alt="css logo" />
          <span>CSS</span>
        </li>
        <li className="list-item">
          <img src={javascript} alt="html logo" />
          <span>JavaScript</span>
        </li>
        <li className="list-item">
          <img src={react} alt="react logo" />
          <span>React Native</span>
        </li>
        <li className="list-item">
          <img src={react} alt="react logo" />
          <span>React.js</span>
        </li>
        <li className="list-item">
          <img src={nodejs} alt="node logo" />
          <span>Node.js</span>
        </li>
        <li className="list-item">
          <SiExpress className="skill-icon" />
          <span>Express.js</span>
        </li>
        <li className="list-item">
          <RiNextjsFill className="skill-icon" />
          <span>Next.js</span>
        </li>
        <li className="list-item">
          <img src={java} alt="java logo" />
          <span>Java</span>
        </li>
        <li className="list-item">
          <img src={springboot} alt="springboot logo" className="spring-boot" />
          <span>Spring Boot</span>
        </li>
        <li className="list-item">
          <img src={bootstrap} alt="bootstrap logo" />
          <span>Bootstrap</span>
        </li>
        <li className="list-item">
          <img src={tailwindcss} alt="tailwindcss logo" />
          <span>TailwindCSS</span>
        </li>
        <li className="list-item">
          <img src={npm} alt="npm logo" />
          <span>NPM</span>
        </li>
        <li className="list-item">
          <img src={git} alt="git logo" />
          <span>Git</span>
        </li>
        <li className="list-item">
          <BsGithub className="skill-icon" />
          <span>GitHub</span>
        </li>
        <li className="list-item">
          <img src={postman} alt="postman logo" />
          <span>Postman</span>
        </li>
        <li className="list-item">
          <img src={python} alt="python logo" />
          <span>Python</span>
        </li>
        <li className="list-item">
          <img src={sqlite} alt="sqlite logo" />
          <span>SQLite</span>
        </li>
        <li className="list-item">
          <img src={mongodb} alt="mongodb logo" />
          <span>MongoDB</span>
        </li>
      </ul>
    </div>
  )
}

export default Skill
