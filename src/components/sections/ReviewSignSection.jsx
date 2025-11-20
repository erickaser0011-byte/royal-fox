import React from "react";
import { Lock } from "lucide-react";

export const ReviewSignSection = ({ formData, handleInputChange }) => {
  return (
    <div className="space-y-6 md:space-y-8">
      <div>
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
          Section 4: Review & Sign
        </h2>
        <div className="w-16 h-1 bg-emerald-600 rounded"></div>
      </div>

      <div className="bg-green-50 border border-green-200 rounded-lg p-4 md:p-6">
        <p className="text-xs md:text-sm text-green-800">
          <strong>✓ All sections complete!</strong> Please review and sign below
          to submit your application.
        </p>
      </div>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-semibold text-gray-900 mb-2">
            Applicant Signature *
          </label>
          <input
            type="text"
            name="signature"
            placeholder="Type your full name as signature"
            value={formData.signature}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 outline-none transition font-cursive text-lg md:text-xl"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-900 mb-2">
            Date *
          </label>
          <input
            type="date"
            name="signatureDate"
            value={formData.signatureDate}
            onChange={handleInputChange}
            className="w-full md:w-1/2 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 outline-none transition text-sm md:text-base"
          />
        </div>
      </div>

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 md:p-6 space-y-3">
        <p className="font-semibold text-gray-900 flex items-center gap-2 text-sm md:text-base">
          <Lock size={18} /> Data Privacy Notice
        </p>
        <p className="text-xs md:text-sm text-gray-700">
          Royal Fox Production treats all personal information as confidential.
          SSNs, bank, and ID details are collected only when necessary and
          stored securely with access limited to authorized HR personnel only.
        </p>
      </div>
    </div>
  );
};
