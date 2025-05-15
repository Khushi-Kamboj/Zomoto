import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import { restaurants, foodItems } from '../data/mockData';
import RestaurantCard from '../components/RestaurantCard';
import FoodCard from '../components/FoodCard';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Index = () => {
  // Get only featured restaurants and popular food items
  const featuredRestaurants = restaurants.filter(restaurant => restaurant.featured);
  const popularFoodItems = foodItems.slice(0, 4); // Just take the first 4 for now

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-food-orange via-food-red to-[#ff3131] text-white">
            {/* Decorative shapes */}
            <div className="absolute -top-12 -right-24 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>

            {/* Food pattern overlay */}
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/food.png')] opacity-5"></div>

            <div className="container mx-auto px-4 py-16 md:py-32 relative z-10">
              <div className="grid md:grid-cols-2 items-center gap-8 md:gap-12">

                {/* Text content */}
                <div className="text-center md:text-left space-y-6">
                  <div className="inline-block px-4 py-1 bg-white/20 backdrop-blur-sm rounded-full mb-4 animate-float-up" style={{ animationDelay: '0.1s' }}>
                    <span className="text-sm font-medium tracking-wider uppercase">Taste the difference</span>
                  </div>

                  <h1 className="text-4xl md:text-6xl font-bold leading-tight animate-float-up" style={{ animationDelay: '0.3s' }}>
                    Delicious Food <span className="block relative">
                      Delivered To
                      <span className="inline-block relative">
                        Your
                        <svg className="absolute -bottom-2 w-full" viewBox="0 0 200 8" xmlns="http://www.w3.org/2000/svg">
                          <path d="M0,5 Q50,0 100,5 T200,5" stroke="currentColor" strokeWidth="3" fill="none" />
                        </svg>
                      </span> Door
                    </span>
                  </h1>

                  <p className="text-xl opacity-90 max-w-lg mx-auto md:mx-0 animate-float-up" style={{ animationDelay: '0.5s' }}>
                    Choose from a wide variety of cuisines and enjoy quick delivery from top-rated restaurants with Zomoto.
                  </p>

                  <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center md:justify-start animate-float-up" style={{ animationDelay: '0.7s' }}>
                    <Link to="/menu">
                      <Button className="bg-white text-food-red hover:bg-gray-100 hover:shadow-lg transition-all px-8 py-6 text-lg font-medium rounded-full group">
                        Order Now
                        <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                    <Link to="/about">
                      <Button variant="outline" className="border-2 border-white text-white hover:bg-gray-800 px-8 py-6 text-lg font-medium rounded-full">
                        Learn More
                      </Button>
                    </Link>
                  </div>

                  <div className="flex items-center justify-center md:justify-start space-x-6 pt-6 animate-float-up" style={{ animationDelay: '0.9s' }}>
                    <div className="flex -space-x-2">
                      {[1, 2, 3].map((i) => (
                        <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-gray-300 overflow-hidden">
                          <img
                            src={`https://randomuser.me/api/portraits/men/${20 + i}.jpg`}
                            alt="Customer"
                            className="w-full h-full object-cover"
                          />
                        </div>
                      ))}
                    </div>
                    <div className="text-sm">
                      <div className="font-bold">1000+ Happy Customers</div>
                      <div className="opacity-75">Join them today!</div>
                    </div>
                  </div>
                </div>

                {/* Image content */}
                <div className="relative animate-float-up" style={{ animationDelay: '0.5s' }}>
                  <div className="absolute inset-0 bg-gradient-to-br from-food-orange/30 to-food-red/30 rounded-3xl rotate-6 scale-[0.97] blur-sm"></div>
                  <div className="relative overflow-hidden rounded-3xl shadow-2xl border border-white/10 animate-pulse-subtle">
                    <img
                      src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80"
                      alt="Delicious Food"
                      className="w-full h-full object-cover"
                    />

                    {/* Floating elements */}
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-4 py-2 rounded-full shadow-lg">
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                        <span className="text-xs font-medium text-gray-800">Live Tracking</span>
                      </div>
                    </div>

                    <div className="absolute -bottom-2 -left-2 bg-white rounded-xl shadow-xl p-3 transform rotate-6 animate-float-up" style={{ animationDelay: '0.8s' }}>
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-food-orange/20 rounded-full flex items-center justify-center">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-food-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <div>
                          <div className="text-xs text-gray-500">Delivery Time</div>
                          <div className="text-sm font-bold text-gray-900">15-30 mins</div>
                        </div>
                      </div>
                    </div>

                    <div className="absolute -bottom-2 right-8 bg-white rounded-xl shadow-xl p-3 transform -rotate-3 animate-float-up" style={{ animationDelay: '1s' }}>
                      <div className="flex items-center space-x-2">
                        <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        </div>
                        <div>
                          <div className="text-xs text-gray-500">Rating</div>
                          <div className="text-sm font-bold text-gray-900">4.9 (2.5k+)</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Wave effect at the bottom */}
            <div className="absolute bottom-0 left-0 right-0">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full">
                <path
                  fill="#ffffff"
                  fillOpacity="1"
                  d="M0,96L48,85.3C96,75,192,53,288,58.7C384,64,480,96,576,96C672,96,768,64,864,48C960,32,1056,32,1152,42.7C1248,53,1344,75,1392,85.3L1440,96L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"
                ></path>
              </svg>
            </div>
          </section>

      {/* Popular Items Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold">Popular Items</h2>
            <Link to="/menu" className="text-food-orange hover:underline flex items-center">
              View All <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {popularFoodItems.map(food => (
              <FoodCard key={food.id} food={food} />
            ))}
          </div>
        </div>
      </section>
      
      {/* How It Works Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-12">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-food-orange text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-bold mb-2">Choose Food</h3>
              <p className="text-gray-600">Browse our menu and select your favorite dishes from top restaurants.</p>
            </div>
            <div className="text-center">
              <div className="bg-food-orange text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-bold mb-2">Place Order</h3>
              <p className="text-gray-600">Add items to your cart, review your order, and proceed to checkout.</p>
            </div>
            <div className="text-center">
              <div className="bg-food-orange text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-bold mb-2">Enjoy!</h3>
              <p className="text-gray-600">Sit back and relax as we deliver your food right to your doorstep.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between">
            <div className="mb-6 md:mb-0">
              <div className="flex items-center space-x-2 mb-4">
                <span className="text-food-orange text-2xl font-bold">Zo-</span>
                <span className="text-food-red text-2xl font-bold">moto</span>
              </div>
              <p className="text-gray-400 max-w-md">
                Bringing delicious food from the best restaurants right to your doorstep with Zo-moto.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
              <div>
                <h3 className="font-bold mb-4">Navigation</h3>
                <ul className="space-y-2">
                  <li><Link to="/" className="text-gray-400 hover:text-white">Home</Link></li>
                  <li><Link to="/menu" className="text-gray-400 hover:text-white">Menu</Link></li>
                  <li><Link to="/about" className="text-gray-400 hover:text-white">About</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold mb-4">Legal</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="text-gray-400 hover:text-white">Terms</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white">Privacy</a></li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold mb-4">Contact</h3>
                <ul className="space-y-2">
                  <li className="text-gray-400">khushikamboj123456@gmail.com</li>
                  <li className="text-gray-400">+91 9306605503</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Zo-moto. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
