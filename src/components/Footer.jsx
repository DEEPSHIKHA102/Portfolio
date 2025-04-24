import React from 'react';
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <footer className='bg-gray-900 text-white py-10 px-6 sm:px-10'>
      <div className='max-w-7xl mx-auto space-y-10'>

        {/* Main Footer Section */}
        <div className='flex flex-col md:flex-row justify-between items-center gap-8'>

          {/* Branding */}
          <div className='text-center md:text-left'>
            <h2 className='text-xl text-green-500 font-semibold'>Deepshikha Pal</h2>
            <p className='text-sm text-gray-400 mt-1'>Fullstack Developer</p>
          </div>

          {/* Navigation */}
          <nav className='flex flex-wrap justify-center gap-5 text-sm'>
            <a href="#about_section" className='text-gray-300 hover:text-green-400 transition'>About</a>
            <a href="#skills_section" className='text-gray-300 hover:text-green-400 transition'>Skills</a>
            <a href="#projects_section" className='text-gray-300 hover:text-green-400 transition'>Projects</a>
            <a href="#certification_section" className='text-gray-300 hover:text-green-400 transition'>Certifications</a>
            <a href="#contact_section" className='text-gray-300 hover:text-green-400 transition'>Contact</a>
          </nav>

          {/* Social Links */}
          <div className='flex gap-5 text-xl'>
            <a
              href="https://github.com/DEEPSHIKHA102"
              target="_blank"
              rel="noopener noreferrer"
              className='text-gray-400 hover:text-green-400 transition'
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/deepshikha-pal-7915a5251/"
              target="_blank"
              rel="noopener noreferrer"
              className='text-gray-400 hover:text-green-400 transition'
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
          </div>

        </div>

        {/* Copyright */}
        <div className='text-center text-gray-500 text-sm border-t border-gray-800 pt-6'>
          <p>© {new Date().getFullYear()} Deepshikha Pal. All rights reserved.</p>
          <p className='mt-1'>Built with React & Tailwind CSS</p>
        </div>
        
      </div>
    </footer>
  );
}

export default Footer;
