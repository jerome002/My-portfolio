import React from "react";

function Navbar() {
  const links = ["hero", "about", "skills", "projects", "experience", "education", "contact"];
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
        <span className="font-bold text-xl text-blue-600">JEROME KAPKOR</span>
        <ul className="flex space-x-6">
          {links.map((link) => (
            <li key={link}>
              <a href={`#${link}`} className="text-gray-700 hover:text-blue-600 transition">
                {link.charAt(0).toUpperCase() + link.slice(1)}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;