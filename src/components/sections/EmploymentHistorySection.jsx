import React from "react";

export const EmploymentHistorySection = ({
  employmentHistory,
  handleEmploymentHistoryChange,
  addEmploymentEntry,
  removeEmploymentEntry,
}) => {
  return (
    <div className="space-y-6 md:space-y-8">
      <div>
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
          Section 4: Employment History
        </h2>
        <div className="w-16 h-1 bg-emerald-600 rounded"></div>
      </div>

      {employmentHistory.map((entry, idx) => (
        <div
          key={idx}
          className="bg-gray-50 p-4 md:p-6 rounded-lg border border-gray-200 space-y-4"
        >
          <div className="flex justify-between items-center mb-4">
            <p className="font-semibold text-gray-900 text-sm md:text-base">
              Employment Entry {idx + 1}
            </p>
            {employmentHistory.length > 1 && (
              <button
                onClick={() => removeEmploymentEntry(idx)}
                className="text-red-600 text-xs md:text-sm font-semibold hover:text-red-700"
              >
                Remove
              </button>
            )}
          </div>

          <input
            type="text"
            placeholder="Company Name *"
            value={entry.company}
            onChange={(e) =>
              handleEmploymentHistoryChange(idx, "company", e.target.value)
            }
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 outline-none transition text-sm md:text-base"
          />
          <input
            type="text"
            placeholder="Address"
            value={entry.address}
            onChange={(e) =>
              handleEmploymentHistoryChange(idx, "address", e.target.value)
            }
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 outline-none transition text-sm md:text-base"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
            <input
              type="text"
              placeholder="Job Title"
              value={entry.jobTitle}
              onChange={(e) =>
                handleEmploymentHistoryChange(idx, "jobTitle", e.target.value)
              }
              className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 outline-none transition text-sm md:text-base"
            />
            <input
              type="text"
              placeholder="Supervisor Name"
              value={entry.supervisorName}
              onChange={(e) =>
                handleEmploymentHistoryChange(
                  idx,
                  "supervisorName",
                  e.target.value
                )
              }
              className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 outline-none transition text-sm md:text-base"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
            <input
              type="date"
              value={entry.dateFrom}
              onChange={(e) =>
                handleEmploymentHistoryChange(idx, "dateFrom", e.target.value)
              }
              className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 outline-none transition text-sm md:text-base"
            />
            <input
              type="date"
              value={entry.dateTo}
              onChange={(e) =>
                handleEmploymentHistoryChange(idx, "dateTo", e.target.value)
              }
              className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 outline-none transition text-sm md:text-base"
            />
          </div>

          <textarea
            placeholder="Key Responsibilities"
            value={entry.responsibilities}
            onChange={(e) =>
              handleEmploymentHistoryChange(
                idx,
                "responsibilities",
                e.target.value
              )
            }
            rows="3"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 outline-none transition resize-none text-sm md:text-base"
          />
        </div>
      ))}

      <button
        onClick={addEmploymentEntry}
        className="px-6 py-3 border-2 border-emerald-600 text-emerald-600 font-semibold rounded-lg hover:bg-emerald-50 transition text-sm md:text-base"
      >
        + Add Employment Entry
      </button>
    </div>
  );
};
