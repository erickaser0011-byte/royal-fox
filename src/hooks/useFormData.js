import { useState } from "react";

export const useFormData = (initialState) => {
  const [formData, setFormData] = useState(initialState);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleNestedChange = (section, field, value) => {
    setFormData((prev) => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: value,
      },
    }));
  };

  const handleArrayChange = (arrayName, index, field, value) => {
    setFormData((prev) => {
      const updated = [...prev[arrayName]];
      updated[index][field] = value;
      return { ...prev, [arrayName]: updated };
    });
  };

  const addArrayItem = (arrayName, newItem) => {
    setFormData((prev) => ({
      ...prev,
      [arrayName]: [...prev[arrayName], newItem],
    }));
  };

  const removeArrayItem = (arrayName, index) => {
    setFormData((prev) => ({
      ...prev,
      [arrayName]: prev[arrayName].filter((_, i) => i !== index),
    }));
  };

  const resetForm = (initialState) => {
    setFormData(initialState);
  };

  return {
    formData,
    setFormData,
    handleInputChange,
    handleNestedChange,
    handleArrayChange,
    addArrayItem,
    removeArrayItem,
    resetForm,
  };
};
