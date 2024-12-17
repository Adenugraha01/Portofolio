import { Github, Linkedin, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer id="contact" className="py-10 px-4 sm:px-6 lg:px-8 text-center">
      <h2 className="text-2xl font-bold mb-6">Get In Touch</h2>
      <div className="flex justify-center space-x-6 mb-6">
        <a href="https://github.com/Adenugraha01" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors" aria-label="GitHub">
          <Github className="h-6 w-6" />
        </a>
        <a href="https://www.linkedin.com/in/ade-nugraha01" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors" aria-label="LinkedIn">
          <Linkedin className="h-6 w-6" />
        </a>
        <button onClick={() => window.location.href = 'mailto:adengrh31@gmail.com'} className="hover:text-blue-400 transition-colors">
          <Mail className="h-6 w-6" />
          <span className="sr-only">Email</span>
        </button>
      </div>
      <p className="text-sm text-gray-400">© Ade Nugraha. All rights reserved.</p>
    </footer>
  )
}

