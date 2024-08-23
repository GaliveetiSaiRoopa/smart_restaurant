import React from 'react'

interface FoodItem {
    id: number;
    name: string;
    price: number;
    imageUrl: string;
  }

  const FoodItemCard: React.FC<{ item: FoodItem }> = ({ item }) => {
    return (
      <div className="border rounded shadow-sm p-4">
        <img src={item.imageUrl} alt={item.name} className="w-full h-48 object-cover mb-4 rounded" />
        <h2 className="text-xl font-bold">{item.name}</h2>
        <p className="text-gray-700">${item.price.toFixed(2)}</p>
      </div>
    );
  };

export default FoodItemCard;