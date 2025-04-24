import React from 'react';

function Experience() {
  const experiences = [
    {
      id: 1,
      role: "Summer Training",
      company: "Board Infinity",
      duration: "June 2024 - July 2024",
      description: [
        "This training encompassed a thorough exploration of various data structures, including linked lists, trees, tries, and graphs.",
        "Enhanced problem-solving skills by mastering advanced data structures like linked lists, trees, tries, and graphs.",
        "Developed a text-based Library Management System using C++, enabling efficient storage and retrieval of 100+ books.",
        "Gained hands-on experience in optimizing algorithms for time and space complexity."
      ],
      technologies: ["Data Structures and Algorithm", "C++"]
    },
  ];

  return (
    <div className='px-10 py-20 max-w-7xl mx-auto' id="experience_section">
      <div className='mb-16 text-center'>
        <h2 className='text-3xl text-gray-800 mb-3 tracking-tight leading-snug font-bold'>Experience & Training</h2>
        <div className='w-100 h-1 bg-purple-600 mx-auto'></div>
      </div>

      <div className='space-y-10'>
        {experiences.map((exp) => (
          <div key={exp.id} className='bg-white p-6 rounded-xl shadow-md border border-gray-100'>
            <div className='flex flex-col md:flex-row md:justify-between md:items-start gap-4'>

              <div className='md:w-1/3'>
                <h3 className='text-xl text-purple-700 tracking-tight'>{exp.role}</h3>
                <p className='text-sm text-gray-600'>{exp.company}</p>
                <p className='text-sm text-gray-500'>{exp.duration}</p>
              </div>

              <div className='md:w-2/3'>
                <ul className='list-disc pl-5 space-y-1 mb-4'>
                  {exp.description.map((item, index) => (
                    <li key={index} className='text-sm text-gray-700 tracking-tight leading-snug'>
                      {item}
                    </li>
                  ))}
                </ul>

                <div className='flex flex-wrap gap-2'>
                  {exp.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className='bg-blue-100 text-purple-800 px-2 py-0.5 rounded-full text-xs tracking-tight font-semibold'
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Experience;
