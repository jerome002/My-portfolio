import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaGithub, FaLinkedin, FaTwitter, FaDownload } from "react-icons/fa";

function Contact() {
  return (
    <section id="contact" className="py-24 px-6 bg-deep-slate">
      <div className="max-w-3xl mx-auto text-center">

        {/* Section Header */}
        <p className="text-electric-indigo font-semibold tracking-wide mb-2 font-heading">
          CONTACT
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-heading">
          Let's Connect
        </h2>

        {/* Description */}
        <p className="text-text-secondary mb-10 leading-relaxed">
          I build backend systems focused on scalability, security, and maintainability. 
          Reach out for collaborations, freelance projects, or backend engineering opportunities.
        </p>

        {/* Contact Info */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 mb-8 text-text-secondary">
          <div className="flex items-center gap-3 hover:text-cyan-200 transition">
            <FaEnvelope className="text-cyan-400" />
            <a href="mailto:jkapkor@gmail.com" className="hover:underline">
              jkapkor@gmail.com
            </a>
          </div>
          <div className="flex items-center gap-3 hover:text-cyan-200 transition">
            <FaPhoneAlt className="text-cyan-400" />
            <span>+254 745515976</span>
          </div>
          <div className="flex items-center gap-3 hover:text-cyan-200 transition">
            <FaMapMarkerAlt className="text-cyan-400" />
            <span>Nairobi, Kenya</span>
          </div>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center gap-6 text-gray-700 text-2xl mb-8">
          <a href="https://github.com/jerome002" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:text-black transition">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/jerome-kapkor-6640b3191/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-blue-700 transition">
            <FaLinkedin />
          </a>
          <a href="https://twitter.com/G-kapkor" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="hover:text-blue-500 transition">
            <FaTwitter />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;