function Education() {
  const education = [
    {
      degree: "Bachelor of Science in Computer Science",
      institution: "Masinde Muliro University of Science and Technology",
      years: "2017 – 2021",
      highlights: [
        "Second Class Honours",
        "Focus on programming, databases, and software engineering",
        "Completed hands-on projects in full-stack development",
      ],
    },
    {
      degree: "Full-Stack Development (MERN Stack) Certification",
      institution: "Intensive 16-week Software Development Program",
      years: "2022",
      highlights: [
        "Covered Python, Web Technologies, Database Management, and Software Engineering",
        "Built real-world projects from scratch",
      ],
    },
  ];

  return (
    <section id="education" className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="mb-14 text-center">
          <p className="text-blue-600 font-semibold tracking-wide mb-2">EDUCATION</p>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
            My Academic Background
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {education.map((edu) => (
            <div
              key={edu.degree}
              className="bg-slate-50 p-8 rounded-2xl border border-gray-100 shadow-sm
                         hover:shadow-md hover:-translate-y-2 transition duration-300"
            >
              <h3 className="text-xl font-semibold text-slate-900 mb-1">{edu.degree}</h3>
              <p className="text-gray-500 mb-2">{edu.institution}</p>
              <p className="text-gray-400 text-sm mb-4">{edu.years}</p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
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