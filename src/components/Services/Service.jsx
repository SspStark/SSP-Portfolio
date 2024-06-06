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
            Node.js, Python. Experience with backend frameworks like Express.js.
            Utilizing databases such as MongoDB and SQL for data storage and
            retrieval.
          </p>
        </li>
        <li className="service-item">
          <h1>Mobile App Development with React Native</h1>
          <p>
            Ensuring your web applications are optimized for all devices, from
            desktops to smartphones. Implementing fluid layouts, flexible grids,
            and media queries to adapt to various screen sizes. Conducting
            thorough testing to guarantee a consistent and engaging user
            experience across different devices and browsers.
          </p>
        </li>
      </ul>
    </div>
  )
}

export default Service
