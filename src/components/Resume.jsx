import React, { useState } from 'react';
import { FaDownload, FaFilePdf, FaBriefcase, FaGraduationCap, FaCode, FaTimes } from 'react-icons/fa';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';
import resume from '../assets/Deepshikha_cv_gen.pdf';

// Configure PDF.js worker
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function Resume() {
  const [showModal, setShowModal] = useState(false);
  const [numPages, setNumPages] = useState(null);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  const skills = [
    { category: "Programming", items: ["C++", "Java","JavaScript"] },
    { category: "Web Development", items: ["React", "Node.js", "Express", "MongoDB"] },
    { category: "Tools & Technologies", items: ["Git", "GitHub", "VS Code"] }
  ];

  const experiences = [
    {
      role: "Summer Training",
      company: "Board Infinity",
      duration: "June 2024 - July 2024",
      description: "Data Structures and Algorithm",
      icon: <FaCode className="text-blue-600 text-xl" />
    },
    
  ];

  const education = [
    {
      degree: "Bachelor in Technology - CSE",
      institution: "Lovely Professional University",
      duration: "2022 - 2026",
      cgpa: "CGPA: 7.16",
      icon: <FaGraduationCap className="text-blue-600 text-xl" />
    },
    {
      degree: "Senior Secondary (12th)",
      institution: "Jawahar Navodaya Vidyalaya, Hardoi, Utter Pradesh",
      duration: "2020-2021",
      percentage: "Percentage: 89.2%",
      icon: <FaGraduationCap className="text-blue-600 text-xl" />
    },
    {
      degree: "Marticulation (10th)",
      institution: "Jawahar Navodaya Vidyalaya, Hardoi, Utter Pradesh",
      duration: "2018-2019",
      percentage: "Percentage: 85.6%",
      icon: <FaGraduationCap className="text-blue-600 text-xl" />
    }
  ];

  return (
    <div className='px-10 py-20 max-w-7xl mx-auto' id="resume_section">
      {/* PDF Viewer Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-screen overflow-auto">
            <div className="flex justify-between items-center p-4 border-b">
              <h3 className="text-xl font-bold">My Resume</h3>
              <button
                onClick={() => setShowModal(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <FaTimes className="text-2xl" />
              </button>
            </div>
            <div className="p-4">
              <Document
                file={resume}
                onLoadSuccess={onDocumentLoadSuccess}
                loading={<div className="text-center py-8">Loading PDF...</div>}
              >
                {Array.from(new Array(numPages), (el, index) => (
                  <Page
                    key={`page_${index + 1}`}
                    pageNumber={index + 1}
                    width={800}
                    className="border mb-4"
                  />
                ))}
              </Document>
            </div>
          </div>
        </div>
      )}

      <div className='mb-16 text-center'>
        <h2 className='text-4xl font-bold text-gray-800 mb-4'>My Resume</h2>
        <div className='w-60 h-1 bg-purple-600 mx-auto'></div>
        <p className='text-gray-600 mt-4'>Here's an overview of my skills and experience</p>
      </div>

      <div className='flex flex-col lg:flex-row gap-10'>
        {/* Left Column - Download Section */}
        <div className='lg:w-1/3'>
          <div className='bg-white p-8 rounded-xl shadow-md border border-gray-100 sticky top-10'>
            <div className='flex flex-col items-center text-center'>
              <div className='bg-purple-100 p-4 rounded-full mb-4'>
                <FaFilePdf className='text-purple-600 text-4xl' />
              </div>
              <h3 className='text-xl font-bold text-gray-800 mb-2'>My Resume</h3>
              <p className='text-gray-600 mb-6'>View or download my complete resume</p>

              <div className="flex gap-4 w-full">
                <a
                  href={resume}
                  target="_blank"
                  rel="noopener noreferrer"
                  className='flex-1 flex items-center justify-center gap-2 border border-gray-800 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-100 transition text-sm'
                >
                  <FaFilePdf /> Open PDF
                </a>
                <a
                  href={resume}
                  download="Deepshikha_pal_Resume.pdf"
                  className='flex-1 flex items-center justify-center gap-2 bg-gray-800 text-white px-4 py-3 rounded-lg hover:bg-gray-700 transition font-medium'
                >
                  <FaDownload /> Download
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Resume Content (same as before) */}
        <div className='lg:w-2/3 space-y-8'>
          {/* Skills Section */}
          <div className='bg-white p-8 rounded-xl shadow-md border border-gray-100'>
            <h3 className='text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2'>
              <FaCode className='text-yellow-600' />
              Skills & Technologies
            </h3>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
              {skills.map((skill, index) => (
                <div key={index} className='bg-gray-50 p-4 rounded-lg'>
                  <h4 className='font-semibold text-yellow-700 mb-3'>{skill.category}</h4>
                  <ul className='space-y-2'>
                    {skill.items.map((item, i) => (
                      <li key={i} className='flex items-center gap-2 text-gray-700'>
                        <span className='w-2 h-2 bg-yellow-500 rounded-full'></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Experience Section */}
          <div className='bg-white p-8 rounded-xl shadow-md border border-gray-100'>
            <h3 className='text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2'>
              <FaBriefcase className='text-yellow-600' />
              Experience
            </h3>
            <div className='space-y-6'>
              {experiences.map((exp, index) => (
                <div key={index} className='flex gap-4'>
                  <div className='flex-shrink-0 mt-1'>
                    {exp.icon}
                  </div>
                  <div>
                    <h4 className='text-lg font-semibold text-gray-800'>{exp.role}</h4>
                    <p className='text-yellow-700 font-medium'>{exp.company}</p>
                    <p className='text-gray-500 text-sm mb-2'>{exp.duration}</p>
                    <p className='text-gray-700'>{exp.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education Section */}
          <div className='bg-white p-8 rounded-xl shadow-md border border-gray-100'>
            <h3 className='text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2'>
              <FaGraduationCap className='text-yellow-600' />
              Education
            </h3>
            <div className='space-y-6'>
              {education.map((edu, index) => (
                <div key={index} className='flex gap-4'>
                  <div className='flex-shrink-0 mt-1'>
                    {edu.icon}
                  </div>
                  <div>
                    <h4 className='text-lg font-semibold text-gray-800'>{edu.degree}</h4>
                    <p className='text-yellow-700 font-medium'>{edu.institution}</p>
                    <p className='text-gray-500 text-sm'>{edu.duration}</p>
                    {(edu.cgpa || edu.percentage) && (
                      <p className='text-gray-700 mt-1'>{edu.cgpa || edu.percentage}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resume;