import { createFileRoute, Link } from "@tanstack/react-router";
import heroImg from "../assets/hero-concert.jpg";
import {
  Sparkles, Ticket, Plane, Hotel, MapPin, Bot, BarChart3, Users, Radio,
  Bell, ShieldCheck, Music, Brain, Zap, ArrowRight, Globe, QrCode, CreditCard,
  Headphones, TrendingUp, Calendar, Search,
} from "lucide-react";

export const Route = createFileRoute("/")({ component: Landing });

function Landing() {
  return (
    <div className="min-h-screen text-foreground antialiased">
      <Nav />
      <Hero />
      <LogosStrip />
      <Modules />
      <AICopilot />
      <JourneySection />
      <ForWho />
      <Stats />
      <Pricing />
      <FAQ />
      <CTA />
      <Footer />
    </div>
  );
}

function Nav() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-background/60 border-b border-white/5">
      <div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="size-8 rounded-lg bg-gradient-to-br from-primary to-accent grid place-items-center glow">
            <Music className="size-4 text-white" />
          </div>
          <span className="font-semibold tracking-tight">Pulse<span className="text-primary">.ai</span></span>
        </Link>
        <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          <a href="#modulos" className="hover:text-foreground">Módulos</a>
          <a href="#ia" className="hover:text-foreground">IA Copiloto</a>
          <a href="#para-quien" className="hover:text-foreground">Para quién</a>
          <a href="#precios" className="hover:text-foreground">Precios</a>
        </nav>
        <div className="flex items-center gap-2">
          <button className="hidden sm:inline-flex text-sm px-3 py-2 rounded-md text-muted-foreground hover:text-foreground">Ingresar</button>
          <button className="inline-flex items-center gap-1.5 text-sm px-4 py-2 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 glow">
            Empezar <ArrowRight className="size-3.5" />
          </button>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <img src={heroImg} alt="Concierto con luces azules" width={1920} height={1080}
          className="w-full h-full object-cover opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/70 to-background" />
      </div>
      <div className="mx-auto max-w-7xl px-6 pt-24 pb-32 text-center">
        <div className="inline-flex items-center gap-2 glass rounded-full px-3 py-1 text-xs text-muted-foreground">
          <Sparkles className="size-3.5 text-primary" /> Plataforma 2026 · IA integrada como copiloto operativo
        </div>
        <h1 className="mt-6 text-5xl md:text-7xl font-bold tracking-tight leading-[1.05]">
          El ecosistema inteligente <br />
          <span className="text-gradient">para vivir conciertos</span>
        </h1>
        <p className="mt-6 max-w-2xl mx-auto text-lg text-muted-foreground">
          Entradas, vuelos, hoteles, rutas y experiencia — todo orquestado por IA.
          Una sola plataforma para organizadores, asistentes, staff y administradores.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <button className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-primary text-primary-foreground font-medium glow hover:bg-primary/90">
            Lanzar mi plataforma <ArrowRight className="size-4" />
          </button>
          <button className="inline-flex items-center gap-2 px-5 py-3 rounded-lg glass font-medium hover:bg-white/5">
            <Headphones className="size-4" /> Ver demo
          </button>
        </div>

        {/* Quick search */}
        <div className="mt-12 mx-auto max-w-3xl glass rounded-2xl p-2 flex flex-col sm:flex-row gap-2">
          <div className="flex-1 flex items-center gap-2 px-3 py-2">
            <Search className="size-4 text-muted-foreground" />
            <input placeholder="Artista, ciudad o género…" className="bg-transparent outline-none w-full text-sm placeholder:text-muted-foreground" />
          </div>
          <div className="flex items-center gap-2 px-3 py-2 border-t sm:border-t-0 sm:border-l border-white/5">
            <Calendar className="size-4 text-muted-foreground" />
            <input placeholder="Cuando sea" className="bg-transparent outline-none w-full text-sm placeholder:text-muted-foreground" />
          </div>
          <button className="px-5 py-2.5 rounded-xl bg-primary text-primary-foreground text-sm font-medium">Buscar con IA</button>
        </div>
      </div>
    </section>
  );
}

function LogosStrip() {
  const items = ["Stripe", "Spotify", "Booking", "Amadeus", "Google Maps", "Twilio"];
  return (
    <section className="border-y border-white/5 bg-background/40">
      <div className="mx-auto max-w-7xl px-6 py-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-3 text-sm text-muted-foreground">
        <span className="text-xs uppercase tracking-widest">Integraciones nativas</span>
        {items.map(i => <span key={i} className="font-medium">{i}</span>)}
      </div>
    </section>
  );
}

