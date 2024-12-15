import React, { useState } from "react";

const Search = ({ categories }) => {
  const [activeCategory, setActiveCategory] = useState("All");

  const handleCategorySelect = (category) => {
    setActiveCategory(category);

    if (category === "All") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const section = document.getElementById(category);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <div className="fixed bottom-10 left-1/2 transform -translate-x-1/2 w-[95%] sm:max-w-md md:max-w-lg lg:max-w-xl bg-white dark:bg-black rounded-full shadow-lg p-2 z-50">
      <div className="flex items-center justify-center space-x-6 overflow-x-auto whitespace-nowrap">
        <button
          onClick={() => handleCategorySelect("All")}
          className={`px-3 py-1 font-medium border-b-2 ${
            activeCategory === "All"
              ? "text-gray-800 dark:text-gray-200 border-gray-800 dark:border-gray-200"
              : "text-gray-600 dark:text-gray-300 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-gray-800 dark:hover:border-gray-200"
          } transition duration-200`}
        >
          All
        </button>
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => handleCategorySelect(category)}
            className={`px-3 py-1 font-medium border-b-2 ${
              activeCategory === category
                ? "text-gray-800 dark:text-gray-200 border-gray-800 dark:border-gray-200"
                : "text-gray-600 dark:text-gray-300 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-gray-800 dark:hover:border-gray-200"
            } transition duration-200`}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Search;
