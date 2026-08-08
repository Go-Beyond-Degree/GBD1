import {
  ArrowRight,
  BrainCircuit,
  Camera,
  Code2,
  Mail,
  Quote,
  Rocket,
  Send,
  ShieldCheck,
  Star,
  Target,
  TrendingUp,
  Users,
  UsersRound,
} from 'lucide-react'

const accent = '#806956'

function JourneyArtwork() {
  const steps = [
    { label: 'IDEA', y: 44, type: 'bulb' },
    { label: 'PROTOTYPE', y: 108, type: 'screen' },
    { label: 'PRODUCT', y: 175, type: 'box' },
    { label: 'USERS', y: 243, type: 'people' },
    { label: 'GROWTH', y: 309, type: 'chart' },
  ] as const

  return (
    <svg viewBox="0 0 430 360" className="h-full w-full" fill="none" aria-hidden="true">
      <defs>
        <pattern id="dots" width="12" height="12" patternUnits="userSpaceOnUse"><circle cx="2" cy="2" r="1" fill="#b9ab9f" opacity=".33" /></pattern>
      </defs>
      <rect x="330" y="32" width="95" height="214" fill="url(#dots)" />
      {steps.map((step, index) => (
        <g key={step.label}>
          <circle cx="263" cy={step.y} r="3" fill={accent} />
          <path d={`M266 ${step.y} H302 Q307 ${step.y} 307 ${step.y + 6} V${step.y + 47} Q307 ${step.y + 53} 313 ${step.y + 53} H348`} stroke="#d6cbc1" strokeWidth="1" strokeDasharray="2 3" />
          <text x="360" y={step.y + 4} fill="#806956" fontSize="10" fontFamily="Arial, sans-serif" letterSpacing="1.2">{step.label}</text>
          {index < steps.length - 1 && <path d={`M212 ${step.y + 21} V${steps[index + 1].y - 18}`} stroke="#bcae9f" strokeWidth="1.25" strokeDasharray="3 4" />}
        </g>
      ))}

      <g transform="translate(158 4)" stroke="#806956" strokeWidth="1.15">
        <path d="M40 27 74 45 42 63 8 45Z" fill="#fffdfa" />
        <path d="m8 45 34 18v9L8 54Zm66 0L42 63v9l32-18Z" fill="#f9f6f2" />
        <path d="M42 10c-9 0-14 9-10 17 2 4 6 6 6 11h8c0-5 4-7 6-11 4-8-1-17-10-17Z" />
        <path d="M38 41h8m-7 4h6m-3-41V0m-15 8-3-3m33 3 3-3m-38 16h-4m48 0h-4" />
      </g>

      <g transform="translate(144 68)" stroke="#806956" strokeWidth="1.1">
        <path d="M56 31 93 51 56 71 19 51Z" fill="#fffdfa" />
        <path d="m19 51 37 20v9L19 60Zm74 0L56 71v9l37-20Z" fill="#f9f6f2" />
        <rect x="25" y="16" width="32" height="25" rx="1" fill="#fffdfa" />
        <path d="M29 38h24m-15 4h10m-5 0v5" />
        <circle cx="69" cy="23" r="3" /><path d="M69 26v12m-6-6 6-4 6 4m-6 6 5 6" />
      </g>

      <g transform="translate(144 136)" stroke="#806956" strokeWidth="1.1">
        <path d="M56 31 93 51 56 71 19 51Z" fill="#fffdfa" />
        <path d="m19 51 37 20v9L19 60Zm74 0L56 71v9l37-20Z" fill="#f9f6f2" />
        <path d="m30 23 17-9 18 10-17 10Zm-1 1 18 10v22L29 46Zm18 10 18-10v22L47 56Z" fill="#fffdfa" />
        <circle cx="75" cy="26" r="3" /><path d="M75 29v12m-6-5 6-4 6 4m-6 5 5 5" />
      </g>

      <g transform="translate(144 204)" stroke="#806956" strokeWidth="1.1">
        <path d="M56 31 93 51 56 71 19 51Z" fill="#fffdfa" />
        <path d="m19 51 37 20v9L19 60Zm74 0L56 71v9l37-20Z" fill="#f9f6f2" />
        {[34, 49, 64].map((x, i) => <g key={x} transform={`translate(${x} ${i === 1 ? 14 : 20})`}><circle cx="0" cy="0" r="3" /><path d="M0 3v15m-6-8 6-4 6 4m-6 8-4 6m4-6 5 6" /></g>)}
      </g>

      <g transform="translate(158 272)" stroke="#806956" strokeWidth="1.1">
        <path d="M40 27 74 45 42 63 8 45Z" fill="#fffdfa" />
        <path d="m8 45 34 18v9L8 54Zm66 0L42 63v9l32-18Z" fill="#f9f6f2" />
        <path d="M26 45V31h7v14m4 0V24h7v21m4 0V17h7v28" fill="#fffdfa" />
        <path d="m24 27 12-9 9 4 13-13m-5 0h5v5" />
      </g>
    </svg>
  )
}

