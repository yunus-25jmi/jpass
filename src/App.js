import './App.css';
import Landing from "./components/Landing";
import Home from "./components/home/Home";
import {BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
  // const loggedIn = useSelector(state => state.isLoggedIn)

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/' element={<Landing />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
