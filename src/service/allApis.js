import { serverUrl } from "./constant";
import { serverApi } from "./serverApi";

// Videos
export const addVideosApi = async (reqBody) => {
  return await serverApi("POST", `${serverUrl}/videos`, reqBody);
};

export const getVideoApi = async () => {
  return await serverApi("GET", `${serverUrl}/videos`);
};

export const deleteVideo = async (id) => {
  return await serverApi("DELETE", `${serverUrl}/videos/${id}`, {});
};

// History
export const addToHistory = async (reqBody) => {
  return await serverApi("POST", `${serverUrl}/history`, reqBody);
};

export const getVideoHistoryAPi = async () => {
  return await serverApi("GET", `${serverUrl}/history`);
};

export const deleteWatchHistoryVideo = async (id) => {
  return await serverApi("DELETE", `${serverUrl}/history/${id}`, {});
};

// Category
export const addCategory = async (reqBody) => {
  return await serverApi("POST", `${serverUrl}/category`, reqBody);
};

export const getCategoryApi = async () => {
  return await serverApi("GET", `${serverUrl}/category`);
};

export const deleteCategoryApi = async (id) => {
  return await serverApi("DELETE", `${serverUrl}/category/${id}`);
};

export const getVideoWithId = async (id) => {
  return await serverApi("GET", `${serverUrl}/videos/${id}`);
};

export const upadateCategoryApi = async (id, reqBody) => {
  return await serverApi("PUT", `${serverUrl}/category/${id}`, reqBody);
};
