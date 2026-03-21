function TechStack() {
  const techStack = [
    {
      category: "Backend Engineering",
      items: [
        "Node.js & Express",
        "TypeScript",
        "REST API Design",
        "Authentication (JWT, RBAC)",
        "Middleware Architecture",
        "Error Handling & Logging",
        "Microservices Fundamentals"
      ],
    },
    {
      category: "Database & Data Layer",
      items: [
        "PostgreSQL",
        "MongoDB",
        "Prisma ORM",
        "Mongoose",
        "Data Modeling",
        "Query Optimization"
      ],
    },
    {
      category: "Testing & Quality",
      items: [
        "Vitest",
        "Supertest",
        "API Testing",
        "Integration Testing",
        "Test Structuring"
      ],
    },
    {
      category: "Frontend Development",
      items: [
        "React (Hooks, Context)",
        "Tailwind CSS",
        "API Integration",
        "Component-Based Architecture",
        "Responsive UI Design"
      ],
    },
    {
      category: "DevOps & Infrastructure",
      items: [
        "Docker & Containerization",
        "CI/CD with GitHub Actions",
        "Environment Configuration",
        "Vercel Deployment",
        "Render Deployment"
      ],
    },
    {
      category: "Languages & Core",
      items: [
        "JavaScript (ES6+)",
        "TypeScript",
        "Python",
        "SQL",
        "HTML5 & CSS3"
      ],
    },
  ];

  return (
    <section id="tech-stack" className="py-24 px-6 bg-deep-slate">
      <div className="max-w-6xl mx-auto">

        {/* Section Header */}
        <div className="mb-14 text-center">
          <p className="text-electric-indigo font-semibold tracking-wide mb-2 font-heading">
            SKILLS
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white font-heading">
            Technologies & Systems I Work With
          </h2>
        </div>

        {/* Positioning Line */}
        <p className="text-slate-400 max-w-xl mx-auto mb-10 text-center">
          Focused on backend engineering, system design, and building production-ready services.
        </p>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {techStack.map((group) => (
            <div
              key={group.category}
              className="group card p-8 hover:shadow-xl hover:-translate-y-2 transition duration-300"
            >
              {/* Category */}
              <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
                <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
                {group.category}
              </h3>

              {/* Skills */}
              <ul className="space-y-3 text-slate-300 text-sm">
                {group.items.map((skill) => (
                  <li
                    key={skill}
                    className="flex items-start gap-2 group-hover:text-cyan-200 transition"
                  >
                    <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Highlight */}
        <div className="mt-14 text-center">
          <p className="text-slate-300 max-w-2xl mx-auto">
            I build backend systems with a focus on scalability, security, and maintainability, 
            while continuously improving in system design, testing, and DevOps practices.
          </p>
        </div>

      </div>
    </section>
  );
}

export default TechStack;