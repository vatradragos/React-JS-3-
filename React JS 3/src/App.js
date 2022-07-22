import "./App.css";
import { useEffect } from "react";
import { Routes, Route } from 'react-router-dom';
import ResponsiveAppBar from "./components/navbar/Navbar";
import Home from "./components/pages/Home";
import Life from "./components/pages/Life";
import Love from "./components/pages/Love";
import Work from "./components/pages/Work";
import Social from "./components/pages/Social";
import SignIn from "./components/pages/Signin";
import Footer from "./components/footer";


function App() {
  useEffect(() => {
    document.title = "React Store - Created and built by Dragoș Vatră";
  }, []);
  return (
    <>
      <ResponsiveAppBar />
      <Routes>
        <Route exact path="/" element={<SignIn />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Life" element={<Life />} />
        <Route path="/Love" element={<Love />} />
        <Route path="/Work" element={<Work />} />
        <Route path="/Social" element={<Social />} />
        
      </Routes>
      <Footer />
    </>
  );
}

export default App;