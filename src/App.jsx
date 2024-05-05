import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import About from './components/About/About'
import Project from './components/Projects/Project'
import Service from './components/Services/Service'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'

const App = () => {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Service />
      <Project />
      <Contact />
      <Footer />
    </>
  )
}

export default App
