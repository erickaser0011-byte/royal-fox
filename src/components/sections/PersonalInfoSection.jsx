import React from "react";
import { Upload } from "lucide-react";
import { FileUploadZone } from "../FileUploadZone";

export const PersonalInfoSection = ({
  formData,
  handleInputChange,
  handleDrag,
  handleDrop,
  handleFileInput,
  dragActive,
}) => {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
          Section 1: Personal Information
        </h2>
        <div className="w-16 h-1 bg-emerald-600 rounded"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
        <input
          type="text"
          name="lastName"
          placeholder="Last Name *"
          value={formData.lastName}
          onChange={handleInputChange}
          className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 outline-none transition text-sm md:text-base"
        />
        <input
          type="text"
          name="firstName"
          placeholder="First Name *"
          value={formData.firstName}
          onChange={handleInputChange}
          className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 outline-none transition text-sm md:text-base"
        />
        <input
          type="text"
          name="middleName"
          placeholder="Middle Name"
          value={formData.middleName}
          onChange={handleInputChange}
          className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 outline-none transition text-sm md:text-base"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        <input
          type="date"
          name="dob"
          value={formData.dob}
          onChange={handleInputChange}
          className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 outline-none transition text-sm md:text-base"
        />
        <select
          name="preferredContact"
          value={formData.preferredContact}
          onChange={handleInputChange}
          className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 outline-none transition text-sm md:text-base"
        >
          <option value="">Preferred Contact Method *</option>
          <option value="phone">Phone</option>
          <option value="email">Email</option>
        </select>
      </div>

      <div className="space-y-4">
        <p className="font-semibold text-gray-900 text-sm md:text-base">
          Current Address *
        </p>
        <input
          type="text"
          name="street"
          placeholder="Street Address"
          value={formData.street}
          onChange={handleInputChange}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 outline-none transition text-sm md:text-base"
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <input
            type="text"
            name="city"
            placeholder="City"
            value={formData.city}
            onChange={handleInputChange}
            className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 outline-none transition text-sm md:text-base"
          />
          <input
            type="text"
            name="state"
            placeholder="State"
            value={formData.state}
            onChange={handleInputChange}
            className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 outline-none transition text-sm md:text-base"
          />
          <input
            type="text"
            name="zipCode"
            placeholder="ZIP Code"
            value={formData.zipCode}
            onChange={handleInputChange}
            className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 outline-none transition text-sm md:text-base"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        <input
          type="tel"
          name="phone"
          placeholder="Phone Number *"
          value={formData.phone}
          onChange={handleInputChange}
          className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 outline-none transition text-sm md:text-base"
        />
        <input
          type="email"
          name="email"
          placeholder="Email Address *"
          value={formData.email}
          onChange={handleInputChange}
          className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 outline-none transition text-sm md:text-base"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        <select
          name="workAuthorized"
          value={formData.workAuthorized}
          onChange={handleInputChange}
          className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 outline-none transition text-sm md:text-base"
        >
          <option value="">Legally authorized to work in US? *</option>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
        <input
          type="password"
          name="ssn"
          placeholder="Full SSN (XXX-XX-XXXX) *"
          value={formData.ssn}
          onChange={handleInputChange}
          className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 outline-none transition text-sm md:text-base"
        />
      </div>

      <div className="space-y-4">
        <p className="font-semibold text-gray-900 text-sm md:text-base">
          Government ID Information *
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <select
            name="idType"
            value={formData.idType}
            onChange={handleInputChange}
            className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 outline-none transition text-sm md:text-base"
          >
            <option value="">ID Type</option>
            <option value="drivers-license">Driver's License</option>
            <option value="state-id">State ID</option>
            <option value="passport">Passport</option>
            <option value="other">Other</option>
          </select>
          <input
            type="text"
            name="idNumber"
            placeholder="ID Number"
            value={formData.idNumber}
            onChange={handleInputChange}
            className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 outline-none transition text-sm md:text-base"
          />
          <input
            type="text"
            name="idExpiration"
            placeholder="Expiration (MM/DD/YYYY)"
            value={formData.idExpiration}
            onChange={handleInputChange}
            className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 outline-none transition text-sm md:text-base"
          />
        </div>
      </div>

      <div className="space-y-4 md:space-y-6">
        <p className="font-semibold text-gray-900 text-sm md:text-base">
          Upload ID Documents *
        </p>

        <FileUploadZone
          label="ID Front"
          fileName={formData.idFront}
          isDragging={dragActive.idFront}
          onDragEnter={(e) => handleDrag(e, "idFront")}
          onDragLeave={(e) => handleDrag(e, "idFront")}
          onDragOver={(e) => handleDrag(e, "idFront")}
          onDrop={(e) => handleDrop(e, "idFront")}
          onFileInput={(e) => handleFileInput(e, "idFront")}
          inputId="idFront"
        />

        <FileUploadZone
          label="ID Back"
          fileName={formData.idBack}
          isDragging={dragActive.idBack}
          onDragEnter={(e) => handleDrag(e, "idBack")}
          onDragLeave={(e) => handleDrag(e, "idBack")}
          onDragOver={(e) => handleDrag(e, "idBack")}
          onDrop={(e) => handleDrop(e, "idBack")}
          onFileInput={(e) => handleFileInput(e, "idBack")}
          inputId="idBack"
        />
      </div>
    </div>
  );
};
