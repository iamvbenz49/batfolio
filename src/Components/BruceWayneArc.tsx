import { useContext, useState } from "react";
import { motion } from "framer-motion";
import { FaGraduationCap, FaChalkboardTeacher, FaBriefcase } from "react-icons/fa";
import { ModeContext } from "../App";
// Type Definitions
type Education = {
  id: number;
  institution: string;
  degree: string;
  year: string;
};

type Course = {
  id: number;
  institution: string;
  degree: string;
  year: string;
};

type Experience = {
  id: number;
  company: string;
  role: string;
  year: string;
};

// Data Arrays
const formalEducation: Education[] = [
  { id: 3, institution: "St. Joseph's Institute of Technology, Chennai", degree: "B.Tech in IT - CGPA: 8.35", year: "2022 - 2026" },
  { id: 1, institution: "Sacred Heart Matriculation Higher Secondary School, Kanniyakumari", degree: "Grade 12 - 83%", year: "2021 - 2022" },
  { id: 2, institution: "Sacred Heart Matriculation Higher Secondary School, Kanniyakumari", degree: "Grade 10 - 93%", year: "2019 - 2020" },
];

const courses: Course[] = [
  { id: 1, institution: "Cisco", degree: "Introduction to Networks", year: "2025" },
  { id: 2, institution: "NPTEL", degree: "Database Management Systems", year: "2024" },
  { id: 3, institution: "Udemy", degree: "Web Development Bootcamp", year: "2023" },
  { id: 4, institution: "Udemy", degree: "Machine Learning A2Z", year: "2023" },
  { id: 5, institution: "Coursera", degree: "Machine Learning Specialisation", year: "2023" },
  { id: 6, institution: "Coursera", degree: "Introduction to Calculus", year: "2023" },
  { id: 7, institution: "Coursera", degree: "Introduction to Statistics and Probability", year: "2023" },
  { id: 8, institution: "Coursera", degree: "Introduction to Linear Algebra", year: "2023" },
  { id: 9, institution: "LinkedIn Learning", degree: "Advanced Python", year: "2023" },
];

const experience: Experience[] = [
  { id: 1, company: "Bot2do Technologies", role: "Full Stack Developer Intern", year: "Aug 2024 - Dec 2024" },
  { id: 2, company: "GirlScript Summer of Code", role: "Open Source Contributor", year: "June 2023" },
];


const BruceWayneArc: React.FC = () => {
  const context = useContext(ModeContext);
  
  if (!context) {
    throw new Error("BruceWayneArc must be used within a ModeContext.Provider");
  }

  const { color } = context;
  const [activeTab, setActiveTab] = useState<"education" | "courses" | "experience">("experience");

  const data = activeTab === "education" ? formalEducation : activeTab === "courses" ? courses : experience;
  
  return (
    <motion.div
      className={`w-[95%] h-[85vh] p-5 rounded-xl flex flex-col items-center justify-center gap-6 mt-4 mx-auto shadow-xl 
        ${color === "blue" ? "bg-gradient-to-r from-[#6A11CB] to-[#2575FC]" : "bg-gradient-to-r from-[#FF0080] to-[#FF66B2]"}`}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{scale:1.02}}
      transition={{ duration: 0.5 }}
    >
      {/* Tab Buttons */}
      <div className="flex justify-center gap-4 sm:gap-6 bg-white/10 p-3 rounded-lg">
        {[
          { id: "experience", label: "Experience", icon: <FaBriefcase /> },
          { id: "education", label: "Education", icon: <FaGraduationCap /> },
          { id: "courses", label: "Courses", icon: <FaChalkboardTeacher /> },
        ].map(({ id, label, icon }) => (
          <button
            key={id}
            className={`px-4 sm:px-5 py-2 rounded-md flex items-center gap-2 transition-all duration-300
              ${activeTab === id ? "bg-white text-black shadow-md" : "bg-white/20 text-white hover:bg-white/30"}`}
            onClick={() => setActiveTab(id as "education" | "courses" | "experience")}
          >
            <span className="text-lg">{icon}</span>
            <span className="hidden sm:inline">{label}</span> 
          </button>
        ))}
      </div>

      <motion.div
        key={activeTab}
        className="w-full max-w-3xl bg-white/10 backdrop-blur-md border border-white/20 shadow-lg rounded-lg p-6 
          overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-transparent"
        initial={{ opacity: 0, x: activeTab === "education" ? -100 : 100 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: activeTab === "education" ? 100 : -100 }}
        transition={{ duration: 0.5 }}
      >
        {data.map((item, index) => (
          <motion.div
            key={item.id}
            className="relative flex flex-col items-center text-center bg-white/10 backdrop-blur-md border border-white/20 shadow-lg 
              rounded-lg p-5 transition-transform duration-300 hover:scale-105 hover:border-purple-400 mb-4"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            whileHover={{ scale: 1.03 }}
          >
            <h3 className="text-lg font-semibold text-white">
              {"degree" in item ? item.degree : item.company}
            </h3>
            <p className="text-white/80">
              {"institution" in item ? item.institution : item.role}
            </p>
            <span className="text-sm text-white/60">{item.year}</span>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default BruceWayneArc;
