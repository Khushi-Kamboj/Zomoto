
import React from 'react';
import { FoodItem } from '../data/mockData';
import { useCart } from '../context/CartContext';
import { Button } from '@/components/ui/button';
import { PlusCircle } from 'lucide-react';

interface FoodCardProps {
  food: FoodItem;
}

const FoodCard: React.FC<FoodCardProps> = ({ food }) => {
  const { addToCart } = useCart();

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden food-card">
      <div className="h-48 w-full">
        <img 
          src={food.image} 
          alt={food.name} 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-4">
        <div className="flex justify-between items-start">
          <h3 className="text-lg font-bold">{food.name}</h3>
          <span className="font-bold text-food-orange">${food.price.toFixed(2)}</span>
        </div>
        <p className="text-sm text-gray-600 mt-1 line-clamp-2">{food.description}</p>
        <div className="mt-4 flex justify-between items-center">
          <span className="text-xs px-2 py-1 bg-gray-100 rounded-full text-gray-600">
            {food.category}
          </span>
          <Button 
            size="sm"
            onClick={() => addToCart(food)}
            className="bg-food-orange hover:bg-food-orange/90 text-white"
          >
            <PlusCircle className="mr-1 h-4 w-4" /> Add
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
