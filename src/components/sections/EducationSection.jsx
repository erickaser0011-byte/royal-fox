import React from "react";

export const EducationSection = ({ formData, handleInputChange }) => {
  return (
    <div className="space-y-6 md:space-y-8">
      <div>
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
          Section 3: Education Background
        </h2>
        <div className="w-16 h-1 bg-emerald-600 rounded"></div>
      </div>

      <div className="space-y-6">
        <div>
          <p className="font-semibold text-gray-900 mb-3 text-sm md:text-base">
            High School *
          </p>
          <input
            type="text"
            name="highSchoolName"
            placeholder="High School Name"
            value={formData.highSchoolName}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 outline-none transition mb-3 text-sm md:text-base"
          />
          <input
            type="text"
            name="highSchoolLocation"
            placeholder="Location"
            value={formData.highSchoolLocation}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 outline-none transition text-sm md:text-base"
          />
        </div>

        <div>
          <p className="font-semibold text-gray-900 mb-3 text-sm md:text-base">
            College / University *
          </p>
          <input
            type="text"
            name="collegeName"
            placeholder="College Name"
            value={formData.collegeName}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 outline-none transition mb-3 text-sm md:text-base"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
            <input
              type="text"
              name="collegeLocation"
              placeholder="Location"
              value={formData.collegeLocation}
              onChange={handleInputChange}
              className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 outline-none transition text-sm md:text-base"
            />
            <input
              type="text"
              name="collegeDegree"
              placeholder="Degree / Major"
              value={formData.collegeDegree}
              onChange={handleInputChange}
              className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 outline-none transition text-sm md:text-base"
            />
          </div>
        </div>

        <div>
          <label className="block text-xs md:text-sm font-semibold text-gray-900 mb-3">
            Licenses or Professional Certificates
          </label>
          <textarea
            name="licenses"
            placeholder="List any relevant licenses or certifications..."
            value={formData.licenses}
            onChange={handleInputChange}
            rows="4"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 outline-none transition resize-none text-sm md:text-base"
          />
        </div>
      </div>
    </div>
  );
};
