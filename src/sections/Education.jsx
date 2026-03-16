function Education() {
  const education = [
    {
      degree: "Bachelor of Science in Computer Science",
      institution: "Masinde Muliro University of Science and Technology",
      years: "2017 – 2021",
      highlights: [
        "Second Class Honours",
        "Key areas covered: Algorithms and Data Structures, Computer Networking, Distributed Systems, Computer Security, Software Engineering, Database Systems, Operating Systems, Web Development, and Artificial Intelligence",
        "Completed hands-on projects in full-stack development and system design",
      ],
    },
    {
      degree: "Full-Stack Development (MERN Stack) Certification",
      institution: "Intensive 16-week Software Development Program",
      years: "2025",
      highlights: [
        "Covered Python, Web Technologies, Database Management, and Software Engineering",
        "Built real-world projects from scratch",
      ],
    },
  ];

  return (
    <section id="education" className="py-24 px-6 bg-deep-slate">
      <div className="max-w-6xl mx-auto">
        <div className="mb-14 text-center">
          <p className="text-electric-indigo font-semibold tracking-wide mb-2 font-heading">EDUCATION</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white font-heading">
            Academic Foundation in Technology
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {education.map((edu) => (
            <div
              key={edu.degree}
              className="card p-8 hover:shadow-md hover:-translate-y-2 transition duration-300"
            >
              <h3 className="text-xl font-semibold text-white mb-1 font-heading">{edu.degree}</h3>
              <p className="text-text-secondary mb-2">{edu.institution}</p>
              <p className="text-text-secondary text-sm mb-4">{edu.years}</p>
              <ul className="list-disc list-inside text-text-secondary space-y-2">
                {edu.highlights.map((point, idx) => (
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

export default Education;