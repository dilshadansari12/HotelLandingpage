import Home from "./Home/Home";
import { Routes, Route, Router, Link } from "react-router-dom";
import GoogleMap from "./Gmap/GoogleMap";
import About from "./About/About";
import OnlineOrder from "./Menu/OnlineOrder";
import FinalOrderholder from "./Order/FinalOrderholder";


const AllParts = () => {
    return (<>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/location" element={<GoogleMap />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/order" element={<OnlineOrder />} />
          <Route exact path="/FinalOrderholder" element={<FinalOrderholder />} />
        </Routes>
      </>)
}

export default AllParts;