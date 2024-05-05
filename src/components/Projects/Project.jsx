import { FiExternalLink } from 'react-icons/fi'
import { FaGithub } from 'react-icons/fa'
import { MdOutlineDoubleArrow } from 'react-icons/md'

import './Project.css'
import { projectsData } from './projectData'

const sixProjects = projectsData.slice(0, 6)

const Project = () => {
  return (
    <div id="projects" className="projects">
      <h1>Portfolio</h1>
      <h2>Projects I have done</h2>
      <ul>
        {sixProjects.map((project) => (
          <li key={project.id} className="project-item">
            <a
              href={project.websiteUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={project.imageUrl}
                alt={project.name}
                className="project-img"
              />
              <div className="project-details">
                <div>
                  <h1>{project.name}</h1>
                  <p className="project-desc">{project.description}</p>
                  <p className="tech-stack">{project.techStack.join(', ')}</p>
                </div>
                <div>
                  <a
                    href={project.websiteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FiExternalLink className="link-icon" />
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub className="link-icon" />
                  </a>
                </div>
              </div>
            </a>
          </li>
        ))}
      </ul>
      <a
        href="https://github.com/SspStark"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button>
          <span>See More</span> <MdOutlineDoubleArrow size={16} />
        </button>
      </a>
    </div>
  )
}

export default Project
