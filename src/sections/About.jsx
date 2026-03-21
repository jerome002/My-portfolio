function About() {
  return (
    <section id="about" className="py-24 bg-slate-950 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Section Header */}
        <div className="mb-12">
          <p className="text-cyan-400 font-semibold tracking-wide mb-2">
            ABOUT ME
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Backend-focused engineer building scalable systems
          </h2>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* Left Side - Story */}
          <div>
            <p className="text-slate-300 leading-relaxed text-lg">
              I'm a backend-focused software engineer specializing in building scalable, production-ready systems using TypeScript, Node.js, and modern web technologies. I focus on designing secure APIs, handling data efficiently, and structuring applications for long-term maintainability.
            </p>

            <p className="text-slate-300 mt-6 leading-relaxed">
              My journey started with curiosity about how the web and Telecomunication works , but quickly evolved into a deeper interest in how systems are designed behind the scenes. Today, I focus on backend architecture, authentication systems, and building applications that reflect real-world engineering practices.
            </p>

            <p className="text-slate-300 mt-6 leading-relaxed">
              Currently, I'm building a production-grade authentication microservice and improving my skills in system design, Docker, and CI/CD pipelines to align with modern backend engineering standards.
            </p>
          </div>

          {/* Right Side - Highlights */}
          <div className="grid gap-6">

            <div className="card p-6 hover:shadow-lg transition">
              <h3 className="font-semibold text-white mb-2">
                Systems Thinking
              </h3>
              <p className="text-slate-300 text-sm">
                I design applications with scalability, maintainability, and real-world usage in mind.
              </p>
            </div>

            <div className="card p-6 hover:shadow-lg transition">
              <h3 className="font-semibold text-white mb-2">
                Backend Specialization
              </h3>
              <p className="text-slate-300 text-sm">
                Strong focus on APIs, authentication, databases, and clean backend architecture.
              </p>
            </div>

            <div className="card p-6 hover:shadow-lg transition">
              <h3 className="font-semibold text-white mb-2">
                Continuous Improvement
              </h3>
              <p className="text-slate-300 text-sm">
                Actively learning system design, DevOps practices, and production-grade development workflows.
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default About;