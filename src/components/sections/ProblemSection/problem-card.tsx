import { CheckCircle, XCircle } from 'lucide-react'

interface ProblemSolution {
  problem: string
  solution: string
  skill: string
}

export function ProblemCard({ problem, solution, skill }: ProblemSolution) {
  return (
    <div className="bg-white rounded-xl shadow-xl p-8 flex flex-col gap-6 hover:shadow-2xl transition-shadow duration-300">
      <div className="mb-2">
        <div className="flex items-start gap-4">
          <XCircle className="h-8 w-8 text-red-500 flex-shrink-0 mt-1" />
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Problem:</h3>
            <p className="text-xl text-gray-800">{problem}</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col flex-grow">
        <div className="flex items-start gap-4 mb-6">
          <CheckCircle className="h-8 w-8 text-green-500 flex-shrink-0 mt-1" />
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Solution:</h3>
            <p className="text-xl text-gray-700 leading-relaxed">{solution}</p>
          </div>
        </div>

        <span className="inline-flex items-center px-4 py-2 rounded-full text-base font-semibold bg-blue-100 text-blue-800 self-start hover:bg-blue-200 transition-colors">
          {skill}
        </span>
      </div>
    </div>
  )
}