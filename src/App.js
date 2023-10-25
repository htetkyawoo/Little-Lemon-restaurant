import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import HomePage from "./components/HomePage";
import BookingPage from "./components/BookingPage";
import { useState } from "react";


function App() {
  const [availableTime, setAvailableTime] = useState({
    date : '',
    time : '',
    guest : '',
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
    </BrowserRouter>
  );
}

export default App;
