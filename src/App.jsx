import React from 'react';
import fotoFerdy from './src/assets/fotoferdy.jpeg'

const LinkTree = () => {
  const links = [
    {
      title: 'Website',
      url: 'https://ferdybudiono.github.io/my-cv/',
      icon: '🌐'
    },
    {
      title: 'YouTube',  
      url: 'https://youtube.com/@ferdyddb',
      icon: '▶️'
    },
    {
      title: 'Instagram',
      url: 'https://instagram.com/ferdyddb/',
      icon: '📸'
    },
    {
      title: 'GitHub',
      url: 'https://github.com/ferdybudiono',
      icon: '💻'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 to-blue-500 py-12 px-4">
      <div className="max-w-md mx-auto">
        
        {/* Profile Section */}
        <div className="text-center mb-8">
          <div className="avatar">
            <div className="w-24 h-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src={fotoFerdy} alt="Profile" />
            </div>
          </div>
          <h1 className="text-2xl font-bold text-white mt-4">Ferdy Dharmawan Dwi Budiono</h1>
          <p className="text-gray-200">I'm a Web Developer and IT Technician</p>
        </div>

        {/* Links */}
        <div className="space-y-4">
          {links.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline btn-block text-white hover:bg-white hover:text-purple-600 transition-all duration-300"
            >
              <span className="mr-2">{link.icon}</span>
              {link.title}
            </a>
          ))}
        </div>

        {/* Footer */}
        <footer className="text-center mt-8 text-gray-300 text-sm">
          <p>© 2024 Ferdy Budiono</p>
        </footer>
        
      </div>
    </div>
  );
};

export default LinkTree;
