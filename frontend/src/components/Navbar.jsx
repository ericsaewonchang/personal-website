import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white fixed top-0 left-0 w-full border-b border-gray-200 z-50">
      <div className="container mx-auto px-4 py-2 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <RouterLink to="/" className="text-lg font-bold text-black">
            Eric Chang
          </RouterLink>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={handleToggle}
            className="text-black focus:outline-none"
            aria-label="Toggle Navigation"
          >
            {isOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6">
          <DesktopNav />
        </div>

        
      </div>

      {/* Mobile Navigation */}
      {isOpen && <MobileNav />}
    </nav>
  );
};

const DesktopNav = () => {
  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Projects', href: '/projects' },
    { label: 'Fun', href: '/fun' },
  ];

  return (
    <>
      {navItems.map((item) => (
        <RouterLink
          key={item.label}
          to={item.href}
          className="text-sm font-medium text-black hover:text-gray-600"
        >
          {item.label}
        </RouterLink>
      ))}
    </>
  );
};

const MobileNav = () => {
  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Projects', href: '/projects' },
    { label: 'Fun', href: '/fun' },
  ];

  return (
    <div className="bg-white border-t border-gray-200 p-4 md:hidden">
      {navItems.map((item) => (
        <RouterLink
          key={item.label}
          to={item.href}
          className="block py-2 text-sm font-medium text-black hover:text-gray-600"
        >
          {item.label}
        </RouterLink>
      ))}
    </div>
  );
};

export default Navbar;
