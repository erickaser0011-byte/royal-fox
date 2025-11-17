import React from "react";
import { Upload } from "lucide-react";

export const FileUploadZone = ({
  label,
  fileName, // <-- This is now a File object or null
  isDragging,
  onDragEnter,
  onDragLeave,
  onDragOver,
  onDrop,
  onFileInput,
  inputId,
  accept = "image/*,.pdf",
}) => {
  return (
    <div
      onDragEnter={onDragEnter}
      onDragLeave={onDragLeave}
      onDragOver={onDragOver}
      onDrop={onDrop}
      className={`border-2 border-dashed rounded-lg p-6 md:p-8 text-center cursor-pointer transition-all ${
        isDragging
          ? "border-emerald-500 bg-emerald-50"
          : "border-gray-300 bg-gray-50 hover:border-gray-400"
      }`}
    >
      <input
        type="file"
        accept={accept}
        onChange={onFileInput}
        className="hidden"
        id={inputId}
      />
      <label htmlFor={inputId} className="cursor-pointer block">
        <Upload className="w-8 md:w-10 h-8 md:h-10 text-gray-400 mx-auto mb-2 md:mb-3" />
        {/* --- MODIFICATION: Check if fileName is a File object before accessing .name --- */}
        <p className="text-gray-900 font-medium text-sm md:text-base">
          {fileName && fileName.name ? fileName.name : label}
        </p>
        <p className="text-gray-500 text-xs md:text-sm mt-1">
          Drag & Drop or Browse
        </p>
      </label>
    </div>
  );
};
