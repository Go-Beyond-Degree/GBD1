'use client'

import { ChevronDown, Menu, X } from 'lucide-react'
import { useState } from 'react'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="bg-primary-bg px-5 pt-5 sm:px-10 lg:px-16">
      <nav className="mx-auto flex max-w-7xl items-center justify-between" aria-label="Primary navigation">
        <a href="#top" className="flex items-center gap-2" aria-label="Go Beyond Degree home">
          <img src="/brand/img/logo.png" alt="Go Beyond Degree Logo" className="h-10 w-auto object-contain" />
          <span className="display-serif text-[16px] leading-[1.08] tracking-[-0.025em]">Go Beyond<br />Degree</span>
        </a>

        <div className="hidden items-center gap-10 text-[12px] text-primary-text md:flex">
          <a href="#programs" className="flex items-center gap-1.5 hover:text-signature">
            Programs <ChevronDown size={13} strokeWidth={1.5} />
          </a>
          <a href="#projects" className="hover:text-signature">Projects</a>
          <a href="#community" className="hover:text-signature">Community</a>
          <a href="#resources" className="flex items-center gap-1.5 hover:text-signature">
            Resources <ChevronDown size={13} strokeWidth={1.5} />
          </a>
          <a href="#about-us" className="hover:text-signature">About Us</a>
        </div>

        <a href="#newsletter" className="hidden rounded-md bg-signature px-4 py-[10px] text-[12px] font-medium text-white shadow-sm transition-colors hover:bg-signature/90 md:block">
          Join Free Webinar
        </a>

        <button type="button" className="p-2 text-secondary-dark md:hidden" aria-label={isOpen ? 'Close menu' : 'Open menu'} aria-expanded={isOpen} onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={21} /> : <Menu size={21} />}
        </button>

        {isOpen && (
          <div className="absolute top-[72px] right-5 left-5 z-50 rounded-lg border border-soft-border bg-warm-ivory p-4 shadow-xl md:hidden">
            <a href="#programs" onClick={() => setIsOpen(false)} className="flex items-center justify-between border-b border-soft-border py-3 text-sm">Programs <ChevronDown size={15} /></a>
            <a href="#projects" onClick={() => setIsOpen(false)} className="block border-b border-soft-border py-3 text-sm">Projects</a>
            <a href="#community" onClick={() => setIsOpen(false)} className="block border-b border-soft-border py-3 text-sm">Community</a>
            <a href="#resources" onClick={() => setIsOpen(false)} className="flex items-center justify-between border-b border-soft-border py-3 text-sm">Resources <ChevronDown size={15} /></a>
            <a href="#about-us" onClick={() => setIsOpen(false)} className="block border-b border-soft-border py-3 text-sm">About Us</a>
            <a href="#newsletter" onClick={() => setIsOpen(false)} className="mt-4 block rounded-md bg-signature px-4 py-3 text-center text-sm text-white">Join Free Webinar</a>
          </div>
        )}
      </nav>
    </header>
  )
}
