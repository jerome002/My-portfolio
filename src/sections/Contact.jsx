import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

function Contact() {
  return (
    <section id="contact" className="py-24 px-6 bg-slate-50">
      <div className="max-w-3xl mx-auto text-center">

        {/* Section Header */}
        <p className="text-blue-600 font-semibold tracking-wide mb-2">
          CONTACT
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
          Get in Touch
        </h2>

        {/* Description */}
        <p className="text-gray-600 mb-10 leading-relaxed">
          I'm always ready to <strong>collaborate</strong> on impactful projects, 
          open to <strong>freelance opportunities</strong>, and available for 
          <strong> remote or full-time roles</strong>. If you have a project in mind 
          or just want to say hello, feel free to connect!
        </p>

        {/* Contact Info */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 mb-8">
          <div className="flex items-center gap-3 text-gray-700 hover:text-blue-600 transition">
            <FaEnvelope className="text-blue-600" />
            <a href="mailto:jkapkor@gmail.com" className="hover:underline">jkapkor@gmail.com</a>
          </div>
          <div className="flex items-center gap-3 text-gray-700 hover:text-green-600 transition">
            <FaPhoneAlt className="text-green-600" />
            <span>+254 745515976</span>
          </div>
          <div className="flex items-center gap-3 text-gray-700 hover:text-red-600 transition">
            <FaMapMarkerAlt className="text-red-600" />
            <span>Nairobi, Kenya</span>
          </div>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center gap-6 text-gray-700 text-2xl">
          <a href="https://github.com/jerome002" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:text-black transition">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/jerome-kapkor-6640b3191/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-blue-700 transition">
            <FaLinkedin />
          </a>
          <a href="https://twitter.com/jerome002" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="hover:text-blue-500 transition">
            <FaTwitter />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;