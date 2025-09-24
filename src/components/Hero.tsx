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
      <section id="home" className="relative overflow-hidden w-full bg-gradient-to-r from-blue-50 via-blue-100 to-sky-50 hero-compact">
        {/* Slides Container */}
        <div 
          className="flex h-full transition-transform duration-1000 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide) => (
            <div
              key={slide.id}
              className={`${slide.background} text-gray-900 w-full h-full flex-shrink-0 relative`}
            >
              <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto w-full">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-center hero-content">
                    {/* Left Panel - Text Content */}
                    <div className="order-2 lg:order-1">
                      <div className="p-4 sm:p-6 lg:p-8 animate-hero-slide-in-left hero-text">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-4 sm:mb-6 text-gray-900 animate-hero-fade-in animate-delay-200">
                          {slide.title}
                        </h1>
                        <p className="text-lg sm:text-xl lg:text-2xl text-gray-700 leading-relaxed mb-6 sm:mb-8 max-w-2xl animate-hero-fade-in animate-delay-400">
                          {slide.description}
                        </p>
                        <div className="flex justify-start animate-hero-fade-in animate-delay-600">
                          <a
                            href={slide.buttonLink}
                            target={slide.buttonLink.startsWith('http') ? '_blank' : '_self'}
                            rel={slide.buttonLink.startsWith('http') ? 'noopener noreferrer' : ''}
                            className="bg-blue-600 hover:bg-blue-700 text-white px-8 sm:px-10 lg:px-12 py-4 sm:py-5 rounded-lg font-semibold text-lg sm:text-xl lg:text-2xl transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-xl w-full sm:w-auto transform hover:scale-105 hover:-translate-y-1"
                          >
                            {slide.buttonText}
                            <ArrowRight className="ml-3 w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-2 transition-transform duration-300" />
                          </a>
                        </div>
                      </div>
                    </div>

                     {/* Right Panel - High-Resolution Image */}
                     <div className="relative order-1 lg:order-2">
                       <div className="text-center overflow-hidden animate-hero-slide-in-right">
                         <div className="relative animate-hero-scale-in animate-delay-300">
                           {!imageErrors[slide.id] ? (
                             <img
                               src={slide.image}
                               alt={slide.title}
                               className="w-full rounded-2xl object-cover transition-transform duration-500 hover:scale-105 h-64 sm:h-80 lg:h-96 xl:h-[28rem] hero-image shadow-lg"
                               loading="lazy"
                               onError={() => handleImageError(slide.id)}
                             />
                           ) : (
                             <div className="w-full bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl flex items-center justify-center transition-transform duration-500 hover:scale-105 h-64 sm:h-80 lg:h-96 xl:h-[28rem] shadow-lg">
                               <div className="text-center text-white">
                                 <div className="text-4xl sm:text-5xl lg:text-6xl mb-2 sm:mb-3">🤖</div>
                                 <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-1 sm:mb-2">Servora AI</h3>
                                 <p className="text-xs sm:text-sm opacity-90">AI-Powered Restaurant Management</p>
                               </div>
                             </div>
                           )}
                         </div>
                       </div>
                     </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </section>
      
      {/* Enhanced Navigation Controls - Below Hero Section */}
      <div className="bg-gradient-to-r from-blue-50 to-sky-50 py-4 sm:py-6 border-t border-blue-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center items-center space-x-2 sm:space-x-3">
            {/* Pause/Play Button */}
            <button
              onClick={togglePause}
              className={`w-8 h-8 sm:w-9 sm:h-9 rounded-full border-2 border-gray-800 transition-all duration-300 touch-manipulation hover:bg-gray-50 ${
                isPaused 
                  ? 'bg-green-50 border-green-600 text-green-600' 
                  : 'bg-white border-gray-800 text-gray-800'
              }`}
              aria-label={isPaused ? "Play slideshow" : "Pause slideshow"}
            >
              {isPaused ? <Play className="w-3 h-3 sm:w-4 sm:h-4 mx-auto" /> : <Pause className="w-3 h-3 sm:w-4 sm:h-4 mx-auto" />}
            </button>

            {/* Previous Button */}
            <button
              onClick={prevSlide}
              className="text-gray-800 hover:text-blue-600 transition-colors duration-300 touch-manipulation"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>

            {/* Slide Indicators */}
            <div className="flex space-x-1">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full transition-all duration-300 touch-manipulation ${
                    index === currentSlide 
                      ? 'bg-gray-800' 
                      : 'bg-white border border-gray-300 hover:border-gray-500'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            {/* Next Button */}
            <button
              onClick={nextSlide}
              className="text-gray-800 hover:text-blue-600 transition-colors duration-300 touch-manipulation"
              aria-label="Next slide"
            >
              <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </div>
          
          {/* Slide Progress Bar */}
          <div className="mt-4 flex justify-center">
            <div className="w-full max-w-md bg-white/50 rounded-full h-1 overflow-hidden">
              <div 
                className="bg-gradient-to-r from-blue-600 to-sky-600 h-full transition-all duration-1000 ease-out"
                style={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
              />
            </div>
          </div>
          
          {/* Slide Counter */}
          <div className="mt-2 text-center">
            <span className="text-sm text-blue-600 font-medium">
              {currentSlide + 1} of {slides.length}
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;