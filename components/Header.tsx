'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

const handleLinkClick = (sectionId: string) => {
  scrollToSection(sectionId);
  setIsMenuOpen(false);
};

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="py-6 px-4 sm:px-6 lg:px-8 bg-gray-900">
      <nav className="flex justify-between items-center max-w-7xl mx-auto">
        <Link href="/" className="text-2xl font-bold">AdeNugraha</Link>
        <div className="hidden md:flex space-x-4">
          <NavLinks scrollToSection={scrollToSection} />
        </div>
        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </nav>
      {isMenuOpen && (
        <div className="md:hidden mt-4">
          <NavLinks mobile scrollToSection={(sectionId) => handleLinkClick(sectionId)} />
        </div>
      )}
    </header>
  )
}

function NavLinks({ mobile = false, scrollToSection }: { mobile?: boolean; scrollToSection?: (sectionId: string) => void }) {
  const linkClass = mobile
    ? "block py-2 hover:text-blue-400 transition-colors"
    : "hover:text-blue-400 transition-colors";

  return (
    <>
      <button onClick={() => scrollToSection && scrollToSection('about')} className={linkClass}>About</button>
      <button onClick={() => scrollToSection && scrollToSection('skills')} className={linkClass}>Skills</button>
      <button onClick={() => scrollToSection && scrollToSection('contact')} className={linkClass}>Contact</button>
    </>
  );
}

