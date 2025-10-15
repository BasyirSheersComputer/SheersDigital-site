import React, { useState, useEffect } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [imageErrors, setImageErrors] = useState<{ [key: number]: boolean }>({});

   // Slides data
   const slides = [
     {
       id: 1,
       title: "Save RM 32,000+ Monthly",
       description: "Transform your F&B operations with AI-powered automation. Our clients save an average of RM 32,000 monthly through waste reduction, inventory optimization, and operational efficiency.",
       buttonText: "Start Saving Today",
       buttonLink: "/get-started",
       background: "bg-transparent",
       image: "/img/slide1.jpg"
     },
     {
       id: 2,
       title: "Eliminate 42% Food Waste",
       description: "Reduce food waste by 42% and boost profit margins by 15% with our AI-driven waste prediction and inventory management system. Start seeing results in just 5 days.",
       buttonText: "Reduce Waste Now",
       buttonLink: "/waste-logging-automation",
       background: "bg-transparent",
       image: "/img/slide2.jpg"
     },
     {
       id: 3,
       title: "Save 18 Hours Weekly",
       description: "Automate manual processes and save 18 hours weekly on inventory management, supplier coordination, and compliance tracking. Focus on growing your business, not paperwork.",
       buttonText: "Automate Operations",
       buttonLink: "/inventory-integration",
       background: "bg-transparent",
       image: "/img/slide3.jpg"
     }
   ];

  // Preload images
  useEffect(() => {
    slides.forEach(slide => {
      const img = new Image();
      img.src = slide.image;
    });
  }, [slides]);

  // Auto-advance slides
  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isPaused, slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const togglePause = () => {
    setIsPaused(!isPaused);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const handleImageError = (slideId: number) => {
    setImageErrors(prev => ({ ...prev, [slideId]: true }));
  };


  return (
    <>
      {/* Hero Slideshow with Sliding Transitions */}
      <section id="home" className="relative overflow-hidden w-full bg-gradient-to-b from-gray-50 to-white mobile-hero">
        {/* Slides Container */}
        <div 
          className="flex h-full transition-transform duration-700 ease-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide) => (
            <div
              key={slide.id}
              className="text-gray-900 w-full h-full flex-shrink-0 relative"
            >
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-12 sm:py-16 lg:py-32">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
                  {/* Left Panel - Text Content */}
                  <div className="order-2 lg:order-1 space-y-6 sm:space-y-8">
                    <div className="space-y-4 sm:space-y-6">
                      <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight text-gray-900 tracking-tight">
                        {slide.title}
                      </h1>
                      <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 leading-relaxed max-w-2xl">
                        {slide.description}
                      </p>
                    </div>
                    <div className="flex justify-start">
                      <a
                        href={slide.buttonLink}
                        target={slide.buttonLink.startsWith('http') ? '_blank' : '_self'}
                        rel={slide.buttonLink.startsWith('http') ? 'noopener noreferrer' : ''}
                        className="inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white rounded-lg font-medium text-base sm:text-lg transition-all duration-200 group mobile-button w-full sm:w-auto justify-center"
                      >
                        {slide.buttonText}
                        <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </a>
                    </div>
                  </div>

                  {/* Right Panel - High-Resolution Image */}
                  <div className="relative order-1 lg:order-2">
                    <div className="relative">
                      {!imageErrors[slide.id] ? (
                        <img
                          src={slide.image}
                          alt={slide.title}
                          className="w-full rounded-xl sm:rounded-2xl object-cover h-56 sm:h-72 lg:h-[480px] shadow-xl sm:shadow-2xl"
                          loading="lazy"
                          onError={() => handleImageError(slide.id)}
                        />
                      ) : (
                        <div className="w-full bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl sm:rounded-2xl flex items-center justify-center h-56 sm:h-72 lg:h-[480px] shadow-xl sm:shadow-2xl">
                          <div className="text-center text-white">
                            <div className="text-5xl sm:text-6xl mb-2 sm:mb-3">🤖</div>
                            <h3 className="text-xl sm:text-2xl font-bold mb-1 sm:mb-2">Servora AI</h3>
                            <p className="text-xs sm:text-sm opacity-90">AI-Powered Restaurant Management</p>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </section>
      
      {/* Navigation Controls - Below Hero Section */}
      <div className="bg-white border-t border-gray-100 py-4 sm:py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="flex justify-center items-center space-x-4 sm:space-x-8">
            {/* Previous Button */}
            <button
              onClick={prevSlide}
              className="text-gray-400 hover:text-gray-900 active:text-gray-600 transition-colors p-2 mobile-button"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>

            {/* Slide Indicators */}
            <div className="flex items-center space-x-2 sm:space-x-3">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`transition-all duration-300 rounded-full mobile-button ${
                    index === currentSlide 
                      ? 'w-6 sm:w-8 h-2 bg-blue-600' 
                      : 'w-2 h-2 bg-gray-300 hover:bg-gray-400 active:bg-gray-500'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            {/* Next Button */}
            <button
              onClick={nextSlide}
              className="text-gray-400 hover:text-gray-900 active:text-gray-600 transition-colors p-2 mobile-button"
              aria-label="Next slide"
            >
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;