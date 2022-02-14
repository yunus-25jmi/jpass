import './App.css';
import Landing from "./components/Landing";
import Home from "./components/Home";
import {BrowserRouter, Routes, Route} from "react-router-dom";


function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Landing />}/>
        <Route path='/Home' element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
