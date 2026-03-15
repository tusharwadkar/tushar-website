'use client'

import { SplineScene } from "@/components/ui/splite";
import { Card } from "@/components/ui/card"
import { Spotlight } from "@/components/ui/spotlight"
 
export function SplineSceneBasic() {
  return (
    <section className="py-24 px-4 sm:px-6 md:px-12 bg-background">
      <div className="mx-auto max-w-7xl">
        <Card className="w-full min-h-[700px] md:h-[600px] bg-black/[0.96] relative overflow-hidden rounded-[3rem] border-zinc-800">
          <Spotlight
            className="-top-40 left-0 md:left-60 md:-top-20"
            fill="white"
          />
          
          <div className="flex flex-col md:flex-row h-full">
            {/* Left content */}
            <div className="flex-1 p-8 sm:p-12 relative z-20 flex flex-col justify-center">
              <h2 className="text-4xl sm:text-5xl md:text-7xl font-black bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 tracking-tighter leading-none">
                Let's Build <br /> Something <br /> Extraordinary
              </h2>
              <p className="mt-6 text-neutral-400 max-w-lg text-base sm:text-lg leading-relaxed font-medium">
                Ready to transform your vision into a digital reality? Reach out today 
                and let's discuss how we can create a high-impact experience together.
              </p>
            </div>

            {/* Right content */}
            <div className="flex-1 relative min-h-[400px] md:min-h-full will-change-transform transform-gpu">
              <SplineScene 
                scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                className="w-full h-full"
              />
            </div>
          </div>
        </Card>
      </div>
    </section>
  )
}
