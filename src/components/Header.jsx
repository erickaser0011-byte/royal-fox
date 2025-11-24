import React from "react";

export const Header = ({ currentStep, totalSteps }) => {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 md:px-8 py-4 md:py-6">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-2 md:gap-3">
            <img
              className="w-10 md:w-12 h-10 md:h-12 rounded-lg flex items-center justify-center"
              src="src/assets/IMG_1619.JPG"
              alt="rf logo"
            />

            <div className="min-w-0">
              <h1 className="text-lg md:text-2xl font-bold text-gray-900 truncate">
                Royal Fox Production
              </h1>
              <p className="text-xs md:text-sm text-gray-600 hidden sm:block">
                Employment Application
              </p>
            </div>
          </div>
          <div className="text-right hidden sm:block">
            <p className="text-xs md:text-sm text-gray-600">
              Step {currentStep} of {totalSteps}
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};
