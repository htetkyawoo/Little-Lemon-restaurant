import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import HomePage from "./components/HomePage";
import BookingPage from "./components/BookingPage";
import { useState } from "react";
import Footer from "./components/Footer";


function App() {
  const [availableTime, setAvailableTime] = useState({
    date : '',
    time : '',
    guest : 0,
    occasion : ''
  });


  return (
    <BrowserRouter>
      <Nav/>
      <main>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/booking" element={<BookingPage availableTime={availableTime} setAvailableTime={setAvailableTime}/>}></Route>
        </Routes>
      </main>
      <hr/>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
