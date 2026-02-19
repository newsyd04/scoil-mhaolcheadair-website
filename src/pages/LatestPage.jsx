import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import fallback from "../assets/fallback.jpg";
import { fetchPosts } from "../lib/api";
import InternalPageLayout from "../components/layout/InternalPageLayout";
import SectionCard from "../components/layout/SectionCard";

function excerpt(text = "", maxLength = 160) {
  const clean = String(text).replace(/\s+/g, " ").trim();
  return clean.length > maxLength ? `${clean.slice(0, maxLength)}...` : clean;
}

export default function LatestPage() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    let active = true;

    (async () => {
      setLoading(true);
      setError("");
      try {
        const type = activeFilter === "All" ? "" : activeFilter;
        const data = await fetchPosts(type);
        if (!active) return;
        setPosts(data);
      } catch {
        if (active) setError("Error fetching posts");
      } finally {
        if (active) setLoading(false);
      }
    })();

    return () => {
      active = false;
    };
  }, [activeFilter]);

  const postTypes = useMemo(() => ["All", ...new Set(posts.map((post) => post.type).filter(Boolean))], [posts]);

  return (
    <InternalPageLayout
      title="Latest Announcements & Posts"
      subtitle="Stay updated with school news, events, and announcements."
    >
      <SectionCard className="p-6">
        <h2 className="text-2xl font-bold text-[#122e54]">Filter by Type</h2>
        <div className="mt-4 flex flex-wrap gap-3">
          {postTypes.map((type) => (
            <button
              key={type}
              onClick={() => setActiveFilter(type)}
              className={`rounded-full border px-4 py-2 text-sm font-semibold transition ${
                activeFilter === type
                  ? "border-[#0f2748] bg-[#0f2748] text-white"
                  : "border-slate-300 bg-white text-[#1b4e85] hover:bg-[#ecf2fb]"
              }`}
            >
              {type}
            </button>
          ))}
        </div>
      </SectionCard>

      <div className="space-y-4">
        {loading ? <p className="text-slate-600">Loading posts...</p> : null}
        {error ? <p className="text-red-700">{error}</p> : null}

        {!loading && !error && posts.length === 0 ? (
          <SectionCard className="p-6">
            <p className="text-slate-600">No posts available for the selected filter.</p>
          </SectionCard>
        ) : null}

        {!loading && !error
          ? posts.map((post) => (
              <SectionCard key={post._id} className="p-5">
                <div className="mb-4 overflow-hidden rounded-xl border border-slate-200 bg-slate-100">
                  <img
                    src={post.imageUrl || fallback}
                    alt={post.title}
                    className="h-64 w-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h3 className="text-2xl font-bold text-[#122e54]">
                    <Link to={`/post/${post._id}`} className="hover:underline">
                      {post.title}
                    </Link>
                  </h3>
                  <span className="text-sm text-slate-500">{new Date(post.createdAt).toLocaleDateString()}</span>
                </div>
                <p className="mt-3 text-slate-700">{excerpt(post.content)}</p>
                <span className="mt-3 inline-block rounded-full bg-[#edf3fb] px-2.5 py-1 text-xs font-semibold text-[#345a89]">
                  {post.type}
                </span>
              </SectionCard>
            ))
          : null}
      </div>
    </InternalPageLayout>
  );
}
