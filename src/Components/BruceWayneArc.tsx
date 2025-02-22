import { useState } from "react";
import { motion } from "framer-motion";
import { FaGraduationCap, FaChalkboardTeacher, FaBriefcase } from "react-icons/fa";

const formalEducation = [
  { id: 1, institution: "Sacred Heart Matriculation Higher Secondary School", degree: "Grade 12 - 83%", year: "2018 - 2020" },
  { id: 2, institution: "Sacred Heart Matriculation Higher Secondary School", degree: "Grade 10 - 93%", year: "2016 - 2018" },
  { id: 3, institution: "St. Joseph's Institute of Technology", degree: "B.Tech in IT - CGPA: 8.35", year: "2021 - 2026" },
];

const courses = [
  { id: 4, institution: "Harvard University", degree: "Data Science Certification", year: "2023" },
  { id: 5, institution: "MIT OpenCourseWare", degree: "Machine Learning Specialization", year: "2022" },
  { id: 6, institution: "Stanford University", degree: "AI & Deep Learning Course", year: "2024" },
];

const experience = [
  { id: 7, company: "OpenAI", role: "Software Engineer Intern", year: "2024" },
  { id: 8, company: "Google", role: "Machine Learning Research Intern", year: "2023" },
  { id: 9, company: "Microsoft", role: "AI Developer", year: "2022" },
];

const BruceWayneArc: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"education" | "courses" | "experience">("education");

  return (
    <motion.div 
      className="w-[95%] h-[85vh] p-5 bg-gradient-to-r from-[#6A11CB] to-[#2575FC]
       rounded-xl flex flex-col items-center justify-center gap-6 mt-4 mx-auto shadow-xl"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Tab Buttons */}
      <div className="flex gap-6 bg-white/10 p-2 rounded-lg">
        <button 
          className={`px-4 py-2 rounded-md flex items-center gap-2 
            ${activeTab === "education" ? "bg-white text-black shadow-md" : "bg-white/20 text-white"}`}
          onClick={() => setActiveTab("education")}
        >
          <FaGraduationCap /> Formal Education
        </button>
        <button 
          className={`px-4 py-2 rounded-md flex items-center gap-2 
            ${activeTab === "courses" ? "bg-white text-black shadow-md" : "bg-white/20 text-white"}`}
          onClick={() => setActiveTab("courses")}
        >
          <FaChalkboardTeacher /> Courses & Certifications
        </button>
        <button 
          className={`px-4 py-2 rounded-md flex items-center gap-2 
            ${activeTab === "experience" ? "bg-white text-black shadow-md" : "bg-white/20 text-white"}`}
          onClick={() => setActiveTab("experience")}
        >
          <FaBriefcase /> Experience
        </button>
      </div>

      {/* Content Section */}
      <motion.div
        key={activeTab}
        className="w-full max-w-3xl bg-white/10 backdrop-blur-md border border-white/20 shadow-lg rounded-lg p-6 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-transparent"
        initial={{ opacity: 0, x: activeTab === "education" ? -100 : 100 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: activeTab === "education" ? 100 : -100 }}
        transition={{ duration: 0.5 }}
      >
        {(activeTab === "education" ? formalEducation : activeTab === "courses" ? courses : experience).map((item, index) => (
          <motion.div
            key={item.id}
            className="relative flex flex-col items-center bg-white/10 backdrop-blur-md border border-white/20 shadow-lg rounded-lg p-5 transition-transform duration-300 hover:scale-105 hover:border-purple-400 mb-4"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            whileHover={{ scale: 1.1 }}
          >
            <motion.div 
              className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gradient-to-br from-purple-500 to-blue-400 rounded-full border-4 border-white shadow-lg z-10"
              whileHover={{ scale: 1.3 }}
              animate={{ y: [0, -5, 0], transition: { repeat: Infinity, duration: 1.5 } }}
            ></motion.div>
            {/* <h3 className="text-lg font-semibold text-white text-center">{item.institution || item.company}</h3> */}
            {/* <p className="text-white/80 text-center">{item.degree || item.role}</p> */}
            <span className="text-sm text-white/60">{item.year}</span>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default BruceWayneArc;
