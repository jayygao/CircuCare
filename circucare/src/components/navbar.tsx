import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <Image src="/circucare-clear.png" alt="CircuCare Logo" width={40} height={40} className="h-8 w-auto" />
              <span className="ml-2 text-xl font-semibold text-livid-brown">CircuCare</span>
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link href="/" className="text-livid-brown hover:bg-flamingo hover:text-white px-3 py-2 rounded-md text-sm font-medium transition duration-150 ease-in-out">
                Home
              </Link>
              <Link href="/about" className="text-livid-brown hover:bg-flamingo hover:text-white px-3 py-2 rounded-md text-sm font-medium transition duration-150 ease-in-out">
                About
              </Link>
              <Link href="/contact" className="text-livid-brown hover:bg-flamingo hover:text-white px-3 py-2 rounded-md text-sm font-medium transition duration-150 ease-in-out">
                Contact
              </Link>
              <Link href="/products" className="text-livid-brown hover:bg-flamingo hover:text-white px-3 py-2 rounded-md text-sm font-medium transition duration-150 ease-in-out">
                Products
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;