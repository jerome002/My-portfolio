function About() {
  return (
    <section id="about" className="py-24 bg-slate-950 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Section Header */}
        <div className="mb-12">
          <p className="text-cyan-400 font-semibold tracking-wide mb-2">
            ABOUT ME
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Building scalable systems and digital solutions
          </h2>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* Left Side - Story */}
          <div>
            <p className="text-slate-300 leading-relaxed text-lg">
              I'm a passionate Full-Stack Developer with experience building web applications using the MERN stack. I enjoy creating solutions that make a real difference in people's lives.
            </p>

            <p className="text-slate-300 mt-6 leading-relaxed">
              My journey in software development started with a curiosity about how things work on the web. I've grown from basic HTML/CSS to building complex full-stack applications, and I'm always excited to learn new technologies.
            </p>

            <p className="text-slate-300 mt-6 leading-relaxed">
              Currently, I'm working on projects like job application platforms and financial management tools, while continuously improving my skills in modern development practices.
            </p>
          </div>

          {/* Right Side - Highlights */}
          <div className="grid gap-6">

            <div className="card p-6 hover:shadow-lg transition">
              <h3 className="font-semibold text-white mb-2">
                Problem-Solving Mindset
              </h3>
              <p className="text-slate-300 text-sm">
                I enjoy breaking down complex problems and finding practical solutions through code.
              </p>
            </div>

            <div className="card p-6 hover:shadow-lg transition">
              <h3 className="font-semibold text-white mb-2">
                Continuous Learning
              </h3>
              <p className="text-slate-300 text-sm">
                I'm always excited to learn new technologies and improve my development skills.
              </p>
            </div>

            <div className="card p-6 hover:shadow-lg transition">
              <h3 className="font-semibold text-white mb-2">
                Team Player
              </h3>
              <p className="text-slate-300 text-sm">
                I work well in collaborative environments and value feedback from experienced developers.
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default About;