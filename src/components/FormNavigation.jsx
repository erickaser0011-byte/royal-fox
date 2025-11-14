import React from "react";
import { Check, ChevronRight } from "lucide-react";

export const FormNavigation = ({
  currentStep,
  totalSteps,
  canProceed,
  isLoading,
  onPrevious,
  onNext,
  onSubmit,
}) => {
  return (
    <div className="mt-8 md:mt-12 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-between border-t border-gray-200 pt-6 md:pt-8">
      <button
        onClick={onPrevious}
        disabled={currentStep === 1}
        className="px-4 md:px-6 py-2 md:py-3 border border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition text-xs md:text-base"
      >
        ← Previous
      </button>

      {currentStep < totalSteps ? (
        <button
          onClick={onNext}
          disabled={!canProceed}
          className="ml-auto px-6 md:px-8 py-2 md:py-3 bg-emerald-600 text-white font-semibold rounded-lg hover:bg-emerald-700 disabled:opacity-50 disabled:cursor-not-allowed transition flex items-center gap-2 text-xs md:text-base justify-center"
        >
          Next <ChevronRight size={18} className="hidden md:inline" />
        </button>
      ) : (
        <button
          onClick={onSubmit}
          disabled={!canProceed || isLoading}
          className="ml-auto px-6 md:px-8 py-2 md:py-3 bg-emerald-600 text-white font-semibold rounded-lg hover:bg-emerald-700 disabled:opacity-50 disabled:cursor-not-allowed transition flex items-center gap-2 text-xs md:text-base justify-center"
        >
          <Check size={18} />{" "}
          {isLoading ? "Submitting..." : "Submit Application"}
        </button>
      )}
    </div>
  );
};
