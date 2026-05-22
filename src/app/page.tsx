import HeroSection from "@/components/Landing/HeroSection";
import StorySection from "@/components/Landing/StorySection";
import PartnersSection from "@/components/Landing/PartnersSection";
import StatsSection from "@/components/Landing/StatsSection";
import FooterSection from "@/components/Landing/FooterSection";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.mainWrapper}>
      {/* Decorative Grid Lines - Desktop Only */}
      <div className={styles.gridDecorations}>
        {Array.from({ length: 12 }).map((_, i) => (
          <div key={`line-v-${i}`} className={styles.verticalLine} style={{ left: `${(i + 1) * 120}px` }}>
            {Array.from({ length: 8 }).map((_, j) => (
              <div key={`cross-${i}-${j}`} className={styles.cross} style={{ top: `${(j + 1) * 12}%` }}></div>
            ))}
          </div>
        ))}
      </div>

      <div className={styles.contentWrapper}>
        <HeroSection />
        <StorySection />
        <PartnersSection />
        <StatsSection />
        <FooterSection />
      </div>
    </main>
  );
}
