'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function Skills() {
  const [activeSkill, setActiveSkill] = useState<string | null>(null)

  const skills = [
    { name: 'HTML', level: 'Advanced', description: 'Mahir dalam menulis HTML5 semantik dan praktik terbaik aksesibilitas.' },
    { name: 'CSS', level: 'Advanced', description: 'Ahli dalam CSS3, Flexbox, Grid, dan prinsip desain responsif.' },
    { name: 'JavaScript', level: 'Intermediate', description: 'Pemahaman kuat tentang fitur ES6+ dan manipulasi DOM.' },
    { name: 'React', level: 'Intermediate', description: 'Pengalaman dengan hooks, context API, dan manajemen state.' },
    { name: 'Bootstrap', level: 'Intermediate', description: 'Familiar dengan komponen dan sistem grid Bootstrap.' },
    { name: 'Git', level: 'Intermediate', description: 'Mahir dalam kontrol versi, strategi branching, dan alur kerja kolaboratif.' },
  ]

  const handleSkillClick = (skillName: string) => {
    setActiveSkill(activeSkill === skillName ? null : skillName)
  }

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl sm:text-4xl font-bold mb-10 text-center">My Skills</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {skills.map((skill, index) => (
          <Card 
            key={index} 
            className={`bg-gray-800 border-gray-700 hover:border-blue-500 transition-colors cursor-pointer ${activeSkill === skill.name ? 'border-blue-500' : ''}`}
            onClick={() => handleSkillClick(skill.name)}
          >
            <CardHeader>
              <CardTitle>{skill.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <Badge variant="secondary">{skill.level}</Badge>
              {activeSkill === skill.name && (
                <p className="mt-2 text-sm text-gray-300">{skill.description}</p>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

