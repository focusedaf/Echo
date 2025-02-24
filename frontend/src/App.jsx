import { useState } from "react";
import {SplashScreen} from "./Components/index";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Profile from "./Pages/Profile";
import About from "./Pages/About";
import ProgressTracker from "./Pages/ProgressTracker";
import Predict from "./Pages/Predict";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="w-full">
      {/* <>
        <SplashScreen />
      </> */}
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/tracker" element={<ProgressTracker />}></Route>
        <Route path="/predict" element={<Predict />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
      </Routes>
    </div>
  );
}

export default App;
