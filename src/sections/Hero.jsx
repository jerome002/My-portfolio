function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center pt-24 px-6 bg-gradient-to-b from-white to-slate-50"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        
        {/* LEFT SIDE */}
        <div>
          {/* Small intro */}
          <p className="text-blue-600 font-semibold mb-4 tracking-wide">
            FULL-STACK MERN DEVELOPER
          </p>

          {/* Main headline */}
          <h1 className="text-4xl md:text-6xl font-bold leading-tight text-slate-900">
            Building scalable backend systems and modern web applications.
          </h1>

          {/* Description */}
          <p className="mt-6 text-lg text-gray-600 max-w-xl">
            I design and develop efficient, user-focused platforms that solve 
            real-world problems, automate workflows, and improve digital experiences.
          </p>

          {/* Buttons */}
          <div className="mt-10 flex flex-wrap gap-4">
            <a href="#projects" className="btn-primary">
              View Projects
            </a>

            <a href="#contact" className="btn-outline">
              Contact Me
            </a>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="hidden md:flex justify-center">
          <div className="relative">
            {/* Background glow */}
            <div className="absolute -inset-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-3xl blur-xl opacity-20"></div>

            {/* Card */}
            <div className="relative bg-white p-8 rounded-3xl shadow-xl border border-gray-100">
              <p className="text-sm text-gray-500 mb-2">Currently focused on</p>

              <ul className="space-y-3 text-slate-800 font-medium">
                <li>Scalable Backend Architecture</li>
                <li>REST APIs & Authentication</li>
                <li>Database Design & Optimization</li>
                <li>Full-Stack MERN Applications</li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Hero;