import React from "react";
import { Check } from "lucide-react";

export const ProgressBar = ({ currentStep,  stepTitles }) => {
  return (
    <div className="mb-8 md:mb-12">
      <div className="flex items-center justify-between gap-1 md:gap-0">
        {stepTitles.map((title, idx) => {
          const stepNum = idx + 1;
          const isActive = stepNum === currentStep;
          const isComplete = stepNum < currentStep;

          return (
            <div key={idx} className="flex items-center flex-1">
              <div
                className={`w-8 md:w-10 h-8 md:h-10 rounded-full flex items-center justify-center font-semibold transition-all flex-shrink-0 text-xs md:text-base ${
                  isActive
                    ? "bg-emerald-600 text-white ring-4 ring-emerald-100 shadow-lg"
                    : isComplete
                    ? "bg-teal-500 text-white"
                    : "bg-gray-200 text-gray-500"
                }`}
              >
                {isComplete ? (
                  <Check size={16} className="md:w-5 md:h-5" />
                ) : (
                  stepNum
                )}
              </div>
              <div className="ml-1 md:ml-2 hidden lg:block text-xs">
                <p
                  className={`font-semibold ${
                    isActive
                      ? "text-emerald-600"
                      : isComplete
                      ? "text-teal-600"
                      : "text-gray-500"
                  }`}
                >
                  {title}
                </p>
              </div>
              {idx < stepTitles.length - 1 && (
                <div
                  className={`flex-1 h-1 mx-1 md:mx-4 ${
                    isComplete ? "bg-teal-500" : "bg-gray-300"
                  } transition-colors`}
                />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