const MODULES = [
  { icon: ShieldCheck, title: "Autenticación & Seguridad", desc: "OAuth, JWT, 2FA, CAPTCHA, detección de fraude con IA y encriptación AES." },
  { icon: Calendar, title: "Gestión de Conciertos", desc: "CRUD de eventos, mapas de venue, asientos interactivos, zonas VIP y backstage." },
  { icon: Brain, title: "IA de Recomendación", desc: "ML, collaborative filtering y NLP sobre Spotify, historial y redes sociales." },
  { icon: Ticket, title: "Sistema de Entradas", desc: "QR rotativo, wallet digital, NFT opcional, reventa autorizada y antifraude." },
  { icon: Plane, title: "Recomendador de Vuelos", desc: "Amadeus + Skyscanner. La IA predice subidas de precio y mejor momento de compra." },
  { icon: Hotel, title: "Recomendador de Hoteles", desc: "Booking, Expedia, Airbnb. Sugerencias por presupuesto, distancia y seguridad." },
  { icon: MapPin, title: "Rutas Inteligentes", desc: "Aeropuerto → Hotel → Concierto. Tráfico, clima, seguridad y transporte público." },
  { icon: Bot, title: "Chatbot IA 24/7", desc: "Voice AI multilenguaje. Asistente para asientos, rutas, comida y parqueo." },
  { icon: BarChart3, title: "Analítica & Big Data", desc: "Ventas, demografía, conversión y predicción de asistencia en tiempo real." },
  { icon: Users, title: "Experiencia Social", desc: "Match musical, chat, grupos y networking con personas de gustos similares." },
  { icon: Radio, title: "Streaming & Híbridos", desc: "Live, replay, traducción y subtítulos con IA para audiencia global." },
  { icon: Bell, title: "Notificaciones IA", desc: "Email, SMS, push y WhatsApp. Alertas de tráfico, ofertas y cambios de horario." },
];

