import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Palette, Globe, Instagram, Zap, Star, CheckCircle, Mail, Phone, MapPin, Linkedin, Twitter, Github } from 'lucide-react';

const CatalystCrewWebsite = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState('All');
  const [currentSlide, setCurrentSlide] = useState(0);

  // Hero carousel slides
  const heroSlides = [
    {
      title: "Digital Innovation Experts",
      subtitle: "We craft cutting-edge digital solutions",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
    },
    {
      title: "Transform Your Brand",
      subtitle: "Elevate your online presence with our expertise",
      image: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
    },
    {
      title: "Creative Web Solutions",
      subtitle: "Beautiful designs that drive results",
      image: "https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&auto=format&fit=crop&w=1964&q=80"
    }
  ];

  // Auto-rotate hero carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const services = [
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Website Development",
      description: "Custom websites that drive results and engage your audience with modern design and functionality.",
      features: ["Responsive Design", "SEO Optimized", "CMS Integration", "E-commerce Solutions"]
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Graphic Design",
      description: "Eye-catching posters, banners, logos, and branding materials that make your business stand out.",
      features: ["Logo Design", "Brand Identity", "Print Materials", "Digital Graphics"]
    },
    {
      icon: <Instagram className="w-8 h-8" />,
      title: "Social Media Management",
      description: "Professional Instagram page management to boost your online presence and engagement.",
      features: ["Content Strategy", "Community Management", "Analytics", "Ad Campaigns"]
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "UI/UX Design",
      description: "User-centered design solutions that enhance user experience and drive conversions.",
      features: ["Wireframing", "Prototyping", "User Testing", "Design Systems"]
    }
  ];

  const portfolioItems = [
    { 
      title: "E-commerce Platform", 
      category: "Web Development", 
      image: "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?ixlib=rb-4.0.3&auto=format&fit=crop&w=2080&q=80" 
    },
    { 
      title: "Brand Identity Pack", 
      category: "Graphic Design", 
      image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
    },
    { 
      title: "Restaurant Website", 
      category: "Web Development", 
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
    },
    { 
      title: "Social Campaign", 
      category: "Social Media", 
      image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1974&q=80" 
    },
    { 
      title: "Mobile App UI", 
      category: "UI/UX Design", 
      image: "https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
    },
    { 
      title: "Corporate Website", 
      category: "Web Development", 
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
    }
  ];

  const testimonials = [
    { 
      name: "Sarah Johnson", 
      company: "TechStart Inc.", 
      text: "Catalyst Crew transformed our online presence completely. The website they built increased our leads by 300%!",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    { 
      name: "Mike Chen", 
      company: "Local Bistro", 
      text: "Their graphic design work is outstanding. Our new branding has attracted so many new customers.",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    { 
      name: "Emma Williams", 
      company: "Fashion Boutique", 
      text: "The Instagram management service boosted our followers from 500 to 15K in just 3 months!",
      avatar: "https://randomuser.me/api/portraits/women/68.jpg"
    }
  ];

  const teamMembers = [
    {
      name: "Arpit Bajpai",
      role: "Founder & CEO",
      bio: "Visionary leader with a passion for technology and innovation, driving the team towards excellence.",
       image: "https://media.licdn.com/dms/image/v2/D4D03AQGHNoOXoeNrQQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1731239273762?e=1753315200&v=beta&t=ZTYGCjOJA2KYrgzVjT8DZKwfH9NvCXXBMVMt7E8FjPE",
      social: { linkedin: "https://www.linkedin.com/in/arpit-bajpai-6780aa220/", twitter: "https://x.com/Arpit_Bajpai038", github: "https://github.com/arpit0381" }
    },
    {
      name: "Ashwin Jauhary",
      role: "Managing Director",
      bio: "Strategic thinker with a knack for identifying opportunities and building strong client relationships.",
      
      image: "https://media.licdn.com/dms/image/v2/D4D03AQGsYfxaQhqxFQ/profile-displayphoto-shrink_400_400/B4DZYPARxLG8Ag-/0/1744008455222?e=1753315200&v=beta&t=NJVY-Tp5c7-C2Pk6ji0IGyr09JxGfyIDxZXfOMi2BXg",
      social: { linkedin: "https://www.linkedin.com/in/ashwin-jauhary/", twitter: "https://x.com/_Ashwin_09555", github: "#" }
    },
    {
      name: "Anurag Tiwari",
      role: "Creative Designer",
      bio: "Creative genius with a passion for crafting visually stunning designs that tell compelling stories.",
     
      image: "https://media.licdn.com/dms/image/v2/D4E03AQHzWm_PoKxOpQ/profile-displayphoto-shrink_400_400/B4EZYPEgGYGYAk-/0/1744009562433?e=1753315200&v=beta&t=qNa2ApJJ6lM8H4WfROLNE2hm8LSM6UhTAjB27XXG2gs",
      social: { linkedin: "https://www.linkedin.com/in/anurag-tiwari0770/", twitter: "#", github: "#" }
    },
    {
      name: "Atharva Sharma",
      role: "Hybrid Developer",
      bio: "Full-stack developer with expertise in building robust web applications and mobile solutions.",
     
      image: "https://media.licdn.com/dms/image/v2/D4E03AQHKa3FMDCoCPw/profile-displayphoto-shrink_400_400/B4EZVijn4fGYAg-/0/1741115262515?e=1753315200&v=beta&t=wsFt7CgsoME96tnYJi3buf__mm1AdPM6v7eHTIOjDtw",
      social: { linkedin: "https://www.linkedin.com/in/atharvasharma2431560/", twitter: "https://x.com/atharv_sharm8", github: "#" }
    }
  ];

  const stats = [
    { value: "50+", label: "Projects Completed" },
    { value: "95%", label: "Client Satisfaction" },
    { value: "50+", label: "Global Clients" },
    { value: "5+", label: "Industry Awards" }
  ];

  const filteredPortfolio = activeFilter === 'All' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeFilter);

  return (
    <div className="min-h-screen bg-white text-gray-900 overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-sm shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center shadow-lg">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold text-gray-900">
                Catalyst Crew
              </span>
            </div>
            
            <div className="hidden md:flex space-x-8">
              {['Home', 'Services', 'Portfolio', 'Team', 'Contact'].map((item) => (
                <a 
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="relative group text-gray-600 hover:text-blue-600 font-medium transition-colors duration-200"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
            </div>
            
            <button 
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 text-gray-600"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200 shadow-lg">
            <div className="px-4 py-4 space-y-4">
              {['Home', 'Services', 'Portfolio', 'Team', 'Contact'].map((item) => (
                <a 
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="block text-gray-600 hover:text-blue-600 font-medium py-2 transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src={heroSlides[currentSlide].image}
            alt="" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-blue-900/50"></div>
        </div>
        
        {/* Hero Content */}
        <div className="relative z-10 text-center max-w-5xl mx-auto px-4 text-white">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            {heroSlides[currentSlide].title}
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-200">
            {heroSlides[currentSlide].subtitle}
          </p>
          <p className="text-lg text-gray-300 mb-12 max-w-3xl mx-auto">
            We create stunning websites, captivating graphics, and manage your social media presence to accelerate your business growth in the digital world.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {/* <button 
              className="px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-full font-semibold text-white flex items-center justify-center space-x-2 transition-colors duration-200 shadow-lg"
            >
              <span>Get Started</span>
              <ArrowRight className="w-5 h-5" />
            </button> */}
            {/* <button 
              className="px-8 py-4 border-2 border-white rounded-full font-semibold text-white hover:bg-white/10 transition-colors duration-200"
            >
              View Portfolio
            </button> */}
          </div>
        </div>
        
        {/* Carousel Indicators */}
        <div className="absolute bottom-8 left-0 right-0 flex justify-center space-x-2 z-10">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide 
                  ? 'bg-blue-600 w-6' 
                  : 'bg-white/50'
              }`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="text-center p-6 bg-white rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-200"
              >
                <h3 className="text-4xl font-bold text-blue-600 mb-2">{stat.value}</h3>
                <p className="text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive digital solutions to elevate your brand and drive business growth
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className="group p-8 bg-gray-50 rounded-2xl border border-gray-200 hover:border-blue-200 hover:shadow-lg transition-all duration-300"
              >
                <div className="text-blue-600 mb-4 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  {service.description}
                </p>
                <div className="mt-4">
                  <h4 className="text-sm font-semibold text-blue-600 mb-2">Key Features:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center space-x-2 text-gray-600 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Our Portfolio
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our latest work and see how we've helped businesses transform their digital presence
            </p>
          </div>
          
          {/* Portfolio Filters */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {['All', 'Web Development', 'Graphic Design', 'Social Media', 'UI/UX Design'].map(filter => (
              <button
                key={filter}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  activeFilter === filter 
                    ? 'bg-blue-600 text-white shadow-lg' 
                    : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-300'
                }`}
                onClick={() => setActiveFilter(filter)}
              >
                {filter}
              </button>
            ))}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPortfolio.map((item, index) => (
              <div 
                key={index}
                className="group relative overflow-hidden rounded-2xl aspect-[4/3] cursor-pointer shadow-sm hover:shadow-xl transition-all duration-300 bg-white border border-gray-200"
              >
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-blue-900/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-center text-white">
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-sm text-blue-200">{item.category}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The creative minds behind Catalyst Crew's success
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="group text-center">
                <div className="w-full aspect-square rounded-2xl overflow-hidden mb-4 relative shadow-lg">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-blue-900/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                    <a href={member.social.linkedin} className="text-white hover:text-blue-300 transition-colors">
                      <Linkedin className="w-6 h-6" />
                    </a>
                    <a href={member.social.twitter} className="text-white hover:text-blue-300 transition-colors">
                      <Twitter className="w-6 h-6" />
                    </a>
                    <a href={member.social.github} className="text-white hover:text-blue-300 transition-colors">
                      <Github className="w-6 h-6" />
                    </a>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
                <p className="text-blue-600 mb-2 font-medium">{member.role}</p>
                <p className="text-gray-600 text-sm">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Client Testimonials
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Don't just take our word for it - hear what our clients say
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="p-8 bg-white rounded-2xl shadow-sm border border-gray-200 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name} 
                    className="w-12 h-12 rounded-full mr-4 object-cover"
                  />
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-gray-600 text-sm">{testimonial.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Ready to Ignite Your Project?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get in touch with us today and let's create something amazing together
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex items-start space-x-4 p-6 bg-gray-50 rounded-2xl border border-gray-200">
                <Mail className="w-6 h-6 text-blue-600 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">Email Us</h3>
                  <p className="text-gray-600">hello@catalystcrew.com</p>
                  <p className="text-gray-600">support@catalystcrew.com</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4 p-6 bg-gray-50 rounded-2xl border border-gray-200">
                <Phone className="w-6 h-6 text-blue-600 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">Call Us</h3>
                  <p className="text-gray-600">+1 (555) 123-4567</p>
                  <p className="text-gray-600">+1 (555) 987-6543</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4 p-6 bg-gray-50 rounded-2xl border border-gray-200">
                <MapPin className="w-6 h-6 text-blue-600 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">Visit Us</h3>
                  <p className="text-gray-600">123 Digital Street</p>
                  <p className="text-gray-600">Tech City, TC 12345</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-200">
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <input 
                  action="https://formsubmit.co/catalystcrewcreators@gmail.com" method="POST"
                    type="text" 
                    placeholder="Your Name"
                    className="w-full px-4 py-3 bg-white rounded-lg border border-gray-300 focus:border-blue-500 focus:outline-none transition-colors duration-200"
                  />
                  <input 
                    type="email" 
                    placeholder="Your Email"
                    className="w-full px-4 py-3 bg-white rounded-lg border border-gray-300 focus:border-blue-500 focus:outline-none transition-colors duration-200"
                  />
                </div>
                <input 
                  type="text" 
                  placeholder="Subject"
                  className="w-full px-4 py-3 bg-white rounded-lg border border-gray-300 focus:border-blue-500 focus:outline-none transition-colors duration-200"
                />
                <textarea 
                  rows="5"
                  placeholder="Your Message"
                  className="w-full px-4 py-3 bg-white rounded-lg border border-gray-300 focus:border-blue-500 focus:outline-none transition-colors duration-200 resize-none"
                ></textarea>
                <button 
                  onClick={() => alert('Message sent! We\'ll get back to you soon.')}
                  className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-colors duration-200 shadow-lg"
                >
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            {/* Company Info */}
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-blue-700 rounded-lg flex items-center justify-center">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <span className="text-2xl font-bold">Catalyst Crew</span>
              </div>
              <p className="text-blue-200">
                Igniting digital transformation through innovative web solutions, stunning designs, and strategic social media management.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-blue-300 hover:text-white transition-colors">
                  <Twitter className="w-6 h-6" />
                </a>
                <a href="#" className="text-blue-300 hover:text-white transition-colors">
                  <Instagram className="w-6 h-6" />
                </a>
                <a href="#" className="text-blue-300 hover:text-white transition-colors">
                  <Linkedin className="w-6 h-6" />
                </a>
                <a href="#" className="text-blue-300 hover:text-white transition-colors">
                  <Github className="w-6 h-6" />
                </a>
              </div>
            </div>
            
            {/* Quick Links */}
            <div className="space-y-6">
              <h3 className="text-lg font-semibold">Quick Links</h3>
              <ul className="space-y-3">
                {['Home', 'Services', 'Portfolio', 'Team', 'Contact'].map((item) => (
                  <li key={item}>
                    <a 
                      href={`#${item.toLowerCase()}`} 
                      className="text-blue-200 hover:text-white transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Services */}
            <div className="space-y-6">
              <h3 className="text-lg font-semibold">Our Services</h3>
              <ul className="space-y-3">
                {services.map((service) => (
                  <li key={service.title}>
                    <a href="#services" className="text-blue-200 hover:text-white transition-colors">
                      {service.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Newsletter */}
            <div className="space-y-6">
              <h3 className="text-lg font-semibold">Newsletter</h3>
              <p className="text-blue-200">
                Subscribe to our newsletter for the latest updates and insights.
              </p>
              <div className="space-y-4">
                <input 
                  type="email" 
                  placeholder="Your Email"
                  className="w-full px-4 py-3 bg-blue-800 rounded-lg border border-blue-700 focus:border-blue-500 focus:outline-none transition-colors duration-200 text-white placeholder-blue-400"
                />
                <button 
                  onClick={() => alert('Thank you for subscribing!')}
                  className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-colors duration-200 shadow-lg"
                >
                  Subscribe
                </button>
              </div>
            </div>
          </div>
          
          {/* Copyright */}
          <div className="border-t border-blue-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-blue-300 text-sm">
              &copy; {new Date().getFullYear()} Catalyst Crew. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-blue-300 hover:text-white text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-blue-300 hover:text-white text-sm transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-blue-300 hover:text-white text-sm transition-colors">
                Cookies Policy
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default CatalystCrewWebsite;