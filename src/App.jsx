import { BrowserRouter } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer.jsx'
import Banner from './components/Banner.jsx'
import Features from './components/Features.jsx'

function App() {

  return (
    <>
      <BrowserRouter>
        <Banner/>
        <Features/>
        <Footer/>
       </BrowserRouter>
    </>
  )
}

export default App
