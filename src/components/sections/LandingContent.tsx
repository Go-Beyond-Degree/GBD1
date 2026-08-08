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



function Hero() {
  return (
    <section id="top" className="overflow-hidden px-5 pb-7 pt-8 sm:px-10 lg:px-16">
      <div className="mx-auto grid max-w-7xl items-center gap-8 lg:grid-cols-2 lg:gap-16">
        <div className="relative z-10 py-6 lg:py-16">
          <p className="mb-5 text-[12px] font-semibold tracking-[.19em] text-signature">LEARN · BUILD · SHIP · GROW</p>
          <h1 className="display-serif text-[43px] leading-[1.05] tracking-[-.047em] text-primary-text sm:text-[47px] md:text-[56px] lg:text-[64px]">
            Build Real Products.<br /><span className="text-signature">Beyond Just a Degree.</span>
          </h1>
          <div className="my-6 h-0.5 w-12 bg-signature"></div>
          <p className="max-w-[420px] text-[14px] leading-[1.62] text-muted-text sm:text-[16px]">A builder fellowship for ambitious students to learn, collaborate, ship products, and grow careers that matter.</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#newsletter" className="inline-flex items-center gap-3 rounded-md bg-signature px-6 py-3 text-[13px] font-medium text-white shadow-sm transition hover:bg-signature/90">Join Free Webinar <ArrowRight size={16} strokeWidth={1.4} /></a>
            <a href="#programs" className="inline-flex items-center gap-3 rounded-md border border-soft-border px-6 py-3 text-[13px] text-signature transition hover:bg-warm-ivory">Explore Programs <ArrowRight size={16} strokeWidth={1.4} /></a>
          </div>
          <div className="mt-10 flex items-center gap-4">
            <img src="/images/avatars.jpg" alt="500+ builders" className="h-8 w-auto mix-blend-multiply" />
            <p className="text-[12px] text-muted-text">500+ builders are already building the future.</p>
          </div>
        </div>
        <div className="hidden min-w-0 lg:block lg:scale-110 lg:transform">
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
      <div className="mx-auto grid max-w-7xl grid-cols-2 rounded-xl border border-soft-border bg-warm-ivory px-5 py-4 shadow-[0_5px_17px_rgba(76,55,39,.04)] md:grid-cols-4 md:px-8 md:py-[17px]">
        {stats.map(({ icon: Icon, value, label }, index) => <div key={label} className={`flex items-center justify-center gap-4 py-2 md:gap-5 ${index > 0 ? 'md:border-l md:border-soft-border' : ''}`}>
          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#EAE6E1]">
            <Icon size={26} className="text-signature" strokeWidth={1.9} />
          </div>
          <div><p className="display-serif text-[28px] leading-6 tracking-[-.04em]">{value}</p><p className="mt-1.5 text-[11px] font-medium text-muted-text">{label}</p></div>
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
    <section id="how-it-works" className="px-5 pb-2 pt-8 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-7xl text-center"><h2 className="display-serif text-[28px] tracking-[-.035em] sm:text-[32px]">A New Kind of Learning</h2><p className="mt-2 text-[14px] text-muted-text">Hands-on. Collaborative. Outcome-driven.</p></div>
      <div className="mx-auto mt-6 grid max-w-7xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {features.map(({ icon: Icon, title, body }) => <article key={title} className="min-h-[162px] rounded-lg border border-soft-border bg-warm-ivory px-6 py-5 shadow-[0_2px_8px_rgba(76,55,39,.035)]">
          <Icon size={28} className="text-signature" strokeWidth={1.8} />
          <h3 className="display-serif mt-4 text-[18px] tracking-[-.02em]">{title}</h3>
          <p className="mt-2 text-[13px] leading-[1.5] text-muted-text">{body}</p>
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
  return <div className="mx-auto flex max-w-7xl items-center justify-between"><h2 className="display-serif text-[24px] tracking-[-.03em] sm:text-[28px]">{title}</h2><a href="#" className="inline-flex items-center gap-2 text-[12px] font-medium text-signature hover:text-signature/80">{action} <ArrowRight size={14} strokeWidth={1.5} /></a></div>
}

function Tracks() {
  return (
    <section id="programs" className="px-5 pb-4 pt-10 sm:px-10 lg:px-16">
      <SectionTitle title="Career-Focused Builder Tracks" action="View All Programs" />
      <div className="hide-scrollbar mx-auto mt-6 grid max-w-7xl grid-flow-col auto-cols-[220px] items-start gap-4 overflow-x-auto pb-2 lg:grid-flow-row lg:grid-cols-5 lg:overflow-visible">
        {tracks.map(({ icon: Icon, title, body, popular }) => <article key={title} className="relative h-[180px] overflow-hidden rounded-lg border border-soft-border bg-warm-ivory p-5 shadow-[0_2px_8px_rgba(76,55,39,.035)]">
          {popular && <span className="absolute right-3 top-3 rounded-full bg-signature px-2.5 py-1 text-[9px] font-semibold text-white">Popular</span>}
          <Icon size={28} className="text-signature" strokeWidth={1.6} />
          <h3 className="mt-4 text-[13px] font-semibold leading-[1.2] text-primary-text">{title}</h3>
          <p className="mt-2 min-h-12 text-[12px] leading-[1.5] text-muted-text">{body}</p>
          <p className="mt-3 text-[10px] font-medium text-muted-text">• 16 Weeks &nbsp; • Live Cohort</p>
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
    <section id="projects" className="px-5 pb-8 pt-6 sm:px-10 lg:px-16">
      <SectionTitle title="Real Projects. Real Impact." action="See All Projects" />
      <div className="mx-auto mt-6 grid max-w-7xl gap-6 md:grid-cols-3">
        {projects.map((project) => <article key={project.title} className="overflow-hidden rounded-lg border border-soft-border bg-warm-ivory shadow-[0_2px_12px_rgba(76,55,39,.04)]"><img src={project.image} alt={project.title} className="w-full h-auto object-cover border-b border-soft-border" /><div className="px-5 py-4"><h3 className="text-[14px] font-semibold">{project.title}</h3><p className="mt-1 text-[12px] text-muted-text">{project.body}</p><div className="mt-3 flex flex-wrap gap-2">{project.tags.map((tag) => <span key={tag} className="rounded-full border border-soft-border bg-primary-bg px-2.5 py-1 text-[10px] text-muted-text">{tag}</span>)}</div></div></article>)}
      </div>
    </section>
  )
}


function Newsletter() {
  return (
    <section id="newsletter" className="px-5 pb-10 pt-4 sm:px-10 lg:px-16">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 border-y border-soft-border py-8 md:flex-row md:justify-between">
        <div className="flex items-center gap-5"><span className="flex h-14 w-14 items-center justify-center rounded-lg border border-soft-border bg-warm-ivory text-signature"><Mail size={26} strokeWidth={1.35} /></span><div><h2 className="display-serif text-[20px] tracking-[-.02em]">Join our community of builders.</h2><p className="mt-1 text-[12px] text-muted-text">Get free resources, updates, and webinar invites.</p></div></div>
        <form className="flex w-full max-w-[400px]" action="#"><input aria-label="Email address" type="email" placeholder="Enter your email" className="min-w-0 flex-1 rounded-l-md border border-r-0 border-soft-border bg-warm-ivory px-4 py-3 text-[12px] outline-none placeholder:text-soft-taupe focus:border-signature" /><button type="submit" className="inline-flex items-center gap-2 rounded-r-md bg-signature px-5 py-3 text-[12px] font-medium text-white transition hover:bg-signature/90">Join Now <ArrowRight size={14} /></button></form>
      </div>
    </section>
  )
}

export default function LandingContent() {
  return <main><Hero /><Stats /><Features /><Tracks /><Projects /><Newsletter /></main>
}
