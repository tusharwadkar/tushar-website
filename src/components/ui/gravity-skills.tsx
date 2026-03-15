import { Gravity, MatterBody } from "@/components/ui/gravity";

const SKILLS = [
  { name: "React", color: "bg-[#00d8ff]" },
  { name: "TypeScript", color: "bg-[#3178c6]" },
  { name: "Next.js", color: "bg-[#000000]" },
  { name: "Tailwind CSS", color: "bg-[#38b2ac]" },
  { name: "Node.js", color: "bg-[#339933]" },
  { name: "PostgreSQL", color: "bg-[#336791]" },
  { name: "Framer Motion", color: "bg-[#ff0055]" },
  { name: "UI/UX Design", color: "bg-[#ff61f6]" },
  { name: "Matter.js", color: "bg-[#ffd726]", textColor: "text-black" },
  { name: "Vite", color: "bg-[#646cff]" },
  { name: "Git", color: "bg-[#f05032]" },
  { name: "Docker", color: "bg-[#2496ed]" },
];

export function GravitySkills() {
  return (
    <section className="w-full h-[600px] flex flex-col relative bg-muted/20 overflow-hidden border-y border-border/50">
      <div className="absolute top-12 left-0 w-full z-10 pointer-events-none">
        <h2 className="text-4xl md:text-5xl font-black text-center text-foreground/10 uppercase tracking-[0.2em]">
          Full Stack Expertise
        </h2>
        <p className="text-center text-muted-foreground/40 font-medium mt-2">
          (Interactive Skills - Drag 'em around)
        </p>
      </div>
      
      <Gravity gravity={{ x: 0, y: 1 }} className="w-full h-full">
        {SKILLS.map((skill, index) => (
          <MatterBody
            key={skill.name}
            matterBodyOptions={{ friction: 0.5, restitution: 0.3 }}
            x={`${15 + (index % 5) * 15}%`}
            y={`${10 + Math.floor(index / 5) * 15}%`}
            angle={Math.random() * 20 - 10}
          >
            <div 
              className={`
                text-sm sm:text-base md:text-lg 
                ${skill.color} 
                ${skill.textColor || "text-white"} 
                rounded-full hover:cursor-grab active:cursor-grabbing 
                px-6 py-3 shadow-lg border border-white/10
                transition-transform hover:scale-105 active:scale-95
              `}
            >
              {skill.name}
            </div>
          </MatterBody>
        ))}
      </Gravity>
    </section>
  );
}
