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
            FULL-STACK Developer
          </p>

          {/* Headline */}
          <h1 className="text-4xl md:text-6xl font-bold leading-tight text-white font-heading">
            Architecting Scalable Solutions with Low-Latency Performance and Robust API Design.
          </h1>

          {/* Technical Philosophy */}
          <div className="mb-8 mt-6">
            <p className="text-text-primary leading-relaxed text-lg mb-4">
              I design and implement full-stack systems that deliver exceptional user experiences through microservices architecture, optimized state management, and comprehensive testing strategies.
            </p>
            <ul className="space-y-2 text-text-secondary">
              <li><strong>Scalability & Performance:</strong> Engineering systems that handle high traffic with sub-100ms response times and 99.9% uptime.</li>
              <li><strong>Modern Architecture:</strong> Implementing micro-frontends, component libraries, and CI/CD pipelines for maintainable, deployable codebases.</li>
              <li><strong>Developer Experience:</strong> Mentoring teams in clean code practices, TDD, and accessibility-first development.</li>
            </ul>
          </div>

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
            <div className="relative bg-refined-charcoal p-8 rounded-3xl shadow-xl border border-electric-indigo/20 backdrop-blur-sm">
              <p className="text-sm text-text-secondary mb-2">Engineering Focus Areas</p>

              <ul className="space-y-3 text-text-primary font-medium">
                <li>Scalable React Architectures</li>
                <li>Microservices & API Design</li>
                <li>DevOps & Cloud Infrastructure</li>
                <li>Performance Optimization</li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Hero;