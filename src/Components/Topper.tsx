import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaUser, FaCode, FaMask, FaPaintBrush } from "react-icons/fa"; 
import { JSX, useContext } from "react";
import { ModeContext } from "../App";
import { Theme } from "../enums/theme"; // Import Theme Enum

const Topper: React.FC = () => {
  const context = useContext(ModeContext);

  if (!context) {
    throw new Error("Topper must be used within a ModeContext.Provider");
  }

  const { color, setColor } = context;

  return (
    <motion.nav 
      className={`w-[95%] py-4 px-6 rounded-xl flex items-center justify-center gap-12 mt-6 mx-auto shadow-lg transition-all duration-500
      ${color === Theme.BLUE ? "bg-gradient-to-r from-[#6A11CB] to-[#2575FC]"
          : "bg-gradient-to-r from-gray-900 to-gray-800"}`}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale:1.02 }}
      transition={{ duration: 0.5 }}
    >
      <NavItem to="/" label="About" icon={<FaUser />} />
      <NavItem to="/coding" label="Work" icon={<FaCode />} />
      <NavItem to="/arc" label="Education" icon={<FaMask />} />
      
      {/* Mode Toggle Button */}
      <motion.button 
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setColor(color === Theme.BLUE ? Theme.PINK : Theme.BLUE)}
        className="flex items-center gap-2 px-4 py-2 bg-white text-black rounded-lg shadow-md cursor-pointer transition-all duration-300"
      >
        <FaPaintBrush className="text-xl" />
        <span className="hidden md:inline">{color === Theme.BLUE ? "Dark Mode" : "Light Mode"}</span>
      </motion.button>
    </motion.nav>
  );
};

interface NavItemProps {
  to: string;
  label: string;
  icon: JSX.Element;
}

const NavItem: React.FC<NavItemProps> = ({ to, label, icon }) => (
  <motion.div 
    whileHover={{ scale: 1.1, textShadow: "0px 0px 10px rgba(255,255,255,0.8)" }}
    whileTap={{ scale: 0.95 }}
    className="relative group cursor-pointer transition-all duration-300"
  >
    <Link to={to} className="text-white font-semibold text-lg tracking-wide uppercase transition duration-300 flex items-center gap-2">
      <span className="text-2xl">{icon}</span>
      <span className="hidden md:inline">{label}</span> 
    </Link>
    <motion.div 
      className="absolute left-0 bottom-0 w-0 h-[2px] bg-white rounded-full transition-all duration-300 group-hover:w-full"
    />
  </motion.div>
);

export default Topper;
