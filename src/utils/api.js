import axios from "axios";

const API_BASE_URL =
//   process.env.REACT_APP_API_URL || 
  "http://localhost:5000/api";

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const submitApplication = async (formData) => {
  try {
    const response = await apiClient.post("/applications", formData);
    return response.data;
  } catch (error) {
    throw error.response?.data || error;
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
