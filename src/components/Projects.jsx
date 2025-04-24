import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

import i from '../assets/image.png';
import i2 from '../assets/image2.png';
import i3 from '../assets/image3.png';
import i4 from '../assets/image4.png';

function Projects() {
  const projects = [
    {
      title: "Travel blog Website",
      description: "Discover the world one story at a time. From hidden gems to iconic destinations, our travel blog brings you inspiring journeys, tips, and experiences to fuel your wanderlust",
      technologies: ["HTML", "CSS", "Javascript"],
      githubLink: "https://github.com/DEEPSHIKHA102/Travel-blog-website",
      liveLink: "https://travel-blog-website-app.netlify.app/",
      imagePath: i,
    },
    {
      title: "The Home Decor",
      description: "Transform your space, elevate your style. Our home decor blog brings you inspiration, tips, and DIY ideas to make every corner feel like home.",
      technologies: ["React", "JavaScript", "CSS", "MongoDB", "Node.js", "SQL"],
      githubLink: "https://github.com/DEEPSHIKHA102/The-Home-Decor",
      liveLink: "https://the-home-decor-website.netlify.app/",
      imagePath: i3,
    },
    {
      title: "Learning Website",
      description: "Unlock your potential, one lesson at a time. Our learning platform offers insightful content, practical skills, and expert guidance to help you grow and succeed.",
      technologies: ["HTML", "CSS", "Javascript"],
      githubLink: "https://github.com/DEEPSHIKHA102/Learning-Website",
      liveLink: "https://learning-system-website.netlify.app/",
      imagePath: i2,
    },
    {
      title: "Online food ordering System",
      description: "Craving something delicious? Order your favorite meals online with ease — fresh, fast, and delivered right to your door",
      technologies: ["React", "Express", "MongoDB", "Node.js"],
      githubLink: "https://github.com/MrityunjayMaharana/Planit",
      liveLink: "#",
      imagePath: i4,
    },
  ];

  return (
    <div className='px-10 py-20 max-w-7xl mx-auto' id="projects_section">
      <div className='mb-16 text-center'>
        <h2 className='text-3xl text-gray-800 mb-3 tracking-tight leading-snug font-bold'>My Projects</h2>
        <div className='w-60 h-1 bg-purple-600 mx-auto'></div>
        <p className='text-base text-gray-600 mt-2 tracking-tight leading-snug'>
          Explore a showcase of my recent projects and dive into what I’m currently building with passion and purpose.
        </p>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
        {projects.map((project, index) => (
          <div
            key={index}
            className={`bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow duration-300 relative ${project.isCurrent ? 'ring-2 ring-purple-500' : ''}`}
          >
            {/* Project Image */}
            <div className='h-48 bg-gray-200 overflow-hidden'>
              <img
                src={project.imagePath}
                alt={project.title}
                className='w-full h-full object-cover transition-transform duration-500 hover:scale-105'
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "https://via.placeholder.com/600x400?text=Project+Image";
                }}
              />
            </div>

            {/* Project Content */}
            <div className='p-6'>
              <h3 className='text-xl text-gray-800 mb-1 tracking-tight'>{project.title}</h3>
              <p className='text-sm text-gray-600 mb-3 tracking-tight leading-snug'>{project.description}</p>

              {/* Technologies */}
              <div className='flex flex-wrap gap-2 mb-5'>
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className={`px-2 py-0.5 rounded-full text-xs ${project.isCurrent && tech === 'Laravel' ? 'bg-blue-600 text-white' : 'bg-blue-100 text-purple-800'}`}
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className='flex gap-4'>
                {project.githubLink && (
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-1 text-sm transition ${project.isCurrent ? 'text-blue-600 hover:text-blue-800' : 'text-gray-700 hover:text-blue-600'}`}
                  >
                    <FaGithub /> Code
                  </a>
                )}
                {project.liveLink && (
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-1 text-sm transition ${project.isCurrent ? 'text-blue-600 hover:text-purple-800' : 'text-gray-700 hover:text-blue-600'}`}
                  >
                    <FaExternalLinkAlt /> {project.isCurrent ? 'Preview' : 'Live Demo'}
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