function Avatar({ index }: { index: number }) {
  const gradients = ['from-[#1e242b] to-[#c39b7a]', 'from-[#775d4e] to-[#e0b590]', 'from-[#111827] to-[#9c6b50]', 'from-[#3c2d27] to-[#c99d79]', 'from-[#2b3139] to-[#9d8170]']
  return <span className={`relative block h-7 w-7 rounded-full border-2 border-[#fbfaf8] bg-gradient-to-br ${gradients[index]}`}><span className="absolute left-1/2 top-[5px] h-2 w-2 -translate-x-1/2 rounded-full bg-[#e2b28f]" /><span className="absolute bottom-0 left-1/2 h-3 w-4 -translate-x-1/2 rounded-t-full bg-[#272321]" /></span>
}

function Hero() {
  return (
    <section id="top" className="overflow-hidden px-5 pb-7 pt-8 sm:px-10 lg:px-16">
      <div className="mx-auto grid max-w-[900px] items-center gap-3 lg:grid-cols-[1.05fr_.95fr]">
        <div className="relative z-10">
          <p className="mb-5 text-[12px] font-semibold tracking-[.19em] text-[#806956]">LEARN · BUILD · SHIP · GROW</p>
          <h1 className="display-serif text-[43px] leading-[1.05] tracking-[-.047em] text-[#15130f] sm:text-[47px]">
            Build Real Products.<br /><span className="text-[#806956]">Beyond Just a Degree.</span>
          </h1>
          <p className="mt-5 max-w-[355px] text-[14px] leading-[1.62] text-[#3d3b39]">Go Beyond Degree is a builder fellowship where ambitious students collaborate, build, ship products, and grow their careers.</p>
          <div className="mt-5 flex flex-wrap gap-4">
            <a href="#newsletter" className="inline-flex items-center gap-3 rounded-md bg-[#806956] px-5 py-[11px] text-[12px] font-medium text-white shadow-sm transition hover:bg-[#695442]">Join Free Webinar <ArrowRight size={15} strokeWidth={1.4} /></a>
            <a href="#programs" className="inline-flex items-center rounded-md border border-[#aa9584] px-5 py-[11px] text-[12px] text-[#715a47] transition hover:bg-[#f3eeea]">Explore Programs</a>
          </div>
          <div className="mt-5 flex items-center gap-3">
            <div className="flex -space-x-1.5">{[0, 1, 2, 3, 4].map((index) => <Avatar index={index} key={index} />)}</div>
            <p className="text-[11px] text-[#4e4741]">500+ builders are already building the future.</p>
          </div>
        </div>
        <div className="hidden h-[340px] min-w-0 lg:block"><JourneyArtwork /></div>
      </div>
    </section>
  )
}

const stats = [
  { icon: Users, value: '500+', label: 'Builders' },
  { icon: Code2, value: '20+', label: 'Products Built' },
  { icon: Target, value: '95%', label: 'Career Outcomes' },
  { icon: Star, value: '4.9/5', label: 'Student Rating' },
]

function Stats() {
  return (
    <section className="px-5 sm:px-10 lg:px-16">
      <div className="mx-auto grid max-w-[850px] grid-cols-2 rounded-xl border border-[#ece7e2] bg-white px-5 py-4 shadow-[0_5px_17px_rgba(76,55,39,.04)] md:grid-cols-4 md:px-8 md:py-[17px]">
        {stats.map(({ icon: Icon, value, label }, index) => <div key={label} className={`flex items-center justify-center gap-3 py-1 ${index > 0 ? 'md:border-l md:border-[#eee9e4]' : ''}`}>
          <Icon size={27} className="text-[#806956]" strokeWidth={1.9} />
          <div><p className="display-serif text-[26px] leading-6 tracking-[-.04em]">{value}</p><p className="mt-1 text-[10px] text-[#3e3833]">{label}</p></div>
        </div>)}
      </div>
    </section>
  )
}

const features = [
  { icon: UsersRound, title: 'Learn in Teams', body: 'Collaborate with driven peers and learn by solving real problems together.' },
  { icon: Code2, title: 'Build Real Products', body: 'Work on industry-grade projects from day one. Not just assignments.' },
  { icon: Rocket, title: 'Ship & Get Feedback', body: 'Launch your products, get real user feedback, and iterate to improve.' },
  { icon: TrendingUp, title: 'Grow Your Career', body: 'Build a strong portfolio, get mentorship, and open doors to opportunities.' },
]

