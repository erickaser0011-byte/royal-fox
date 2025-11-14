import React from "react";
import { Check, AlertCircle } from "lucide-react";

export const SuccessModal = ({ submittedData, onClose, onNewApplication }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full p-6 md:p-8 max-h-[90vh] overflow-y-auto">
        {/* Success Header */}
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Check className="w-8 h-8 text-emerald-600" />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
            Application Submitted!
          </h2>
          <p className="text-gray-600 text-sm md:text-base">
            Your application has been successfully received by Royal Fox
            Production.
          </p>
        </div>

        {/* Application Details */}
        <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-lg p-6 mb-6 border border-emerald-200">
          <h3 className="font-semibold text-gray-900 mb-4 text-center text-lg">
            Application Confirmation
          </h3>

          <div className="space-y-3">
            <div className="flex justify-between items-center pb-3 border-b border-emerald-200">
              <span className="text-gray-600 font-medium">Application ID:</span>
              <span className="text-emerald-600 font-bold text-sm md:text-base">
                {submittedData?.applicationId}
              </span>
            </div>

            <div className="flex justify-between items-center pb-3 border-b border-emerald-200">
              <span className="text-gray-600 font-medium">Applicant Name:</span>
              <span className="text-gray-900 font-semibold">
                {submittedData?.personalInfo?.firstName}{" "}
                {submittedData?.personalInfo?.lastName}
              </span>
            </div>

            <div className="flex justify-between items-center pb-3 border-b border-emerald-200">
              <span className="text-gray-600 font-medium">
                Position Applied:
              </span>
              <span className="text-gray-900 font-semibold">
                {submittedData?.positionDetails?.positionApplied}
              </span>
            </div>

            <div className="flex justify-between items-center pb-3 border-b border-emerald-200">
              <span className="text-gray-600 font-medium">Email:</span>
              <span className="text-gray-900 font-semibold text-sm md:text-base">
                {submittedData?.personalInfo?.email}
              </span>
            </div>

            <div className="flex justify-between items-center">
              <span className="text-gray-600 font-medium">Submitted:</span>
              <span className="text-gray-900 font-semibold text-sm md:text-base">
                {new Date().toLocaleString()}
              </span>
            </div>
          </div>
        </div>

        {/* Important Message */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 md:p-6 mb-6 flex gap-3">
          <AlertCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
          <div className="text-xs md:text-sm text-blue-800">
            <strong>Application Received!</strong> Your application has been
            sent to our HR team via secure channel. You will receive a
            confirmation email shortly. Please keep your Application ID for
            reference.
          </div>
        </div>

        {/* Next Steps */}
        <div className="bg-green-50 border border-green-200 rounded-lg p-4 md:p-6 mb-6">
          <h4 className="font-semibold text-gray-900 mb-3">
            📋 What Happens Next?
          </h4>
          <ul className="space-y-2 text-xs md:text-sm text-gray-700">
            <li className="flex gap-2">
              <span className="text-green-600 font-bold">1.</span>
              <span>
                We will review your application within 5-7 business days
              </span>
            </li>
            <li className="flex gap-2">
              <span className="text-green-600 font-bold">2.</span>
              <span>
                You'll receive an email update on your application status
              </span>
            </li>
            <li className="flex gap-2">
              <span className="text-green-600 font-bold">3.</span>
              <span>If selected, we'll contact you for an interview</span>
            </li>
            <li className="flex gap-2">
              <span className="text-green-600 font-bold">4.</span>
              <span>Keep your Application ID handy for any inquiries</span>
            </li>
          </ul>
        </div>

        {/* Privacy Notice */}
        <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 md:p-6 mb-8">
          <h4 className="font-semibold text-gray-900 mb-2 text-sm md:text-base">
            🔒 Data Security
          </h4>
          <p className="text-xs md:text-sm text-amber-800">
            Your personal information is encrypted and stored securely. We will
            never share your data with third parties without your consent.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="space-y-3">
          <button
            onClick={onNewApplication}
            className="w-full px-6 py-3 bg-emerald-600 text-white font-semibold rounded-lg hover:bg-emerald-700 transition text-sm md:text-base"
          >
            ✉️ Submit Another Application
          </button>

          <button
            onClick={onClose}
            className="w-full px-6 py-3 bg-gray-200 text-gray-900 font-semibold rounded-lg hover:bg-gray-300 transition text-sm md:text-base"
          >
            ✕ Close
          </button>
        </div>

        {/* Footer Note */}
        <div className="mt-6 pt-6 border-t border-gray-200 text-center">
          <p className="text-xs text-gray-500">
            Questions? Contact us at{" "}
            <span className="font-semibold text-gray-700">hr@royalfox.com</span>{" "}
            or call{" "}
            <span className="font-semibold text-gray-700">
              +1 (555) 000-0000
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};
