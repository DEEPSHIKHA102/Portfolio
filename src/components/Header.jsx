import React from 'react';

function Header() {
  const handleScroll = (e, sectionId) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <div className='w-full bg-white py-6 px-8 shadow-md fixed z-50 top-0'>
      <div className='max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center'>
        {/* Name/Logo */}
        <div className='text-3xl font-semibold text-purple-700'>
          <h1>Deepshikha Pal</h1>
        </div>
        
        {/* Navigation */}
        <nav>
          <ul className='flex flex-wrap justify-center gap-30 md:gap-7 text-xm font-semibold'>
            {[
              { id: 'about_section', label: 'About' },
              { id: 'skills_section', label: 'Skills' },
              { id: 'projects_section', label: 'Projects' },
              { id: 'experience_section', label: 'Experience' },
              { id: 'resume_section', label: 'Resume' },
              { id: 'certification_section', label: 'Certifications' },
              { id: 'contact_section', label: 'Contact' }
            ].map((item) => (
              <li key={item.id}>
                <a 
                  href={`#${item.id}`} 
                  onClick={(e) => handleScroll(e, item.id)}
                  className='text-gray-600 hover:text-purple-600 transition-colors font-medium'
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Header;
