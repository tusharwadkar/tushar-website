import { motion } from 'framer-motion';
import { Phone, MessageCircle } from 'lucide-react';
import { cn } from '@/lib/utils';
import { FlowButton } from './flow-button';

interface MinimalistHeroProps {
  logoText?: string;
  logoSrc?: string;
  mainText: string;
  readMoreLink: string;
  imageSrc: string;
  imageAlt: string;
  overlayText: {
    part1: string;
    part2: string;
    part3: string;
  };
  className?: string;
  whatsappNumber?: string;
  phoneNumber?: string;
}

export const MinimalistHero = ({
  logoText,
  logoSrc,
  mainText,
  readMoreLink,
  imageSrc,
  imageAlt,
  overlayText,
  className,
  whatsappNumber = "919876543210", 
  phoneNumber = "919876543210",
}: MinimalistHeroProps) => {
  return (
    <div
      className={cn(
        'relative flex min-h-screen h-[100dvh] w-full flex-col items-center justify-between overflow-hidden bg-background p-4 sm:p-6 font-sans md:p-12 pt-24 md:pt-32',
        className
      )}
    >
      {/* Sticky Header */}
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-background/70 backdrop-blur-md will-change-transform transform-gpu">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-4 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "circOut" }}
            className="flex items-center gap-2"
          >
            {logoSrc ? (
              <img src={logoSrc} alt="Logo" className="h-8 w-auto object-contain md:h-10" />
            ) : (
              <span className="text-xl font-black tracking-tighter uppercase">{logoText}</span>
            )}
          </motion.div>

          <div className="flex items-center gap-3">
            <motion.a
              href={`https://wa.me/${whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-2 text-[10px] font-bold text-white transition-all hover:bg-[#128C7E] shadow-lg md:px-6 md:py-2.5 md:text-xs"
            >
              <MessageCircle className="h-3 w-3 md:h-4 md:w-4 fill-white" />
              <span className="hidden sm:inline">WHATSAPP</span>
            </motion.a>
            <motion.a
               href={`tel:+${phoneNumber}`}
               initial={{ opacity: 0, x: 20 }}
               animate={{ opacity: 1, x: 0 }}
               transition={{ duration: 0.6, delay: 0.3 }}
               whileHover={{ scale: 1.05 }}
               whileTap={{ scale: 0.95 }}
               className="flex items-center gap-2 rounded-full bg-black px-4 py-2 text-[10px] font-bold text-white transition-all hover:bg-yellow-500 hover:text-black shadow-lg border border-white/10 md:px-6 md:py-2.5 md:text-xs"
            >
              <Phone className="h-3 w-3 md:h-4 md:w-4" />
              <span className="hidden sm:inline">CALL ME</span>
            </motion.a>
          </div>
        </div>
      </header>

      <div className="relative my-2 sm:my-4 md:my-8 grid w-full max-w-7xl grid-cols-1 items-center gap-2 sm:gap-4 md:grid-cols-3 md:gap-8">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: "circOut" }}
          className="z-20 order-2 md:order-1 text-center md:text-left flex flex-col justify-center"
        >
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="mx-auto max-w-[280px] text-[10px] sm:text-xs md:max-w-xs md:text-base leading-relaxed text-foreground/80 md:mx-0"
          >
            {mainText}
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="mt-3 sm:mt-4 md:mt-6 flex justify-center md:justify-start scale-[0.85] sm:scale-100"
          >
            <FlowButton text="Read More" href={readMoreLink} />
          </motion.div>
        </motion.div>

        <div className="relative order-1 md:order-2 flex justify-center items-center py-4 md:py-0">
            <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
                className="absolute z-0 h-[150px] w-[150px] sm:h-[180px] sm:w-[180px] rounded-full bg-yellow-400 md:h-[350px] md:w-[350px] lg:h-[420px] lg:w-[420px] shadow-xl"
            ></motion.div>
            
            <motion.div
                animate={{
                    y: [0, -10, 0],
                }}
                transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                className="relative z-10 flex justify-center"
            >
                <motion.img
                    src={imageSrc}
                    alt={imageAlt}
                    className="h-auto w-32 sm:w-40 md:w-80 lg:w-96 object-contain select-none drop-shadow-[0_20px_40px_rgba(0,0,0,0.15)]"
                    style={{ transformOrigin: 'center center' }}
                    initial={{ opacity: 0, y: 30, scale: 0.8 }}
                    animate={{ opacity: 1, y: 0, scale: 1.1 }}
                    transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
                    onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.onerror = null;
                    target.src = `https://placehold.co/600x800/eab308/ffffff?text=Developer`;
                    }}
                />
            </motion.div>
        </div>

        <div className="z-20 order-3 flex flex-col items-center justify-center text-center md:items-start md:text-left">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6, ease: "circOut" }}
            className="text-4xl sm:text-5xl font-black text-foreground md:text-7xl lg:text-8xl xl:text-9xl leading-[0.9] tracking-tighter"
          >
            <span className="block">{overlayText.part1}</span>
            <motion.span
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.8, ease: "circOut" }}
                className="block text-yellow-500 drop-shadow-sm"
            >
                {overlayText.part2}
            </motion.span>
            <motion.span
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 1, ease: "circOut" }}
                className="block text-yellow-600 drop-shadow-sm"
            >
                {overlayText.part3}
            </motion.span>
          </motion.h1>
        </div>
      </div>
    </div>
  );
};
