/* ============================================================
   HOME PAGE — Dark Luxury Automotive
   Sections: Navbar, Hero, Stats, Services, Social Proof,
             How It Works, Lead Form, Map, Final CTA, Footer
   ============================================================ */

import { useState, useEffect, useRef } from "react";
import { motion, useInView, type Transition } from "framer-motion";
import {
  Car,
  Sparkles,
  Shield,
  Eye,
  Wrench,
  Phone,
  MapPin,
  Star,
  CheckCircle2,
  ChevronDown,
  Menu,
  X,
  Clock,
  Award,
  Users,
  Armchair,
} from "lucide-react";

// ─── Image CDN URLs ───────────────────────────────────────────
const FOTELE_IMG = "/fotele.jpg";
const INTERIOR_IMG = "/wnetrze.jpg";
const MOBILE_IMG = "/zewnętrze.jpg";
const NOS_LOGO = "https://d2xsxph8kpxj0f.cloudfront.net/310519663494499664/PpkyQheZ7r8KPVdKcxuycf/nos-logo-no-bg-HxeaTJSRYKBsqNV2T628Ne.webp";
const SILNIK_IMG = "/silnik.jpg";
const LAKIER_IMG = "/lakier.jpg";
const CAR_IMG = "/car.jpg";

// ─── Fade-in animation variant ───────────────────────────────
const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.1, ease: "easeOut" } as Transition,
  }),
};

// ─── Animated counter ────────────────────────────────────────
function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const step = Math.ceil(to / 60);
    const timer = setInterval(() => {
      start += step;
      if (start >= to) { setCount(to); clearInterval(timer); }
      else setCount(start);
    }, 20);
    return () => clearInterval(timer);
  }, [inView, to]);

  return <span ref={ref}>{count}{suffix}</span>;
}

// ─── CTA Button ──────────────────────────────────────────────
function CtaButton({ className = "", idle = false }: { className?: string; idle?: boolean }) {
  return (
    <a
      href="#wycena"
      className={`btn-cta ${idle ? "btn-cta-idle" : ""} inline-block text-center ${className}`}
    >
      Zamów Bezpłatną Wycenę
    </a>
  );
}

