import { motion } from "framer-motion";
import { Globe, Target, Zap, Code, ShieldCheck, MapPin } from "lucide-react";
import PageLayout from "../components/PageLayout";

const values = [
  {
    icon: Zap,
    title: "Precision Over Volume",
    description:
      "We curate fewer products with greater intention. Every item in our catalog has earned its place through rigorous quality evaluation.",
  },
  {
    icon: Target,
    title: "Purposeful Design",
    description:
      "Form follows function, but never at the expense of beauty. Our products exist at the intersection of utility and aesthetic mastery.",
  },
  {
    icon: Globe,
    title: "Responsible Sourcing",
    description:
      "We partner exclusively with manufacturers who share our commitment to ethical labor practices and environmental stewardship.",
  },
];

export default function About() {
  return (
    <PageLayout>
      {/* Hero */}
      <section className="relative py-24 overflow-hidden border-b border-[hsl(var(--nova-border))] bg-[hsl(var(--nova-surface))]">
        <div
          className="absolute inset-0 bg-[radial-gradient(ellipse_60%_80%_at_50%_-20%,hsl(var(--nova-blue)/0.08),transparent)]"
          aria-hidden="true"
        />
        <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <p className="text-xs uppercase tracking-widest text-[hsl(var(--nova-blue))] font-semibold">
              The Nova Vision
            </p>
            <h1 className="font-heading text-4xl lg:text-6xl font-bold text-[hsl(var(--nova-text))] leading-tight">
              Where{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[hsl(var(--nova-blue))] to-[hsl(var(--nova-violet))]">
                Tech meets Tactile
              </span>
            </h1>
            <p className="text-[hsl(var(--nova-muted))] text-lg max-w-2xl mx-auto leading-relaxed">
              Founded in Okaloosa County, Nova Goods was born from a passion for
              clean code and high-end real estate. We bridge the gap between
              digital precision and physical durability.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Narrative Section */}
      <section className="py-20 bg-[hsl(var(--nova-bg))]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="flex items-center gap-3 text-[hsl(var(--nova-blue))]">
              <Code size={20} />
              <span className="text-xs font-bold uppercase tracking-widest">
                The Developer's Mindset
              </span>
            </div>
            <h2 className="text-3xl font-bold text-[hsl(var(--nova-text))]">
              Curated for the Modern Professional
            </h2>
            <p className="text-[hsl(var(--nova-muted))] leading-relaxed">
              As developers and designers, we spend our lives seeking the{" "}
              <span className="font-bold text-[hsl(var(--nova-blue))]">
                perfect setup
              </span>
              . Nova Goods is our way of sharing those discoveries. Whether it's
              a precision-milled pen or a liquid-cooled battlestation, every
              item is selected to enhance your workflow and environment.
            </p>
            <div className="flex items-center gap-3 text-[hsl(var(--nova-violet))]">
              <ShieldCheck size={20} />
              <span className="text-xs font-bold uppercase tracking-widest">
                Florida Licensed & Verified
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-[hsl(var(--nova-blue))/0.2] to-[hsl(var(--nova-violet))/0.2] blur-2xl rounded-full" />
            <img
              src="https://xtxsjngmweipiatfbjpr.supabase.co/storage/v1/object/public/products/about-photo.jpg"
              alt="Nova studio environment"
              className="relative rounded-2xl border border-[hsl(var(--nova-border))] shadow-2xl"
            />
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-[hsl(var(--nova-surface))] border-y border-[hsl(var(--nova-border))]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="text-xs uppercase tracking-widest text-[hsl(var(--nova-blue))] font-semibold mb-3">
              Built Different
            </p>
            <h2 className="font-heading text-3xl font-bold text-[hsl(var(--nova-text))]">
              Our Core Principles
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="p-8 rounded-xl border border-[hsl(var(--nova-border))] bg-[hsl(var(--nova-bg))] hover:border-[hsl(var(--nova-blue))]/30 transition-all duration-300"
              >
                <div className="p-3 rounded-lg bg-[hsl(var(--nova-blue))]/10 border border-[hsl(var(--nova-blue))]/20 w-fit mb-5">
                  <v.icon size={20} className="text-[hsl(var(--nova-blue))]" />
                </div>
                <h3 className="font-heading font-semibold text-[hsl(var(--nova-text))] text-lg mb-3">
                  {v.title}
                </h3>
                <p className="text-sm text-[hsl(var(--nova-muted))] leading-relaxed">
                  {v.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col items-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center mb-16">
            {[
              { value: "24/7", label: "Support" },
              { value: "850+", label: "Curated Items" },
              { value: "5-Star", label: "Reviews" },
              { value: "Panhandle", label: "Founded" },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
                className="relative p-6 group cursor-default"
              >
                {/* The Animated Border SVG */}
                <svg
                  className="absolute inset-0 w-full h-full pointer-events-none"
                  viewBox="0 0 100 100"
                  preserveAspectRatio="none"
                >
                  <motion.rect
                    x="0"
                    y="0"
                    width="100"
                    height="100"
                    rx="12" // Matches your card's rounded corners
                    fill="transparent"
                    stroke="hsl(var(--nova-blue))"
                    strokeWidth="4"
                    initial={{ pathLength: 0, opacity: 0 }}
                    whileHover={{
                      pathLength: 1,
                      opacity: 1,
                      transition: { duration: 0.8, ease: "easeInOut" },
                    }}
                    style={{ pathSpacing: 0 }}
                  />
                </svg>
                <div className="relative z-10">
                  <p className="font-heading text-3xl font-bold text-[hsl(var(--nova-blue))] transition-transform duration-300 group-hover:scale-110">
                    {stat.value}
                  </p>
                  <p className="text-xs text-[hsl(var(--nova-muted))] mt-1 uppercase tracking-wider font-medium">
                    {stat.label}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="flex items-center gap-2 text-[hsl(var(--nova-muted))] text-[10px] uppercase tracking-[0.3em] font-bold">
            <MapPin size={12} className="text-[hsl(var(--nova-blue))]" />
            Pensacola • Destin • Panama City
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
