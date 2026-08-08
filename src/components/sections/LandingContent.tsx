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
          <path d={`M266 ${step.y} H302 Q307 ${step.y} 307 ${step.y + 6} V${step.y + 47} Q307 ${step.y + 53} 313 ${step.y + 53} H348`} stroke="var(--color-soft-border)" strokeWidth="1" strokeDasharray="2 3" />
          <text x="360" y={step.y + 4} fill="var(--color-signature)" fontSize="10" fontFamily="Arial, sans-serif" letterSpacing="1.2">{step.label}</text>
          {index < steps.length - 1 && <path d={`M212 ${step.y + 21} V${steps[index + 1].y - 18}`} stroke="var(--color-soft-taupe)" strokeWidth="1.25" strokeDasharray="3 4" />}
        </g>
      ))}

      <g transform="translate(158 4)" stroke="var(--color-signature)" strokeWidth="1.15">
        <path d="M40 27 74 45 42 63 8 45Z" fill="var(--color-warm-ivory)" />
        <path d="m8 45 34 18v9L8 54Zm66 0L42 63v9l32-18Z" fill="var(--color-warm-ivory)" />
        <path d="M42 10c-9 0-14 9-10 17 2 4 6 6 6 11h8c0-5 4-7 6-11 4-8-1-17-10-17Z" />
        <path d="M38 41h8m-7 4h6m-3-41V0m-15 8-3-3m33 3 3-3m-38 16h-4m48 0h-4" />
      </g>

      <g transform="translate(144 68)" stroke="var(--color-signature)" strokeWidth="1.1">
        <path d="M56 31 93 51 56 71 19 51Z" fill="var(--color-warm-ivory)" />
        <path d="m19 51 37 20v9L19 60Zm74 0L56 71v9l37-20Z" fill="var(--color-warm-ivory)" />
        <rect x="25" y="16" width="32" height="25" rx="1" fill="var(--color-warm-ivory)" />
        <path d="M29 38h24m-15 4h10m-5 0v5" />
        <circle cx="69" cy="23" r="3" /><path d="M69 26v12m-6-6 6-4 6 4m-6 6 5 6" />
      </g>

      <g transform="translate(144 136)" stroke="var(--color-signature)" strokeWidth="1.1">
        <path d="M56 31 93 51 56 71 19 51Z" fill="var(--color-warm-ivory)" />
        <path d="m19 51 37 20v9L19 60Zm74 0L56 71v9l37-20Z" fill="var(--color-warm-ivory)" />
        <path d="m30 23 17-9 18 10-17 10Zm-1 1 18 10v22L29 46Zm18 10 18-10v22L47 56Z" fill="var(--color-warm-ivory)" />
        <circle cx="75" cy="26" r="3" /><path d="M75 29v12m-6-5 6-4 6 4m-6 5 5 5" />
      </g>

      <g transform="translate(144 204)" stroke="var(--color-signature)" strokeWidth="1.1">
        <path d="M56 31 93 51 56 71 19 51Z" fill="var(--color-warm-ivory)" />
        <path d="m19 51 37 20v9L19 60Zm74 0L56 71v9l37-20Z" fill="var(--color-warm-ivory)" />
        {[34, 49, 64].map((x, i) => <g key={x} transform={`translate(${x} ${i === 1 ? 14 : 20})`}><circle cx="0" cy="0" r="3" /><path d="M0 3v15m-6-8 6-4 6 4m-6 8-4 6m4-6 5 6" /></g>)}
      </g>

      <g transform="translate(158 272)" stroke="var(--color-signature)" strokeWidth="1.1">
        <path d="M40 27 74 45 42 63 8 45Z" fill="var(--color-warm-ivory)" />
        <path d="m8 45 34 18v9L8 54Zm66 0L42 63v9l32-18Z" fill="var(--color-warm-ivory)" />
        <path d="M26 45V31h7v14m4 0V24h7v21m4 0V17h7v28" fill="var(--color-warm-ivory)" />
        <path d="m24 27 12-9 9 4 13-13m-5 0h5v5" />
      </g>
    </svg>
  )
}


