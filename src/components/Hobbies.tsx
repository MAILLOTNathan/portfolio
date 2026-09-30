import SectionHeader from "@/components/SectionHeader";
import CardGrid from "@/components/ui/CardGrid";
import { hobbies } from "@/data/hobbies";

export default function Hobbies() {
  return (
    <section id="hobbies" className="section-container py-20 sm:py-28">
      <SectionHeader
        eyebrow="Passions"
        title="Mes passions"
        lead="Ce qui m'anime en dehors du code. Cliquez sur une carte pour en savoir plus."
      />

      <div className="mt-12">
        <CardGrid items={hobbies} />
      </div>
    </section>
  );
}
