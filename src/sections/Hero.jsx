function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center pt-24 px-6 bg-gradient-to-b from-deep-slate via-refined-charcoal to-deep-slate"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        
        {/* LEFT SIDE */}
        <div>
          {/* Small intro */}
          <p className="text-electric-indigo font-semibold mb-4 tracking-wide font-heading">
            FULL-STACK ENGINEER & SYSTEMS DESIGNER
          </p>

          {/* Headline */}
          <h1 className="text-4xl md:text-6xl font-bold leading-tight text-white font-heading">
            Building Scalable APIs & Systems with Clean Architecture
          </h1>

          {/* Short Description */}
          <div className="mb-8 mt-6">
            <p className="text-text-primary leading-relaxed text-lg mb-4">
              I design and build backend systems focused on scalability, security, and maintainability using Node.js, TypeScript, and modern development practices.
            </p>

            <p className="text-text-secondary">
              Currently focused on developing a production-grade authentication microservice, working with Docker, CI/CD pipelines, and database systems like PostgreSQL and MongoDB.
            </p>
          </div>

          {/* Buttons */}
          <div className="mt-10 flex flex-wrap gap-4">
            <a href="#selected-works" className="btn-primary">
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
            <div className="relative bg-refined-charcoal p-8 rounded-3xl shadow-xl border border-electric-indigo/20 backdrop-blur-sm">
              <p className="text-sm text-text-secondary mb-2">Core Focus</p>

              <ul className="space-y-3 text-text-primary font-medium">
                <li>Backend Systems & API Design</li>
                <li>Authentication & Security (JWT, RBAC)</li>
                <li>Databases (PostgreSQL, MongoDB)</li>
                <li>Docker & CI/CD Pipelines</li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Hero;