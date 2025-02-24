import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaXTwitter, FaInstagram, FaYoutube } from "react-icons/fa6";
import ProfileImage from "../assets/batman.jpg";
import { useContext } from "react";
import { ModeContext } from "../App";
import { Theme } from "../enums/theme";

const LiterallyMe: React.FC = () => {
  const context = useContext(ModeContext); 
  
  if (!context) {
    throw new Error("ModeContext must be used within a ModeContext.Provider");
  }
  const {color} = context;

  return (
    <motion.div 
      className={`w-[95%] h-[85vh] p-8 rounded-2xl flex flex-col sm:flex-row items-center justify-center gap-14 
      mt-6 mx-auto shadow-2xl backdrop-blur-xl bg-opacity-75 border border-white/20 
      transition-all duration-500 
      ${color === Theme.BLUE ? "bg-gradient-to-r from-[#6A11CB] to-[#2575FC]" : "bg-gradient-to-r from-[#FF0080] to-[#FF66B2]"}`}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{scale:1.02}}
      transition={{ duration: 0.5 }}
    >

      <motion.img 
        src={ProfileImage} 
        alt="Profile" 
        className="w-40 h-40 sm:w-48 sm:h-48 rounded-full border-4 border-white shadow-xl object-cover" 
        whileHover={{ scale: 1.08 }}
      />
      

      <div className="text-center sm:text-left text-white max-w-md">
        <h1 className="text-5xl font-bold text-white drop-shadow-lg tracking-wide">
          Sham Vijay V
        </h1>
        <p className="mt-2 text-xl font-medium text-gray-300 drop-shadow-md">
          Chasing the term Engineering
        </p>

        {/* Quote Section */}
        <motion.p 
          className="mt-5 italic text-lg text-gray-200 font-semibold border-l-4 pl-4 border-white"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          "You can Just Do Things"
        </motion.p>

        {/* Social Icons */}
        <div className="flex justify-center sm:justify-start gap-6 mt-5">
          {[{
            link: "https://github.com/iamvbenz49", icon: FaGithub },
            { link: "https://www.linkedin.com/in/sham-vijay/", icon: FaLinkedin },
            { link: "https://x.com/batmanwhocodes", icon: FaXTwitter },
            { link: "https://youtu.be/dQw4w9WgXcQ?si=23JA489wb2mbebRY", icon: FaInstagram },
            { link: "https://www.youtube.com/@vijaybenz9741", icon: FaYoutube }]
            .map(({ link, icon: Icon }, index) => (
              <motion.a 
                key={index}
                href={link} 
                target="_blank" 
                className="text-gray-300 hover:text-white transition duration-300"
                whileHover={{ scale: 1.2 }}
              >
                <Icon size={32} />
              </motion.a>
          ))}
        </div>

        {/* Contact Button */}
        <motion.a 
          href="mailto:iamvbenz1@example.com"
          className="mt-6 inline-block px-6 py-3 bg-white text-indigo-600 font-bold rounded-lg shadow-lg
                     hover:bg-indigo-500 hover:text-white transition duration-300"
          whileHover={{ scale: 1.07 }}
        >
          Hire Me
        </motion.a>
      </div>
    </motion.div>
  );
};

export default LiterallyMe;
