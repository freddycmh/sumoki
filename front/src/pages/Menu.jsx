import React, { useState } from "react";
import Card from "../components/Card";
import Search from "../components/Search";
import cardData from "../data.json";

export const Menu = () => {
  const [expandedCategories, setExpandedCategories] = useState({});

  const toggleCategory = (category) => {
    setExpandedCategories((prevState) => ({
      ...prevState,
      [category]: !prevState[category],
    }));
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-gradient-to-br from-black via-gray-900 to-black pb-24">
      {/* Search Bar */}
      <Search categories={Object.keys(cardData)} />

      {/* Menu Content */}
      <div className="w-full max-w-screen-lg px-4 mt-24">
        {Object.entries(cardData).map(([category, items]) => {
          const isExpanded = expandedCategories[category];
          const visibleItems = isExpanded ? items : items.slice(0, 4);

          return (
            <div key={category} id={category} className="mb-12">
              <h1 className="text-2xl font-bold mb-6 underline text-white">
                {category}
              </h1>
              <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 justify-items-center">
                {visibleItems.map((item) => (
                  <Card
                    key={item.id}
                    img={item.img}
                    title={item.title}
                    description={item.description}
                    price={item.price}
                  />
                ))}
              </div>
              {items.length > 4 && (
                <div className="flex justify-center mt-4">
                  <button
                    className="px-6 py-2 text-white bg-gray-800 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-600 transition duration-300 ease-in-out shadow-md"
                    onClick={() => toggleCategory(category)}
                  >
                    {isExpanded ? "Show Less" : "Load More"}
                  </button>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
