import axios from "axios";

const API_BASE_URL =
  //   process.env.REACT_APP_API_URL ||
  "http://localhost:3000/api"; // <-- Set to 3000

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  // --- MODIFICATION ---
  // REMOVED 'Content-Type': 'application/json'
  // When sending FormData, the browser MUST set this header automatically.
});

// --- MODIFICATION ---
// This function now receives a FormData object, not a plain JS object.
export const submitApplication = async (formDataObject) => {
  try {
    // We send the formDataObject directly.
    const response = await apiClient.post("/applications", formDataObject);
    return response.data; // Return the JSON response from the server
  } catch (error) {
    // Pass the detailed error from the server back to the component
    // This is what the new catch block in App.jsx will receive
    throw error.response ? error.response.data : error;
  }
};

export const getApplications = async () => {
  try {
    const response = await apiClient.get("/applications");
    return response.data;
  } catch (error) {
    throw error.response?.data || error;
  }
};

export const getApplication = async (applicationId) => {
  try {
    const response = await apiClient.get(`/applications/${applicationId}`);
    return response.data;
  } catch (error) {
    throw error.response?.data || error;
  }
};

export const updateApplicationStatus = async (applicationId, updateData) => {
  try {
    const response = await apiClient.patch(
      `/applications/${applicationId}/status`,
      updateData
    );
    return response.data;
  } catch (error) {
    throw error.response?.data || error;
  }
};

export default apiClient;
