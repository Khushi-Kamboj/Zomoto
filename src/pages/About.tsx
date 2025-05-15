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
            <h1 className="text-4xl font-bold mb-4">About Zomoto</h1>
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
                  Zo-moto is a food delivery web application developed as a clone of the popular platform Zomato.
                  Built in 2025 as part of a personal project, Zo-moto aims to replicate the core features of a
                  modern food delivery service — allowing users to browse restaurants, explore menus, place orders, and track deliveries seamlessly.
                  This project was created to strengthen my skills in frontend and backend development, focusing on
                  building a responsive UI, integrating dynamic restaurant data, and simulating real-world food
                  delivery workflows. Zo-moto reflects both my passion for web development and my interest in
                  creating user-centric applications that solve everyday problems.
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
                  src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=500&q=80"
                  alt="Zomoto Team"
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

        {/* Meet the Developer Section */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-8 text-center">Meet the Developer</h2>
            <div className="flex justify-center mb-8">
              <div className="text-center">
                <div className="h-48 w-48 mx-auto rounded-full overflow-hidden mb-4">
                  <img
                    src="https://raw.githubusercontent.com/Khushi-Kamboj/Zomoto/main/imageKhushi.jpg"
                    alt="Khushi"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold">Khushi</h3>
                <p className="text-gray-600">Full Stack Developer</p>
              </div>
            </div>
            <div className="max-w-3xl mx-auto text-center text-gray-700 text-base leading-relaxed">
              <p className="mb-4">
                Zo-moto is a solo project developed by <strong>Khushi</strong>, who took on every role—from frontend
                design and backend development to testing and deployment. This section showcases a typical team structure found in professional platforms, but in reality, every feature, layout, and line of code was crafted independently as part of a learning journey and passion for web development.
              </p>
              <p>
                What might look like a team effort is the result of one developer’s dedication to building a fully functional, user-friendly food delivery application from the ground up.
              </p>
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
              <a href="khushikamboj123456@gmail.com" className="bg-food-orange hover:bg-food-orange/90 text-white px-6
              py-3
              rounded-lg
              font-medium">
                Email Us
              </a>
              <a href="+91 9306605503" className="bg-white border border-gray-300 hover:bg-gray-50 text-gray-800 px-6
              py-3
              rounded-lg font-medium">
                Call Us
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-6">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2025 Zomoto. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default About;
