"use client";
import Link from "next/link";
import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Resume ID from .env.local
  const resumeId = process.env.NEXT_PUBLIC_RESUME_ID;

  const handleDownload = () => {
    if (!resumeId) {
      console.error("Resume ID not found in .env.local");
      return;
    }

    // Direct Google Drive Download Link
    const directDownload = `https://drive.google.com/file/d/1OcvSP0AS63vYwfVxFPHSDg-6-CKUNNZY/view?usp=drive_link=${resumeId}`;

    const link = document.createElement("a");
    link.href = directDownload;
    link.download = "HussainCV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <nav className="bg-[#191919] px-4 py-3 lg:mx-64 rounded-lg">
        <div className="flex justify-between items-center">
          
          {/* Desktop Links */}
          <ul className="hidden lg:flex items-center w-[40%] justify-between">
            <li className="border border-white px-4 py-2 rounded-lg bg-white text-black">
              <Link href="/">
                <p className="font-semibold">Home</p>
              </Link>
            </li>

            <Link href="/Portfolio">
              <li className="hover:border hover:border-white px-4 py-2 rounded-lg hover:bg-white hover:text-black cursor-pointer">
                <p className="font-semibold">Portfolio</p>
              </li>
            </Link>

            <Link href="/Contact">
              <li className="hover:border hover:border-white px-4 py-2 rounded-lg hover:bg-white hover:text-black cursor-pointer">
                <p className="font-semibold">Contact</p>
              </li>
            </Link>
          </ul>

          {/* Download Button */}
          <button
            onClick={handleDownload}
            className="bg-[#B8FF32] text-black px-4 py-2 font-semibold rounded hover:bg-[#b7ff32e0]"
          >
            Download Resume
          </button>

          {/* Mobile Hamburger */}
          <button
            className="lg:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <ul className="lg:hidden mt-4 space-y-2">
            <li className="border border-white px-4 py-2 rounded-lg bg-white text-black">
              <Link href="/">
                <p className="font-semibold">Home</p>
              </Link>
            </li>

            <li className="hover:border hover:border-white px-4 py-2 rounded-lg hover:bg-white hover:text-black cursor-pointer">
              <Link href="/Portfolio">
                <p className="font-semibold">Portfolio</p>
              </Link>
            </li>

            <li className="hover:border hover:border-white px-4 py-2 rounded-lg hover:bg-white hover:text-black cursor-pointer">
              <Link href="/Contact">
                <p className="font-semibold">Contact</p>
              </Link>
            </li>
          </ul>
        )}
      </nav>
    </>
  );
};

export default Navbar;
