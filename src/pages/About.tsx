import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Mail, Phone, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ValueCard from '../components/about/ValueCard';
import ContactCard from '../components/about/ContactInfo';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <div className="bg-hero-pattern text-white py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-food-orange opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80')",
              backgroundPosition: "center",
              backgroundSize: "cover",
              mixBlendMode: "multiply"
            }}></div>
          </div>
          <div className="container mx-auto px-4 text-center relative z-10">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">About Zomoto</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
              We're on a mission to make food delivery simple, fast, and delicious for everyone.
            </p>
          </div>
        </div>

        {/* Our Story */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-in">
                <h2 className="text-3xl font-bold mb-6 text-gray-800 border-l-4 border-food-orange pl-4">Our Story</h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Zomoto is a food delivery web application developed as a clone of the popular platform Zomato.
                  Built in 2025 as part of a personal project, Zomoto aims to replicate the core features of a modern food delivery service — allowing users to browse restaurants, explore menus, place orders, and track deliveries seamlessly.
                </p>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  This project was created to strengthen my skills in frontend and backend development, focusing on building a responsive UI, integrating dynamic restaurant data, and simulating real-world food delivery workflows. Zomoto reflects both my passion for web development and my interest in creating user-centric applications that solve everyday problems.
                </p>
                <p className="text-gray-700 font-medium">
                  Our commitment to quality, speed, and customer satisfaction remains at the heart of everything we do.
                </p>
              </div>
              <div className="rounded-xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300">
                <img
                  src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80"
                  alt="Zomoto Team"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-16 bg-values-pattern">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center relative">
              <span className="bg-gradient-to-r from-food-orange to-orange-400 bg-clip-text text-transparent">Our Values</span>
              <div className="absolute w-24 h-1 bg-food-orange left-1/2 transform -translate-x-1/2 bottom-0 mt-2"></div>
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <ValueCard
                title="Speed"
                description="We know time is valuable. That's why we focus on efficient delivery times without compromising on quality."
                icon={
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                }
              />

              <ValueCard
                title="Quality"
                description="We partner only with restaurants that meet our high standards for food quality and preparation."
                icon={
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                }
                delay="0.2s"
              />

              <ValueCard
                title="Affordability"
                description="Good food shouldn't break the bank. We work to keep delivery fees low and offer regular promotions."
                icon={
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                }
                delay="0.4s"
              />
            </div>
          </div>
        </section>

        {/* Meet the Developer Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center relative">
              <span className="bg-gradient-to-r from-food-orange to-orange-400 bg-clip-text text-transparent">Meet the Developer</span>
              <div className="absolute w-24 h-1 bg-food-orange left-1/2 transform -translate-x-1/2 bottom-0 mt-2"></div>
            </h2>
            <div className="flex justify-center mb-10">
              <div className="text-center">
                <div className="h-48 w-48 mx-auto rounded-full overflow-hidden mb-6 border-4 border-food-orange p-1 shadow-xl animate-bounce-in">
                  <img
                    src="https://raw.githubusercontent.com/Khushi-Kamboj/Zomoto/main/imageKhushi.jpg"
                    alt="Khushi"
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">Khushi</h3>
                <p className="text-food-orange font-medium">Full Stack Developer</p>
              </div>
            </div>
            <div className="max-w-3xl mx-auto text-center text-gray-700 text-lg leading-relaxed bg-gray-50 p-8 rounded-xl shadow-inner">
              <p className="mb-6">
                Zo-moto is a solo project developed by <strong className="text-food-orange">Khushi</strong>, who took on every role—from frontend
                design and backend development to testing and deployment. This section showcases a typical team structure found in professional platforms, but in reality, every feature, layout, and line of code was crafted independently as part of a learning journey and passion for web development.
              </p>
              <p>
                What might look like a team effort is the result of one developer's dedication to building a fully functional, user-friendly food delivery application from the ground up.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 bg-values-pattern relative">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6 relative inline-block">
              <span className="bg-gradient-to-r from-food-orange to-orange-400 bg-clip-text text-transparent">Get in Touch</span>
              <div className="absolute w-full h-1 bg-food-orange bottom-0 left-0"></div>
            </h2>
            <p className="text-gray-600 mb-10 max-w-2xl mx-auto text-lg">
              Have questions, feedback, or just want to say hello? We'd love to hear from you!
            </p>
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <ContactCard
                title="Email Us"
                description="We'll respond within 24 hours"
                icon={<Mail className="h-8 w-8 text-food-orange" />}
                contactInfo="khushikamboj123456@gmail.com"
                href="mailto:khushikamboj123456@gmail.com"
              />

              <ContactCard
                title="Call Us"
                description="Mon-Fri, 9am-5pm"
                icon={<Phone className="h-8 w-8 text-food-orange" />}
                contactInfo="+91 9306605503"
                href="tel:+919306605503"
              />

              <ContactCard
                title="Office Hours"
                description="Visit our headquarters"
                icon={<Calendar className="h-8 w-8 text-food-orange" />}
                contactInfo="Monday - Friday\n9:00 AM - 6:00 PM"
              />
            </div>

            <div className="mt-12">
              <Button className="bg-food-orange hover:bg-food-orange/90 text-white px-8 py-6 rounded-full font-medium text-lg shadow-lg hover:shadow-xl transition-all duration-300 h-auto">
                Contact Us
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;