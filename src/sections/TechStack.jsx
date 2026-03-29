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
        "Node.js",
        "SQL",
        "HTML5 & CSS3"
      ],
    },
  ];

  return (
    <section id="tech-stack" className="py-24 px-6 bg-slate-50">
      <div className="max-w-6xl mx-auto">

        {/* Section Header */}
        <div className="mb-14 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 font-heading">
            Technologies & Systems I Work With
          </h2>
          <p className="mt-3 max-w-2xl text-slate-500 mx-auto">
            Professional toolkit centered on backend architecture, quality engineering,
            and delivery excellence.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {techStack.map((group) => (
            <article
              key={group.category}
              className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition transform hover:-translate-y-1"
            >
              <h3 className="text-xl font-semibold text-slate-900 mb-4 flex items-center gap-2">
                <span className="w-2 h-2 bg-indigo-500 rounded-full"></span>
                {group.category}
              </h3>

              <ul className="grid gap-2 text-slate-700 text-sm">
                {group.items.map((skill) => (
                  <li key={skill} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 mt-1 rounded-full bg-indigo-100"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        {/* Bottom Highlight */}
        <div className="mt-14 text-center">
          <p className="text-slate-500 max-w-2xl mx-auto">
            I deliver full-stack solutions with end-to-end quality: unit & integration tests, secure API design, and commercial-grade deployments.
          </p>
        </div>

      </div>
    </section>
  );
}

export default TechStack;