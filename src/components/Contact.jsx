import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { FaGithub, FaLinkedin, FaPhone, FaEnvelope } from 'react-icons/fa';

function Contact() {
  const form = useRef();
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
      .then((result) => {
        console.log(result.text);
        setSubmitted(true);
        form.current.reset();
      }, (error) => {
        console.error(error.text);
        setError('Something went wrong. Please try again later.');
      })
      .finally(() => setIsLoading(false));
  };

  return (
    <div className='px-4 sm:px-6 lg:px-8 py-20 max-w-7xl mx-auto' id="contact_section">
      <div className='mb-16 text-center'>
        <h2 className='text-3xl sm:text-4xl font-bold text-gray-800 mb-4'>Get In Touch</h2>
        <div className='w-80 h-1 bg-purple-600 mx-auto'></div>
      </div>

      <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
        {/* Contact Form */}
        <div className='bg-white p-6 sm:p-8 rounded-xl shadow-md border border-gray-100'>
          <h3 className='text-xl sm:text-2xl font-semibold text-yellow-700 mb-6'>Send me a message</h3>

          {submitted ? (
            <div className='bg-green-100 text-green-800 p-4 rounded-lg mb-6'>
              Thank you for your message! I'll get back to you soon.
            </div>
          ) : (
            <form ref={form} onSubmit={sendEmail} noValidate>
              {error && (
                <div className='bg-red-100 text-red-800 p-4 rounded-lg mb-6'>
                  {error}
                </div>
              )}
              <div className='mb-6'>
                <label htmlFor="user_name" className='block text-gray-700 mb-2'>Your Name</label>
                <input
                  type="text"
                  name="user_name"
                  required
                  className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500'
                />
              </div>

              <div className='mb-6'>
                <label htmlFor="user_email" className='block text-gray-700 mb-2'>Your Email</label>
                <input
                  type="email"
                  name="user_email"
                  required
                  className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500'
                />
              </div>

              <div className='mb-6'>
                <label htmlFor="message" className='block text-gray-700 mb-2'>Your Message</label>
                <textarea
                  name="message"
                  required
                  rows="5"
                  className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500'
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className={`bg-gray-800 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition font-medium w-full ${
                  isLoading ? 'opacity-75 cursor-not-allowed' : ''
                }`}
              >
                {isLoading ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          )}
        </div>

        {/* Contact Info */}
        <div className='bg-white p-6 sm:p-8 rounded-xl shadow-md border border-gray-100'>
          <h3 className='text-xl sm:text-2xl font-semibold text-yellow-700 mb-6'>Contact Information</h3>
          <div className='space-y-6'>
            <div className='flex items-start'>
              <div className='bg-yellow-100 p-3 rounded-full mr-4 flex-shrink-0'>
                <FaEnvelope className='text-yellow-700 text-xl' />
              </div>
              <div>
                <h4 className='text-lg font-medium text-gray-800'>Email</h4>
                <a href="mailto:paldeepshikha102@gmail.com" className='text-gray-600 hover:text-green-700 transition'>
                  paldeepshikha102@gmail.com
                </a>
              </div>
            </div>

            <div className='flex items-start'>
              <div className='bg-yellow-100 p-3 rounded-full mr-4 flex-shrink-0'>
                <FaPhone className='text-yellow-700 text-xl' />
              </div>
              <div>
                <h4 className='text-lg font-medium text-gray-800'>Phone</h4>
                <a href="tel:+919580258759" className='text-gray-600 hover:text-green-700 transition'>
                  +91 9580258759
                </a>
              </div>
            </div>

            <div className='flex items-start'>
              <div className='bg-yellow-100 p-3 rounded-full mr-4 flex-shrink-0'>
                <FaLinkedin className='text-yellow-700 text-xl' />
              </div>
              <div>
                <h4 className='text-lg font-medium text-gray-800'>LinkedIn</h4>
                <a 
                  href="https://www.linkedin.com/in/deepshikha-pal-7915a5251/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className='text-gray-600 hover:text-green-700 transition'
                >
                  linkedin.com/in/deepshikha-pal
                </a>
              </div>
            </div>

            <div className='flex items-start'>
              <div className='bg-yellow-100 p-3 rounded-full mr-4 flex-shrink-0'>
                <FaGithub className='text-yellow-700 text-xl' />
              </div>
              <div>
                <h4 className='text-lg font-medium text-gray-800'>GitHub</h4>
                <a 
                  href="https://github.com/DEEPSHIKHA102" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className='text-gray-600 hover:text-green-700 transition'
                >
                  github.com/Deepshikha-Pal
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
