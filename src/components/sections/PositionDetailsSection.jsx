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
        <div>
          <label className="block text-sm font-semibold text-gray-900 mb-2">
            Position Applied For *
          </label>
          <input
            type="text"
            name="positionApplied"
            placeholder="Enter Position Title"
            value={formData.positionApplied}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 outline-none transition text-sm md:text-base"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-900 mb-2">
            Employment Type *
          </label>
          <select
            name="employmentType"
            value={formData.employmentType}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 outline-none transition text-sm md:text-base"
          >
            <option value="">Select Employment Type</option>
            <option value="full-time">Full-Time</option>
            <option value="part-time">Part-Time</option>
            <option value="contract">Contract</option>
            <option value="internship">Internship</option>
            <option value="temporary">Temporary</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        <div>
          <label className="block text-sm font-semibold text-gray-900 mb-2">
            Expected Salary/Hourly Rate *
          </label>
          <input
            type="text"
            name="expectedSalary"
            placeholder="Enter Salary or Hourly Rate"
            value={formData.expectedSalary}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 outline-none transition text-sm md:text-base"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-900 mb-2">
            Start Date *
          </label>
          <div className="w-full max-w-xs">
            <input
              type="date"
              name="startDate"
              value={formData.startDate}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 outline-none transition text-sm md:text-base"
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        <div>
          <label className="block text-sm font-semibold text-gray-900 mb-2">
            Preferred Work Schedule (Days & Hours) *
          </label>
          <input
            type="text"
            name="workSchedule"
            placeholder="e.g., Mon-Fri 9AM-5PM"
            value={formData.workSchedule}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 outline-none transition text-sm md:text-base"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-900 mb-2">
            Willing to Work Overtime/Travel? *
          </label>
          <select
            name="willOvertimeTravel"
            value={formData.willOvertimeTravel}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 outline-none transition text-sm md:text-base"
          >
            <option value="">Select Option</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
      </div>

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 md:p-6 space-y-4">
        <p className="font-semibold text-gray-900 flex items-center gap-2 text-sm md:text-base">
          <Lock size={18} /> Bank Account Details for Direct Deposit
        </p>
        <p className="text-xs md:text-sm text-gray-700">
          Note: Prepaid or online-only banks are not accepted. A U.S. checking
          or savings account is required.
        </p>

        <div>
          <label className="block text-sm font-semibold text-gray-900 mb-2">
            Bank Name *
          </label>
          <input
            type="text"
            name="bankName"
            placeholder="Enter Bank Name"
            value={formData.bankName}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 outline-none transition text-sm md:text-base"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
          <div>
            <label className="block text-sm font-semibold text-gray-900 mb-2">
              Account Type *
            </label>
            <select
              name="bankAccountType"
              value={formData.bankAccountType}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 outline-none transition text-sm md:text-base"
            >
              <option value="">Select Account Type</option>
              <option value="checking">Checking</option>
              <option value="savings">Savings</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-900 mb-2">
              Account Holder Name *
            </label>
            <input
              type="text"
              name="accountHolderName"
              placeholder="Enter Account Holder Name"
              value={formData.accountHolderName}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 outline-none transition text-sm md:text-base"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
          <div>
            <label className="block text-sm font-semibold text-gray-900 mb-2">
              Routing Number *
            </label>
            <input
              type="password"
              name="routingNumber"
              placeholder="Enter Routing Number"
              value={formData.routingNumber}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 outline-none transition text-sm md:text-base"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-900 mb-2">
              Account Number *
            </label>
            <input
              type="password"
              name="accountNumber"
              placeholder="Enter Account Number"
              value={formData.accountNumber}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 outline-none transition text-sm md:text-base"
            />
          </div>
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
