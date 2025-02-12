import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Balloons from "./Ballon";
import Test from "./Test";
import Test1 from "./Test1";
import TouchChange from "./Candletest";
import Ctest from "./Ctest";
import Candle from "./Candle";
import HappyBirthdayBanner from "./Bletter";
import Bg from "./Background";
import Card from "./Card";
import Surprise from "./components/Surprise";

function App() {
  return (
    <Router>
      <div className="Container">
        <Routes>
          {/* Home route with background, card, and candles */}
          <Route path="/" element={<><Bg /><Card /></>} />

          {/* Special route for surprise */}
          <Route path="/special" element={<Surprise />} />

          {/* Other test routes */}
          {/* <Route path="/test" element={<Test />} /> */}
          {/* <Route path="/test1" element={<Test1 />} /> */}
          {/* <Route path="/candletest" element={<TouchChange />} /> */}
          {/* <Route path="/ctest" element={<Ctest />} /> */}

          {/* Default route in case of incorrect URL */}
          <Route path="*" element={<h2 className="text-center">404 - Page Not Found</h2>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
