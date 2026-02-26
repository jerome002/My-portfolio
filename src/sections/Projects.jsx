function Projects() {
  const projects = [
    {
      title: "Income & Expense Tracker",
      description:
        "A real-time personal finance tracker allowing users to add, edit, delete, and filter transactions. Displays clear summaries of income, expenses, and balance, fully deployed for production use.",
      tech: ["React", "Vite", "Tailwind CSS", "Supabase (PostgreSQL)", "Vercel"],
      live: "https://income-expense-tracker-mocha.vercel.app/",
      github: "https://github.com/jerome002/income-expense-tracker",
    },
    {
      title: "Job Application Assistant Platform",
      description:
        "A full-stack career automation platform with real-time job matching, AI-assisted application workflows, and a comprehensive career dashboard. Event-driven architecture ensures instant updates via WebSockets.",
      tech: [
        "React",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Socket.io",
        "Vercel & Render",
      ],
      live: "https://job-application-assistant-seven.vercel.app",
      github: "https://github.com/jerome002/job-app-platform",
    },
    {
      title: "SkillSwap API",
      description:
        "A production-ready Node.js backend powering a real-time peer-to-peer skill exchange marketplace. Features geospatial matching, AI skill recommendations, real-time notifications, and modular domain-driven architecture.",
      tech: ["Node.js", "Express.js", "MongoDB", "Socket.io", "JWT", "Bcrypt"],
      live: "",
      github: "https://github.com/jerome002/skillswap-api",
    },
    {
      title: "User Authentication API",
      description:
        "A secure RESTful API for user registration and login with password hashing and JWT authentication, designed to integrate with React frontends or mobile apps.",
      tech: ["Node.js", "Express.js", "MongoDB", "JWT", "Bcrypt"],
      live: "",
      github: "https://github.com/jerome002/user_authentication_api",
    },
  ];

  return (
    <section id="projects" className="py-24 px-6 bg-slate-50">
      <div className="max-w-6xl mx-auto">

        {/* Section Header */}
        <div className="mb-14 text-center">
          <p className="text-blue-600 font-semibold tracking-wide mb-2">
            PROJECTS
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
             Applications I've built to solve real-world problems and demonstrate my skills
          </h2>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-white p-8 rounded-2xl shadow-md border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition duration-300"
            >
              {/* Project Title */}
              <h3 className="text-xl font-semibold text-slate-900 mb-4">
                {project.title}
              </h3>

              {/* Project Description */}
              <p className="text-gray-600 mb-4">{project.description}</p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="bg-blue-50 text-blue-600 text-xs font-medium px-3 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Buttons */}
              <div className="flex flex-wrap gap-4">
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary"
                  >
                    Live Demo
                  </a>
                )}
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-outline"
                  >
                    GitHub
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;