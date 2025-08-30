// app/page.tsx
import { HeroSection } from '@/components/Hero';
import { GradientBars} from '@/components/ui/bg-bars';
export default function HomePage() {
  return (
  <>
    <GradientBars />
    <HeroSection
     imageSrc="/n8n.png"        // Path to your video in public folder
     buttonText="Go to n8n"      // Text for the InteractiveHoverButton
     redirectUrl="http://20.194.10.48:5678/home/workflows" // External URL or internal route
     // bars={25}                         // Optional: number of gradient bars
     // colors={['#e60a64', '#ff6b81', '#f8a5c2', 'transparent']} // Optional gradient colors
    />
</>
  );
}
