function TechStack() {
  const techStack = [
    {
      category: "Languages",
      items: [
        "JavaScript (ES6+)",
        "Python",
        "HTML5 & CSS3",
        "SQL"
      ],
    },
    {
      category: "Frameworks & Libraries",
      items: [
        "React (Hooks, Context, Redux)",
        "Node.js & Express",
        "Tailwind CSS",
        "MongoDB & PostgreSQL"
      ],
    },
    {
      category: "DevOps & Deployment",
      items: [
        "Docker & Containerization",
        "AWS (EC2, S3, Lambda)",
        "CI/CD with GitHub Actions",
        "Vercel & Render"
      ],
    },
    {
      category: "Testing & Quality",
      items: [
        "Jest & React Testing Library",
        "Cypress for E2E",
        "ESLint & Prettier",
        "Performance Monitoring"
      ],
    },
  ];

  return (
    <section id="tech-stack" className="py-24 px-6 bg-deep-slate">
      <div className="max-w-6xl mx-auto">

        {/* Section Header */}
        <div className="mb-14 text-center">
          <p className="text-electric-indigo font-semibold tracking-wide mb-2 font-heading">
            THE ENGINE
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white font-heading">
            Technologies Powering Scalable Solutions
          </h2>
        </div>

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
            I'm continuously expanding my skill set by learning modern technologies, 
            building projects, and staying curious about new developments in web development.
          </p>
        </div>

      </div>
    </section>
  );
}

export default TechStack;