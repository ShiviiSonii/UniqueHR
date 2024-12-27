import { BrowserRouter } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer.jsx'
import Banner from './components/Banner.jsx'

function App() {

  return (
    <>
      <BrowserRouter>
        <Banner/>
        <Footer/>
       </BrowserRouter>
    </>
  )
}

export default App
