
import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import Alert from './components/Alert';
import About from './components/About';
import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";




function App() {
  const [screenMode, setMode] = useState('light'); // whether the dark mode is enable or not
  const [text, setMtext] = useState('Enable darkmode');

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500)
  }


  const toggleMode = () => {
    if (screenMode === 'light') {
      setMode('dark');
      setMtext('Enable lightmode');
      document.body.style.backgroundColor = '#032d6b';
      showAlert("Dark mode has been enabled", "success");
    }
    else {
      setMode('light');
      setMtext('Enable darkmode');
      document.body.style.backgroundColor = 'white';
      showAlert("Dark mode has been disabled", "success");
    }

  }

  return (
    <>

      <div>
        <Navbar title="TextUtils" about="About TextUtils" mode={screenMode} togglemode={toggleMode} text={text} />
        <Alert lert={alert} />
        <Router>
          <div className="container">

            <Routes>
              <Route path='/about' element={<About />} />
              <Route path='/' element={<Textform heading="Enter The Text Here To Analyse" mode={screenMode} showalert={showAlert} />} />
            </Routes>

          </div>
        </Router>
      </div>

    </>
  );
}

export default App;