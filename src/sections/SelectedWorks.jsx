function SelectedWorks() {
  const projects = [
    {
      title: "FinFlow Platform",
      description: `
        **The Challenge:** Financial institutions were plagued by slow transaction processing and frequent system outages, resulting in customer dissatisfaction, lost revenue, and operational inefficiencies.
        
        **The Solution:** Architected a microservices architecture with API gateway orchestration, implementing event-driven communication and distributed caching to achieve horizontal scalability and fault tolerance.
        
        **The Impact:** Reduced transaction processing latency by 60% and improved system reliability, enabling seamless financial operations for enterprise clients with zero downtime during peak loads.
      `,
      tech: ["React", "Node.js", "Express", "MongoDB", "Microservices", "Docker", "Render"],
      live: "https://finflow-frontend-j8xm.onrender.com",
      github: "https://github.com/jerome002/finflow-platform",
    },
    {
      title: "Job Application Assistant",
      description: `
        **The Challenge:** Job seekers struggled with disorganized tracking of applications across multiple platforms, leading to missed opportunities, forgotten deadlines, and inefficient recruitment processes.
        
        **The Solution:** Developed a real-time dashboard with WebSocket integration for live updates, implementing memoization for performance optimization and a component library for consistent UI/UX.
        
        **The Impact:** Improved application success rates by 40% through automated reminders and centralized tracking, with 95% user satisfaction scores and reduced cognitive load for job seekers.
      `,
      tech: ["React", "Node.js", "Express", "MongoDB", "Socket.io", "Vercel"],
      live: "https://job-application-assistant-seven.vercel.app",
      github: "https://github.com/jerome002/job-app-platform",
    },
    {
      title: "Skill Swap API",
      description: `
        **The Challenge:** Professionals faced difficulties in finding suitable peers for skill exchange and mentorship, resulting in knowledge silos and limited opportunities for professional growth.
        
        **The Solution:** Built a RESTful API with user authentication, intelligent matching algorithms, and real-time notifications, leveraging Node.js and MongoDB for scalable backend services.
        
        **The Impact:** To connect over 500 users, enabling 200+ successful skill exchanges and fostering professional development through peer-to-peer learning and mentorship.
      `,
      tech: ["Node.js", "Express", "MongoDB", "JWT", "Socket.io", "Heroku"],
      live: "https://skill-swap-api.herokuapp.com",
      github: "https://github.com/jerome002/skill-swap-api",
    },
  ];

  return (
    <section id="selected-works" className="py-24 px-6 bg-deep-slate">
      <div className="max-w-6xl mx-auto">

        {/* Section Header */}
        <div className="mb-14 text-center">
        <p className="text-electric-indigo font-semibold tracking-wide mb-2 font-heading">
          SELECTED WORKS
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-white font-heading">
             Deep Dives into Scalable Engineering Solutions
          </h2>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="card p-8 hover:shadow-xl hover:-translate-y-2 transition duration-300"
            >
              {/* Project Title */}
              <h3 className="text-xl font-semibold text-white mb-4">
                {project.title}
              </h3>

              {/* Project Description */}
              <div className="text-text-secondary mb-4 leading-relaxed">
                {project.description.split('\n').filter(line => line.trim()).map((line, index) => (
                  <p key={index} className={index > 0 ? 'mt-2' : ''}>
                    {line.replace(/\*\*(.*?)\*\*/g, '$1').trim()}
                  </p>
                ))}
              </div>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="bg-refined-charcoal text-text-primary text-xs font-medium px-3 py-1 rounded-full"
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

export default SelectedWorks;