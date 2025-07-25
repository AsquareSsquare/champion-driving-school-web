import React from "react";
import { ParallaxScroll } from "@/components/ui/parallax-scroll";
import { galleryImages } from "@/constants/data";
import { ScrollArea } from "@/components/ui/scroll-area";
import Image from "next/image";

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

        <ScrollArea className="w-full h-[calc(100vh-10rem)] mt-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image, i) => (
              <Image
                key={i}
                src={image}
                alt="gallaryIMG"
                width={400}
                height={400}
                className="object-cover object-left-top rounded-lg"
              />
            ))}
          </div>
        </ScrollArea>
      </div>
    </section>
  );
}

export default Gallery;
