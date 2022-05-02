import './App.css';
import Navbar from './components/Nav/Navbar';
import PostNav from './components/Nav/PostNav';
import { BrowserRouter as Router, Route, Routes, } from 'react-router-dom';
import  Slider from './components/slider/Slider';
import data from './data/data.json'
import Offers from './components/slider/Offers';
// import Line from './components/Line';


 function App() {
  return (
    <>
      <Navbar/>
      <Router>
        <Routes>
          <Route path='/' element={<PostNav/>} />
        </Routes>
        <Slider start={data.banner.start} />
        <Offers offer={data.offer} />
      </Router>
    </>
  );
}

export default App;