function Modules() {
  return (
    <section id="modulos" className="mx-auto max-w-7xl px-6 py-24">
      <div className="max-w-2xl">
        <p className="text-sm text-primary font-medium">12 módulos · 1 plataforma</p>
        <h2 className="mt-2 text-4xl md:text-5xl font-bold tracking-tight">Todo lo que un evento necesita, <span className="text-gradient">orquestado</span></h2>
        <p className="mt-4 text-muted-foreground">Desde la venta hasta la logística post-evento. Cada módulo conectado a un copiloto IA que aprende del comportamiento de cada usuario.</p>
      </div>
      <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {MODULES.map(({ icon: Icon, title, desc }) => (
          <div key={title} className="group glass rounded-2xl p-6 hover:bg-white/[0.06] transition-colors">
            <div className="size-10 rounded-lg bg-primary/15 grid place-items-center text-primary group-hover:bg-primary/25 transition">
              <Icon className="size-5" />
            </div>
            <h3 className="mt-4 font-semibold">{title}</h3>
            <p className="mt-1.5 text-sm text-muted-foreground">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function AICopilot() {
  const items = [
    { icon: TrendingUp, title: "Precios dinámicos", desc: "Tipo Uber: ajusta VIP, generales y últimos cupos en tiempo real." },
    { icon: ShieldCheck, title: "Antifraude IA", desc: "Detecta bots, reventas ilegales y patrones sospechosos antes del pago." },
    { icon: Sparkles, title: "Experiencia personal", desc: "Sugiere restaurantes, transporte, hoteles y after parties por perfil." },
    { icon: Brain, title: "Predicción de demanda", desc: "Predice qué conciertos venderán más y dónde habrá saturación." },
  ];
  return (
    <section id="ia" className="relative">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-sm text-primary font-medium">IA Copiloto</p>
            <h2 className="mt-2 text-4xl md:text-5xl font-bold tracking-tight">Una IA que organiza el viaje completo</h2>
            <p className="mt-4 text-muted-foreground">No es solo venta de entradas. Es un sistema que entiende al asistente, anticipa la logística y maximiza ingresos del organizador.</p>
            <div className="mt-8 grid sm:grid-cols-2 gap-4">
              {items.map(({ icon: Icon, title, desc }) => (
                <div key={title} className="glass rounded-xl p-4">
                  <Icon className="size-5 text-primary" />
                  <p className="mt-3 font-medium text-sm">{title}</p>
                  <p className="mt-1 text-xs text-muted-foreground">{desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Chat mock */}
          <div className="glass rounded-3xl p-6 glow">
            <div className="flex items-center gap-2 text-sm">
              <div className="size-8 rounded-full bg-gradient-to-br from-primary to-accent grid place-items-center"><Bot className="size-4" /></div>
              <div>
                <p className="font-medium">Pulse Copilot</p>
                <p className="text-xs text-muted-foreground">En línea · responde en segundos</p>
              </div>
            </div>
            <div className="mt-5 space-y-3 text-sm">
              <Bubble side="user">Voy a Coldplay en Bogotá el 14 de marzo. Ayúdame con todo.</Bubble>
              <Bubble side="ai">Encontré 3 vuelos: el mejor sale 09:40 (USD 287, −18% que el promedio). Hotel a 4 cuadras del Campín por USD 92/noche. ¿Reservo?</Bubble>
              <Bubble side="user">Sí, y arma la ruta desde el aeropuerto.</Bubble>
              <Bubble side="ai">Listo. Uber 22 min · ruta segura, sin eventos simultáneos. Te avisaré 3 h antes del show. 🎟️</Bubble>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Bubble({ side, children }: { side: "user" | "ai"; children: React.ReactNode }) {
  return (
    <div className={`flex ${side === "user" ? "justify-end" : "justify-start"}`}>
      <div className={`max-w-[85%] rounded-2xl px-4 py-2.5 ${side === "user" ? "bg-primary text-primary-foreground rounded-br-sm" : "bg-white/5 rounded-bl-sm"}`}>
        {children}
      </div>
    </div>
  );
}

function JourneySection() {
  const steps = [
    { icon: Search, title: "Descubre", desc: "La IA te sugiere conciertos según tu Spotify y tu ciudad." },
    { icon: CreditCard, title: "Compra", desc: "Stripe, PayPal, Apple/Google Pay. En 3 clics. Antifraude on." },
    { icon: Plane, title: "Viaja", desc: "Vuelo + hotel + ruta segura, todo armado por el copiloto." },
    { icon: QrCode, title: "Disfruta", desc: "QR rotativo, acceso instantáneo y experiencia personalizada." },
  ];
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <div className="text-center max-w-2xl mx-auto">
        <p className="text-sm text-primary font-medium">El viaje del asistente</p>
        <h2 className="mt-2 text-4xl md:text-5xl font-bold tracking-tight">De la búsqueda al backstage</h2>
      </div>
      <div className="mt-14 grid md:grid-cols-4 gap-4 relative">
        {steps.map(({ icon: Icon, title, desc }, i) => (
          <div key={title} className="glass rounded-2xl p-6 relative">
            <div className="text-xs text-muted-foreground">Paso 0{i+1}</div>
            <div className="mt-3 size-10 rounded-lg bg-primary/15 grid place-items-center text-primary"><Icon className="size-5" /></div>
            <h3 className="mt-4 font-semibold">{title}</h3>
            <p className="mt-1.5 text-sm text-muted-foreground">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function ForWho() {
  const roles = [
    { icon: ShieldCheck, title: "Super Administrador", desc: "Control global, finanzas, IA, seguridad, moderación y auditoría." },
    { icon: Calendar, title: "Organizador", desc: "Crea eventos, gestiona aforo, ventas en tiempo real y métricas profundas." },
    { icon: Users, title: "Asistente / Cliente", desc: "Compra, viaja, descubre y se conecta con personas de gustos similares." },
    { icon: QrCode, title: "Staff / Logística", desc: "Escaneo QR, control de acceso, incidentes y gestión backstage." },
  ];
  return (
    <section id="para-quien" className="mx-auto max-w-7xl px-6 py-24">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="text-sm text-primary font-medium">Para quién</p>
          <h2 className="mt-2 text-4xl md:text-5xl font-bold tracking-tight">4 roles, 1 ecosistema</h2>
        </div>
        <p className="text-muted-foreground max-w-md">Cada perfil obtiene su propio panel, métricas e IA entrenada para sus tareas.</p>
      </div>
      <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-4 gap-4">
        {roles.map(({ icon: Icon, title, desc }) => (
          <div key={title} className="glass rounded-2xl p-6">
            <Icon className="size-6 text-primary" />
            <h3 className="mt-4 font-semibold">{title}</h3>
            <p className="mt-1.5 text-sm text-muted-foreground">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Stats() {
  const stats = [
    { v: "100k+", l: "Usuarios concurrentes" },
    { v: "99.9%", l: "Uptime garantizado" },
    { v: "<3 clics", l: "Para comprar entrada" },
    { v: "12+", l: "Integraciones nativas" },
  ];
  return (
    <section className="mx-auto max-w-7xl px-6 py-16">
      <div className="glass rounded-3xl p-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
        {stats.map(s => (
          <div key={s.l}>
            <div className="text-4xl font-bold text-gradient">{s.v}</div>
            <div className="mt-2 text-sm text-muted-foreground">{s.l}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Pricing() {
  const plans = [
    { name: "Starter", price: "0", desc: "Para probar la plataforma", features: ["Hasta 500 entradas/mes", "Panel organizador", "Email + soporte básico"], cta: "Empezar gratis" },
    { name: "Pro", price: "299", desc: "Para promotores en crecimiento", features: ["Entradas ilimitadas", "IA recomendaciones + chatbot", "Vuelos/hoteles/rutas", "Analítica avanzada"], cta: "Probar 14 días", featured: true },
    { name: "Enterprise", price: "Custom", desc: "Festivales y arenas", features: ["IA dinámica de precios", "Streaming + híbridos", "SLA 99.99% + dedicated", "Onboarding white-glove"], cta: "Hablar con ventas" },
  ];
  return (
    <section id="precios" className="mx-auto max-w-7xl px-6 py-24">
      <div className="text-center max-w-2xl mx-auto">
        <p className="text-sm text-primary font-medium">Precios</p>
        <h2 className="mt-2 text-4xl md:text-5xl font-bold tracking-tight">Escala con tu evento</h2>
      </div>
      <div className="mt-12 grid md:grid-cols-3 gap-4">
        {plans.map(p => (
          <div key={p.name} className={`glass rounded-2xl p-6 flex flex-col ${p.featured ? "border-primary/40 glow" : ""}`}>
            <div className="flex items-center justify-between">
              <h3 className="font-semibold">{p.name}</h3>
              {p.featured && <span className="text-xs px-2 py-0.5 rounded-full bg-primary/20 text-primary">Popular</span>}
            </div>
            <p className="mt-1 text-sm text-muted-foreground">{p.desc}</p>
            <div className="mt-5 text-4xl font-bold">{p.price === "Custom" ? "Custom" : <>USD {p.price}<span className="text-base font-normal text-muted-foreground">/mes</span></>}</div>
            <ul className="mt-6 space-y-2 text-sm flex-1">
              {p.features.map(f => <li key={f} className="flex gap-2"><Zap className="size-4 text-primary shrink-0 mt-0.5" />{f}</li>)}
            </ul>
            <button className={`mt-6 w-full py-2.5 rounded-lg font-medium text-sm ${p.featured ? "bg-primary text-primary-foreground" : "glass hover:bg-white/5"}`}>{p.cta}</button>
          </div>
        ))}
      </div>
    </section>
  );
}

function FAQ() {
  const faqs = [
    { q: "¿Cómo funciona la IA de recomendación?", a: "Analizamos gustos musicales, historial, ubicación y datos de Spotify/Apple Music con modelos de collaborative filtering, NLP y deep learning para sugerir conciertos relevantes." },
    { q: "¿Qué integraciones soportan?", a: "Stripe, PayPal, Apple/Google Pay, Booking, Expedia, Amadeus, Skyscanner, Google Maps, Waze, Uber, Spotify, Twilio y Firebase entre otros." },
    { q: "¿Es seguro?", a: "Cumplimos OWASP y PCI DSS, con 2FA, CAPTCHA, rate limiting, encriptación AES y detección de fraude con IA en cada transacción." },
    { q: "¿Soporta conciertos híbridos y VR?", a: "Sí: streaming en vivo, replay, subtítulos con IA y, en el plan Enterprise, conciertos en VR/metaverso." },
  ];
  return (
    <section className="mx-auto max-w-3xl px-6 py-24">
      <h2 className="text-4xl font-bold tracking-tight text-center">Preguntas frecuentes</h2>
      <div className="mt-10 space-y-3">
        {faqs.map(f => (
          <details key={f.q} className="glass rounded-xl p-5 group">
            <summary className="cursor-pointer font-medium flex items-center justify-between">
              {f.q}
              <ArrowRight className="size-4 text-muted-foreground transition group-open:rotate-90" />
            </summary>
            <p className="mt-3 text-sm text-muted-foreground">{f.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <div className="relative overflow-hidden rounded-3xl glass p-12 text-center">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/30 via-transparent to-accent/20" />
        <Globe className="size-10 mx-auto text-primary" />
        <h2 className="mt-4 text-4xl md:text-5xl font-bold tracking-tight">El futuro de los conciertos <span className="text-gradient">empieza ahora</span></h2>
        <p className="mt-4 text-muted-foreground max-w-xl mx-auto">Lanza tu propio ecosistema inteligente en semanas, no en años.</p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <button className="px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium glow">Crear mi plataforma</button>
          <button className="px-6 py-3 rounded-lg glass font-medium">Agendar demo</button>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/5">
      <div className="mx-auto max-w-7xl px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <div className="flex items-center gap-2">
          <div className="size-6 rounded bg-gradient-to-br from-primary to-accent grid place-items-center"><Music className="size-3 text-white" /></div>
          <span>© {new Date().getFullYear()} Pulse.ai — Ecosistema inteligente para conciertos.</span>
        </div>
        <div className="flex items-center gap-6">
          <a href="#" className="hover:text-foreground">Privacidad</a>
          <a href="#" className="hover:text-foreground">Términos</a>
          <a href="#" className="hover:text-foreground">Contacto</a>
        </div>
      </div>
    </footer>
  );
}
