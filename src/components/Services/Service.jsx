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
          <h1>Mobile App Development</h1>
          <p>
            Harnessing the versatility of React Native, I specialize in creating high-performance mobile applications for both iOS and Android platforms. My approach emphasizes code efficiency and cross-platform compatibility, ensuring seamless experiences across diverse devices. With fluid layouts and adaptive UI components, I guarantee an engaging user experience on every screen size. Let me bring your app vision to life with the power of React Native.
          </p>
        </li>
      </ul>
    </div>
  )
}

export default Service
