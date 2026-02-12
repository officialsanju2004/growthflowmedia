

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

import male2 from "../../Images/male2.jpg";

// Testimonial data
const testimonials = [
  {
    id: 1,
    name: "Michael Rodriguez",
    role: "Car Collector",
    content: "Northstar transported my classic Corvette cross-country with incredible care. The enclosed trailer service was flawless, and the team kept me updated every step of the way. Professional, punctual, and priced fairly!",
    rating: 5,
    image: male2 // Initials for avatar
  },
  {
    id: 2,
    name: "Sarah Johnson",
    role: "Relocating Family",
    content: "Moving from California to Texas with 3 vehicles seemed daunting, but Northstar made it seamless. Their communication was excellent, prices were transparent, and all our cars arrived without a scratch. Highly recommended!",
    rating: 5,
    image: "SJ"
  },
  {
    id: 3,
    name: "David Chen",
    role: "Dealership Owner",
    content: "As a dealership, we ship multiple vehicles weekly. Northstar consistently provides reliable service, competitive rates, and professional carriers. They've become our go-to transport partner for all interstate shipments.",
    rating: 5,
    image: "DC"
  },
  {
    id: 4,
    name: "Jessica Williams",
    role: "Military Family",
    content: "PCS move required shipping our SUV and sedan. Northstar accommodated our tight schedule, provided military discount, and delivered both vehicles ahead of schedule. Exceptional service for military families!",
    rating: 5,
    image: "JW"
  },
  {
    id: 5,
    name: "Robert Thompson",
    role: "Luxury Car Owner",
    content: "Shipping my Porsche 911 was nerve-wracking, but Northstar's enclosed transport gave me peace of mind. The carrier was experienced with high-end vehicles, and the delivery was perfectly timed. Top-tier service!",
    rating: 5,
    image: "RT"
  },
  {
    id: 6,
    name: "Maria Garcia",
    role: "Small Business Owner",
    content: "Needed to ship my work truck from Florida to Colorado. Northstar found a carrier quickly, offered fair pricing, and the truck arrived ready for work. Will definitely use them for future business needs.",
    rating: 5,
    image: "MG"
  }
];

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Detect screen size
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
   
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Auto-slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 4000);
   
    return () => clearInterval(interval);
  }, [currentIndex, isMobile]);

  const nextSlide = () => {
    if (isMobile) {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    } else {
      setCurrentIndex((prev) => {
        const next = prev + 3;
        return next >= testimonials.length ? 0 : next;
      });
    }
  };

  const prevSlide = () => {
    if (isMobile) {
      setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    } else {
      setCurrentIndex((prev) => {
        const next = prev - 3;
        return next < 0 ? testimonials.length - 3 : next;
      });
    }
  };

  // Get current testimonials to display
  const getCurrentTestimonials = () => {
    if (isMobile) {
      return [testimonials[currentIndex]];
    }
    return testimonials.slice(currentIndex, currentIndex + 3);
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span key={i} className="text-yellow-500">★</span>
    ));
  };

  return (
    <section className="py-20 bg-gradient-to-br from-[#F2E9D8]/30 via-white to-[#F2E9D8]/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1F3A5F] mb-4">
            What Our <span className="text-[#B23A2F]">Clients Say</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our satisfied customers have to say about their experience.
          </p>
        </div>

        {/* Testimonials Container */}
        <div className="relative max-w-7xl mx-auto">
          {/* Desktop Navigation Buttons */}
          {!isMobile && testimonials.length > 3 && (
            <>
              <button
                onClick={prevSlide}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 z-10 w-12 h-12 rounded-full bg-white shadow-xl flex items-center justify-center text-[#1F3A5F] hover:text-[#B23A2F] hover:scale-110 transition-all duration-300 border border-[#1F3A5F]/20"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 z-10 w-12 h-12 rounded-full bg-white shadow-xl flex items-center justify-center text-[#1F3A5F] hover:text-[#B23A2F] hover:scale-110 transition-all duration-300 border border-[#1F3A5F]/20"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </>
          )}

          {/* Mobile Navigation Buttons */}
          {isMobile && testimonials.length > 1 && (
            <>
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center text-[#1F3A5F] hover:text-[#B23A2F] hover:scale-110 transition-all duration-300 border border-[#1F3A5F]/20"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center text-[#1F3A5F] hover:text-[#B23A2F] hover:scale-110 transition-all duration-300 border border-[#1F3A5F]/20"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </>
          )}

          {/* Testimonials Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className={`grid ${isMobile ? 'grid-cols-1' : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'} gap-6 lg:gap-8`}
            >
              {getCurrentTestimonials().map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1 border border-[#1F3A5F]/10 overflow-hidden"
                >
                  {/* Quote Icon */}
                  <div className="absolute top-6 right-6 text-[#F2E9D8]">
                    <Quote className="w-12 h-12" />
                  </div>

                  <div className="p-6 lg:p-8">
                    {/* Rating */}
                    <div className="flex mb-4 text-lg">
                      {renderStars(testimonial.rating)}
                    </div>

                    {/* Testimonial Content */}
                    <p className="text-gray-600 italic mb-6 leading-relaxed">
                      "{testimonial.content}"
                    </p>

                    {/* Client Info */}
                    <div className="flex items-center space-x-4 pt-6 border-t border-gray-100">
                      {/* Avatar Circle */}
                      <div className="relative">
                        <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#1F3A5F] to-[#B23A2F] flex items-center justify-center">
                          <span className="text-white font-bold text-lg">
                            <img src={testimonial.image} className='object-cover w-full h-full rounded-full'/>
                          
                          </span>
                        </div>
                        <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-[#B23A2F] rounded-full flex items-center justify-center">
                          <Quote className="w-3 h-3 text-white" />
                        </div>
                      </div>

                      {/* Client Details */}
                      <div>
                        <h4 className="font-bold text-lg text-[#1F3A5F]">
                          {testimonial.name}
                        </h4>
                        <p className="text-sm text-[#B23A2F] font-medium">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-10 space-x-3">
            {isMobile ? (
              // Mobile dots
              testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    currentIndex === index
                      ? 'bg-[#B23A2F] w-6'
                      : 'bg-[#1F3A5F]/30 hover:bg-[#1F3A5F]/50'
                  }`}
                />
              ))
            ) : (
              // Desktop dots (grouped by 3)
              Array.from({ length: Math.ceil(testimonials.length / 3) }).map((_, groupIndex) => {
                const isActive = Math.floor(currentIndex / 3) === groupIndex;
                return (
                  <button
                    key={groupIndex}
                    onClick={() => setCurrentIndex(groupIndex * 3)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      isActive
                        ? 'bg-[#B23A2F] w-6'
                        : 'bg-[#1F3A5F]/30 hover:bg-[#1F3A5F]/50'
                    }`}
                  />
                );
              })
            )}
          </div>
        </div>

        {/* Stats Bar */}
        <div className="mt-20 pt-10 border-t border-[#1F3A5F]/10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-[#1F3A5F] mb-2">98%</div>
              <div className="text-sm text-gray-600">Satisfaction Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-[#1F3A5F] mb-2">5000+</div>
              <div className="text-sm text-gray-600">Vehicles Transported</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-[#1F3A5F] mb-2">48</div>
              <div className="text-sm text-gray-600">States Covered</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-[#1F3A5F] mb-2">24/7</div>
              <div className="text-sm text-gray-600">Customer Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}