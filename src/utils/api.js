import axios from "axios";

const API_BASE_URL =
  import.meta.env.VITE_API_URL || "https://royal-fox-backend.onrender.com/api";

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  // Browser automatically sets Content-Type for FormData
});

// Submit application with FormData
export const submitApplication = async (formDataObject) => {
  try {
    const response = await apiClient.post("/applications", formDataObject);
    return response.data;
  } catch (error) {
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
