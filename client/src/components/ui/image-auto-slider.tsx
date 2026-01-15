
import React from 'react';

export const ImageAutoSlider = ({ images }: { images: string[] }) => {
  // Duplicate images for seamless loop
  const duplicatedImages = [...images, ...images];

  return (
    <div className="relative w-full overflow-hidden py-12">
      <style>{`
        @keyframes scroll-right {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .infinite-scroll {
          animation: scroll-right 30s linear infinite;
        }

        .scroll-container {
          mask: linear-gradient(
            90deg,
            transparent 0%,
            black 10%,
            black 90%,
            transparent 100%
          );
          -webkit-mask: linear-gradient(
            90deg,
            transparent 0%,
            black 10%,
            black 90%,
            transparent 100%
          );
        }

        .image-item {
          transition: transform 0.3s ease, filter 0.3s ease;
        }

        .image-item:hover {
          transform: scale(1.05);
          filter: brightness(1.2) drop-shadow(0 0 8px rgba(0, 243, 255, 0.4));
        }
      `}</style>
      
      <div className="scroll-container w-full">
        <div className="infinite-scroll flex gap-6 w-max">
          {duplicatedImages.map((image, index) => (
            <div
              key={index}
              className="image-item flex-shrink-0 w-64 h-40 md:w-80 md:h-48 rounded-xl overflow-hidden border border-white/10 shadow-2xl"
            >
              <img
                src={image}
                alt={`Certificate ${(index % images.length) + 1}`}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
