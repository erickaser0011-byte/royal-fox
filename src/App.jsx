import React, { useState, useCallback, useEffect } from "react";
import { Header } from "./components/Header";
import { ProgressBar } from "./components/ProgressBar";
import { PersonalInfoSection } from "./components/sections/PersonalInfoSection";
import { PositionDetailsSection } from "./components/sections/PositionDetailsSection";
import { DocumentsSection } from "./components/sections/DocumentsSection";
import { ReviewSignSection } from "./components/sections/ReviewSignSection";
import { FormNavigation } from "./components/FormNavigation";
import { SuccessModal } from "./components/SuccessModal";
import { ErrorAlert } from "./components/ErrorAlert";
import { Footer } from "./components/Footer";
import { submitApplication } from "./utils/api";

// --- Define a key for localStorage ---
const LOCAL_STORAGE_KEY = "royalFoxFormData";

// --- Define the initial empty state ---
const initialFormState = {
  firstName: "",
  lastName: "",
  middleName: "",
  dob: "",
  street: "",
  city: "",
  state: "",
  zipCode: "",
  phone: "",
  email: "",
  workAuthorized: "",
  preferredContact: "",
  ssn: "",
  idType: "",
  idNumber: "",
  idExpiration: "",
  idFront: null,
  idBack: null,
  positionApplied: "",
  employmentType: "",
  expectedSalary: "",
  startDate: "",
  workSchedule: "",
  willOvertimeTravel: "",
  bankName: "",
  bankAccountType: "",
  accountHolderName: "",
  routingNumber: "",
  accountNumber: "",
  bankConsent: false,
  resume: null,
  identityConsent: false,
  bankDetailsConsent: false,
  signature: "",
  signatureDate: "",
  dragActive: { idFront: false, idBack: false, resume: false },
};

// --- Function to load state from localStorage ---
const loadStateFromLocalStorage = () => {
  try {
    const storedState = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (!storedState) {
      return initialFormState;
    }

    const parsedState = JSON.parse(storedState);

    // CRITICAL: Reset file fields to null as they cannot be stored
    parsedState.idFront = null;
    parsedState.idBack = null;
    parsedState.resume = null;
    parsedState.dragActive = { idFront: false, idBack: false, resume: false };

    return parsedState;
  } catch (err) {
    console.error("Could not load state from localStorage", err);
    return initialFormState;
  }
};

