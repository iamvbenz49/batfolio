import LiterallyMe from "./Components/LiterallyMe";
import Experience from "./Components/Experience";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Topper from "./Components/Topper";
import BruceWayneArc from "./Components/BruceWayneArc";
import { createContext, useState, } from "react";
import { Theme } from "./enums/theme";


interface ModeContextType {
  color: Theme;
  setColor: (color: Theme) => void;
}


export const ModeContext = createContext<ModeContextType | undefined>(undefined);

export default function Portfolio() {
  const [color, setColor] = useState<Theme>(Theme.BLUE);

  return (
    <ModeContext.Provider value={{ color, setColor }}>
      <Router>
        <Topper />
        <Routes>
          <Route path="/" element={<LiterallyMe />} />
          <Route path="/coding" element={<Experience />} />
          <Route path="/arc" element={<BruceWayneArc />} />
        </Routes>
      </Router>
    </ModeContext.Provider>
  );
}
