import LiterallyMe from "./Components/LiterallyMe";
import Experience from "./Components/Experience";
import SocialMedia from "./Components/SocialMedia";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Topper from "./Components/Topper";
import BruceWayneArc from "./Components/BruceWayneArc";




export default function Portfolio() {
  return (
    <Router>
      <Topper />
      <Routes>
        <Route path="/" element={<LiterallyMe />} />
        <Route path="/coding" element={<Experience />} />
        <Route path="/arc" element={<BruceWayneArc />} />
        <Route path="/connect" element={<SocialMedia />} />
      </Routes>
    </Router>
  );
}
