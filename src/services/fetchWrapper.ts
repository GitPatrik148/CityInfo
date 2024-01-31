// fetchWrapper.ts
const BACKEND_URL = "http://localhost:17505/api";
type HttpMethod = "GET" | "POST" | "PUT" | "DELETE";
// Helper function for handling responses
const handleResponse = async (response: Response) => {
  try {
    console.log("Response status:", response.status);
    const text = await response.text();
    console.log(" text:", text);
    const data = text && JSON.parse(text);
    if (!response.ok) {
      const error = (data && data.message) || response.statusText;
      console.error("Request failed with error:", error);
      throw error;
    }
    return data;
  } catch (error) {
    console.error("Error handling response:", error);
    return Promise.reject(error);
  }
};
// Wrapper function for making requests
const request = async (api: string, method: HttpMethod, body?: any) => {
  const requestOptions: RequestInit = {
    method,
    headers: { "Content-Type": "application/json" },
    body: body ? JSON.stringify(body) : undefined,
  };
  const response = await fetch(`${BACKEND_URL}${api}`, requestOptions);
  return handleResponse(response);
};

// Wrapper functions for specific HTTP methods
export const fetchWrapper = {
  get: (api: string) => request(api, "GET"),
  post: (api: string, body: any) => request(api, "POST", body),
  put: (api: string, body: any) => request(api, "PUT", body),
  delete: (api: string) => request(api, "DELETE"),
  getPointsOfInterest: () => fetchWrapper.get("/api/pointsOfInterest"),
  addPointOfInterest: (poiData: any) => fetchWrapper.post("/api/pointsOfInterest", poiData),
  updatePointOfInterest:(poiData:any) => fetchWrapper.put("/api/pointsOfInterest",poiData),
};