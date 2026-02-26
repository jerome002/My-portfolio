function Skills() {
  const skills = [
    {
      category: "Frontend",
      items: ["React", "JavaScript (ES6+)", "HTML5", "CSS3", "Tailwind CSS"],
    },
    {
      category: "Backend",
      items: ["Node.js", "Express.js", "REST APIs", "JWT Authentication"],
    },
    {
      category: "Database",
      items: ["MongoDB", "Mongoose", "Database Modeling"],
    },
    {
      category: "Tools",
      items: ["Git", "GitHub", "Postman", "Vercel", "Render"],
    },
  ];

  return (
    <section id="skills" className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">

        {/* Section Header */}
        <div className="mb-14">
          <p className="text-blue-600 font-semibold tracking-wide mb-2">
            TECHNICAL SKILLS
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
            Technologies I use to build modern and scalable applications
          </h2>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {skills.map((group) => (
            <div
              key={group.category}
              className="group bg-slate-50 p-8 rounded-2xl border border-gray-100 
              hover:shadow-xl hover:-translate-y-2 transition duration-300"
            >
              {/* Category */}
              <h3 className="text-xl font-semibold text-slate-900 mb-6 flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                {group.category}
              </h3>

              {/* Skills */}
              <ul className="grid grid-cols-2 gap-y-3 text-gray-600 text-sm">
                {group.items.map((skill) => (
                  <li
                    key={skill}
                    className="flex items-center gap-2 group-hover:text-slate-900 transition"
                  >
                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Highlight */}
        <div className="mt-14 text-center">
          <p className="text-gray-600 max-w-2xl mx-auto">
            I continuously expand my skill set by learning modern technologies, 
            improving system design knowledge, and building production-ready 
            applications focused on performance and scalability.
          </p>
        </div>

      </div>
    </section>
  );
}

export default Skills;