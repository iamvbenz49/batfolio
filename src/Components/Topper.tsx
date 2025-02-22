import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Topper: React.FC = () => {
  return (
    <motion.nav 
      className="w-[95%] py-4 px-6 bg-gradient-to-r from-[#6A11CB] to-[#2575FC] rounded-xl 
                flex items-center justify-center gap-12 mt-6 mx-auto shadow-lg"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <NavItem to="/" label="Literally Me" />
      <NavItem to="/coding" label="Coding & Stuff" />
      <NavItem to="/arc" label="Bruce Wayne Arc" />
    </motion.nav>
  );
};

interface NavItemProps {
  to: string;
  label: string;
}

const NavItem: React.FC<NavItemProps> = ({ to, label }) => (
  <motion.div 
    whileHover={{ scale: 1.1, textShadow: "0px 0px 10px rgba(255,255,255,0.8)" }}
    whileTap={{ scale: 0.95 }}
    className="relative group cursor-pointer transition-all duration-300"
  >
    <Link to={to} className="text-white font-semibold text-lg tracking-wide uppercase transition duration-300">
      {label}
    </Link>
    {/* Animated Hover Underline */}
    <motion.div 
      className="absolute left-0 bottom-0 w-0 h-[2px] bg-white rounded-full transition-all duration-300 group-hover:w-full"
    />
  </motion.div>
);

export default Topper;
