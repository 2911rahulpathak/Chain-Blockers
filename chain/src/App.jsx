import { useCallback } from "react";
import Particle from "./components/particles";
import { loadFull } from "tsparticles";
import Docterlogin from "./components/Docterlogin"
import BackgroundContainer from "./components/particles"
import Userlogin from "./components/UserLogin";
import Insurancelogin from "./components/InsuranceCo"


function App() {
    return (
      <> 
      <Particle/>
      <div>
        <Docterlogin />    
        <Userlogin />
        <Insurancelogin/>
      </div>
      </>
    )
    
};

export default App