import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ProjectsSection } from "@/components/projects-section"
import { SkillsOrbit } from "@/components/skills-orbit"
import { ExperienceTimeline } from "@/components/experience-timeline"
import { ContactPortal } from "@/components/contact-portal"
import { CompetitiveProgrammingSection } from "@/components/competitive-programming-section"
import { AchievementsSection } from "@/components/achievements-section"

export default function Home() {
  return (
    <div className="relative">
      <HeroSection />
      <AboutSection />
      <CompetitiveProgrammingSection />
      <SkillsOrbit />
      <AchievementsSection />
      
      <ProjectsSection />
      <ExperienceTimeline />
      <ContactPortal />
    </div>
  )
}
