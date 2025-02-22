import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Topper: React.FC = () => {
  return (
    <motion.div 
      className="w-[95%] h-1/5 p-6 bg-gradient-to-r from-[#6A11CB] to-[#2575FC] rounded-xl flex items-center justify-center gap-8 mt-4 mx-auto shadow-lg"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.05, boxShadow: "0px 10px 25px rgba(0, 0, 0, 0.3)" }}
    >
      <NavItem to="/" label="Literally Me" />
      <NavItem to="/coding" label="Coding & Stuff" />
      <NavItem to="/arc" label="Bruce Wayne Arc" />
      <NavItem to="/connect" label="Let's Connect" />
    </motion.div>
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
    className="cursor-pointer transition-all duration-300"
  >
    <Link to={to} className="text-white font-semibold text-lg tracking-wide uppercase hover:text-gray-300 transition duration-300">
      {label}
    </Link>
  </motion.div>
);

export default Topper;
