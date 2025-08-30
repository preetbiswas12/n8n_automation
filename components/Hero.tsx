/* eslint-disable @next/next/no-img-element */
'use client';

import { useRouter } from 'next/navigation';
import { InteractiveHoverButton } from "./ui/interactive-hover-button";

interface HeroSectionProps {
  imageSrc: string; // image URL
  buttonText: string; // text for the hover button
  redirectUrl: string;
  bars?: number;
  colors?: string[];
}

export const HeroSection = ({
  imageSrc,
  buttonText,
  redirectUrl,
}: HeroSectionProps) => {
  const router = useRouter();

  return (
    <div className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      {/* Transparent Grainy Noise Overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundColor: 'rgba(255,255,255,0)',
          backgroundImage:
            'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'100\' height=\'100\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.8\' numOctaves=\'4\' stitchTiles=\'stitch\' /%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\' opacity=\'0.70\' /%3E%3C/svg%3E")',
          backgroundRepeat: 'repeat',
          mixBlendMode: 'overlay',
        }}
      />

      {/* Centered Image & Button */}
      <div className="absolute z-10 flex flex-col items-center justify-center text-center gap-6">
        <img
          src={imageSrc}
          alt="Hero Image"
          className="w-64 h-64 object-cover rounded-lg"
        />

        <InteractiveHoverButton
          onClick={() => {
            if (redirectUrl.startsWith('http')) {
              window.location.href = redirectUrl;
            } else {
              router.push(redirectUrl);
            }
          }}
        >
          {buttonText}
        </InteractiveHoverButton>
      </div>
    </div>
  );
};
