import { createContext, useState } from "react";
import AllParts from "./parts/AllParts";


const APidatas = createContext()
const showDAts = createContext();
const App = () => {

  const [orderdata, setoderdata] = useState();






  return (<>
    <APidatas.Provider value={setoderdata} >
      <showDAts.Provider value={orderdata}>
        <AllParts />
      </showDAts.Provider>
    </APidatas.Provider>
  </>)
}



export default App;
export { APidatas , showDAts };
