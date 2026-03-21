function SelectedWorks() {
  const projects = [
    {
  title: "Auth Service (Authentication Microservice)",
  description: `
    **Overview:** A production-oriented authentication service designed as a standalone microservice to handle user identity, access control, and secure session management.

    **What I Built:** Developed a modular authentication system that can be integrated into multiple applications, supporting secure login flows, token management, and role-based access control.

    **Key Engineering Work:**
    - Implemented JWT-based authentication with access and refresh tokens
    - Designed secure authentication flows (login, registration, token refresh)
    - Built Role-Based Access Control (RBAC) for protected routes
    - Structured the codebase into controllers, services, and middleware
    - Added centralized error handling and input validation
    - Integrated PostgreSQL with Prisma for reliable data management

    **Focus:** Authentication systems, API security, and production-ready backend architecture.
  `,
  tech: ["Node.js", "Express", "TypeScript", "PostgreSQL", "Prisma", "JWT", "Docker"],
  InProgress: "", 
  github: "https://github.com/jerome002/auth-service.git",
},
    {
      title: "FinFlow Platform",
      description: `
        **Overview:** A full-stack financial platform designed to handle transactions and user data reliably using a modular backend architecture.

        **What I Built:** Developed a microservices-inspired backend with clear service boundaries, handling transaction processing, user management, and API routing through a centralized gateway.

        **Key Engineering Work:**
        - Designed RESTful APIs for financial operations
        - Implemented structured error handling and logging
        - Integrated database operations with optimized queries
        - Containerized services using Docker for consistent deployment

        **Focus:** Backend architecture, scalability, and maintainability in a distributed system design.
      `,
      tech: ["React", "Node.js", "Express", "MongoDB", "Docker"],
      live: "https://finflow-frontend-j8xm.onrender.com",
      github: "https://github.com/jerome002/finflow-platform",
    },
    {
      title: "Job Application Assistant",
      description: `
        **Overview:** A full-stack application that helps users track and manage job applications in a centralized dashboard.

        **What I Built:** Created a React-based frontend integrated with a backend API to manage application data, user sessions, and real-time updates.

        **Key Engineering Work:**
        - Built REST APIs for CRUD operations on applications
        - Implemented real-time updates using WebSockets
        - Structured frontend components for scalability
        - Managed state and API communication efficiently

        **Focus:** Full-stack integration, real-time systems, and user-focused application design.
      `,
      tech: ["React", "Node.js", "Express", "MongoDB", "Socket.io"],
      live: "https://job-application-assistant-seven.vercel.app",
      github: "https://github.com/jerome002/job-app-platform",
    },
    {
      title: "Skill Swap API",
      description: `
        **Overview:** A backend service for connecting users interested in skill exchange and peer-to-peer learning.

        **What I Built:** Designed and implemented a RESTful API with authentication, user matching logic, and notification handling.

        **Key Engineering Work:**
        - Implemented JWT-based authentication and authorization
        - Designed database schemas for users and skill relationships
        - Built matching logic for connecting users
        - Developed modular route and service structure

        **Focus:** API design, authentication systems, and backend architecture.
      `,
      tech: ["Node.js", "Express", "MongoDB", "JWT"],
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
            Engineering Projects Focused on Real-World Systems
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