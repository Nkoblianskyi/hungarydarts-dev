import { HeroSection } from '@/components/home/hero-section'
import { HistorySection } from '@/components/home/history-section'
import { RulesSection } from '@/components/home/rules-section'
import { EquipmentSection } from '@/components/home/equipment-section'
import { TechniqueSection } from '@/components/home/technique-section'
import { BlogPreviewSection } from '@/components/home/blog-preview-section'

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <HistorySection />
      <RulesSection />
      <EquipmentSection />
      <TechniqueSection />
      <BlogPreviewSection />
    </>
  )
}
