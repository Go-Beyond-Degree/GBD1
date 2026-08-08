import { Camera, Globe2, MessageCircle, Play } from 'lucide-react'

const groups = [
  { title: 'Explore', links: ['Programs', 'Projects', 'Resources', 'Blog'] },
  { title: 'Company', links: ['About Us', 'Our Mission', 'Careers', 'Contact'] },
  { title: 'Legal', links: ['Privacy Policy', 'Terms of Service', 'Refund Policy'] },
]

const socials = [
  { label: 'LinkedIn', icon: Globe2 },
  { label: 'Twitter', icon: MessageCircle },
  { label: 'YouTube', icon: Play },
  { label: 'Instagram', icon: Camera },
]

export default function Footer() {
  return (
    <footer id="about-us" className="border-t border-soft-border px-5 pb-8 pt-5 sm:px-10 lg:px-16">
      <div className="mx-auto grid max-w-[900px] grid-cols-2 gap-x-8 gap-y-8 md:grid-cols-[2fr_repeat(3,1fr)_1.45fr]">
        <div className="col-span-2 md:col-span-1">
          <a href="#top" className="display-serif flex items-center gap-2 text-[16px] tracking-[-.025em]">
            <span className="relative h-7 w-5 text-signature" aria-hidden="true">♞</span>
            Go Beyond Degree
          </a>
          <p className="mt-2 text-[10px] text-muted-text">Building builders. Shaping the future.</p>
          <div className="mt-4 flex gap-3 text-signature">
            {socials.map(({ label, icon: Icon }) => <a href="#" key={label} aria-label={label}><Icon size={13} strokeWidth={1.8} /></a>)}
          </div>
        </div>

        {groups.map((group) => (
          <div key={group.title}>
            <h2 className="mb-2 text-[10px] font-semibold text-signature">{group.title}</h2>
            <ul className="space-y-1 text-[10px] leading-[1.4] text-muted-text">
              {group.links.map((link) => <li key={link}><a href="#" className="hover:text-signature">{link}</a></li>)}
            </ul>
          </div>
        ))}

        <p className="self-end text-right text-[10px] leading-4 text-muted-text">© 2026 Go Beyond Degree.<br />All rights reserved.</p>
      </div>
    </footer>
  )
}
