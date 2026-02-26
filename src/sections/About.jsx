function About() {
  return (
    <section id="about" className="py-24 bg-slate-50 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Section Header */}
        <div className="mb-12">
          <p className="text-blue-600 font-semibold tracking-wide mb-2">
            ABOUT ME
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
            Building scalable systems and digital solutions
          </h2>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* Left Side - Story */}
          <div>
            <p className="text-gray-600 leading-relaxed text-lg">
              I am a Full-Stack MERN Developer focused on building scalable, 
              efficient, and user-centered web applications. My passion lies 
              in designing backend systems, RESTful APIs, and modern frontend 
              interfaces that solve real-world problems and improve workflows.
            </p>

            <p className="text-gray-600 mt-6 leading-relaxed">
              I enjoy turning complex ideas into simple, functional, and 
              high-performance platforms. I am constantly learning and 
              improving my skills in system design, scalability, and 
              performance optimization to build production-ready applications.
            </p>

            <p className="text-gray-600 mt-6 leading-relaxed">
              Currently, I am developing platforms such as a skill-exchange 
              marketplace and job automation tools, while deepening my 
              knowledge in cloud architecture and modern software engineering practices.
            </p>
          </div>

          {/* Right Side - Highlights */}
          <div className="grid gap-6">

            <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100 hover:shadow-lg transition">
              <h3 className="font-semibold text-slate-900 mb-2">
                Problem-Solving Focus
              </h3>
              <p className="text-gray-600 text-sm">
                I build technology that improves workflows, saves time, and 
                creates measurable value for users and businesses.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100 hover:shadow-lg transition">
              <h3 className="font-semibold text-slate-900 mb-2">
                Scalable Architecture
              </h3>
              <p className="text-gray-600 text-sm">
                I design backend systems that are structured, optimized, and 
                ready to scale as products grow.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100 hover:shadow-lg transition">
              <h3 className="font-semibold text-slate-900 mb-2">
                Continuous Learning
              </h3>
              <p className="text-gray-600 text-sm">
                I stay updated with modern tools, best practices, and new 
                technologies to remain competitive in the tech industry.
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default About;