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
        "Designed and developed full-stack web applications using the MERN stack.",
        "Built scalable REST APIs with authentication and structured database modeling.",
        "Implemented clean backend architecture for real-world problem solving.",
        "Continuously improving system design, performance optimization, and code quality.",
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
    <section id="experience" className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">

        {/* Section Header */}
        <div className="mb-14 text-center">
          <p className="text-blue-600 font-semibold tracking-wide mb-2">
            EXPERIENCE
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
            My Professional Journey
          </h2>
        </div>

        {/* Experience Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {experiences.map((exp) => (
            <div
              key={exp.role}
              className="bg-slate-50 p-8 rounded-2xl border border-gray-100 shadow-sm
                         hover:shadow-md hover:-translate-y-2 transition duration-300"
            >
              {/* Role + Company */}
              <h3 className="text-xl font-semibold text-slate-900 mb-1">
                {exp.role}
              </h3>
              <p className="text-gray-500 mb-4">{exp.company}</p>
              <p className="text-gray-400 text-sm mb-4">{exp.years}</p>

              {/* Responsibilities */}
              <ul className="space-y-2 text-gray-600 list-disc list-inside">
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