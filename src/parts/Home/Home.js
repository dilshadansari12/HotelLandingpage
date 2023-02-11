import { createContext } from "react";
import Header from "./Header"
import FreshFoode from "./FreshFode";
import ChefsSelection from "./ChefsSeection";
import ChoseYourEn from "./ChoseYourEngri";
import Footer from "./Footer";
import Offer from "./Offer";

const show = createContext()

function Home() {
  return (
    <div className="App">
      <show.Provider value={1}>
        <Header />
        <FreshFoode />
        <ChefsSelection />
        <ChoseYourEn />
        <Offer />
        <Footer />

      </show.Provider>
    </div>
  );
}

export default Home;