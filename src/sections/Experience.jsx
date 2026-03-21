function Experience() {
  const experiences = [
    {
      role: "Software Engineer (Self-Driven)",
      company: "Backend & Full-Stack Projects",
      years: "2023 – Present",
      points: [
        "Designed and developed backend systems using Node.js, Express, and TypeScript",
        "Built RESTful APIs with authentication (JWT) and role-based access control",
        "Developed a production-oriented authentication microservice with modular architecture",
        "Integrated PostgreSQL and MongoDB with Prisma and Mongoose for data management",
        "Implemented Docker-based environments and CI/CD pipelines using GitHub Actions",
        "Structured applications using clean architecture principles and service-based design",
      ],
    },
    {
      role: "Stock Controller",
      company: "Kipevu Restaurant and 109 Tavern",
      years: "2023 – 2026",
      points: [
        "Managed inventory systems ensuring data accuracy and consistency across operations",
        "Analyzed stock movement data to support operational decision-making",
        "Maintained structured reporting workflows in high-volume environments",
        "Developed strong analytical thinking and process optimization skills applicable to system design",
      ],
    },
  ];

  return (
    <section id="experience" className="py-24 px-6 bg-deep-slate">
      <div className="max-w-6xl mx-auto">

        {/* Section Header */}
        <div className="mb-14 text-center">
          <p className="text-electric-indigo font-semibold tracking-wide mb-2 font-heading">
            EXPERIENCE
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white font-heading">
            Engineering Experience & Professional Background
          </h2>
        </div>

        {/* Experience Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {experiences.map((exp) => (
            <div
              key={exp.role}
              className="card p-8 hover:shadow-md hover:-translate-y-2 transition duration-300"
            >
              {/* Role + Company */}
              <h3 className="text-xl font-semibold text-white mb-1 font-heading">
                {exp.role}
              </h3>
              <p className="text-text-secondary mb-4">{exp.company}</p>
              <p className="text-text-secondary text-sm mb-4">{exp.years}</p>

              {/* Responsibilities */}
              <ul className="space-y-2 text-text-secondary list-disc list-inside">
                {exp.points.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Experience;