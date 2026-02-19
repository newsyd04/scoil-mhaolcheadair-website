import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Download } from "lucide-react";
import { fetchPost, getUploadUrl } from "../lib/api";

export default function PostDetail() {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    let active = true;

    (async () => {
      try {
        const data = await fetchPost(id);
        if (active) setPost(data);
      } catch {
        if (active) setError("Could not load post");
      }
    })();

    return () => {
      active = false;
    };
  }, [id]);

  if (error) return <p className="mt-10 text-center text-red-700">{error}</p>;
  if (!post) return <p className="mt-10 text-center text-slate-600">Loading...</p>;

  return (
    <div className="min-h-screen bg-[#f8f7f2] py-12 px-4">
      <div className="mx-auto max-w-3xl rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        {post.imageUrl ? (
          <div className="mb-6">
            <img src={post.imageUrl} alt={post.title} className="max-h-[400px] w-full rounded-md object-contain" />
          </div>
        ) : null}

        <h1 className="mb-2 text-3xl font-bold text-[#122e54]">{post.title}</h1>
        <p className="mb-4 text-sm text-slate-500">
          {new Date(post.createdAt).toLocaleDateString()} · {post.type}
        </p>

        <p className="mb-6 whitespace-pre-line leading-relaxed text-slate-700">{post.content}</p>

        {post.fileUrl ? (
          <div className="mb-6 flex items-center gap-3 rounded-lg border border-[#bfd1ea] bg-[#eef5ff] p-4">
            <Download className="h-5 w-5 text-[#1b4e85]" />
            <a
              href={getUploadUrl(post.fileUrl)}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-[#1b4e85] hover:underline"
            >
              Download Attached File
            </a>
          </div>
        ) : null}

        <Link to="/latest" className="text-sm font-bold text-[#1b4e85] hover:underline">
          ← Back to Latest
        </Link>
      </div>
    </div>
  );
}
