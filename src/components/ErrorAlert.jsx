import React from "react";
import { AlertCircle } from "lucide-react";

export const ErrorAlert = ({ error }) => {
  if (!error) return null;

  return (
    <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex gap-3">
      <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
      <div className="text-xs md:text-sm text-red-800">{error}</div>
    </div>
  );
};
