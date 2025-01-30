import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './App.css';
import Home from './pages/Home.jsx';
import Contact from './pages/Contact.jsx';
import About from './pages/About.jsx';

function App() {
  const [showPopup, setShowPopup] = useState(false);
  const [popupDisplayed, setPopupDisplayed] = useState(false); 

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight;
      const totalHeight = document.documentElement.scrollHeight;
      const scrollPercentage = (scrollPosition / totalHeight) * 100;

      if (scrollPercentage >= 60 && !popupDisplayed) {
        setShowPopup(true);
        setPopupDisplayed(true); 
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [popupDisplayed]);

  return (
    <>
      <BrowserRouter>
        <Routes>
        <Route path="/" index element={<Home/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/about" element={<About/>}/>
        </Routes>
        {showPopup && (
         <div className="popup">
         <div className="popup-content">
            <div className='popup-header'>
                <h2>Didn’t find what you were looking for?</h2>
                <button onClick={() => setShowPopup(false)} className="close-btn">X</button>
           </div>
           <p>Fill in the details and let us notify you when we find something for you</p>
           <form>
             <label>
               Name
               <br/>
               <input type="text" name="name" placeholder="Enter your name" required />
             </label>
             <label>
               WhatsApp Number
               <br/>
               <input type="tel" name="whatsapp" placeholder="Enter your WhatsApp number" required />
             </label>
             <label>
              Designation you are looking for
               <br/>
               <input name="message" type="text" placeholder="Enter your designation" required/>
             </label>
             <button type="submit">Submit</button>
           </form>
         </div>
       </div>
        )}
      </BrowserRouter>
    </>
  );
}

export default App;
