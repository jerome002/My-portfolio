function EngineeringPhilosophy() {
  return (
    <section id="philosophy" className="py-24 bg-deep-slate px-6">
      <div className="max-w-6xl mx-auto">

        {/* Section Header */}
        <div className="mb-14 text-center">
          <p className="text-electric-indigo font-semibold tracking-wide mb-2 font-heading">
            ENGINEERING PHILOSOPHY
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white font-heading">
            Principles Behind My Approach to Building Systems
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="card p-8 bg-refined-charcoal border border-electric-indigo/20 backdrop-blur-sm">
            <h3 className="text-xl font-semibold text-white mb-3 font-heading">
              Clean & Maintainable Code
            </h3>
            <p className="text-text-secondary text-sm">
              I focus on writing clear, modular code with separation of concerns. 
              I structure applications using controllers, services, and middleware 
              to ensure scalability and long-term maintainability.
            </p>
          </div>

          <div className="card p-8 bg-refined-charcoal border border-electric-indigo/20 backdrop-blur-sm">
            <h3 className="text-xl font-semibold text-white mb-3 font-heading">
              Reliable & Testable Systems
            </h3>
            <p className="text-text-secondary text-sm">
              I write tests for critical parts of my applications using tools like 
              Vitest and Supertest to ensure API reliability and prevent regressions 
              as systems evolve.
            </p>
          </div>

          <div className="card p-8 bg-refined-charcoal border border-electric-indigo/20 backdrop-blur-sm">
            <h3 className="text-xl font-semibold text-white mb-3 font-heading">
              Continuous Improvement
            </h3>
            <p className="text-text-secondary text-sm">
              I continuously improve my skills in backend engineering, system design, 
              and DevOps by building real-world projects and applying modern development practices.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}

export default EngineeringPhilosophy;