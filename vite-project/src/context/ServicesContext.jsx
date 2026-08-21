import { createContext, useContext, useState } from "react";

const ServicesContext = createContext();

export const ServicesProvider = ({ children }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const totalCards = 8;

  const visibleCards = 2;

  const maxIndex = totalCards - visibleCards;

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => {
      if (prevIndex < maxIndex) {
        return prevIndex + 1;
      }

      return 0;
    });
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => {
      if (prevIndex > 0) {
        return prevIndex - 1;
      }

      return maxIndex;
    });
  };

  return (
    <ServicesContext.Provider
      value={{
        currentIndex,
        nextSlide,
        prevSlide,
      }}
    >
      {children}
    </ServicesContext.Provider>
  );
};

export const useServices = () => {
  return useContext(ServicesContext);
};