import { motion } from 'framer-motion';
import { FlowButton } from './flow-button';

interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
  href: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Impulse Digital",
    category: "Digital Marketing Agency",
    image: "/impulse digital.png",
    description: "Full-service digital marketing solutions for global brands.",
    href: "https://www.theimpulsedigital.com/",
  },
  {
    id: 2,
    title: "Birla Eco-Sodium",
    category: "Sustainable Chemicals",
    image: "/birla eco.png",
    description: "Eco-friendly industrial sodium sulphate manufacturing.",
    href: "https://www.birlaecosodium.com/",
  },
  {
    id: 3,
    title: "Ayama Fit",
    category: "Fitness & Wellness",
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=800",
    description: "Holistic fitness coaching and premium workout programs.",
    href: "https://ayamafit.com/",
  },
  {
    id: 4,
    title: "Ayama Health",
    category: "Healthcare Services",
    image: "/ayamahealth.jpg",
    description: "Advanced healthcare solutions and wellness monitoring.",
    href: "https://www.ayamahealth.com/",
  },
  {
    id: 5,
    title: "Force for Good",
    category: "Social Impact",
    image: "/aforceforgood heros.png",
    description: "Digital reporting platform for corporate social responsibility.",
    href: "https://aforceforgoodupdates.com/",
  },
  {
    id: 6,
    title: "ElectroMech-Yale",
    category: "Material Handling",
    image: "/emlt.png",
    description: "Precision-engineered forklift trucks and logistics solutions.",
    href: "https://www.emlt.in/",
  },
  {
    id: 7,
    title: "Automag India",
    category: "Automation Systems",
    image: "/automag.png",
    description: "Intelligent warehousing and automated storage systems.",
    href: "https://automagindia.com/",
  },
  {
    id: 8,
    title: "Aahar Foods",
    category: "FMCG / Food",
    image: "/aahar-food.png",
    description: "Premium ethnic spices and high-quality food products.",
    href: "https://www.aaharfoods.com/",
  },
  {
    id: 10,
    title: "Greenviro",
    category: "Environment Tech",
    image: "/greenviro.png",
    description: "Advanced waste water treatment and green solutions.",
    href: "https://greenviro.net/waste-water-treatment/",
  },
  {
    id: 11,
    title: "Shree Rubber Works",
    category: "Manufacturing",
    image: "/shree-rubber.png",
    description: "Industrial-grade rubber products and components.",
    href: "https://www.shreerubberworks.com/",
  }
];

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="flex flex-col group"
    >
      <div className="relative aspect-[16/10] overflow-hidden rounded-[2rem] bg-muted/20 border border-border/50 shadow-sm transition-all duration-500 hover:shadow-2xl hover:border-border/100">
        {/* Anchor Wrapper for Image Only (or whole card if desired, but user specifically asked for button too) */}
        <a 
          href={project.href} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="absolute inset-0 z-20 cursor-pointer"
        >
          <span className="sr-only">View {project.title}</span>
        </a>

        <motion.img
          src={project.image}
          alt={project.title}
          className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-110"
        />
        
        {/* Subtle Overlay to make it feel premium */}
        <div className="absolute inset-0 bg-black/5 transition-opacity duration-500 group-hover:bg-black/20" />
      </div>

      <div className="mt-6 flex flex-col items-start px-2">
        <div className="flex w-full flex-col md:flex-row items-start justify-between gap-6 md:gap-4">
          <div className="flex-1">
            <span className="mb-2 block text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground text-left">
              {project.category}
            </span>
            <h3 className="mb-3 text-2xl font-black text-foreground md:text-4xl tracking-tighter leading-none text-left">
              {project.title}
            </h3>
            <p className="max-w-2xl text-base text-muted-foreground leading-relaxed text-left">
              {project.description}
            </p>
          </div>

          <div className="flex-shrink-0 mt-2 md:mt-2 scale-[0.9] md:scale-[0.8] origin-left md:origin-right">
             <FlowButton text="CHECK PROJECT" href={project.href} />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export const ModernProjects = () => {
  return (
    <section id="projects" className="bg-background py-32 px-4 sm:px-6 md:px-12">
      <div className="mx-auto max-w-7xl">
        <header className="mb-16 flex flex-col items-start justify-between gap-10 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <motion.h2 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="mb-6 text-5xl font-black uppercase tracking-tighter md:text-8xl leading-[0.8]"
            >
              Mastered <span className="text-yellow-500 italic block sm:inline">Craft</span>
            </motion.h2>
            <motion.p 
               initial={{ opacity: 0 }}
               whileInView={{ opacity: 1 }}
               viewport={{ once: true }}
               transition={{ delay: 0.2 }}
               className="text-lg text-muted-foreground leading-relaxed font-medium"
            >
              Showcasing a stable overview of my professional digital ecosystem. Every card reveals a unique collaboration focused on impact.
            </motion.p>
          </div>
          

        </header>

        {/* Stable 2-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>


      </div>
    </section>
  );
};
