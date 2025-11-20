import React from "react";
import { FileUploadZone } from "../FileUploadZone";

export const DocumentsSection = ({
  formData,
  handleInputChange,
  handleDrag,
  handleDrop,
  handleFileInput,
  dragActive,
}) => {
  return (
    <div className="space-y-6 md:space-y-8">
      <div>
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
          Section 3: Documents & Consent
        </h2>
        <div className="w-16 h-1 bg-emerald-600 rounded"></div>
      </div>

      <div>
        <label className="block text-sm font-semibold text-gray-900 mb-3">
          Resume / CV *
        </label>
        <FileUploadZone
          label="Upload Resume"
          fileName={formData.resume}
          isDragging={dragActive.resume}
          onDragEnter={(e) => handleDrag(e, "resume")}
          onDragLeave={(e) => handleDrag(e, "resume")}
          onDragOver={(e) => handleDrag(e, "resume")}
          onDrop={(e) => handleDrop(e, "resume")}
          onFileInput={(e) => handleFileInput(e, "resume")}
          inputId="resume"
          accept=".pdf,.doc,.docx"
        />
      </div>

      <div className="space-y-4 bg-amber-50 border border-amber-200 rounded-lg p-4 md:p-6">
        <p className="font-semibold text-gray-900 text-sm md:text-base">
          Consent & Authorization *
        </p>

        <label className="flex items-start gap-3 cursor-pointer">
          <input
            type="checkbox"
            name="identityConsent"
            checked={formData.identityConsent}
            onChange={handleInputChange}
            className="mt-1 w-4 h-4 accent-emerald-600 flex-shrink-0"
          />
          <span className="text-xs md:text-sm text-gray-700">
            I authorize Royal Fox Production to verify my identity and to use
            the SSN, ID, and bank details provided for employment verification,
            tax documentation, and payroll purposes. I understand this
            information will be used only for legitimate business needs and
            stored securely. *
          </span>
        </label>

        <label className="flex items-start gap-3 cursor-pointer">
          <input
            type="checkbox"
            name="bankDetailsConsent"
            checked={formData.bankDetailsConsent}
            onChange={handleInputChange}
            className="mt-1 w-4 h-4 accent-emerald-600 flex-shrink-0"
          />
          <span className="text-xs md:text-sm text-gray-700">
            I consent to submitting government-issued identification and bank
            details for verification and onboarding purposes. *
          </span>
        </label>
      </div>
    </div>
  );
};
