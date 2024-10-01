"use client"
import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay"

export function Carousel() {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [
    Autoplay({stopOnInteraction: false, delay: 2500}),
  ]);

  return (
    <div className="embla mx-auto ma-w-lg" ref={emblaRef}>
      <div className="embla__container h-full">
        <div className="embla__slide flex items-center justify-center">
          <Image src="/assets/1.jpg" width={1000} height={500} alt="asfasdf" />
        </div>
        <div className="embla__slide flex items-center justify-center">
          <Image src="/assets/2.jpg" width={1000} height={500} alt="asfasdf" />
        </div>
        <div className="embla__slide flex items-center justify-center">
          <Image src="/assets/3.jpg" width={1000} height={500} alt="asfasdf" />
        </div>
        <div className="embla__slide flex items-center justify-center">
          <Image src="/assets/4.jpg" width={1000} height={500} alt="asfasdf" />
        </div>
      </div>
    </div>
  );
}
