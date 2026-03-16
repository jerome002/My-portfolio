function Experience() {
  const experiences = [
    {
      role: "ICT Intern",
      company: "Ministry of Education",
      years: "2025 – 2026",
      points: [
        "Provided IT support for hardware, software, and network systems.",
        "Assisted in database management and internal digital workflows.",
        "Supported staff with technical troubleshooting and training.",
        "Gained exposure to enterprise-level IT environments.",
      ],
    },
    {
      role: "Independent Developer",
      company: "Self-Employed | Personal Projects",
      years: "2024 – Present",
      points: [
        "Developed full-stack web applications using React, Node.js, and MongoDB",
        "Built REST APIs with user authentication and database integration",
        "Gained experience with modern development tools and deployment platforms",
        "Continuously learning new technologies and improving coding skills",
      ],
    },
    {
      role: "Stock Controller",
      company: "Inventory & Operations Management",
      years: "2023 – 2025",
      points: [
        "Managed inventory tracking systems to ensure accuracy and accountability.",
        "Analyzed stock movement data to support operational decision-making.",
        "Maintained structured reporting systems in high-volume environments.",
        "Developed strong analytical, organizational, and process optimization skills.",
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
            Professional Journey in Engineering
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