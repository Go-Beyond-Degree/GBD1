'use client'

import { ChevronDown, Menu, X } from 'lucide-react'
import { useState } from 'react'

function DeerMark() {
  return (
    <svg viewBox="0 0 38 42" className="h-9 w-7 text-signature" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M16 9c1-4 1-6-2-8M21 9c0-4 2-6 5-7M15 12c-5-1-8-3-10-6M21 12c4-1 7-3 9-6M13 15c-5 1-8 4-8 7 0 3 3 4 7 3" strokeWidth="1.3" />
      <path d="M17 10c-4 1-6 5-5 10l2 6-2 10m7-26c5 2 7 7 5 12l-3 5 3 9" strokeWidth="1.7" />
      <path d="M14 21c4 1 7 1 10-1M12 36l-4 4m7-4 3 4m3-4 5 2" strokeWidth="1.4" />
      <circle cx="19" cy="13" r=".7" fill="currentColor" stroke="none" />
    </svg>
  )
}

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="bg-primary-bg px-5 pt-5 sm:px-10 lg:px-16">
      <nav className="mx-auto flex max-w-[900px] items-center justify-between" aria-label="Primary navigation">
        <a href="#top" className="flex items-center gap-2" aria-label="Go Beyond Degree home">
          <DeerMark />
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
