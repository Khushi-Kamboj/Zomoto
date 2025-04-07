
import React from 'react';
import { Restaurant } from '../data/mockData';
import { Star } from 'lucide-react';
import { cn } from '@/lib/utils';

interface RestaurantCardProps {
  restaurant: Restaurant;
  className?: string;
}

const RestaurantCard: React.FC<RestaurantCardProps> = ({ restaurant, className }) => {
  return (
    <div 
      className={cn(
        "bg-white rounded-lg shadow-md overflow-hidden food-card", 
        restaurant.featured && "border-2 border-food-orange",
        className
      )}
    >
      <div className="relative h-48 w-full">
        <img 
          src={restaurant.image} 
          alt={restaurant.name} 
          className="w-full h-full object-cover"
        />
        {restaurant.featured && (
          <div className="absolute top-2 right-2 bg-food-orange text-white px-2 py-1 rounded-md text-xs font-medium">
            Featured
          </div>
        )}
      </div>
      <div className="p-4">
        <h3 className="text-lg font-bold">{restaurant.name}</h3>
        <p className="text-sm text-gray-600">{restaurant.cuisine}</p>
        <div className="flex items-center mt-2">
          <div className="flex items-center">
            <Star className="h-4 w-4 text-food-yellow fill-food-yellow" />
            <span className="ml-1 text-sm font-medium">{restaurant.rating}</span>
          </div>
          <span className="mx-2 text-gray-300">•</span>
          <span className="text-sm text-gray-600">{restaurant.deliveryTime}</span>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;
