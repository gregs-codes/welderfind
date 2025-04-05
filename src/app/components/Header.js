"use client";

import { useState } from "react";
import Link from "next/link";

export default function Header({ title, description }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      {/* Top Navigation */}
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        {/* Hamburger Menu Button */}
        <button
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
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
              d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>

        {/* Logo */}
        <div className="text-2xl font-bold">
          <Link href="/">WelderFind</Link>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-6">
          <Link href="/" className="text-gray-700 hover:text-blue-500">
            Home
          </Link>
          <Link href="/blog" className="text-gray-700 hover:text-blue-500">
            Blog
          </Link>
          <Link href="/store" className="text-gray-700 hover:text-blue-500">
            Store
          </Link>
          <Link href="/register" className="text-gray-700 hover:text-blue-500">
            Sign in / Register
          </Link>
        </nav>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <nav className="md:hidden bg-white shadow-md">
          <ul className="space-y-4 px-4 py-4">
            <li>
              <Link href="/" className="block text-gray-700 hover:text-blue-500">
                Home
              </Link>
            </li>
            <li>
              <Link href="/blog" className="block text-gray-700 hover:text-blue-500">
                Blog
              </Link>
            </li>
            <li>
              <Link href="/store" className="block text-gray-700 hover:text-blue-500">
                Store
              </Link>
            </li>
            <li>
              <Link href="/register" className="block text-gray-700 hover:text-blue-500">
                Sign in / Register
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}