function Features() {
  return (
    <section id="how-it-works" className="px-5 pb-2 pt-3 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-[850px] text-center"><h2 className="display-serif text-[25px] tracking-[-.035em]">A New Kind of Learning</h2><p className="mt-1 text-[12px] text-[#4f4b47]">Hands-on. Collaborative. Outcome-driven.</p></div>
      <div className="mx-auto mt-2 grid max-w-[850px] gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {features.map(({ icon: Icon, title, body }) => <article key={title} className="min-h-[162px] rounded-lg border border-[#ece7e2] bg-white px-5 py-4 shadow-[0_2px_8px_rgba(76,55,39,.035)]">
          <Icon size={26} className="text-[#806956]" strokeWidth={1.8} />
          <h3 className="display-serif mt-3 text-[16px] tracking-[-.02em]">{title}</h3>
          <p className="mt-2 text-[11px] leading-[1.45] text-[#4a4541]">{body}</p>
        </article>)}
      </div>
    </section>
  )
}

const tracks = [
  { icon: BrainCircuit, title: 'AI Product Engineer', body: 'Build AI-powered products from idea to deployment.', popular: true },
  { icon: UsersRound, title: 'AI Solution Architect', body: 'Design scalable AI solutions for real-world problems.' },
  { icon: ShieldCheck, title: 'Reliability Architect', body: 'Build resilient, scalable and production-ready systems.' },
  { icon: Camera, title: 'Computer Vision Engineer', body: 'Master image processing & computer vision applications.' },
  { icon: Send, title: 'Forward Deployment Engineer', body: 'Deploy AI solutions for clients and solve real business needs.' },
]

function SectionTitle({ title, action }: { title: string; action: string }) {
  return <div className="mx-auto flex max-w-[890px] items-center justify-between"><h2 className="display-serif text-[20px] tracking-[-.03em]">{title}</h2><a href="#" className="inline-flex items-center gap-2 text-[10px] text-[#715a47]">{action} <ArrowRight size={13} strokeWidth={1.3} /></a></div>
}

function Tracks() {
  return (
    <section id="programs" className="px-5 pb-0 pt-4 sm:px-10 lg:px-16">
      <SectionTitle title="Career-Focused Builder Tracks" action="View All Programs" />
      <div className="hide-scrollbar mx-auto mt-2 grid max-w-[890px] grid-flow-col auto-cols-[166px] items-start gap-3 overflow-x-auto pb-1 lg:grid-flow-row lg:grid-cols-5 lg:overflow-visible">
        {tracks.map(({ icon: Icon, title, body, popular }) => <article key={title} className="relative h-[153px] overflow-hidden rounded-lg border border-[#ece7e2] bg-white p-4 shadow-[0_2px_8px_rgba(76,55,39,.035)]">
          {popular && <span className="absolute right-3 top-2 rounded-full bg-[#806956] px-2 py-1 text-[8px] font-semibold text-white">Popular</span>}
          <Icon size={25} className="text-[#806956]" strokeWidth={1.6} />
          <h3 className="mt-3 text-[11px] font-semibold leading-[1.15] text-[#24201d]">{title}</h3>
          <p className="mt-2 min-h-9 text-[10px] leading-[1.45] text-[#4a4541]">{body}</p>
          <p className="mt-2 text-[9px] text-[#564e48]">• 16 Weeks&nbsp;&nbsp; • &nbsp;Live Cohort</p>
        </article>)}
      </div>
    </section>
  )
}

const projects = [
  { title: 'MyJobSecret', body: 'AI Career Operating System', tags: ['Resume Analyzer', 'Optimizer', 'Cover Letter'], color: 'from-[#11181d] via-[#17242a] to-[#0e1418]' },
  { title: 'Skill Radar', body: 'Skill Intelligence Platform', tags: ['Skill Mapping', 'Gap Analysis', 'Career Paths'], color: 'from-[#192028] via-[#10141c] to-[#242b31]' },
  { title: 'CoverCraft AI', body: 'AI Cover Letter Generator', tags: ['Personalized', 'ATS Friendly', 'Smart Templates'], color: 'from-[#1c2429] via-[#171d22] to-[#0b1013]' },
]

function DashboardPreview({ title, color }: { title: string; color: string }) {
  return <div className={`relative h-[87px] overflow-hidden bg-gradient-to-br ${color} px-5 py-3 text-white`}>
    <div className="flex items-center gap-2 text-[7px] text-white/70"><span className="flex h-3 w-3 items-center justify-center rounded bg-[#a07e62] text-[7px] text-white">⌘</span><span className="font-semibold text-white/90">{title}</span></div>
    <div className="mt-3 grid grid-cols-[45px_1fr] gap-2">
      <div className="space-y-1 rounded bg-white/[.035] p-1.5"><i className="block h-1 w-6 rounded bg-white/20" /><i className="block h-1 w-5 rounded bg-white/10" /><i className="block h-1 w-6 rounded bg-white/10" /></div>
      <div className="rounded border border-white/10 bg-white/[.035] p-2"><i className="block h-1.5 w-1/3 rounded bg-white/25" /><div className="mt-2 grid grid-cols-3 gap-1"><i className="h-6 rounded bg-[#5a6a68]/50" /><i className="h-6 rounded bg-white/[.06]" /><i className="h-6 rounded bg-white/[.06]" /></div></div>
    </div>
    <div className="absolute right-5 top-4 h-1 w-9 rounded bg-white/[.1]" />
  </div>
}

