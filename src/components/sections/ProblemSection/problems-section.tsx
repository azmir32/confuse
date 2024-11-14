import { ProblemCard } from "./problem-card"
import { problemsData } from "./data"

export function ProblemsSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="size text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-8">
          Solving Your Web Challenges
        </h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {problemsData.map((item, index) => (
            <ProblemCard key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  )
}