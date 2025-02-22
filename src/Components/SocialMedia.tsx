import { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaCode, FaTerminal, FaLink, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

const profiles = [
  {
    name: "GitHub",
    description: "Explore my open-source contributions and project repositories.",
    icon: <FaGithub className="text-4xl text-white" />, 
    link: "https://github.com/your-profile",
  },
  {
    name: "LeetCode",
    description: "Check out my DSA solutions and competitive coding journey.",
    icon: <FaCode className="text-4xl text-white" />, 
    link: "https://leetcode.com/your-profile",
  },
  {
    name: "CodeForces",
    description: "See my performance in CodeForces contests and problem-solving.",
    icon: <FaTerminal className="text-4xl text-white" />, 
    link: "https://codeforces.com/profile/your-profile",
  },
  {
    name: "Twitter",
    description: "Follow me for updates, coding tips, and tech discussions.",
    icon: <FaTwitter className="text-4xl text-white" />, 
    link: "https://twitter.com/your-profile",
  },
  {
    name: "LinkedIn",
    description: "Connect with me professionally and explore my experiences.",
    icon: <FaLinkedin className="text-4xl text-white" />, 
    link: "https://linkedin.com/in/your-profile",
  },
  {
    name: "Instagram",
    description: "Check out my personal moments, projects, and experiences.",
    icon: <FaInstagram className="text-4xl text-white" />, 
    link: "https://instagram.com/your-profile",
  }
];

const SocialMedia: React.FC = () => {
  return (
    <motion.div 
      className="w-[95%] h-[85vh] p-5 bg-gradient-to-r from-[#6A11CB] to-[#2575FC]
       rounded-xl flex flex-col items-center justify-center gap-6 mt-4 mx-auto shadow-xl"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-white text-3xl font-bold">My Social Media & Profiles</h2>
      <div className="w-full max-w-5xl h-[60vh] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-600">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {profiles.map((item, index) => (
            <motion.div
              key={index}
              className="bg-white/10 backdrop-blur-md p-5 rounded-xl shadow-md hover:shadow-xl 
              transition-all text-white flex flex-col gap-3 border border-white/20"
              whileHover={{ scale: 1.05 }}
            >
              {item.icon}
              <h3 className="text-xl font-semibold">{item.name}</h3>
              <p className="text-gray-200">{item.description}</p>
              <a href={item.link} target="_blank" className="text-white hover:text-gray-300 flex items-center gap-1">
                Visit <FaLink />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default SocialMedia;
