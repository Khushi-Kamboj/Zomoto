
import React from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface CategoryFilterProps {
  categories: string[];
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

const CategoryFilter: React.FC<CategoryFilterProps> = ({ 
  categories, 
  selectedCategory, 
  onCategoryChange 
}) => {
  return (
    <div className="overflow-x-auto pb-2">
      <div className="flex space-x-2">
        {categories.map((category) => (
          <Button
            key={category}
            variant="outline"
            className={cn(
              "whitespace-nowrap",
              selectedCategory === category && "bg-food-orange text-white hover:bg-food-orange/90 hover:text-white"
            )}
            onClick={() => onCategoryChange(category)}
          >
            {category}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default CategoryFilter;
