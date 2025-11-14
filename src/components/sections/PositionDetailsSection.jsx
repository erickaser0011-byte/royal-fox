import React from "react";
import { Lock } from "lucide-react";

export const PositionDetailsSection = ({ formData, handleInputChange }) => {
  return (
    <div className="space-y-6 md:space-y-8">
      <div>
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
          Section 2: Position Details
        </h2>
        <div className="w-16 h-1 bg-emerald-600 rounded"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        <input
          type="text"
          name="positionApplied"
          placeholder="Position Applied For *"
          value={formData.positionApplied}
          onChange={handleInputChange}
          className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 outline-none transition text-sm md:text-base"
        />
        <select
          name="employmentType"
          value={formData.employmentType}
          onChange={handleInputChange}
          className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 outline-none transition text-sm md:text-base"
        >
          <option value="">Employment Type *</option>
          <option value="full-time">Full-Time</option>
          <option value="part-time">Part-Time</option>
          <option value="contract">Contract</option>
          <option value="internship">Internship</option>
          <option value="temporary">Temporary</option>
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        <input
          type="text"
          name="expectedSalary"
          placeholder="Expected Salary/Hourly Rate *"
          value={formData.expectedSalary}
          onChange={handleInputChange}
          className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 outline-none transition text-sm md:text-base"
        />
        <input
          type="date"
          name="startDate"
          value={formData.startDate}
          onChange={handleInputChange}
          className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 outline-none transition text-sm md:text-base"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        <input
          type="text"
          name="workSchedule"
          placeholder="Preferred Work Schedule (Days & Hours) *"
          value={formData.workSchedule}
          onChange={handleInputChange}
          className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 outline-none transition text-sm md:text-base"
        />
        <select
          name="willOvertimeTravel"
          value={formData.willOvertimeTravel}
          onChange={handleInputChange}
          className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 outline-none transition text-sm md:text-base"
        >
          <option value="">Willing to work overtime/travel? *</option>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
      </div>

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 md:p-6 space-y-4">
        <p className="font-semibold text-gray-900 flex items-center gap-2 text-sm md:text-base">
          <Lock size={18} /> Bank Account Details for Direct Deposit
        </p>
        <p className="text-xs md:text-sm text-gray-700">
          Note: Prepaid or online-only banks are not accepted. A U.S. checking
          or savings account is required.
        </p>

        <input
          type="text"
          name="bankName"
          placeholder="Bank Name *"
          value={formData.bankName}
          onChange={handleInputChange}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 outline-none transition text-sm md:text-base"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
          <select
            name="bankAccountType"
            value={formData.bankAccountType}
            onChange={handleInputChange}
            className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 outline-none transition text-sm md:text-base"
          >
            <option value="">Account Type *</option>
            <option value="checking">Checking</option>
            <option value="savings">Savings</option>
          </select>
          <input
            type="text"
            name="accountHolderName"
            placeholder="Account Holder Name *"
            value={formData.accountHolderName}
            onChange={handleInputChange}
            className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 outline-none transition text-sm md:text-base"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
          <input
            type="password"
            name="routingNumber"
            placeholder="Routing Number *"
            value={formData.routingNumber}
            onChange={handleInputChange}
            className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 outline-none transition text-sm md:text-base"
          />
          <input
            type="password"
            name="accountNumber"
            placeholder="Account Number *"
            value={formData.accountNumber}
            onChange={handleInputChange}
            className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 outline-none transition text-sm md:text-base"
          />
        </div>

        <label className="flex items-start gap-3 cursor-pointer">
          <input
            type="checkbox"
            name="bankConsent"
            checked={formData.bankConsent}
            onChange={handleInputChange}
            className="mt-1 w-4 h-4 accent-emerald-600 flex-shrink-0"
          />
          <span className="text-xs md:text-sm text-gray-700">
            I certify that the information above is correct and that Royal Fox
            Production may deposit my paycheck directly into this account. *
          </span>
        </label>
      </div>
    </div>
  );
};
