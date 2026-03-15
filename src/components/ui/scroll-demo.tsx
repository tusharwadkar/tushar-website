import { ContainerScroll } from "@/components/ui/container-scroll-animation";

export function HeroScrollDemo() {
  return (
    <div className="flex flex-col overflow-hidden bg-background">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl font-black text-foreground md:text-7xl lg:text-8xl tracking-tighter leading-none mb-4">
              Mastering the Art of <br />
              <span className="text-yellow-500 italic block mt-2">Digital Craft</span>
            </h1>
          </>
        }
      >
        <img
          src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop"
          alt="hero"
          className="mx-auto rounded-2xl object-cover h-full object-left-top shadow-2xl"
          draggable={false}
        />
      </ContainerScroll>
    </div>
  );
}
