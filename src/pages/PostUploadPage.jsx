import React, { useState, useEffect, useCallback } from "react";
import { FileText, Trash2 } from "lucide-react";
import lmsImg from "/lms.png";
import eventImg from "/event.jpg";
import announcementImg from "/announcement.jpg";
import newsletterImg from "/newsletter.png";
import { API_BASE as baseUrl, fetchPosts, deletePost } from "../lib/api";

const PostUploadPage = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [type, setType] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [file, setFile] = useState(null);

  const [changeTitle, setChangeTitle] = useState("");
  const [changeContent, setChangeContent] = useState("");
  const [urgency, setUrgency] = useState("Medium");
  const [changeFile, setChangeFile] = useState(null);
  const [changeMessage, setChangeMessage] = useState("");
  const [changeError, setChangeError] = useState("");

  const stockImages = [lmsImg, eventImg, announcementImg, newsletterImg];
  const [selectedImage, setSelectedImage] = useState("");

  // Manage-existing-posts section
  const [posts, setPosts] = useState([]);
  const [postsLoading, setPostsLoading] = useState(false);
  const [postsError, setPostsError] = useState("");
  const [deletingId, setDeletingId] = useState(null);

  const reloadPosts = useCallback(async () => {
    setPostsLoading(true);
    setPostsError("");
    try {
      const all = await fetchPosts();
      const sorted = [...all].sort(
        (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
      );
      setPosts(sorted);
    } catch (err) {
      setPostsError("Níorbh fhéidir na hailt a lódáil");
    } finally {
      setPostsLoading(false);
    }
  }, []);

  useEffect(() => {
    reloadPosts();
  }, [reloadPosts]);

  const handleDelete = async (post) => {
    const token = localStorage.getItem("token");
    if (!token) return;
    const confirmed = window.confirm(
      `An bhfuil tú cinnte gur mhaith leat "${post.title}" a scriosadh?`
    );
    if (!confirmed) return;
    setDeletingId(post._id);
    try {
      await deletePost(post._id, token);
      setPosts((prev) => prev.filter((p) => p._id !== post._id));
    } catch (err) {
      window.alert(err.message || "Theip ar scriosadh an ailt");
    } finally {
      setDeletingId(null);
    }
  };

  // ==================== CREATE POST ====================
  const handlePostSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setMessage("");

    const token = localStorage.getItem("token");
    if (!token) {
      setError("Ní mór duit a bheith logáilte isteach chun alt a phostáil");
      return;
    }

    try {
      const formData = new FormData();
      formData.append("title", title);
      formData.append("content", content);
      formData.append("type", type);
      if (selectedImage) formData.append("imageUrl", selectedImage);
      if (file) formData.append("file", file); // 👈 add file to formData

      const response = await fetch(`${baseUrl}/posts`, {
        method: "POST",
        headers: { Authorization: token },
        body: formData,
      });

      const data = await response.json();
      if (response.ok) {
        setMessage("Alt cruthaithe go rathúil ✅");
        setTitle("");
        setContent("");
        setType("");
        setSelectedImage("");
        setFile(null);
        reloadPosts();
      } else {
        setError(data.message || "Theip ar chruthú an ailt");
      }
    } catch (err) {
      console.error(err);
      setError("Tharla earráid agus an t-alt á chruthú");
    }
  };

  // ==================== SUBMIT CHANGE REQUEST ====================
  const handleChangeSubmit = async (e) => {
    e.preventDefault();
    setChangeError("");
    setChangeMessage("");

    const formData = new FormData();
    formData.append("title", changeTitle);
    formData.append("change_details", changeContent);
    formData.append("urgency", urgency);
    if (changeFile) formData.append("file", changeFile);

    try {
      const response = await fetch(`${baseUrl}/change-request`, {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      if (data.success) {
        setChangeMessage("Iarratas athraithe seolta go rathúil ✅");
        setChangeTitle("");
        setChangeContent("");
        setUrgency("Medium");
        setChangeFile(null);
      } else {
        setChangeError(data.message || "Theip ar sheoladh an iarratais athraithe ❌");
      }
    } catch (err) {
      console.error("Error:", err);
      setChangeError("Tharla earráid agus an t-iarratas athraithe á sheoladh ❌");
    }
  };

  return (
    <div className="min-h-screen bg-[#F9F8F4] px-6 py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {/* ==================== POST UPLOAD FORM ==================== */}
        <form
          onSubmit={handlePostSubmit}
          className="bg-white p-8 rounded-xl shadow-lg border border-gray-200"
        >
          <h2 className="text-2xl font-bold mb-6">Cruthaigh Alt Nua</h2>
          {error && <div className="mb-4 text-red-500">{error}</div>}
          {message && <div className="mb-4 text-green-600">{message}</div>}

          <input
            type="text"
            placeholder="Teideal"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-3 border rounded-lg mb-4"
            required
          />
          <textarea
            placeholder="Ábhar"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="w-full p-3 border rounded-lg mb-4"
            rows="4"
            required
          ></textarea>
          <input
            type="text"
            placeholder="Cineál (m.sh. Imeacht, Fógra, Nuachtlitir)"
            value={type}
            onChange={(e) => setType(e.target.value)}
            className="w-full p-3 border rounded-lg mb-6"
            required
          />

          <div className="flex gap-3 overflow-x-auto mb-6">
            {stockImages.map((img) => (
              <img
                key={img}
                src={img}
                alt="stock"
                onClick={() => setSelectedImage(img)}
                className={`w-24 h-16 object-cover cursor-pointer border-4 rounded ${
                  selectedImage === img
                    ? "border-blue-500"
                    : "border-transparent"
                }`}
              />
            ))}
          </div>

          {/* File Upload */}
          <label className="block text-gray-700 mb-2 font-medium">
            Ceangail Comhad (roghnach)
          </label>
          <input
            type="file"
            accept=".pdf,.png,.jpg,.jpeg,.docx"
            onChange={(e) => setFile(e.target.files[0])}
            className="block w-full text-gray-600 mb-6"
          />

          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-semibold p-3 rounded-lg hover:bg-blue-700 transition"
          >
            Cuir Alt Isteach
          </button>
        </form>

        {/* ==================== CHANGE REQUEST FORM ==================== */}
        <form
          onSubmit={handleChangeSubmit}
          className="bg-white p-8 rounded-xl shadow-lg border border-gray-200"
        >
          <div className="flex items-center mb-6 gap-2">
            <FileText className="w-6 h-6 text-blue-600" />
            <h2 className="text-2xl font-bold text-gray-800">
              Cuir Iarratas Athraithe Isteach
            </h2>
          </div>

          {changeError && (
            <div className="mb-4 text-red-600 bg-red-50 p-3 rounded-lg">
              {changeError}
            </div>
          )}
          {changeMessage && (
            <div className="mb-4 text-green-600 bg-green-50 p-3 rounded-lg">
              {changeMessage}
            </div>
          )}

          <input
            type="text"
            placeholder="Teideal"
            value={changeTitle}
            onChange={(e) => setChangeTitle(e.target.value)}
            className="w-full p-3 border rounded-lg mb-4"
            required
          />
          <textarea
            placeholder="Sonraí Athraithe"
            value={changeContent}
            onChange={(e) => setChangeContent(e.target.value)}
            className="w-full p-3 border rounded-lg mb-4"
            rows="4"
            required
          ></textarea>

          <div className="flex gap-3 mb-4">
            {["Low", "Medium", "High"].map((level) => (
              <button
                type="button"
                key={level}
                onClick={() => setUrgency(level)}
                className={`flex-1 px-4 py-2 rounded-lg border font-medium transition ${
                  urgency === level
                    ? "bg-blue-600 text-white border-blue-600"
                    : "bg-gray-100 text-gray-700 border-gray-300 hover:bg-gray-200"
                }`}
              >
                {level}
              </button>
            ))}
          </div>

          <label className="block text-gray-700 mb-2 font-medium">
            Ceangail Comhad Tacaíochta (roghnach)
          </label>
          <input
            type="file"
            accept=".pdf,.png,.jpg,.jpeg"
            onChange={(e) => setChangeFile(e.target.files[0])}
            className="block w-full text-gray-600 mb-6"
          />

          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-semibold p-3 rounded-lg hover:bg-blue-700 transition"
          >
            Cuir Iarratas Athraithe Isteach
          </button>
        </form>
      </div>

      {/* ==================== MANAGE EXISTING POSTS ==================== */}
      <div className="max-w-6xl mx-auto mt-10">
        <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-800">
              Bainistigh Ailt Reatha
            </h2>
            <button
              type="button"
              onClick={reloadPosts}
              className="text-sm text-blue-600 hover:text-blue-800 font-medium"
            >
              Athnuaigh
            </button>
          </div>

          {postsLoading && (
            <p className="text-gray-500 text-sm">Ailt á lódáil...</p>
          )}
          {postsError && (
            <p className="text-red-600 bg-red-50 px-3 py-2 rounded-lg text-sm">
              {postsError}
            </p>
          )}
          {!postsLoading && !postsError && posts.length === 0 && (
            <p className="text-gray-500 text-sm italic">
              Níl aon ailt ann go fóill.
            </p>
          )}

          {!postsLoading && posts.length > 0 && (
            <ul className="divide-y divide-gray-200">
              {posts.map((post) => (
                <li
                  key={post._id}
                  className="flex items-start justify-between gap-4 py-4"
                >
                  <div className="min-w-0">
                    <p className="font-semibold text-gray-900 truncate">
                      {post.title}
                    </p>
                    <p className="text-xs text-gray-500 mt-0.5">
                      {post.type} ·{" "}
                      {new Date(post.createdAt).toLocaleDateString("ga-IE", {
                        day: "numeric",
                        month: "short",
                        year: "numeric",
                      })}
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => handleDelete(post)}
                    disabled={deletingId === post._id}
                    className="inline-flex items-center gap-1.5 rounded-lg border border-red-300 bg-red-50 px-3 py-1.5 text-sm font-medium text-red-700 transition hover:bg-red-100 disabled:opacity-50"
                  >
                    <Trash2 className="w-4 h-4" />
                    {deletingId === post._id ? "Ag scriosadh..." : "Scrios"}
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default PostUploadPage;
