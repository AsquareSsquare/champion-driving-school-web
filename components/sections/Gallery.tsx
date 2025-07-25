import React from "react";
import { ParallaxScroll } from "@/components/ui/parallax-scroll";
import { galleryImages } from "@/constants/data";

function Gallery() {
  return (
    <section id="gallery" className="min-h-screen flex items-center bg-white">
      <div className="w-full max-w-7xl mx-auto px-6 xl:px-0 py-32">
        <div className="flex flex-col items-center gap-4">
          <h1 className="text-center text-4xl font-bold">Our Gallery</h1>
          <p className="text-center max-w-4xl text-lg text-muted-foreground">
            Take a look at our modern facilities, professional vehicles, and
            students in action
          </p>
        </div>

        <div className="mt-20">
          <ParallaxScroll images={galleryImages} />
        </div>
      </div>
    </section>
  );
}

export default Gallery;
