function Education() {
  const education = [
    {
      degree: "Bachelor of Science in Computer Science",
      institution: "Masinde Muliro University of Science and Technology",
      years: "2017 – 2021",
      highlights: [
        "Graduated with Second Class Honours",
        "Core subjects: Algorithms & Data Structures, Computer Networking, Distributed Systems, Software Engineering, Database Systems, Operating Systems, Computer Security, Web Development, and AI",
        "Completed practical projects including full-stack applications, database design, and scalable system prototypes",
      ],
    },
    {
      degree: "Full-Stack Development (MERN Stack) Certification",
      institution: "Intensive 16-week Software Development Program",
      years: "2025",
      highlights: [
        "Hands-on training in Node.js, Express, React, and MongoDB",
        "Implemented REST APIs with authentication, role-based access, and real-time updates",
        "Built multiple real-world applications deployed on Vercel and Render",
        "Applied testing practices with Vitest and Supertest to ensure system reliability",
      ],
    },
  ];

  return (
    <section id="education" className="py-24 px-6 bg-deep-slate">
      <div className="max-w-6xl mx-auto">
        <div className="mb-14 text-center">
          <p className="text-electric-indigo font-semibold tracking-wide mb-2 font-heading">
            EDUCATION
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white font-heading">
            Academic & Practical Foundations in Technology
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {education.map((edu) => (
            <div
              key={edu.degree}
              className="card p-8 hover:shadow-md hover:-translate-y-2 transition duration-300"
            >
              <h3 className="text-xl font-semibold text-white mb-1 font-heading">
                {edu.degree}
              </h3>
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