function Projects() {
  return (
    <section id="projects" className="px-5 pb-0 pt-3 sm:px-10 lg:px-16">
      <SectionTitle title="Real Projects. Real Impact." action="See All Projects" />
      <div className="mx-auto mt-2 grid max-w-[890px] gap-4 md:grid-cols-3">
        {projects.map((project) => <article key={project.title} className="overflow-hidden rounded-lg border border-[#ece7e2] bg-white shadow-[0_2px_8px_rgba(76,55,39,.035)]"><DashboardPreview title={project.title} color={project.color} /><div className="px-4 py-2"><h3 className="text-[12px] font-semibold">{project.title}</h3><p className="mt-1 text-[10px] text-[#4a4541]">{project.body}</p><div className="mt-1 flex flex-wrap gap-1">{project.tags.map((tag) => <span key={tag} className="rounded-full border border-[#e8e3de] bg-[#fdfcfb] px-1.5 py-[2px] text-[8px] text-[#4b4540]">{tag}</span>)}</div></div></article>)}
      </div>
    </section>
  )
}

function Testimonial() {
  return (
    <section className="px-5 pb-0 pt-4 sm:px-10 lg:px-16">
      <div className="mx-auto flex max-w-[770px] items-center gap-8 rounded-xl border border-[#eee9e3] bg-white px-10 py-7 shadow-[0_2px_8px_rgba(76,55,39,.025)]">
        <Quote size={38} className="shrink-0 rotate-180 text-[#d8d1cb]" fill="currentColor" strokeWidth={0} />
        <div className="flex-1"><p className="text-[11px] leading-[1.5] text-[#37322e]">GBD changed the way I learn. I didn’t just understand concepts—<br className="hidden sm:block" />I built real products with amazing people and got an internship<br className="hidden sm:block" />I’m proud of.</p></div>
        <div className="flex shrink-0 items-center gap-3"><span className="relative h-11 w-11 overflow-hidden rounded-full bg-[#15191d]"><span className="absolute left-[15px] top-2 h-3 w-3 rounded-full bg-[#c88761]" /><span className="absolute bottom-0 left-[10px] h-5 w-6 rounded-t-full bg-[#3c4242]" /></span><div><p className="text-[11px] font-semibold">Rohit Sharma</p><p className="mt-1 text-[9px] text-[#4e4741]">AI Product Engineer Intern at Zeta</p></div></div>
      </div>
      <div className="-mt-1 flex justify-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-[#806956]" /><span className="h-1.5 w-1.5 rounded-full border border-[#ded6cf]" /><span className="h-1.5 w-1.5 rounded-full border border-[#ded6cf]" /></div>
    </section>
  )
}

function Newsletter() {
  return (
    <section id="newsletter" className="px-5 pb-3 pt-0 sm:px-10 lg:px-16">
      <div className="mx-auto flex max-w-[890px] flex-col items-center gap-4 border-y border-[#eee9e3] py-2 md:flex-row md:justify-between">
        <div className="flex items-center gap-4"><span className="flex h-12 w-12 items-center justify-center rounded-lg border border-[#eee9e3] bg-white text-[#806956]"><Mail size={24} strokeWidth={1.35} /></span><div><h2 className="display-serif text-[16px] tracking-[-.02em]">Join our community of builders.</h2><p className="mt-1 text-[10px] text-[#3e3833]">Get free resources, updates, and webinar invites.</p></div></div>
        <form className="flex w-full max-w-[305px]" action="#"><input aria-label="Email address" type="email" placeholder="Enter your email" className="min-w-0 flex-1 rounded-l-md border border-r-0 border-[#e4ddd6] bg-white px-3 py-2 text-[10px] outline-none placeholder:text-[#aea49b] focus:border-[#806956]" /><button type="submit" className="inline-flex items-center gap-3 rounded-r-md bg-[#806956] px-4 py-2 text-[10px] font-medium text-white">Join Now <ArrowRight size={13} /></button></form>
      </div>
    </section>
  )
}

export default function LandingContent() {
  return <main><Hero /><Stats /><Features /><Tracks /><Projects /><Testimonial /><Newsletter /></main>
}
