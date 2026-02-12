

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

import male2 from '../images/male2.jpg'
import male1 from '../images/male1.jpg'

import male3 from '../images/male3.jpg'
import female3 from '../images/female3.jpg'
import female2 from '../images/female2.jpg'

import female1 from '../images/female1.jpg'




// Testimonial data
const testimonials = [
  {
    id: 1,
    name: "Michael Rodriguez",
    role: "Ecommerce Business Owner",
    content:
      "Growth Flow Media redesigned our ecommerce website and optimized our ads. Our conversion rate increased significantly within the first month.",
    rating: 5,
    image: male1,
  },
  {
    id: 2,
    name: "Sarah Johnson",
    role: "Startup Founder",
    content:
      "From branding to lead generation, their team handled everything professionally. We now get consistent, high-quality leads every week.",
    rating: 5,
    image: female1,
  },
  {
    id: 3,
    name: "Daniel Thompson",
    role: "Real Estate Consultant",
    content:
      "Their SEO and Google Ads strategy helped us rank higher locally. The results were better than any agency we worked with before.",
    rating: 5,
    image: male2,
  },
  {
    id: 4,
    name: "Emily Carter",
    role: "Small Business Owner",
    content:
      "Growth Flow Media built a clean service website for us and managed hosting seamlessly. Super responsive and reliable team.",
    rating: 5,
    image: female2, // initials fallback
  },
  {
    id: 5,
    name: "Ryan Mitchell",
    role: "Marketing Manager",
    content:
      "Their Meta Ads and content marketing strategy boosted our engagement and sales. Clear communication and real performance-driven work.",
    rating: 5,
    image: male3,
  },
  {
    id: 6,
    name: "Olivia Brown",
    role: "Agency Partner",
    content:
      "We use Growth Flow Media for white-label services. Their delivery, automation, and reporting are top-notch.",
    rating: 5,
    image: female3,
  },
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

   
      </div>
    </section>
  );
}