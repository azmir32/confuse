"use client"

import { motion } from "framer-motion"
import { Code2, Layout, Server, Sparkles, Workflow, LucideIcon } from "lucide-react"
import Link from 'next/link'

interface Skill {
  icon: LucideIcon
  title: string
  description: string
}

export default function AboutSection() {
  const skills: Skill[] = [
    {
      icon: Layout,
      title: "Frontend Development",
      description: "Creating responsive and intuitive user interfaces with React.js and Next.js",
    },
    {
      icon: Server,
      title: "Backend Development",
      description: "Building robust server-side applications and APIs",
    },
    {
      icon: Code2,
      title: "Clean Code",
      description: "Writing maintainable, efficient, and well-documented code",
    },
    {
      icon: Workflow,
      title: "Optimization",
      description: "Improving performance and scalability of web applications",
    },
  ]

  // Animation variants for Framer Motion
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  }

  return (
    <section className="relative w-full overflow-hidden bg-slate-50 py-24">
      <div 
        className="absolute inset-0 opacity-50" 
        style={{
          backgroundImage: 'url("/grid-pattern.svg")',
          backgroundPosition: 'center',
          maskImage: 'linear-gradient(0deg, transparent, black)',
          WebkitMaskImage: 'linear-gradient(0deg, transparent, black)'
        }}
      />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center space-y-12">
          <div className="w-full max-w-3xl text-center">
            <motion.div
              {...fadeInUp}
              viewport={{ once: true }}
              className="flex flex-col items-center"
            >
              <div className="inline-flex items-center rounded-lg bg-blue-50 px-6 py-3 text-xl font-semibold">
                <Sparkles className="mr-3 h-6 w-6 text-blue-600" />
                Full Stack Developer
              </div>
              <Link 
                href="/aboutMe"
                className="group mt-4 inline-block cursor-pointer transition-all duration-200 ease-in-out"
              >
                <h2 className="text-3xl font-bold tracking-tight text-slate-900 transition-all duration-200 ease-in-out group-hover:text-blue-600 group-hover:scale-105 sm:text-4xl">
                  About Me
                </h2>
                <span className="block h-0.5 max-w-0 bg-blue-600 transition-all duration-200 group-hover:max-w-full"></span>
              </Link>
              <p className="mt-4 text-slate-700">
                A versatile and solutions-driven Full Stack Developer with experience in developing responsive, scalable, and
                optimized web applications.
              </p>
            </motion.div>
          </div>

          <div className="grid w-full max-w-6xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex flex-col items-center text-center"
              >
                <div className="flex h-32 w-32 items-center justify-center rounded-full border-4 border-blue-600 bg-white shadow-lg">
                  <skill.icon className="h-12 w-12 text-blue-600" />
                </div>
                <h3 className="mt-6 text-xl font-semibold text-slate-900">{skill.title}</h3>
                <p className="mt-2 text-slate-700">{skill.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            {...fadeInUp}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="w-full max-w-3xl rounded-lg border border-slate-200 bg-blue-50 p-8 text-center"
          >
            <p className="text-lg leading-relaxed text-slate-700">
              Skilled in both front-end and back-end development, with expertise in HTML, CSS, JavaScript, React.js, Next.js,
              and server-side programming. Known for a keen eye for detail and a commitment to producing clean, maintainable
              code that meets both client and business requirements. Passionate about creating user-friendly experiences and
              continuously expanding knowledge in modern frameworks and technologies to stay ahead in the field.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}