export default function App() {
  const [currentStep, setCurrentStep] = useState(1);
  const [submittedData, setSubmittedData] = useState(null);
  const [showSubmissionModal, setShowSubmissionModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const totalSteps = 4;
  const stepTitles = [
    "Personal Info",
    "Position Details",
    "Documents",
    "Review & Sign",
  ];

  // --- Load state from localStorage on init ---
  const [formData, setFormData] = useState(loadStateFromLocalStorage);

  // --- useEffect to save state to localStorage on every change ---
  useEffect(() => {
    try {
      // Create a copy to avoid mutating state
      const stateToSave = { ...formData };

      // CRITICAL: Set file fields to null before saving
      stateToSave.idFront = null;
      stateToSave.idBack = null;
      stateToSave.resume = null;

      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(stateToSave));
    } catch (err) {
      console.warn("Could not save state to localStorage", err);
    }
  }, [formData]);

  // ============================================
  // INPUT HANDLERS
  // ============================================

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleDrag = (e, fileType) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setFormData((prev) => ({
        ...prev,
        dragActive: { ...prev.dragActive, [fileType]: true },
      }));
    } else if (e.type === "dragleave") {
      setFormData((prev) => ({
        ...prev,
        dragActive: { ...prev.dragActive, [fileType]: false },
      }));
    }
  };

  // --- Store the File object, not the filename string ---
  const handleDrop = (e, fileType) => {
    e.preventDefault();
    e.stopPropagation();
    setFormData((prev) => ({
      ...prev,
      dragActive: { ...prev.dragActive, [fileType]: false },
    }));
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setFormData((prev) => ({
        ...prev,
        [fileType]: e.dataTransfer.files[0], // Store the File object
      }));
    }
  };

  // --- Store the File object, not the filename string ---
  const handleFileInput = (e, fileType) => {
    if (e.target.files && e.target.files[0]) {
      setFormData((prev) => ({ ...prev, [fileType]: e.target.files[0] })); // Store the File object
    }
  };

  // ============================================
  // FORM VALIDATION
  // ============================================

  const canProceed = useCallback(() => {
    // Step 1: Personal Information
    if (currentStep === 1) {
      return (
        formData.firstName &&
        formData.lastName &&
        formData.dob &&
        formData.street &&
        formData.city &&
        formData.state &&
        formData.zipCode &&
        formData.phone &&
        formData.email &&
        formData.workAuthorized &&
        formData.preferredContact &&
        formData.ssn &&
        formData.idType &&
        formData.idNumber &&
        formData.idExpiration &&
        formData.idFront &&
        formData.idBack
      );
    }

    // Step 2: Position Details
    if (currentStep === 2) {
      return (
        formData.positionApplied &&
        formData.employmentType &&
        formData.expectedSalary &&
        formData.startDate &&
        formData.workSchedule &&
        formData.willOvertimeTravel &&
        formData.bankName &&
        formData.bankAccountType &&
        formData.accountHolderName &&
        formData.routingNumber &&
        formData.accountNumber &&
        formData.bankConsent
      );
    }

    // Step 3: Documents & Consent
    if (currentStep === 3) {
      return (
        formData.resume &&
        formData.identityConsent &&
        formData.bankDetailsConsent
      );
    }

    // Step 4: Review & Sign
    if (currentStep === 4) {
      return formData.signature && formData.signatureDate;
    }

    return false;
  }, [currentStep, formData]);

  // ============================================
  // NAVIGATION HANDLERS
  // ============================================

  const handleNext = () => {
    if (canProceed() && currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
      window.scrollTo(0, 0);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
      window.scrollTo(0, 0);
    }
  };

  // ============================================
  // FORM SUBMISSION
  // ============================================

  const handleSubmit = async () => {
    if (!canProceed()) return;

    setIsLoading(true);
    setError(null);

    // 1. Create a new FormData object
    const data = new FormData();

    // 2. Helper function to format dates to yyyy-MM-dd
    const formatDateForSubmission = (dateValue) => {
      if (!dateValue) return "";

      // If it's already in yyyy-MM-dd format, return as is
      if (
        typeof dateValue === "string" &&
        dateValue.match(/^\d{4}-\d{2}-\d{2}$/)
      ) {
        return dateValue;
      }

      // If it's a Date object, format it
      if (dateValue instanceof Date) {
        return dateValue.toISOString().split("T")[0];
      }

      // Try to parse string dates
      if (typeof dateValue === "string") {
        const date = new Date(dateValue);
        if (!isNaN(date.getTime())) {
          return date.toISOString().split("T")[0];
        }
      }

      return "";
    };

    // 3. Append all simple key-value pairs
    Object.keys(formData).forEach((key) => {
      const value = formData[key];
      // Skip files and complex objects
      if (
        key === "idFront" ||
        key === "idBack" ||
        key === "resume" ||
        key === "dragActive"
      ) {
        return;
      }

      // Format dates correctly
      if (
        key === "dob" ||
        key === "idExpiration" ||
        key === "startDate" ||
        key === "signatureDate"
      ) {
        data.append(key, formatDateForSubmission(value));
      }
      // Convert booleans to "true" or "false" strings for form data
      else if (typeof value === "boolean") {
        data.append(key, value ? "true" : "false");
      } else {
        data.append(key, value);
      }
    });

    // 4. Append the actual files
    if (formData.idFront) {
      data.append("idFront", formData.idFront, formData.idFront.name);
    }
    if (formData.idBack) {
      data.append("idBack", formData.idBack, formData.idBack.name);
    }
    if (formData.resume) {
      data.append("resume", formData.resume, formData.resume.name);
    }

    try {
      // 5. Send the FormData object
      const result = await submitApplication(data);
      setSubmittedData(result.data); // The server response is still JSON
      setShowSubmissionModal(true);
    } catch (err) {
      // 6. Improved error handling
      let displayError = "Error submitting application. Please try again.";

      // 'err' is now the object we threw from api.js
      if (err) {
        const serverMessage = err.message || "";
        // Check if err.error is an object, stringify if it is
        const serverErrorDetails = err.error
          ? typeof err.error === "object"
            ? JSON.stringify(err.error)
            : err.error
          : "";

        displayError = `${serverMessage} ${serverErrorDetails}`;

        if (String(serverErrorDetails).includes("chat not found")) {
          displayError =
            "Submission failed: The Telegram bot chat was not found. (Have you started the bot in Telegram?)";
        }
      }

      setError(displayError);
      console.error("Submission error details:", err);
    } finally {
      setIsLoading(false);
    }
  };

  // ============================================
  // NEW APPLICATION
  // ============================================

  const handleNewApplication = () => {
    setShowSubmissionModal(false);
    setCurrentStep(1);
    setError(null);
    // Reset state to the initial empty form
    setFormData(initialFormState);
    // Clear the saved data from localStorage
    localStorage.removeItem(LOCAL_STORAGE_KEY);
    window.scrollTo(0, 0);
  };

  // ============================================
  // RENDER SUCCESS MODAL
  // ============================================

  if (showSubmissionModal) {
    return (
      <SuccessModal
        submittedData={submittedData}
        onClose={() => setShowSubmissionModal(false)}
        onNewApplication={handleNewApplication}
      />
    );
  }

  // ============================================
  // RENDER MAIN APPLICATION
  // ============================================

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex flex-col">
      <Header currentStep={currentStep} totalSteps={totalSteps} />

      <main className="flex-1 max-w-6xl mx-auto w-full px-4 md:px-8 py-6 md:py-12">
        {/* Progress Bar */}
        <ProgressBar
          currentStep={currentStep}
          totalSteps={totalSteps}
          stepTitles={stepTitles}
        />

        {/* Form Container */}
        <div className="bg-white rounded-xl md:rounded-2xl shadow-xl p-4 md:p-8 lg:p-12 border border-gray-200">
          {/* Error Alert */}
          <ErrorAlert error={error} />

          {/* Step 1: Personal Information */}
          {currentStep === 1 && (
            <PersonalInfoSection
              formData={formData}
              handleInputChange={handleInputChange}
              handleDrag={handleDrag}
              handleDrop={handleDrop}
              handleFileInput={handleFileInput}
              dragActive={formData.dragActive}
            />
          )}

          {/* Step 2: Position Details */}
          {currentStep === 2 && (
            <PositionDetailsSection
              formData={formData}
              handleInputChange={handleInputChange}
            />
          )}

          {/* Step 3: Documents & Consent */}
          {currentStep === 3 && (
            <DocumentsSection
              formData={formData}
              handleInputChange={handleInputChange}
              handleDrag={handleDrag}
              handleDrop={handleDrop}
              handleFileInput={handleFileInput}
              dragActive={formData.dragActive}
            />
          )}

          {/* Step 4: Review & Sign */}
          {currentStep === 4 && (
            <ReviewSignSection
              formData={formData}
              handleInputChange={handleInputChange}
            />
          )}

          {/* Form Navigation */}
          <FormNavigation
            currentStep={currentStep}
            totalSteps={totalSteps}
            canProceed={canProceed()}
            isLoading={isLoading}
            onPrevious={handlePrevious}
            onNext={handleNext}
            onSubmit={handleSubmit}
          />
        </div>
      </main>

      <Footer />
    </div>
  );
}
