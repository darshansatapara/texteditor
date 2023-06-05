import { useState } from "react";
import "./App.css";
import Navbar from "./component/Navbar ";
import Textbox from "./component/Textbox";
import About from "./component/about";
import Alert from "./component/Alert";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";




function App() {
  const [Mode, setMode] = useState('light')
  const [Modename, setModename] = useState('On Dark Mode')
  const [alert, setAlert] = useState();


  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
  }
  const handleMode = () => {
    if (Mode === 'light') {
      setMode('dark')
      setModename('Off Dark Mode')
      document.body.style.backgroundColor = '#191b2c';
      document.body.style.color = 'white';

      showAlert("Dark mode is on.", "success")


    }
    else {
      setMode('light')
      setModename('On Dark Mode')
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black'
      showAlert("Dark mode is off.", "success")

    }
  }
  setTimeout(() => {
    setAlert(null)
  }, 2000);
  // setInterval(() => {
  //   setTimeout(() => {
  //     showAlert("hello! you need to download app?")
  //   }, 1500);
  // }, 5000);
  const [colStyle, setColStyle] = useState(
    {
      color: 'black',
      backgroundColor: 'white '
      
    });
  const toggleStyle = () => {
    if (colStyle === 'white') {
      setColStyle({
        color: 'white',
        backgroundColor: 'black'
      })
    }
    else {
      setColStyle({
        color: 'black',
        backgroundColor: 'white'
      })
    }
  }

  return (
    <>
      <Navbar title="TextEditor" Mode={Mode} Modename={Modename} toggleStyle={toggleStyle} handleMode={handleMode} />
      <Alert alert={alert} />
      <Router>
        <Routes>
          <Route path="/about" element={<about />} />
          <Route path="/" element={
            <Textbox Mode={Mode} showAlert={showAlert} Modename={Modename} />
          } />
        </Routes>
      </Router>
      <About Mode={Mode} Modename={Modename} colStyle={colStyle} />
    </>
  );
}

export default App;

