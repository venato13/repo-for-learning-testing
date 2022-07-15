import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import MainLayout from "./components/Layout/MainLayout";

function App() {
  return (
    <div className="App">
        <Routes>
            <Route path='/' element={<MainLayout />} >
                <Route index element={<Home />} />
                <Route path='about' element={<About />} />
                <Route path='*' element={<NotFound />} />
            </Route>
        </Routes>
    </div>
  );
}

export default App;
