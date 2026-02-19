const rawBaseUrl =
  import.meta.env.VITE_API_BASE_URL || "http://localhost:5000/scoil-mhaolcheadair";

export const API_BASE = rawBaseUrl.replace(/\/$/, "");

async function handleResponse(response, defaultMessage) {
  const data = await response.json().catch(() => ({}));
  if (!response.ok) {
    throw new Error(data?.message || defaultMessage);
  }
  return data;
}

export async function fetchPosts(type = "") {
  const query = type ? `?type=${encodeURIComponent(type)}` : "";
  const response = await fetch(`${API_BASE}/posts${query}`);
  return handleResponse(response, "Failed to fetch posts");
}

export async function fetchPost(id) {
  const response = await fetch(`${API_BASE}/posts/${id}`);
  return handleResponse(response, "Failed to fetch post");
}

export async function loginRequest(credentials) {
  const response = await fetch(`${API_BASE}/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(credentials),
  });
  return handleResponse(response, "Login failed");
}

export function getUploadUrl(fileUrl) {
  if (!fileUrl) return "";
  if (!fileUrl.startsWith("http")) return `${API_BASE}/uploads/${fileUrl}`;
  if (fileUrl.startsWith("http://webdev-backends.onrender.com")) {
    return fileUrl.replace("http://", "https://");
  }
  return fileUrl;
}
