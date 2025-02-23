import { JSX, useContext, useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaCode, FaDatabase, FaLink, FaTerminal, FaProjectDiagram, FaUser, FaEnvelope, FaDumbbell, FaSpa, FaCalculator, FaBlog, FaFire, FaMask } from "react-icons/fa";
import { GiGrain } from "react-icons/gi";
import { SiGo, SiJavascript, SiPython } from "react-icons/si";
import { ModeContext } from "../App";

// Define types for profiles and projects
interface Profile {
  name: string;
  description: string;
  icon: JSX.Element;
  link: string;
}

interface Project {
  name: string;
  description: string;
  icon: JSX.Element;
  link: string;
  techStack: string[];  // Only defined in the Project type
}

const profiles: Profile[] = [
  {
    name: "GitHub",
    description: "I push all of my code here!",
    icon: <FaGithub className="text-4xl text-white" />,
    link: "https://github.com/iamvbenz49",
  },
  {
    name: "LeetCode",
    description: "Solved 500+ questions with max rating 1667",
    icon: <FaCode className="text-4xl text-white" />,
    link: "https://leetcode.com/iamvbenz1",
  },
  {
    name: "Hackerrank",
    description: "Got few badges here!",
    icon: <FaCode className="text-4xl text-white" />,
    link: "https://www.hackerrank.com/profile/benzwrites",
  },
  {
    name: "Geeks for Geeks",
    description: "Solved 150+ problems here!",
    icon: <FaTerminal className="text-4xl text-white" />,
    link: "https://www.geeksforgeeks.org/user/benzwrites/",
  },
  {
    name: "Skillrack",
    description: "Solved 2900+ problems",
    icon: <FaTerminal className="text-4xl text-white" />,
    link: "https://www.skillrack.com/faces/resume.xhtml?id=407388&key=5482a6579c5cbc3c8dd528d2f790cc317696c70e",
  },
  {
    name: "Codeforces",
    description: "Solved 27 questions with rating of 993",
    icon: <FaTerminal className="text-4xl text-white" />,
    link: "https://codeforces.com/profile/iamvbenz1",
  },
];

const projects: Project[] = [
  {
    name: "Date.ai",
    description: "Work in Progress",
    icon: <FaEnvelope className="text-4xl text-white" />,
    link: "https://github.com/iamvbenz49/date-dot-ai",
    techStack: [],
  },
  {
    name: "Batfolio",
    description: "Bruh, You're lookin at it right now",
    icon: <FaMask className="text-4xl text-white" />,
    link: "https://github.com/iamvbenz49/batfolio",
    techStack: ["ReactJS", "Typescript"],
  },
  {
    name: "Bat Skool",
    description: "A Course selling Application",
    icon: <SiGo className="text-4xl text-white" />,
    link: "https://youtu.be/dQw4w9WgXcQ?si=OPjNVRGuNboHesM5",
    techStack: ["ReactJS", "Golang"],
  },
  {
    name: "Farm Network",
    description: "Web + ML based application that helps farmers to connect to market",
    icon: <GiGrain className="text-4xl text-white" />,
    link: "https://github.com/iamvbenz49/farm-network",
    techStack: ["React", "Node.js", "MongoDB", "Flask", "Machine Learning", "Tailwind CSS"],
  },
  {
    name: "GPS Coordinate Prediction",
    description: "A Deep Learning model for predicting GPS coordinates using Long Short Term Memory.",
    icon: <FaDatabase className="text-4xl text-white" />,
    link: "https://github.com/iamvbenz49/gps-coordinate-prediction",
    techStack: ["PyTorch", "LSTM"],
  },
  {
    name: "Tylerise",
    description: "A self-improvement tracker that helps users build good habits.",
    icon: <FaSpa className="text-4xl text-white" />,
    link: "https://github.com/iamvbenz49/Tylerize-self-improvement",
    techStack: ["React", "Node.js", "MongoDB", "Express"],
  },
  {
    name: "Optimiser",
    description: "An application to demonstrate optimal storage and retrieval in large sparse matrices",
    icon: <FaDatabase className="text-4xl text-white" />,
    link: "https://github.com/iamvbenz49/m-n-matrix-optimiser",
    techStack: ["React", "Node.js", "MongoDB", "Express"],
  },
  {
    name: "Workout Buddy",
    description: "Simple Workout tracking application from MERN course",
    icon: <FaDumbbell className="text-4xl text-white" />,
    link: "https://github.com/iamvbenz49/workout-buddy-mern/",
    techStack: ["React", "Node.js", "MongoDB", "Express"],
  },
  {
    name: "Github Account Finder",
    description: "An simple application that find profile and follower of an user",
    icon: <FaGithub className="text-4xl text-white" />,
    link: "https://github.com/iamvbenz49/github-account-finder-react",
    techStack: ["React"],
  },
  {
    name: "Web Crawler",
    description: "A Terminal based application that gets all the hyper links from a website recursively",
    icon: <SiJavascript className="text-4xl text-white" />,
    link: "https://github.com/iamvbenz49/webcrawlerhttp",
    techStack: ["Javascript"],
  },
  {
    name: "Flames Calculator",
    description: "No explanation needed!",
    icon: <FaCalculator className="text-4xl text-white" />,
    link: "https://github.com/iamvbenz49/flames-calculator",
    techStack: ["HTML", "CSS", "Javascript"],
  },
  {
    name: "Blogging Site",
    description: "An Simple blogging website",
    icon: <FaBlog className="text-4xl text-white" />,
    link: "https://github.com/iamvbenz49/react-blog-website",
    techStack: ["ReactJS"],
  },
  {
    name: "TinDog",
    description: "Tinder for Dogs",
    icon: <FaFire className="text-4xl text-white" />,
    link: "https://github.com/iamvbenz49/Tindog",
    techStack: ["HTML", "CSS"],
  },
  {
    name: "Math Quiz",
    description: "A simple pygame based application for solving Maths",
    icon: <SiPython className="text-4xl text-white" />,
    link: "https://github.com/iamvbenz49/BENZ-MATH-QUIZ",
    techStack: ["Pygame"],
  },
];

