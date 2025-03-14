'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { FaBars, FaTimes } from 'react-icons/fa';

const navLinks = [
  { href: '#', label: 'Save & Insure' },
  { href: '#', label: 'Loan' },
  { href: '#', label: 'Learn' },

];

const HomeNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white   max-w-[90%]  mx-auto px-6 py-6">
      <div className=" flex justify-between items-center">
        <div className="flex items-center">
          {/* Logo */}
          <Link href="/" className="text-3xl font-bold  flex items-center">
            SafeNest
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-10 ml-[4rem] ">
            {navLinks.map((link) => (
              <Link key={link.label} href={link.href} className=" text-[#2E8B57] text-lg space-x-10  transition-colors duration-200">
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Sign Up Button */}
        <div className="hidden md:block">
          <div className="flex  items-center space-x-7  flex-row">
            <Link href="/auth/login" className="text-[#2E8B57] px-4 py-2 text-lg rounded-md  transition-colors duration-200">
            Log in
            </Link>

            <Link href="/auth/register" className=" text-white px-4 bg-[#2E8B57] py-2 rounded-md text-lg transition-colors duration-200">
            Sign Up
          </Link>
          </div>
         
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-[#2E8B57] "
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col items-start bg-white  py-4 space-y-8 ">
          {navLinks.map((link) => (
            <Link key={link.label} href={link.href} className=" transition-colors border-b w-full text-[#2E8B57] duration-200">
              {link.label}
            </Link>
          ))}
          <Link href="#" className=" text-[#2E8B57]  py-2 border-b  w-full transition-colors duration-200">
            Sign Up
          </Link>
        </div>
      )}
    </nav>
  );
};

export default HomeNavbar;