function Hero() {
  return (
    <section id="top" className="overflow-hidden px-5 pb-7 pt-8 sm:px-10 lg:px-16">
      <div className="mx-auto grid max-w-[900px] items-center gap-3 lg:grid-cols-[1.05fr_.95fr]">
        <div className="relative z-10">
          <p className="mb-5 text-[12px] font-semibold tracking-[.19em] text-signature">LEARN · BUILD · SHIP · GROW</p>
          <h1 className="display-serif text-[43px] leading-[1.05] tracking-[-.047em] text-primary-text sm:text-[47px]">
            Build Real Products.<br /><span className="text-signature">Beyond Just a Degree.</span>
          </h1>
          <div className="my-6 h-0.5 w-12 bg-signature"></div>
          <p className="max-w-[355px] text-[14px] leading-[1.62] text-muted-text">A builder fellowship for ambitious students to learn, collaborate, ship products, and grow careers that matter.</p>
          <div className="mt-6 flex flex-wrap gap-4">
            <a href="#newsletter" className="inline-flex items-center gap-3 rounded-md bg-signature px-5 py-[11px] text-[12px] font-medium text-white shadow-sm transition hover:bg-signature/90">Join Free Webinar <ArrowRight size={15} strokeWidth={1.4} /></a>
            <a href="#programs" className="inline-flex items-center gap-3 rounded-md border border-soft-border px-5 py-[11px] text-[12px] text-signature transition hover:bg-warm-ivory">Explore Programs <ArrowRight size={15} strokeWidth={1.4} /></a>
          </div>
          <div className="mt-7 flex items-center gap-3">
            <img src="/images/avatars.jpg" alt="500+ builders" className="h-7 w-auto mix-blend-multiply" />
            <p className="text-[11px] text-muted-text">500+ builders are already building the future.</p>
          </div>
        </div>
        <div className="hidden min-w-0 lg:block lg:-mr-16">
          <img src="/images/hero-illustration.jpg" alt="Path to growth" className="w-full h-auto object-contain mix-blend-multiply drop-shadow-xl" />
        </div>
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
      <div className="mx-auto grid max-w-[900px] grid-cols-2 rounded-xl border border-soft-border bg-warm-ivory px-5 py-4 shadow-[0_5px_17px_rgba(76,55,39,.04)] md:grid-cols-4 md:px-8 md:py-[17px]">
        {stats.map(({ icon: Icon, value, label }, index) => <div key={label} className={`flex items-center justify-center gap-3 py-1 ${index > 0 ? 'md:border-l md:border-soft-border' : ''}`}>
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#EAE6E1]">
            <Icon size={22} className="text-signature" strokeWidth={1.9} />
          </div>
          <div><p className="display-serif text-[26px] leading-6 tracking-[-.04em]">{value}</p><p className="mt-1 text-[10px] text-muted-text">{label}</p></div>
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
      <div className="mx-auto max-w-[850px] text-center"><h2 className="display-serif text-[25px] tracking-[-.035em]">A New Kind of Learning</h2><p className="mt-1 text-[12px] text-muted-text">Hands-on. Collaborative. Outcome-driven.</p></div>
      <div className="mx-auto mt-2 grid max-w-[850px] gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {features.map(({ icon: Icon, title, body }) => <article key={title} className="min-h-[162px] rounded-lg border border-soft-border bg-warm-ivory px-5 py-4 shadow-[0_2px_8px_rgba(76,55,39,.035)]">
          <Icon size={26} className="text-signature" strokeWidth={1.8} />
          <h3 className="display-serif mt-3 text-[16px] tracking-[-.02em]">{title}</h3>
          <p className="mt-2 text-[11px] leading-[1.45] text-muted-text">{body}</p>
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
  return <div className="mx-auto flex max-w-[890px] items-center justify-between"><h2 className="display-serif text-[20px] tracking-[-.03em]">{title}</h2><a href="#" className="inline-flex items-center gap-2 text-[10px] text-signature">{action} <ArrowRight size={13} strokeWidth={1.3} /></a></div>
}

function Tracks() {
  return (
    <section id="programs" className="px-5 pb-0 pt-4 sm:px-10 lg:px-16">
      <SectionTitle title="Career-Focused Builder Tracks" action="View All Programs" />
      <div className="hide-scrollbar mx-auto mt-2 grid max-w-[890px] grid-flow-col auto-cols-[166px] items-start gap-3 overflow-x-auto pb-1 lg:grid-flow-row lg:grid-cols-5 lg:overflow-visible">
        {tracks.map(({ icon: Icon, title, body, popular }) => <article key={title} className="relative h-[153px] overflow-hidden rounded-lg border border-soft-border bg-warm-ivory p-4 shadow-[0_2px_8px_rgba(76,55,39,.035)]">
          {popular && <span className="absolute right-3 top-2 rounded-full bg-signature px-2 py-1 text-[8px] font-semibold text-white">Popular</span>}
          <Icon size={25} className="text-signature" strokeWidth={1.6} />
          <h3 className="mt-3 text-[11px] font-semibold leading-[1.15] text-primary-text">{title}</h3>
          <p className="mt-2 min-h-9 text-[10px] leading-[1.45] text-muted-text">{body}</p>
          <p className="mt-2 text-[9px] text-muted-text">• 16 Weeks&nbsp;&nbsp; • &nbsp;Live Cohort</p>
        </article>)}
      </div>
    </section>
  )
}

const projects = [
  { title: 'Resume Analyzer', body: 'AI Career Operating System', tags: ['Resume Analyzer', 'Optimizer', 'Cover Letter'], image: '/images/projects/MJS_RA.png' },
  { title: 'Resume Optimizer', body: 'Skill Intelligence Platform', tags: ['Skill Mapping', 'Gap Analysis', 'Career Paths'], image: '/images/projects/MJS_RO.png' },
  { title: 'CoverLetter Generator', body: 'AI Cover Letter Generator', tags: ['Personalized', 'ATS Friendly', 'Smart Templates'], image: '/images/projects/MJS_CL.png' },
]

function Projects() {
  return (
    <section id="projects" className="px-5 pb-0 pt-3 sm:px-10 lg:px-16">
      <SectionTitle title="Real Projects. Real Impact." action="See All Projects" />
      <div className="mx-auto mt-2 grid max-w-[890px] gap-4 md:grid-cols-3">
        {projects.map((project) => <article key={project.title} className="overflow-hidden rounded-lg border border-soft-border bg-warm-ivory shadow-[0_2px_8px_rgba(76,55,39,.035)]"><img src={project.image} alt={project.title} className="w-full h-auto object-cover border-b border-soft-border" /><div className="px-4 py-3"><h3 className="text-[12px] font-semibold">{project.title}</h3><p className="mt-1 text-[10px] text-muted-text">{project.body}</p><div className="mt-2 flex flex-wrap gap-1">{project.tags.map((tag) => <span key={tag} className="rounded-full border border-soft-border bg-primary-bg px-1.5 py-[2px] text-[8px] text-muted-text">{tag}</span>)}</div></div></article>)}
      </div>
    </section>
  )
}


function Newsletter() {
  return (
    <section id="newsletter" className="px-5 pb-3 pt-0 sm:px-10 lg:px-16">
      <div className="mx-auto flex max-w-[890px] flex-col items-center gap-4 border-y border-soft-border py-2 md:flex-row md:justify-between">
        <div className="flex items-center gap-4"><span className="flex h-12 w-12 items-center justify-center rounded-lg border border-soft-border bg-warm-ivory text-signature"><Mail size={24} strokeWidth={1.35} /></span><div><h2 className="display-serif text-[16px] tracking-[-.02em]">Join our community of builders.</h2><p className="mt-1 text-[10px] text-muted-text">Get free resources, updates, and webinar invites.</p></div></div>
        <form className="flex w-full max-w-[305px]" action="#"><input aria-label="Email address" type="email" placeholder="Enter your email" className="min-w-0 flex-1 rounded-l-md border border-r-0 border-soft-border bg-warm-ivory px-3 py-2 text-[10px] outline-none placeholder:text-soft-taupe focus:border-signature" /><button type="submit" className="inline-flex items-center gap-3 rounded-r-md bg-signature px-4 py-2 text-[10px] font-medium text-white">Join Now <ArrowRight size={13} /></button></form>
      </div>
    </section>
  )
}

export default function LandingContent() {
  return <main><Hero /><Stats /><Features /><Tracks /><Projects /><Newsletter /></main>
}