// ─── NAVBAR ──────────────────────────────────────────────────
function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const links = [
    { href: "#uslugi", label: "Usługi" },
    { href: "#opinie", label: "Opinie" },
    { href: "#jak-dzialamy", label: "Jak działamy" },
    { href: "#kontakt", label: "Kontakt" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-[oklch(0.12_0.008_260/0.97)] backdrop-blur-md shadow-lg shadow-black/30" : "bg-transparent"
      }`}
    >
      <div className="container flex items-center justify-between h-20 md:h-28">
        {/* Logo */}
        <a href="#" className="flex items-center gap-4">
          <img src={NOS_LOGO} alt="Nitro Mobile Detaling" className="w-16 h-16 md:w-24 md:h-24" />
          <div className="flex flex-col">
            <span className="font-['Barlow_Condensed'] font-900 text-2xl md:text-4xl text-white tracking-tight uppercase leading-none">Nitro</span>
            <span className="font-['Barlow_Condensed'] font-700 text-sm md:text-lg text-white/80 tracking-wider uppercase leading-none">Mobile Detaling</span>
          </div>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-white/70 hover:text-white transition-colors uppercase tracking-wider font-['Inter']"
            >
              {l.label}
            </a>
          ))}
          <CtaButton className="text-sm py-2.5 px-5" />
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-[oklch(0.14_0.008_260)] border-t border-white/10 px-4 py-4 flex flex-col gap-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-white/80 hover:text-white py-2 uppercase tracking-wider text-sm font-['Inter']"
            >
              {l.label}
            </a>
          ))}
          <CtaButton className="w-full text-center" />
        </div>
      )}
    </nav>
  );
}

// ─── HERO ─────────────────────────────────────────────────────
function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background video */}
      <div className="absolute inset-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover object-center"
        >
          <source src="/IntroBmw.mp4" type="video/mp4"/>
        </video>
          
          alt="Profesjonalny detailing samochodowy"
          className="w-full h-full object-cover object-center"
        {/* Gradient overlay — dark left side for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[oklch(0.10_0.008_260/0.92)] via-[oklch(0.10_0.008_260/0.70)] to-[oklch(0.10_0.008_260/0.30)]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.10_0.008_260/0.80)] via-transparent to-transparent" />
      </div>

      <div className="container relative z-10 pt-28 pb-20">
        <div className="max-w-2xl">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={0}
          >
            <span className="section-label">Profesjonalny detailing</span>
          </motion.div>

          <motion.h1
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={1}
            className="mt-4 text-5xl md:text-7xl font-['Barlow_Condensed'] font-900 text-white leading-[0.95] uppercase"
          >
            Detailing
            <br />
            <span style={{ color: "var(--blue-electric)" }}>Na Najwyższym</span>
            <br />
            Poziomie
          </motion.h1>

          <motion.p
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={2}
            className="mt-6 text-lg text-white/75 font-['Inter'] leading-relaxed max-w-lg"
          >
            Profesjonalne mycie, czyszczenie wnętrza i zewnętrza auta, czyszczenie komory silnika. Każdy samochód zasługuje na perfekcyjny detailing.
          </motion.p>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={3}
            className="mt-8 flex flex-col sm:flex-row gap-4"
          >
            <CtaButton idle className="text-base" />
            <a
              href="tel:+48696725786"
              className="inline-flex items-center gap-2 text-white/80 hover:text-white font-['Inter'] font-medium transition-colors border border-white/20 hover:border-white/40 px-6 py-3 text-sm uppercase tracking-wider"
            >
              <Phone size={16} />
              +48 696 725 786
            </a>
          </motion.div>

          {/* Trust badges */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={4}
            className="mt-10 flex flex-wrap gap-4"
          >
            {[
              { icon: <Wrench size={14} />, label: "Profesjonalny Sprzęt" },
              { icon: <Sparkles size={14} />, label: "Najwyższa Jakość" },
              { icon: <Shield size={14} />, label: "Gwarancja Satysfakcji" },
            ].map((b) => (
              <div
                key={b.label}
                className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/15 px-3 py-1.5 text-xs text-white/90 font-['Inter'] uppercase tracking-wider"
              >
                <span style={{ color: "var(--gold)" }}>{b.icon}</span>
                {b.label}
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-white/40 animate-bounce">
        <ChevronDown size={20} />
      </div>
    </section>
  );
}

// ─── STATS ────────────────────────────────────────────────────
function Stats() {
  const stats = [
    { value: 50, suffix: "+", label: "Zadowolonych klientów" },
    { value: 4, suffix: ".9★", label: "Średnia ocena" },
    { value: 2, suffix: " lata", label: "Doświadczenia" },
    { value: 100, suffix: "%", label: "Gwarancja satysfakcji" },
  ];

  return (
    <section className="py-14 border-y border-white/8" style={{ background: "var(--surface-1)" }}>
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={i}
            >
              <div className="stat-number">
                <Counter to={s.value} suffix={s.suffix} />
              </div>
              <div className="mt-1 text-sm text-white/50 font-['Inter'] uppercase tracking-wider">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── SERVICES ─────────────────────────────────────────────────
const services = [
  {
    icon: <Car size={28} />,
    title: "Mycie Zewnętrzne",
    desc: "Kompleksowe mycie karoserii, felg i szyb z użyciem profesjonalnych środków. Twój samochód błyszczy jak nowy.",
    price: "od 150 zł",
    img: MOBILE_IMG,
  },
  {
    icon: <Sparkles size={28} />,
    title: "Mycie Wnętrzne",
    desc: "Czyszczenie dywanów, plastików i szyb. Parowanie i odświeżanie kabiny.",
    price: "od 200 zł",
    img: INTERIOR_IMG,
  },
  {
    icon: <Shield size={28} />,
    title: "Czyszczenie Komory Silnika",
    desc: "Dokładne mycie komory, usuwanie brudu i przywracanie do estetycznego wyglądu bez ryzyka dla podzespołów.",
    price: "od 200 zł",
    img: SILNIK_IMG,
  },
  {
    icon: <Armchair size={28} />,
    title: "Czyszczenie foteli",
    desc: "Głębokie czyszczenie tapicerki.",
    price: "od 75 zł",
    img: FOTELE_IMG,
  },
  {
    icon: <Wrench size={28} />,
    title: "Korekta Lakieru",
    desc: "(wkrótce)",
    /*Usuwanie rys, wirów i matowości. Przywracamy głęboki połysk fabryczny Twojego auta.*/
    price: "od 800 zł",
    img: LAKIER_IMG,
  },
];

function Services() {
  return (
    <section id="uslugi" className="py-20 md:py-28">
      <div className="container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="mb-14"
        >
          <span className="gold-line" />
          <span className="section-label">Nasze usługi</span>
          <h2 className="mt-3 text-4xl md:text-5xl font-['Barlow_Condensed'] font-800 text-white uppercase">
            Nasze Usługi Detailingowe
          </h2>
          <p className="mt-3 text-white/55 font-['Inter'] max-w-xl">
            Wszystkie rodzaje detalingu twojego auta — każda usługa wykonywana z najwyższą precyzją i profesjonalizmem.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={i * 0.5}
              className="service-card overflow-hidden group"
            >
              {/* Image or gradient placeholder */}
              {s.img ? (
                <div className="h-55 overflow-hidden">
                  <img
                    src={s.img}
                    alt={s.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              ) : (
                <div
                  className="h-44 flex items-center justify-center"
                  style={{ background: "linear-gradient(135deg, oklch(0.18 0.010 260), oklch(0.14 0.008 260))" }}
                >
                  <div style={{ color: "var(--blue-electric)" }} className="opacity-30 scale-150">
                    {s.icon}
                  </div>
                </div>
              )}

              <div className="p-6">
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div className="flex items-center gap-3">
                    <div style={{ color: "var(--blue-electric)" }}>{s.icon}</div>
                    <h3 className="text-xl font-['Barlow_Condensed'] font-700 text-white uppercase">{s.title}</h3>
                  </div>
                  <span
                    className="text-xs font-['Barlow_Condensed'] font-700 uppercase tracking-wider px-2 py-1 whitespace-nowrap"
                    style={{ color: "var(--gold)", background: "oklch(0.78 0.12 85 / 10%)", border: "1px solid oklch(0.78 0.12 85 / 25%)" }}
                  >
                    {s.price}
                  </span>
                </div>
                <p className="text-sm text-white/55 font-['Inter'] leading-relaxed">{s.desc}</p>
              </div>
            </motion.div>
          ))}

          {/* CTA card */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={3}
            className="service-card p-8 flex flex-col items-start justify-between"
            style={{ background: "linear-gradient(135deg, oklch(0.18 0.015 255), oklch(0.14 0.008 260))" }}
          >
            <div>
              <Award size={32} style={{ color: "var(--gold)" }} className="mb-4" />
              <h3 className="text-2xl font-['Barlow_Condensed'] font-800 text-white uppercase mb-2">
                Nie wiesz co wybrać?
              </h3>
              <p className="text-white/60 font-['Inter'] text-sm">
                Skontaktuj się z nami — dobierzemy pakiet idealnie dopasowany do Twojego auta i budżetu.
              </p>
            </div>
            <CtaButton className="mt-6 text-sm" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ─── SOCIAL PROOF ─────────────────────────────────────────────
const testimonials = [
  {
    name: "Marcin K.",
    car: "Toyota Corolla",
    rating: 5,
    text: "„Oddałem Toyotę Corollę na mycie i jestem pozytywnie zaskoczony. Auto w zewnątrz i wewnątrz wygląda jak nowe, wszystko dokładnie wyczyszczone. Na pewno wrócę.”",
  },
  {
    name: "Anna W.",
    car: "BMW e46",
    rating: 5,
    text: "„Bmka po usłudze wygląda dużo lepiej niż się spodziewałem. Wnętrze czyste i zadbane. Widać, że robione z dokładnością.”",
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} size={14} fill="var(--gold)" style={{ color: "var(--gold)" }} />
      ))}
    </div>
  );
}

function SocialProof() {
  return (
    <section id="opinie" className="py-20 md:py-28" style={{ background: "var(--surface-1)" }}>
      <div className="container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="mb-14 flex flex-col md:flex-row md:items-end md:justify-between gap-6"
        >
          <div>
            <span className="gold-line" />
            <span className="section-label">Zaufanie klientów</span>
            <h2 className="mt-3 text-4xl md:text-5xl font-['Barlow_Condensed'] font-800 text-white uppercase">
              Dużo Zadowolonych<br />Właścicieli Aut
            </h2>
          </div>
          <div className="flex items-center gap-4 bg-[oklch(0.12_0.008_260)] border border-white/10 px-6 py-4">
            <div className="text-center">
              <div className="text-4xl font-['Barlow_Condensed'] font-800" style={{ color: "var(--gold)" }}>4.9</div>
              <Stars count={5} />
              <div className="text-xs text-white/40 font-['Inter'] mt-1 uppercase tracking-wider">Średnia ocena</div>
            </div>
            <div className="w-px h-12 bg-white/10" />
            <div className="text-center">
              <div className="text-4xl font-['Barlow_Condensed'] font-800 text-white">20+</div>
              <div className="text-xs text-white/40 font-['Inter'] mt-1 uppercase tracking-wider">Opinii</div>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={i * 0.4}
              className="testimonial-card p-6"
            >
              <Stars count={t.rating} />
              <p className="mt-3 text-white/75 font-['Inter'] text-sm leading-relaxed">
                &ldquo;{t.text}&rdquo;
              </p>
              <div className="mt-4 flex items-center gap-3">
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center text-sm font-['Barlow_Condensed'] font-700 text-white"
                  style={{ background: "var(--blue-electric)" }}
                >
                  {t.name[0]}
                </div>
                <div>
                  <div className="text-sm font-['Inter'] font-600 text-white">{t.name}</div>
                  <div className="text-xs text-white/40 font-['Inter']">{t.car}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={3}
          className="mt-12 text-center"
        >
          <CtaButton />
        </motion.div>
      </div>
    </section>
  );
}

// ─── HOW IT WORKS ─────────────────────────────────────────────
const steps = [
  {
    num: "01",
    icon: <Phone size={24} />,
    title: "Zamów Wycenę",
    desc: "Wypełnij formularz lub zadzwoń. Oddzwonimy w ciągu 30 minut z bezpłatną wyceną dopasowaną do Twojego auta.",
  },
  {
    num: "02",
    icon: <Car size={24} />,
    title: "Przyjeżdżamy do Ciebie",
    desc: "W ustalonym terminie nasz mobilny zespół przyjeżdża pod Twój dom, biuro lub inne wskazane miejsce.",
  },
  {
    num: "03",
    icon: <Sparkles size={24} />,
    title: "Cieszysz się Efektem",
    desc: "Odbierasz auto wyglądające jak nowe — bez wychodzenia z domu, bez straty czasu na dojazdy.",
  },
];

function HowItWorks() {
  return (
    <section id="jak-dzialamy" className="py-20 md:py-28">
      <div className="container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="mb-14 text-center"
        >
          <span className="gold-line mx-auto" />
          <span className="section-label">Prosty proces</span>
          <h2 className="mt-3 text-4xl md:text-5xl font-['Barlow_Condensed'] font-800 text-white uppercase">
            Jak To Działa?
          </h2>
          <p className="mt-3 text-white/55 font-['Inter'] max-w-lg mx-auto">
            Trzy proste kroki dzielą Cię od idealnie czystego samochodu.
          </p>
        </motion.div>

        <div className="relative">
          {/* Connecting line (desktop) */}
          <div className="hidden md:block absolute top-16 left-1/6 right-1/6 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((s, i) => (
              <motion.div
                key={s.num}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={i * 0.6}
                className="relative flex flex-col items-center text-center p-8"
                style={{ background: "var(--surface-1)", border: "1px solid oklch(1 0 0 / 8%)" }}
              >
                {/* Big background number */}
                <div
                  className="absolute top-4 right-4 text-7xl font-['Barlow_Condensed'] font-900 leading-none select-none"
                  style={{ color: "oklch(1 0 0 / 4%)" }}
                >
                  {s.num}
                </div>

                <div
                  className="w-14 h-14 flex items-center justify-center mb-5"
                  style={{ background: "oklch(0.52 0.22 255 / 15%)", border: "1px solid oklch(0.52 0.22 255 / 30%)" }}
                >
                  <div style={{ color: "var(--blue-electric)" }}>{s.icon}</div>
                </div>

                <div
                  className="text-xs font-['Barlow_Condensed'] font-700 uppercase tracking-widest mb-2"
                  style={{ color: "var(--gold)" }}
                >
                  Krok {s.num}
                </div>
                <h3 className="text-2xl font-['Barlow_Condensed'] font-800 text-white uppercase mb-3">{s.title}</h3>
                <p className="text-sm text-white/55 font-['Inter'] leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={3}
          className="mt-12 text-center"
        >
          <CtaButton />
        </motion.div>
      </div>
    </section>
  );
}

// ─── LEAD CAPTURE FORM ────────────────────────────────────────
function LeadForm() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "", phone: "", email: "", vehicle: "", service: "", date: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="wycena" className="py-20 md:py-28" style={{ background: "var(--surface-1)" }}>
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side — image + trust */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <span className="gold-line" />
            <span className="section-label">Bezpłatna wycena</span>
            <h2 className="mt-3 text-4xl md:text-5xl font-['Barlow_Condensed'] font-800 text-white uppercase leading-tight">
              Zamów Wycenę<br />
              <span style={{ color: "var(--blue-electric)" }}>Już Dziś</span>
            </h2>
            <p className="mt-4 text-white/60 font-['Inter'] leading-relaxed">
              Wypełnij formularz, a oddzwonimy w ciągu 30 minut z indywidualną wyceną. Bez zobowiązań, bez ukrytych kosztów.
            </p>

            <div className="mt-8 space-y-4">
              {[
                { icon: <Clock size={16} />, text: "Odpowiedź w ciągu 30 minut" },
                { icon: <CheckCircle2 size={16} />, text: "Bezpłatna wycena bez zobowiązań" },
                { icon: <Shield size={16} />, text: "Gwarancja satysfakcji 100%" },
                { icon: <Users size={16} />, text: "Ponad 50 zadowolonych klientów" },
              ].map((item) => (
                <div key={item.text} className="flex items-center gap-3">
                  <div style={{ color: "var(--gold)" }}>{item.icon}</div>
                  <span className="text-sm text-white/70 font-['Inter']">{item.text}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 overflow-hidden">
              <img
                src={CAR_IMG}
                alt="Mobilny detailing"
                className="w-full h-full object-cover"
                style={{ border: "1px solid oklch(1 0 0 / 10%)" }}
              />
            </div>
          </motion.div>

          {/* Right side — form */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={1}
          >
            <div
              className="p-8 md:p-10"
              style={{ background: "oklch(0.12 0.008 260)", border: "1px solid oklch(1 0 0 / 12%)" }}
            >
              {submitted ? (
                <div className="text-center py-12">
                  <CheckCircle2 size={56} className="mx-auto mb-4" style={{ color: "var(--blue-electric)" }} />
                  <h3 className="text-3xl font-['Barlow_Condensed'] font-800 text-white uppercase mb-2">
                    Dziękujemy!
                  </h3>
                  <p className="text-white/60 font-['Inter']">
                    Twoje zgłoszenie zostało przyjęte. Oddzwonimy w ciągu 30 minut.
                  </p>
                </div>
              ) : (
                <form action="https://formspree.io/f/xqegqylg" method="POST" className="space-y-4">
                  <h3 className="text-2xl font-['Barlow_Condensed'] font-800 text-white uppercase mb-6">
                    Formularz Wyceny
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs text-white/50 font-['Inter'] uppercase tracking-wider mb-1.5">
                        Imię i Nazwisko *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Jan Kowalski"
                        className="w-full bg-white/5 border border-white/15 text-white placeholder-white/25 px-4 py-3 text-sm font-['Inter'] focus:outline-none focus:border-[oklch(0.52_0.22_255)] transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs text-white/50 font-['Inter'] uppercase tracking-wider mb-1.5">
                        NR Telefonu *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="+48 000 000 000"
                        className="w-full bg-white/5 border border-white/15 text-white placeholder-white/25 px-4 py-3 text-sm font-['Inter'] focus:outline-none focus:border-[oklch(0.52_0.22_255)] transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs text-white/50 font-['Inter'] uppercase tracking-wider mb-1.5">
                      Adres E-mail
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="jankowalski@gmail.com"
                      className="w-full bg-white/5 border border-white/15 text-white placeholder-white/25 px-4 py-3 text-sm font-['Inter'] focus:outline-none focus:border-[oklch(0.52_0.22_255)] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs text-white/50 font-['Inter'] uppercase tracking-wider mb-1.5">
                      Marka i Model Pojazdu *
                    </label>
                    <input
                      type="text"
                      name="vehicle"
                      required
                      value={form.vehicle}
                      onChange={handleChange}
                      placeholder="np. BMW e46, Audi A4..."
                      className="w-full bg-white/5 border border-white/15 text-white placeholder-white/25 px-4 py-3 text-sm font-['Inter'] focus:outline-none focus:border-[oklch(0.52_0.22_255)] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs text-white/50 font-['Inter'] uppercase tracking-wider mb-2">
                      Interesujące Usługi *
                    </label>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {[
                        { value: "Mycie Zewnętrzne" },
                        { value: "Czyszczenie Wnętrza" },
                        { value: "Komora silnika" },
                        { value: "Czyszczenie foteli" },
                        { value: "Pełny Detailing" },
                      ].map((s) => (
                        <label
                          key={s.value}
                          className={`flex items-center justify-between px-4 py-3 border text-sm cursor-pointer transition-all
                          ${
                            form.service.includes(s.value)
                              ? "border-[oklch(0.52_0.22_255)] bg-[oklch(0.52_0.22_255/0.10)] text-white"
                              : "border-white/15 text-white/70 hover:border-white/40"
                          }`}
                        >
                          <span>{s.value}</span>

                          <input
                            type="checkbox"
                            name="service" // 🔥 KLUCZOWE
                            value={s.value}
                            checked={form.service.includes(s.value)}
                            onChange={(e) => {
                              if (e.target.checked) {
                                setForm({ ...form, service: [...form.service, s.value] });
                              } else {
                                setForm({
                                  ...form,
                                  service: form.service.filter((v) => v !== s.value),
                                });
                              }
                            }}
                            className="hidden"
                          />
                        </label>
                      ))}
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="btn-cta btn-cta-idle w-full mt-2 py-4 text-base"
                  >
                    Zamów Bezpłatną Wycenę
                  </button>

                  <p className="text-xs text-white/30 font-['Inter'] text-center">
                    Wysyłając formularz, akceptujesz naszą politykę prywatności. Nie spamujemy.
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ─── MAP ──────────────────────────────────────────────────────
function MapSection() {
  return (
    <section id="kontakt" className="py-20 md:py-28">
      <div className="container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="mb-12 text-center"
        >
          <span className="gold-line mx-auto" />
          <span className="section-label">Kontakt</span>
          <h2 className="mt-3 text-4xl md:text-5xl font-['Barlow_Condensed'] font-800 text-white uppercase">
            Odwiedź Nas
          </h2>
          <p className="mt-3 text-white/55 font-['Inter'] max-w-lg mx-auto">
            Znajdź nas na mapie i skontaktuj się z nami. Chętnie odpowiemy na wszystkie Twoje pytania.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact info */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="space-y-6"
          >
            <div
              className="p-6"
              style={{ background: "var(--surface-1)", border: "1px solid oklch(1 0 0 / 8%)" }}
            >
              <MapPin size={20} style={{ color: "var(--blue-electric)" }} className="mb-3" />
              <h4 className="font-['Barlow_Condensed'] font-700 text-white uppercase text-lg mb-1">Adres Bazy</h4>
              <p className="text-white/55 font-['Inter'] text-sm">
                ul. Prodwisłocze 27<br />
                35-309 Rzeszów
              </p>
            </div>

            <div
              className="p-6"
              style={{ background: "var(--surface-1)", border: "1px solid oklch(1 0 0 / 8%)" }}
            >
              <Phone size={20} style={{ color: "var(--blue-electric)" }} className="mb-3" />
              <h4 className="font-['Barlow_Condensed'] font-700 text-white uppercase text-lg mb-1">Telefon</h4>
              <a href="tel:+48000000000" className="text-white/80 hover:text-white font-['Inter'] text-sm transition-colors">
                +48 696 725 786
              </a>
              <p className="text-white/35 font-['Inter'] text-xs mt-1">Pon–Sob: 8:00–21:00</p>
            </div>

            <div
              className="p-6"
              style={{ background: "var(--surface-1)", border: "1px solid oklch(1 0 0 / 8%)" }}
            >
              <Clock size={20} style={{ color: "var(--blue-electric)" }} className="mb-3" />
              <h4 className="font-['Barlow_Condensed'] font-700 text-white uppercase text-lg mb-1">Godziny Pracy</h4>
              <div className="text-white/55 font-['Inter'] text-sm space-y-1">
                <div className="flex justify-between">
                  <span>Poniedziałek – Piątek</span>
                  <span className="text-white/80">8:00 – 19:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Sobota</span>
                  <span className="text-white/80">9:00 – 19:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Niedziela</span>
                  <span style={{ color: "var(--gold)" }}>Na zamówienie</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Map embed */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={1}
            className="lg:col-span-2 overflow-hidden"
            style={{ border: "1px solid oklch(1 0 0 / 10%)" }}
          >
            <iframe
              title="Mapa obszaru działania"
              src="https://www.google.com/maps?q=Podwis%C5%82ocze+27,+Rzesz%C3%B3w&output=embed"
              width="100%"
              height="400"
              style={{ border: 0, filter: "invert(90%) hue-rotate(180deg)" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ─── FINAL CTA ────────────────────────────────────────────────
function FinalCta() {
  return (
    <section
      className="relative py-24 md:py-32 overflow-hidden"
      style={{ background: "linear-gradient(135deg, oklch(0.16 0.015 255), oklch(0.12 0.008 260))" }}
    >
      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: "repeating-linear-gradient(45deg, oklch(1 0 0) 0, oklch(1 0 0) 1px, transparent 0, transparent 50%)",
          backgroundSize: "20px 20px",
        }}
      />

      <div className="container relative z-10 text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <span className="gold-line mx-auto" />
          <h2 className="text-4xl md:text-6xl font-['Barlow_Condensed'] font-900 text-white uppercase leading-tight">
            Twoje Auto Zasługuje<br />
            <span style={{ color: "var(--blue-electric)" }}>Na Profesjonalną Opiekę</span>
          </h2>
          <p className="mt-5 text-lg text-white/65 font-['Inter'] max-w-xl mx-auto">
            Zamów detailing już dziś i przekonaj się, jak wygląda Twój samochód po profesjonalnej pielęgnacji. Przyjeżdżamy do Ciebie!
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <CtaButton idle className="text-lg px-10 py-4" />
            <a
              href="tel:+48500000000"
              className="inline-flex items-center justify-center gap-2 text-white font-['Inter'] font-medium border border-white/30 hover:border-white/60 px-8 py-4 text-sm uppercase tracking-wider transition-colors"
            >
              <Phone size={16} />
              Zadzwoń Teraz
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ─── FOOTER ───────────────────────────────────────────────────
function Footer() {
  return (
    <footer
      className="py-10 border-t border-white/8"
      style={{ background: "oklch(0.09 0.006 260)" }}
    >
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <img src={NOS_LOGO} alt="Nitro Mobile Detaling" className="w-12 h-12" />
            <div className="flex flex-col">
              <span className="font-['Barlow_Condensed'] font-900 text-lg text-white tracking-tight uppercase leading-none">Nitro</span>
              <span className="font-['Barlow_Condensed'] font-600 text-xs text-white/70 tracking-wider uppercase leading-none">Mobile Detaling</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-6 text-xs text-white/40 font-['Inter'] uppercase tracking-wider">
            <a href="#uslugi" className="hover:text-white/70 transition-colors">Usługi</a>
            <a href="#opinie" className="hover:text-white/70 transition-colors">Opinie</a>
            <a href="#jak-dzialamy" className="hover:text-white/70 transition-colors">Jak działamy</a>
            <a href="#wycena" className="hover:text-white/70 transition-colors">Wycena</a>
            <a href="#kontakt" className="hover:text-white/70 transition-colors">Kontakt</a>
          </div>

          <div className="text-xs text-white/25 font-['Inter']">
            © {new Date().getFullYear()} AutoDetailing Pro. Wszelkie prawa zastrzeżone.
          </div>
        </div>
      </div>
    </footer>
  );
}

// ─── PAGE ASSEMBLY ────────────────────────────────────────────
export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Stats />
      <Services />
      <SocialProof />
      <HowItWorks />
      <LeadForm />
      <MapSection />
      <FinalCta />
      <Footer />
    </div>
  );
}
