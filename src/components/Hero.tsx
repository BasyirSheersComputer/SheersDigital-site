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
      title: "Meet Servora AI",
      description: "This AI-powered platform's unrivalled flexibility and smart features like Live Inventory Tracking and Waste Prediction, enable you to do more than you ever imagined.",
      buttonText: "Shop Servora AI",
      buttonLink: "https://servora-ai.com",
      background: "bg-amber-700",
      image: "/img/slide1.jpg"
    },
    {
      id: 2,
      title: "Eliminate Food Waste",
      description: "Transform your restaurant operations with AI-driven waste reduction. Boost profit margins by up to 15% while reducing food waste by 40%.",
      buttonText: "Get Started",
      buttonLink: "/waste-logging-automation",
      background: "bg-green-800",
      image: "/img/slide2.jpg"
    },
    {
      id: 3,
      title: "Smart Inventory Management",
      description: "Never run out of ingredients again. Our AI predicts demand and optimizes inventory levels, reducing stockouts by 90% and overstocking by 60%.",
      buttonText: "Learn More",
      buttonLink: "/inventory-integration",
      background: "bg-purple-800",
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
      <section id="home" className="relative overflow-hidden h-screen w-full">
        {/* Slides Container */}
        <div 
          className="flex h-full transition-transform duration-1000 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide) => (
            <div
              key={slide.id}
              className={`${slide.background} text-white w-full h-full flex-shrink-0 relative`}
            >
              <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
                <div className="max-w-7xl mx-auto w-full">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center h-full min-h-0">
                    {/* Left Panel - Text Content */}
                    <div className="space-y-6 lg:space-y-8 order-2 lg:order-1">
                      <div className="bg-white bg-opacity-20 backdrop-blur-lg rounded-2xl p-6 sm:p-8 lg:p-10 shadow-2xl border border-white border-opacity-20 animate-hero-slide-in-left">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6 sm:mb-8 text-white drop-shadow-2xl animate-hero-fade-in animate-delay-200">
                          {slide.title}
                        </h1>
                        <p className="text-lg sm:text-xl lg:text-2xl text-white leading-relaxed mb-8 sm:mb-10 drop-shadow-lg max-w-2xl animate-hero-fade-in animate-delay-400">
                          {slide.description}
                        </p>
                        <div className="flex justify-start animate-hero-fade-in animate-delay-600">
                          <a
                            href={slide.buttonLink}
                            target={slide.buttonLink.startsWith('http') ? '_blank' : '_self'}
                            rel={slide.buttonLink.startsWith('http') ? 'noopener noreferrer' : ''}
                            className="bg-blue-600 hover:bg-blue-700 px-8 sm:px-10 lg:px-12 py-4 sm:py-5 rounded-xl font-semibold text-lg sm:text-xl lg:text-2xl transition-all duration-300 flex items-center justify-center group shadow-2xl hover:shadow-3xl w-full sm:w-auto transform hover:scale-105 hover:-translate-y-1"
                          >
                            {slide.buttonText}
                            <ArrowRight className="ml-3 w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-2 transition-transform duration-300" />
                          </a>
                        </div>
                      </div>
                    </div>

                    {/* Right Panel - High-Resolution Image */}
                    <div className="relative order-1 lg:order-2">
                      <div className="bg-white bg-opacity-20 backdrop-blur-lg rounded-2xl p-6 sm:p-8 lg:p-10 text-center overflow-hidden shadow-2xl border border-white border-opacity-20 animate-hero-slide-in-right">
                        <div className="relative animate-hero-scale-in animate-delay-300">
                          {!imageErrors[slide.id] ? (
                            <img
                              src={slide.image}
                              alt={slide.title}
                              className={`w-full rounded-xl shadow-2xl object-cover transition-transform duration-500 hover:scale-105 ${
                                slide.id === 2 ? 'h-80 sm:h-96 lg:h-[28rem] xl:h-[32rem]' : 'h-72 sm:h-88 lg:h-[24rem] xl:h-[28rem]'
                              }`}
                              loading="lazy"
                              onError={() => handleImageError(slide.id)}
                            />
                          ) : (
                            <div className={`w-full bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl shadow-2xl flex items-center justify-center transition-transform duration-500 hover:scale-105 ${
                              slide.id === 2 ? 'h-80 sm:h-96 lg:h-[28rem] xl:h-[32rem]' : 'h-72 sm:h-88 lg:h-[24rem] xl:h-[28rem]'
                            }`}>
                              <div className="text-center text-white">
                                <div className="text-5xl sm:text-6xl lg:text-7xl mb-3 sm:mb-4">🤖</div>
                                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-2 sm:mb-3">Servora AI</h3>
                                <p className="text-sm sm:text-base opacity-90">AI-Powered Restaurant Management</p>
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

        {/* Navigation Controls */}
        <div className="absolute bottom-6 sm:bottom-8 lg:bottom-12 left-1/2 transform -translate-x-1/2 flex items-center space-x-3 sm:space-x-4 lg:space-x-6 z-20">
          {/* Pause/Play Button */}
          <button
            onClick={togglePause}
            className="bg-white bg-opacity-25 hover:bg-opacity-40 p-3 sm:p-4 rounded-full transition-all duration-300 backdrop-blur-md touch-manipulation shadow-lg hover:shadow-xl border border-white border-opacity-20"
            aria-label={isPaused ? "Play slideshow" : "Pause slideshow"}
          >
            {isPaused ? <Play className="w-5 h-5 sm:w-6 sm:h-6 text-white" /> : <Pause className="w-5 h-5 sm:w-6 sm:h-6 text-white" />}
          </button>

          {/* Previous Button */}
          <button
            onClick={prevSlide}
            className="bg-white bg-opacity-25 hover:bg-opacity-40 p-3 sm:p-4 rounded-full transition-all duration-300 backdrop-blur-md touch-manipulation shadow-lg hover:shadow-xl border border-white border-opacity-20"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
          </button>

          {/* Slide Indicators */}
          <div className="flex space-x-2 sm:space-x-3">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 sm:w-4 sm:h-4 rounded-full transition-all duration-300 touch-manipulation shadow-lg ${
                  index === currentSlide ? 'bg-white scale-125' : 'bg-white bg-opacity-50 hover:bg-opacity-75'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Next Button */}
          <button
            onClick={nextSlide}
            className="bg-white bg-opacity-25 hover:bg-opacity-40 p-3 sm:p-4 rounded-full transition-all duration-300 backdrop-blur-md touch-manipulation shadow-lg hover:shadow-xl border border-white border-opacity-20"
            aria-label="Next slide"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
          </button>
        </div>
      </section>
    </>
  );
};

export default Hero;