import "./App.css";
import Navbar from "./components/Nav/Navbar";
import PostNav from "./components/Nav/PostNav";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Slider from "./components/slider/Slider";
import data from "./data/data.json";
import Offers from "./components/slider/Offers";
import Line from "./components/slider/Line";
import StarProduct from "./components/Starproduct";
import HotAccessoriesMenu from "./components/HotAccessories/HotAccessoriesMenu";
import HotAccessories from "./components/HotAccessories";
// import Line from './components/Line';
const App = () => {
  return (
    <>
      <Navbar />
      <Router>
        {/* <Routes>
          <Route path="/" element={<PostNav />} />
        </Routes> */}
        <Slider start={data.banner.start} />
        <Offers offer={data.offer} />
        <Line text="STAR PRODUCTS" />
        <StarProduct starProduct={data.starProduct} />
        <Line text="HOT ACCESSORIES" />
        <HotAccessoriesMenu />
        <Routes>
          <Route
            path="/music"
            element={
              <HotAccessories
                music={data.hotAccessories.music}
                musicCover={data.hotAccessoriesCover.music}
              />
            }
          />
        </Routes>
      </Router>
    </>
  );
};

export default App;
