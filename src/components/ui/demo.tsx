import { MinimalistHero } from '@/components/ui/minimalist-hero';

const MinimalistHeroDemo = () => {

  return (
    <MinimalistHero
      logoText="Tushar Wadkar."
      mainText="Helping brands grow with modern web design and development. Creating digital experiences that are fast, scalable, and impactful."
      readMoreLink="#"
      imageSrc="/my-profile.png"
      imageAlt="Profile portrait of Tushar Wadkar"
      overlayText={{
        part1: 'Design.',
        part2: 'Develop.',
        part3: 'Deliver.',
      }}
    />
  );
};

export default MinimalistHeroDemo;
