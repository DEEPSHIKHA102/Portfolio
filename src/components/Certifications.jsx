import React from 'react';
import { FaDownload, FaFilePdf } from 'react-icons/fa';
import c1 from '../assets/Certificates/c1.pdf';
import c2 from '../assets/Certificates/c2.pdf';
import c3 from '../assets/Certificates/c3.pdf';
import c4 from '../assets/Certificates/c4.pdf';
import c5 from '../assets/Certificates/c5.pdf';
import c6 from '../assets/Certificates/c6.pdf';
import c7 from '../assets/Certificates/c7.pdf';
import c8 from '../assets/Certificates/c8.pdf';
import c9 from '../assets/Certificates/c9.pdf';

function Certifications() {
  const certificates = [
    {
      id: 1,
      title: "ChatGPt Advanced Data Analysis",
      issuer: "Coursera",
      date: "Completed March 2024",
      categories: ["Creativity", "Problem Solving", "Machine Learning"],
      pdfFile: c5
    },
    {
      id: 2,
      title: "Generative AI with Large Language Models",
      issuer: "DeepLearning.AI",
      date: "Completed April 2024",
      categories: ["Natural Language Processing", "Machine Learning", "Python Programming"],
      pdfFile: c9
    },
    {
      id: 3,
      title: "Data Strutures and Algorithm",
      issuer: "Board Infinty",
      date: "Completed July 2024",
      categories: ["Algorithms", "Computer Programming", "Problem Solving"],
      pdfFile: c1
    },
    {
      id: 4,
      title: "ChatGPT Advanced Data Analysis",
      issuer: "coursera",
      date: "Completed April 2024",
      categories: ["Algorithms", "Computer Programming", "Problem Solving"],
      pdfFile: c4
    },
    {
      id: 5,
      title: "HTMl,CSS,Javascript for Web Developers",
      issuer: "coursera",
      date: "Completed April 2024",
      categories: ["HTML","CSS","Javascript","Node.js","Express","MongoDB"],
      pdfFile: c3
    },
    {
      id: 6,
      title: "Generative AI with LLM",
      issuer: "Coursera",
      date: "Completed April 2024",
      categories: ["Natural Language Processor", "AI","Large Language Model"],
      pdfFile: c7
    },
    {
      id: 7,
      title: "the complete 2024 web development bootcamp",
      issuer: "Udemy",
      date: "Completed October 2024",
      categories: ["HTML","CSS","Javascript","Node.js","Express","MongoDB" ],
      pdfFile: c2
    },
    {
      id: 8,
      title: "Generative AI Primer",
      issuer: "coursera",
      date: "Completed ferbruary 2024",
      categories: ["Natural Language Processor", "AI","Large Language Model"],
      pdfFile: c6
    },
    {
      id: 9,
      title: "Server Side Javasript with Node.js",
      issuer: "Coursera Project Network",
      date: "Completed April 2024",
      categories: ["HTML","CSS","Javascript","Node.js","Express","MongoDB"],
      pdfFile: c8
    }
  ];

  return (
    <div className='px-10 py-20 max-w-7xl mx-auto' id="certification_section">
      <div className='mb-16 text-center'>
        <h2 className='text-4xl font-bold text-gray-800 mb-4'>Certifications</h2>
        <div className='w-90 h-1 bg-purple-600 mx-auto'></div>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
        {certificates.map((cert) => (
          <div key={cert.id} className='bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow'>
            
            {/* PDF Preview with iframe */}
            <div className='h-74 bg-gray-100 flex items-center justify-center p-2'>
              <iframe
                src={cert.pdfFile + "#toolbar=0&navpanes=0&scrollbar=0"}
                title={cert.title}
                className='w-full h-full rounded'
                frameBorder="0"
              />
            </div>

            {/* Certificate Content */}
            <div className='p-6'>
              <p className='text-gray-500 text-sm mb-4'>{cert.date}</p>

              {/* Categories */}
              <div className='flex flex-wrap gap-2 mb-6'>
                {cert.categories.map((category, index) => (
                  <span key={index} className='bg-blue-100 text-purple-800 px-2 py-1 rounded-full text-xs'>
                    {category}
                  </span>
                ))}
              </div>

              {/* Buttons */}
              <div className='flex gap-3'>
                <a
                  href={cert.pdfFile}
                  download
                  className='flex-1 flex items-center justify-center gap-2 bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition text-sm'
                >
                  <FaDownload /> Download
                </a>
                <a
                  href={cert.pdfFile}
                  target="_blank"
                  rel="noopener noreferrer"
                  className='flex-1 flex items-center justify-center gap-2 border border-gray-800 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-100 transition text-sm'
                >
                  <FaFilePdf /> Open PDF
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Certifications;
