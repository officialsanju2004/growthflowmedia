
import React, { useState, useEffect, useRef } from 'react';
import { Layout ,ShoppingCart,Globe,PenTool,TrendingUp,Search,MessageCircle,Target,Megaphone,FileText,BarChart3,Server,Users,Bot,Layers,UserPlus,Menu, Mail, ChevronDown, ArrowRightCircle, Recycle } from 'lucide-react';
import { Phone, Facebook, Linkedin, Instagram, Youtube, Twitter, ChevronRight } from 'lucide-react';
import image10 from "../images/logo.jpg";
export default function Footer() {
const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'Contact', path: '/contact' },

  ];

  

  const services = [
    { name: 'Website Design', path: '/webdesign' },
    {name:'Lead Generation',path:'/lead'},
    {name:'Go High Level CRM',path:'/gohigh'},
    {name:'Ai Agents/Automation Development',path:'/'},

    {name:'White Label Marketing',path:'/whitelabel'},

   
    {name:'Digital Marketing',path:'/digitalmarketing'},
    {name:'Managed Hosting',path:'/hosting'},



    {name:'Conversion Rate Optimization',path:'/conversionrate'},

    {name:'Service Website',path:'/service-site'},
    {name:'Meta Ads Management',path:'/metaads'},

    {name:'Search Engine Optimisation',path:'/seo'},

    {name:'Branding & Logo Design',path:'/branding&logodesign'},

    {name:'ECommerce Websites',path:'/ecommerce'},

    {name:'Google Ads Management',path:'/googleads'},




    
  ];
  return (
            <footer className="px-4 sm:px-6 py-8 sm:py-12" style={{background: 'linear-gradient(180deg, #1a1f2e 0%, #0a0e1a 100%)'}}>
                     <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
                       {/* ABOUT */}
                   <div>
                     {/* replace src with your logo path */}
                     <img
                       src={image10}
                       alt="growth flow media"
                       className="w-40 mb-5 onject-cover "
                     />
           
                     <p className=" w-40 text-[#F2E9D8] leading-relaxed text-sm">
                       
                       <br />
                       Growth Flow Media we pride ourselves on delivering top-tier 
                      services at some of the most competitive prices in the
                       market.
                     </p>
                    
                               <h3 className="text-xl font-bold text-gray-900 mb-4">Connect With Us</h3>
                               <div className="flex flex-wrap gap-3">
                                 {[
                                   { icon: <Facebook />, color: 'bg-blue-600', hover: 'bg-blue-700', label: 'Facebook' },
                                   { icon: <Twitter />, color: 'bg-sky-500', hover: 'bg-sky-600', label: 'Twitter' },
                                   { icon: <Instagram />, color: 'bg-pink-600', hover: 'bg-pink-700', label: 'Instagram' },
                                   { icon: <Linkedin />, color: 'bg-blue-700', hover: 'bg-blue-800', label: 'LinkedIn' },
                                   { icon: <Youtube />, color: 'bg-red-600', hover: 'bg-red-700', label: 'YouTube' },
                                 ].map((social, idx) => (
                                   <a
                                     key={idx}
                                     href="#"
                                     className={`w-10 h-10 ${social.color} hover:${social.hover} rounded-lg flex items-center justify-center text-white transition-all transform hover:scale-110`}
                                     aria-label={social.label}
                                   >
                                     {social.icon}
                                   </a>
                                 ))}
                               </div>
                            
                   </div>
                       {/* Quick Links Column */}
                       <div>
                         <h3 className="text-white text-lg sm:text-xl font-bold mb-4 sm:mb-6">Quick Links</h3>
                         <ul className="space-y-2 sm:space-y-3">
                           {quickLinks.map((link) => (
                             <li  className="flex items-center gap-2 text-gray-300 hover:text-orange-500 cursor-pointer text-xs sm:text-sm transition-colors">
                               <ChevronRight onClick={()=>window.location.href=link.path} size={12} className="sm:w-8 sm:h-8" style={{color: '#FF9500'}} />
                               <span onClick={()=>window.location.href=link.path} className="truncate">{link.name}</span>
                             </li>
                           ))}
                         </ul>
           
                     
                       </div>
           
                       {/* Our Services Column */}
                       <div>
                         <h3 className="text-white text-lg sm:text-xl font-bold mb-4 sm:mb-6">Our Services</h3>
                         <ul className="space-y-2 sm:space-y-3">
                           {services.map((service) => (
                             <a className="flex items-center gap-2 text-gray-300 hover:text-orange-500 cursor-pointer text-xs sm:text-sm transition-colors">
                               <ChevronRight onClick={()=>window.location.href=service.path} size={12} className="sm:w-8 sm:h-8" style={{color: '#FF9500'}} />
                               <span onClick={()=>window.location.href=service.path}  className="truncate">{service.name}</span>
                             </a>
                           ))}
                         </ul>
                       </div>
           
             
                     </div>
           
                     {/* Bottom Footer Links */}
                     <div className="max-w-7xl mx-auto mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-gray-700">
                       <div className="flex flex-wrap justify-center gap-3 sm:gap-6 text-xs sm:text-sm text-gray-400">
                         <a onClick={() => window.location.href = 'https://growthflowmedia.com'} className="hover:text-orange-500 transition-colors whitespace-nowrap">growthflowmedia.com</a>
                         <span className="hidden sm:inline">|</span>
                           <span>© {new Date().getFullYear()} All Rights are Reserved </span>
                         
                       </div>
                     </div>
                   </footer>
  )
}