const Experience: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"projects" | "profiles">("projects");
  const context = useContext(ModeContext);
    
  if (!context) {
    throw new Error("BruceWayneArc must be used within a ModeContext.Provider");
  }
  
  const { color } = context;
  return (
    <motion.div
      className={`w-[95%] h-[85vh] p-5 rounded-xl flex flex-col items-center justify-center gap-6 mt-4 mx-auto shadow-xl 
        ${color === "blue" ? "bg-gradient-to-r from-[#6A11CB] to-[#2575FC]" : "bg-gradient-to-r from-[#FF0080] to-[#FF66B2]"}`}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{scale:1.02}}
      transition={{ duration: 0.5 }}
    >

      <div className="flex gap-6 bg-white/10 p-2 rounded-lg">
        <button
          className={`px-4 py-2 rounded-md flex items-center gap-2 
            ${activeTab === "projects" ? "bg-white text-black" : "text-white"}`}
          onClick={() => setActiveTab("projects")}
        >
          <FaProjectDiagram /> Projects
        </button>
        <button
          className={`px-4 py-2 rounded-md flex items-center gap-2 
            ${activeTab === "profiles" ? "bg-white text-black" : "text-white"}`}
          onClick={() => setActiveTab("profiles")}
        >
          <FaUser /> Profiles
        </button>
      </div>

      <motion.div
        key={activeTab}
        className="w- max-w-3xl bg-white/10 backdrop-blur-md border border-white/20 shadow-lg rounded-lg p-6 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-transparent"
        initial={{ opacity: 0, x: activeTab === "projects" ? -100 : 100 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: activeTab === "profiles" ? 100 : -100 }}
        transition={{ duration: 0.5 }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {(activeTab === "projects" ? projects : profiles).map((item, index) => (
            <motion.div
            key={index}
            className="relative flex flex-col items-center bg-white/10 backdrop-blur-md border border-white/20 shadow-lg rounded-lg p-5 transition-transform duration-300 hover:scale-105 hover:border-purple-400 mb-4"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            whileHover={{ scale: 1 }}
          >
              {item.icon}
              <h3 className="text-xl text-white font-semibold">{item.name}</h3>
              <p className="text-gray-200">{item.description}</p>

              {/* Display Tech Stack if it's a Project */}
              {activeTab === "projects" && (item as Project).techStack && (
                <div className="flex flex-wrap gap-2 mt-2">
                  {(item as Project).techStack.map((tech, i) => (
                    <span key={i} className="bg-white/20 text-white px-2 py-1 rounded-md text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              )}

              <a href={item.link} target="_blank" className="text-white hover:text-gray-300 flex items-center gap-1 mt-2">
                Visit <FaLink />
              </a>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Experience;
