import {
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"; // `shadcn/ui` kutubxonasidan komponentlarni import qiling
  import { Carousel as CustomCarousel } from "@/components/ui/carousel"; // Nom ziddiyatini oldini olish uchun `Carousel`ni qayta nomlaymiz
  
  const CarouselComponent = () => {
    return (
      <CustomCarousel>
        <CarouselContent>
          <CarouselItem>Item 1</CarouselItem>
          <CarouselItem>Item 2</CarouselItem>
          <CarouselItem>Item 3</CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </CustomCarousel>
    );
  };
  
  export default CarouselComponent;
  