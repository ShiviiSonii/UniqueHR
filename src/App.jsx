import { BrowserRouter } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer.jsx'
import Banner from './components/Banner.jsx'
import Features from './components/Features.jsx'
import Process from './components/Process.jsx'
import TopListing from './components/TopListing.jsx'
import Highlights from './components/Highlights.jsx'
import Testimonial from './components/Testimonial.jsx'
import Blogs from './components/Blogs.jsx'

function App() {

  return (
    <>
      <BrowserRouter>
        <Banner/>
        <Features/>
        <Process/>
        <Highlights/>
        <TopListing/>
        <Testimonial/>
        <Blogs/>
        <Footer/>
       </BrowserRouter>
    </>
  )
}

export default App
