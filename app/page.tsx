"use client";

import Image from "next/image";
import { DownloadCloud } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SkillCard } from "@/components/SkillCard";
import { useState } from "react";

interface Skill {
  id: string;
  title: string;
  items: string[];
  progress: number;
  defaultProgress: number;
}

const initialSkills: Skill[] = [
  {
    id: "sales",
    title: "Sales Leadership",
    items: ["Team Management", "Revenue Growth", "Client Relations", "Strategic Planning"],
    progress: 85,
    defaultProgress: 85
  },
  {
    id: "dev",
    title: "Development Skills",
    items: ["Frontend Development", "React", "Next.js", "TailwindCSS"],
    progress: 50,
    defaultProgress: 50
  },
  {
    id: "fitness",
    title: "Personal Achievements",
    items: ["Bench Press: 105kg", "Squat: 140kg", "Deadlift: 205kg"],
    progress: 70,
    defaultProgress: 70
  },
];

export default function Home() {
  const [skills, setSkills] = useState(initialSkills);

  function handleProgressChange(id: string, progress: number) {
    setSkills((prevSkills) =>
      prevSkills.map((skill) =>
        skill.id === id ? { ...skill, progress } : skill
      )
    );

    // Reset to default progress after 1 second
    setTimeout(() => {
      setSkills((prevSkills) =>
        prevSkills.map((skill) =>
          skill.id === id ? { ...skill, progress: skill.defaultProgress } : skill
        )
      );
    }, 1000);
  }

  return (
    <div className="space-y-8">
      <div className="flex flex-col items-center space-y-4">
        <div className="relative w-40 h-40 rounded-full overflow-hidden">
          <Image
            src="https://media.licdn.com/dms/image/v2/D4E03AQF7Vva9Bewv0Q/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1732454598585?e=1738195200&v=beta&t=ev_cO5M5gMhsqa5XMBxNpn_LDAtk3eNPnUzY3iy3scI"
            alt="Profile"
            fill
            className="object-cover"
          />
        </div>
        <h1 className="text-4xl font-bold">Matúš Staňo</h1>
        <p className="text-xl text-muted-foreground">Sales Manager & Tech Enthusiast</p>
        <Button onClick={() => window.open("https://drive.google.com/uc?export=download&id=1afx7X8CxgRRtidJChXqlhwpmRFNj1RDq", "_blank")}>
          <DownloadCloud className="mr-2 h-4 w-4" />
          Download CV
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {skills.map((skill) => (
          <SkillCard
            key={skill.id}
            {...skill}
            onProgressChange={(progress) => handleProgressChange(skill.id, progress)}
          />
        ))}
      </div>
    </div>
  );
}