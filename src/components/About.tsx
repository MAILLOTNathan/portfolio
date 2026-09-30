import SectionHeader from "@/components/SectionHeader";
import { Boxes } from "@/components/ui/Backgrounds";
import { site } from "@/lib/site";
import { assetPath } from "@/lib/utils";

const quickFacts = [
  { icon: "📍", label: "Basé à", value: site.location },
  { icon: "🎓", label: "Formation", value: site.school },
  { icon: "💻", label: "Métier", value: site.role },
  { icon: "🥁", label: "À côté", value: "Batteur dans un groupe" },
];

export default function About() {
  return (
    <section id="whoami" className="section-container py-20 sm:py-28">
      <SectionHeader
        eyebrow="À propos"
        title="Qui suis-je ?"
        lead="Développeur full stack, passionné par l'informatique et la musique — deux univers où la précision et la rigueur font toute la différence."
      />

      <div className="relative mt-12 overflow-hidden rounded-3xl border border-white/10 bg-slate-950 p-6 shadow-2xl shadow-purple-500/5 sm:p-10">
        {/* Decorative interactive grid, fading towards the centre. */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 overflow-hidden opacity-60 [mask-image:radial-gradient(ellipse_at_center,transparent_30%,black)]"
        >
          <Boxes />
        </div>

        <div className="relative grid gap-8 lg:grid-cols-[minmax(0,17rem)_1fr] lg:items-center lg:gap-12">
          <div className="relative mx-auto w-full max-w-xs lg:max-w-none">
            <div className="absolute -inset-3 rounded-3xl bg-gradient-to-br from-cyan-400/30 via-purple-500/30 to-fuchsia-500/30 blur-2xl" />
            {/* eslint-disable-next-line @next/next/no-img-element -- static export, local asset */}
            <img
              src={assetPath("/images/photo-pro.jpg")}
              alt={`Photo de ${site.name}`}
              loading="lazy"
              decoding="async"
              className="relative h-72 w-full rounded-2xl border border-white/10 object-cover object-top sm:h-96"
            />
          </div>

          <div className="space-y-5 text-neutral-200">
            <p className="text-sm leading-relaxed sm:text-base">
              Je suis un jeune développeur, passionné par l&apos;informatique et
              la musique. Deux passions dans lesquelles la précision et la
              rigueur sont de mise, c&apos;est pourquoi je m&apos;efforce de
              toujours donner le meilleur de moi-même dans tout ce que
              j&apos;entreprends.
            </p>
            <p className="text-sm leading-relaxed sm:text-base">
              Toujours prêt à relever de nouveaux défis, je suis convaincu que
              la persévérance et la curiosité sont les clés de la réussite.
            </p>

            <dl className="grid gap-3 pt-2 sm:grid-cols-2">
              {quickFacts.map((fact) => (
                <div
                  key={fact.label}
                  className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 backdrop-blur"
                >
                  <dt className="flex items-center gap-2 text-xs uppercase tracking-wider text-neutral-400">
                    <span aria-hidden="true">{fact.icon}</span>
                    {fact.label}
                  </dt>
                  <dd className="mt-1 text-sm font-medium text-white">
                    {fact.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
