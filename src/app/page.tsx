import HeroSlider from "@/components/sections/HeroSlider";
import StatsBar from "@/components/sections/StatsBar";
import ThreePanelSection from "@/components/sections/ThreePanelSection";
import { client } from "@/lib/sanity";
import { heroSlidesQuery, statsQuery, threePanelQuery } from "@/lib/queries";

export const revalidate = 60;

export default async function HomePage() {
  const [heroSlides, stats, threePanelData] = await Promise.all([
    client.fetch(heroSlidesQuery).catch(() => []),
    client.fetch(statsQuery).catch(() => []),
    client.fetch(threePanelQuery).catch(() => null),
  ]);

  return (
    <>
      <HeroSlider slides={heroSlides} />
      <ThreePanelSection panelData={threePanelData} />
      <StatsBar stats={stats} />
    </>
  );
}
