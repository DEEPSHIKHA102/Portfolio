import React from 'react'
import {
  FaJava, FaPython, FaPhp, FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaGitAlt, FaGithub, FaWindows, FaLinux, FaApple,
  FaBootstrap, FaLaravel, FaJsSquare
} from 'react-icons/fa'
import { SiCplusplus, SiMongodb, SiPostgresql, SiExpress, SiTailwindcss, SiMysql } from 'react-icons/si'
import { MdOutlineLaptopChromebook } from 'react-icons/md'
import { BsDiagram3, BsPersonGear, BsPersonWorkspace } from 'react-icons/bs'

function Skills() {
  return (
    <div className='px-10 py-20 max-w-7xl mx-auto' id="skills_section">
      <div className='mb-16 text-center'>
        <h2 className='text-4xl font-bold text-gray-800 mb-4'>Technical Skills</h2>
        <div className='w-100 h-1 bg-purple-800 mx-auto'></div>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
        
        {/* Programming Languages */}
        <SkillCard title="Programming Languages" icon={<BsDiagram3 />} skills={[
          { name: 'C++ (proficient)', icon: <SiCplusplus /> },
          { name: 'Java', icon: <FaJava /> },
          { name: 'JavaScript', icon: <FaJsSquare /> },
          { name: 'PHP', icon: <FaPhp /> },
          { name: 'HTML', icon: <FaHtml5 /> },
          { name: 'CSS', icon: <FaCss3Alt /> }
        ]} />

        {/* Frameworks & Databases */}
        <SkillCard title="Frameworks & Databases" icon={<MdOutlineLaptopChromebook />} skills={[
          { name: 'React', icon: <FaReact /> },
          { name: 'MongoDB', icon: <SiMongodb /> },
          { name: 'PostgreSQL', icon: <SiPostgresql /> },
          { name: 'Node.js', icon: <FaNodeJs /> },
          { name: 'Express', icon: <SiExpress /> },
          { name: 'Laravel', icon: <FaLaravel /> },
          { name: 'Bootstrap', icon: <FaBootstrap /> }
        ]} />

        {/* Core Subjects */}
        <SkillCard title="Core Subjects" icon={<BsPersonWorkspace />} skills={[
          { name: 'Operating Systems', icon: <FaWindows /> },
          { name: 'Computer Networking', icon: <BsDiagram3 /> },
          { name: 'DBMS', icon: <SiMysql /> },
          { name: 'Automata Theory', icon: <BsDiagram3 /> }
        ]} />

        {/* Version Control */}
        <SkillCard title="Version Control" icon={<FaGitAlt />} skills={[
          { name: 'Git', icon: <FaGitAlt /> },
          { name: 'GitHub', icon: <FaGithub /> }
        ]} />

        {/* Operating Systems */}
        <SkillCard title="Operating Systems" icon={<MdOutlineLaptopChromebook />} skills={[
          { name: 'Windows', icon: <FaWindows /> },
          { name: 'Linux', icon: <FaLinux /> }
        ]} />

        {/* Soft Skills */}
        <SkillCard title="Soft Skills" icon={<BsPersonGear />} skills={[
          { name: 'Problem Solving', icon: <BsPersonGear /> },
          { name: 'Time Management', icon: <BsPersonGear /> },
          { name: 'Communication', icon: <BsPersonGear /> },
          { name: 'Adaptability', icon: <BsPersonGear /> }
        ]} />

      </div>
    </div>
  )
}

function SkillCard({ title, icon, skills }) {
  return (
    <div className='bg-white p-6 rounded-xl shadow-md border border-gray-100'>
      <h3 className='text-xl font-semibold text-black-700 mb-4 flex items-center'>
        <span className='mr-2 text-yellow-700'>{icon}</span> {title}
      </h3>
      <div className='flex flex-wrap gap-3'>
        {skills.map((skill, index) => (
          <span key={index} className='bg-blue-100 px-4 py-2 rounded-full text-gray-800 flex items-center gap-2'>
            <span className='text-red-700'>{skill.icon}</span> {skill.name}
          </span>
        ))}
      </div>
    </div>
  )
}

export default Skills
