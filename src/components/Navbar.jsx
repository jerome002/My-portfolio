import React from "react";

function Navbar() {
  const links = ["hero", "tech-stack", "selected-works", "philosophy", "experience", "education", "contact"];
  return (
    <>
      {/* Persistent CTA */}
      <div className="fixed top-4 right-4 z-50 bg-refined-charcoal border border-electric-indigo/20 rounded-full px-4 py-2 shadow-lg hidden md:flex backdrop-blur-sm">
        <div className="flex items-center gap-3">
          <a href="/resume.pdf" className="text-sm font-medium text-electric-indigo hover:text-electric-indigo/80 transition">
            Resume
          </a>
          <span className="text-text-secondary">|</span>
          <a href="https://www.linkedin.com/in/jerome-kapkor-6640b3191/" target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-electric-indigo hover:text-electric-indigo/80 transition">
            LinkedIn
          </a>
          <span className="text-text-secondary">|</span>
          <a href="mailto:jkapkor@gmail.com" className="text-sm font-medium text-electric-indigo hover:text-electric-indigo/80 transition">
            Email
          </a>
        </div>
      </div>

      <nav className="fixed top-0 left-0 right-0 bg-deep-slate border-b border-electric-indigo/20 shadow-lg z-50 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
          <span className="font-bold text-xl text-electric-indigo font-heading">JEROME KAPKOR</span>
          <ul className="flex space-x-6">
            {links.map((link) => (
              <li key={link}>
                <a
                  href={`#${link}`}
                  className="text-text-primary hover:text-electric-indigo transition"
                >
                  {link === 'tech-stack' ? 'Tech Stack' : link === 'selected-works' ? 'Works' : link === 'philosophy' ? 'Philosophy' : link.charAt(0).toUpperCase() + link.slice(1)}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;