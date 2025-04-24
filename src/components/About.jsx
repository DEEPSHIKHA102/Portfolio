import React from 'react';
import photo from '../assets/my_photo.jpeg';
import { FaGithub } from "react-icons/fa";
import { TbBrandLinkedinFilled } from "react-icons/tb";

function About() {
  const handleScroll = (e, sectionId) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className='px-6 sm:px-10 py-20 max-w-7xl mx-auto'>
      <div className='mb-16 text-center'>
        <h2 className='text-3xl text-gray-800 mb-3 tracking-tight font-semibold' >About Me</h2>
        <div className='w-50 h-1 bg-purple-600 mx-auto'></div>
      </div>

      {/* Swapped layout on large screens */}
      <div className='flex flex-col lg:flex-row-reverse items-center justify-between gap-12'>
        
        {/* Introduction Text */}
        <div className='w-full lg:w-1/2 space-y-8'>
          <div className='space-y-4'>
            <p className='text-[16px] text-slate-700 tracking-tight leading-relaxed'>
              Hello, I'm <span className='underline font-medium'>Deepshikha Pal</span>, a Computer Science student at Lovely Professional University specializing in:
            </p>
            <p className='text-[16px] text-slate-700 tracking-tight leading-relaxed'>
              <span className='font-semibold'>Full-Stack Development</span>
            </p>
            <p className='text-[16px] text-slate-700 tracking-tight leading-relaxed'>
              I’m passionate about leveraging technology to design and develop scalable solutions that address real-world challenges. With a focus on creating impactful and user-friendly applications, I enjoy turning complex problems into efficient, innovative systems. I strive to expand my knowledge and apply it to projects that create real value for users and communities alike.
            </p>
          </div>

          {/* Buttons */}
          <div className='flex gap-4'>
            <button className='bg-gray-800 text-white px-5 py-2 rounded-md text-sm hover:bg-gray-700 transition'>
              <a href="#resume_section" onClick={(e) => handleScroll(e, 'resume_section')}>Resume</a>
            </button>
            <button className='border border-gray-800 px-5 py-2 rounded-md text-sm hover:bg-gray-100 transition'>
              <a href="#projects_section" onClick={(e) => handleScroll(e, 'projects_section')}>Projects</a>
            </button>
          </div>
        </div>

        {/* Profile Image */}
        <div className='w-full lg:w-1/2 flex flex-col items-center gap-6 p-6'>
          <img 
            className='w-80 h-80 object-cover rounded-full border-4 border-gray-200 shadow-sm' 
            src={photo} 
            alt="Deepshikha Pal" 
          />
          <div className='text-center space-y-1'>
            <h1 className='text-xl text-green-700'>Deepshikha Pal</h1>
            <p className='text-sm text-gray-600'>Fullstack Developer</p>
          </div>
          <div className='flex gap-5 text-2xl text-gray-600'>
            <a target='_blank' rel="noreferrer" href="https://github.com/DEEPSHIKHA102" className='hover:text-black transition'>
              <FaGithub />
            </a>
            <a target='_blank' rel="noreferrer" href="https://www.linkedin.com/in/deepshikha-pal-7915a5251/" className='hover:text-blue-600 transition'>
              <TbBrandLinkedinFilled />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
