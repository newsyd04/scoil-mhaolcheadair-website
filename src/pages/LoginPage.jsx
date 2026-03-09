import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginRequest } from "../lib/api";
import { siteConfig } from "../config/site";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSubmitting(true);
    setError("");

    try {
      const data = await loginRequest({ username, password });
      localStorage.setItem("token", data.token);
      navigate("/post-upload");
    } catch (err) {
      setError(err.message || "Theip ar an logáil isteach");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#f8f7f2] p-6">
      <div className="mx-auto max-w-md rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
        <div className="mb-6 flex justify-center">
          <img src={siteConfig.crest} className="h-24 sm:h-28" alt={`${siteConfig.name} crest`} />
        </div>
        <h1 className="mb-2 text-center text-2xl font-extrabold text-[#0f2748]">Logáil Isteach</h1>
        <p className="mb-6 text-center text-sm text-slate-600">Tairseach riaracháin {siteConfig.name}</p>

        <form onSubmit={handleSubmit} className="space-y-4">
          {error ? <div className="rounded-lg bg-red-50 px-3 py-2 text-sm text-red-700">{error}</div> : null}

          <div>
            <label className="mb-1 block text-sm font-semibold text-slate-700" htmlFor="username">Ainm Úsáideora</label>
            <input
              id="username"
              type="text"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
              className="w-full rounded-lg border border-slate-300 px-3 py-2"
              required
            />
          </div>

          <div>
            <label className="mb-1 block text-sm font-semibold text-slate-700" htmlFor="password">Pasfhocal</label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              className="w-full rounded-lg border border-slate-300 px-3 py-2"
              required
            />
          </div>

          <button type="submit" disabled={submitting} className="btn-primary w-full disabled:opacity-70">
            {submitting ? "Ag logáil isteach..." : "Logáil Isteach"}
          </button>
        </form>
      </div>
    </div>
  );
}
