
import React from 'react';
import Header from '../components/Header';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="bg-food-orange text-white py-12">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold mb-4">About FoodMunch</h1>
            <p className="text-xl max-w-2xl mx-auto">
              We're on a mission to make food delivery simple, fast, and delicious for everyone.
            </p>
          </div>
        </div>
        
        {/* Our Story */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-2xl font-bold mb-4">Our Story</h2>
                <p className="text-gray-600 mb-4">
                  FoodMunch was founded in 2023 with a simple idea: make it easy for people to enjoy their favorite foods from local restaurants without having to leave the comfort of their homes.
                </p>
                <p className="text-gray-600 mb-4">
                  What started as a small operation serving just a few neighborhoods has now grown into a platform connecting thousands of customers with their favorite local restaurants.
                </p>
                <p className="text-gray-600">
                  Our commitment to quality, speed, and customer satisfaction remains at the heart of everything we do.
                </p>
              </div>
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1581349437898-cebbe9831942?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  alt="FoodMunch Team" 
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>
        
        {/* Our Values */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-8 text-center">Our Values</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-12 h-12 bg-food-orange rounded-full flex items-center justify-center text-white mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Speed</h3>
                <p className="text-gray-600">
                  We know time is valuable. That's why we focus on efficient delivery times without compromising on quality.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-12 h-12 bg-food-orange rounded-full flex items-center justify-center text-white mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Quality</h3>
                <p className="text-gray-600">
                  We partner only with restaurants that meet our high standards for food quality and preparation.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-12 h-12 bg-food-orange rounded-full flex items-center justify-center text-white mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Affordability</h3>
                <p className="text-gray-600">
                  Good food shouldn't break the bank. We work to keep delivery fees low and offer regular promotions.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Team Section */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-8 text-center">Meet Our Team</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  name: "Alex Johnson",
                  role: "Founder & CEO",
                  image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
                },
                {
                  name: "Sarah Chen",
                  role: "COO",
                  image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
                },
                {
                  name: "Michael Torres",
                  role: "Head of Operations",
                  image: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
                },
                {
                  name: "Priya Patel",
                  role: "Marketing Director",
                  image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
                }
              ].map((member, index) => (
                <div key={index} className="text-center">
                  <div className="h-48 w-48 mx-auto rounded-full overflow-hidden mb-4">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold">{member.name}</h3>
                  <p className="text-gray-600">{member.role}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Contact Section */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Have questions, feedback, or just want to say hello? We'd love to hear from you!
            </p>
            <div className="inline-flex space-x-4">
              <a href="mailto:support@foodmunch.com" className="bg-food-orange hover:bg-food-orange/90 text-white px-6 py-3 rounded-lg font-medium">
                Email Us
              </a>
              <a href="tel:+15551234567" className="bg-white border border-gray-300 hover:bg-gray-50 text-gray-800 px-6 py-3 rounded-lg font-medium">
                Call Us
              </a>
            </div>
          </div>
        </section>
      </main>
      
      {/* Footer */}
      <footer className="bg-gray-900 text-white py-6">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2025 FoodMunch. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default About;
