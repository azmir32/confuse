// In your page file
import { SkillsGrid } from '@/components/SkillsGrid';

export default function SkillsPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl md:text-5xl lg:text-6xl text-center font-bold mb-8">My Skills</h1>
      <SkillsGrid />
    </div>
  );
}