import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "./button";

interface Carousel3DProps {
  images: { src: string; alt: string; title: string }[];
}

export const Carousel3D = ({ images }: Carousel3DProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, images.length]);

  const goToPrevious = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const getSlidePosition = (index: number) => {
    const diff = index - currentIndex;
    if (diff === 0) return "center";
    if (diff === 1 || diff === -(images.length - 1)) return "right";
    if (diff === -1 || diff === images.length - 1) return "left";
    return "hidden";
  };

  return (
    <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden perspective-1000">
      <div className="relative w-full h-full flex items-center justify-center">
        {images.map((image, index) => {
          const position = getSlidePosition(index);
          return (
            <div
              key={index}
              className={`absolute transition-all duration-700 ease-in-out ${
                position === "center"
                  ? "z-30 scale-100 opacity-100 translate-x-0"
                  : position === "left"
                  ? "z-20 scale-75 opacity-60 -translate-x-[60%] md:-translate-x-[70%] rotate-y-45"
                  : position === "right"
                  ? "z-20 scale-75 opacity-60 translate-x-[60%] md:translate-x-[70%] -rotate-y-45"
                  : "z-10 scale-50 opacity-0"
              }`}
              style={{
                transform: `${
                  position === "left"
                    ? "translateX(-60%) scale(0.75) rotateY(25deg)"
                    : position === "right"
                    ? "translateX(60%) scale(0.75) rotateY(-25deg)"
                    : "translateX(0) scale(1) rotateY(0deg)"
                }`,
              }}
            >
              <div className="relative w-[280px] h-[200px] md:w-[400px] md:h-[280px] lg:w-[600px] lg:h-[400px] rounded-xl overflow-hidden shadow-2xl">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 md:p-6">
                  <h3 className="text-white text-lg md:text-xl lg:text-2xl font-bold">
                    {image.title}
                  </h3>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <Button
        variant="outline"
        size="icon"
        onClick={goToPrevious}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-40 bg-background/80 backdrop-blur-sm"
      >
        <ChevronLeft className="h-6 w-6" />
      </Button>

      <Button
        variant="outline"
        size="icon"
        onClick={goToNext}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-40 bg-background/80 backdrop-blur-sm"
      >
        <ChevronRight className="h-6 w-6" />
      </Button>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-40 flex gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setCurrentIndex(index);
              setIsAutoPlaying(false);
            }}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentIndex
                ? "bg-primary w-8"
                : "bg-muted-foreground/50 hover:bg-muted-foreground"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};
