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
            Principles Driving Scalable, Maintainable Code
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="card p-8 bg-refined-charcoal border border-electric-indigo/20 backdrop-blur-sm">
            <h3 className="text-xl font-semibold text-white mb-3 font-heading">Clean Code First</h3>
            <p className="text-text-secondary text-sm">
              I write self-documenting code with meaningful names, single responsibility principles, and comprehensive documentation. Every line serves a purpose in the system's architecture.
            </p>
          </div>

          <div className="card p-8 bg-refined-charcoal border border-electric-indigo/20 backdrop-blur-sm">
            <h3 className="text-xl font-semibold text-white mb-3 font-heading">Test-Driven Development</h3>
            <p className="text-text-secondary text-sm">
              TDD ensures reliability and prevents regressions. I write tests before features, achieving high coverage and confidence in deployments through automated CI/CD pipelines.
            </p>
          </div>

          <div className="card p-8 bg-refined-charcoal border border-electric-indigo/20 backdrop-blur-sm">
            <h3 className="text-xl font-semibold text-white mb-3 font-heading">Mentorship & Collaboration</h3>
            <p className="text-text-secondary text-sm">
              I actively mentor junior developers, conduct code reviews, and foster knowledge sharing. Strong collaboration leads to better solutions and team growth.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}

export default EngineeringPhilosophy;
