import React from 'react'
import FoodItemCard from './FoodItemCard';

const FoodList: React.FC = () => {
  const foodItems = [
    { id: 1, name: 'Pizza', price: 12.99, imageUrl: 'path/to/pizza.jpg' },
    { id: 2, name: 'Burger', price: 8.99, imageUrl: 'path/to/burger.jpg' },
    // More items...
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {foodItems.map((item) => (
        <FoodItemCard key={item.id} item={item}/>
      ))}
    </div>
  );
}

export default FoodList