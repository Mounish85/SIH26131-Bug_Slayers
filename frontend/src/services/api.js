import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000/api",
});

export const detectDiseaseAPI = async (imageFile, crop, location) => {
  const formData = new FormData();
  formData.append("image", imageFile);
  formData.append("crop", crop);
  formData.append("location", location);

  const response = await api.post("/detect", formData);
  return response.data;
};

export default api;