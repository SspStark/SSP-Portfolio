import './Service.css'

const Service = () => {
  return (
    <div id="services" className="services">
      <h1>Services</h1>
      <h2>What I do</h2>
      <ul>
        <li className="service-item">
          <h1>Frontend Development</h1>
          <p>
            Crafting visually appealing and user-friendly interfaces using
            modern web technologies. Implementing responsive design principles
            to ensure seamless experiences across devices and screen sizes.
            Proficiency in HTML, CSS, JavaScript, and front-end frameworks like
            React.js.
          </p>
        </li>
        <li className="service-item">
          <h1>Backend Development</h1>
          <p>
            Building robust server-side applications and APIs to power your web
            applications. Expertise in server-side programming languages such as
            Node.js, Python and Java. Experience with backend frameworks like
            Express.js and Spring Boot. Utilizing databases such as MongoDB and
            SQL for data storage and retrieval.
          </p>
        </li>
        <li className="service-item">
          <h1>Mobile App Development</h1>
          <p>
            With React Native, I craft high-performance mobile apps for iOS and
            Android, focusing on efficiency and cross-platform compatibility.
            Using fluid layouts and adaptive UI, I ensure a seamless user
            experience across devices. Let's make your app idea a reality with
            React Native.
          </p>
        </li>
      </ul>
    </div>
  )
}

export default Service
