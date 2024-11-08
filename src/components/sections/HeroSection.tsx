import Button from '../ui/Button';

export default function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-5xl font-bold mb-6">Hi, I'm AZMIR</h1>
        <p className="text-xl mb-8">Full Stack Developer | Problem Solver | Creator</p>
        <Button size="lg">Get in touch</Button>
      </div>
    </section>
  );
} 