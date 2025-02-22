import { motion } from "framer-motion";
import ProfileImage from "../assets/ana_de_armas.jpg";

const LiterallyMe: React.FC = () => {
  return (
    <motion.div 
      className="w-[95%] h-[85vh] p-5 bg-gradient-to-r from-[#6A11CB] to-[#2575FC]
       rounded-xl flex items-center justify-center gap-6 mt-4 mx-auto shadow-lg"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.02, boxShadow: "0px 10px 25px rgba(0, 0, 0, 0.3)" }}
    >
      {/* Profile Image */}
      <img 
        src={ProfileImage} 
        alt="Profile" 
        className="w-36 h-36 sm:w-44 sm:h-44 rounded-full border-4 border-white shadow-lg" 
      />
      
      {/* Name & Title */}
      <div className="text-left text-white">
        <h1 className="mt-4 text-4xl font-extrabold text-white drop-shadow-lg tracking-wide">
          Sham Vijay V
        </h1>
        <p className="mt-2 text-lg font-medium text-gray-200 drop-shadow-md">
          Chasing the term Engineering
        </p>
      </div>
    </motion.div>
  );
};

export default LiterallyMe;
