import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import slideOne from "../assets/slide1.jpg";
import slideTwo from "../assets/slide2.jpg";
import slideThree from "../assets/slide3.jpg";
import fallback from "../assets/fallback.jpg";
import { fetchPosts } from "../lib/api";
import { siteConfig } from "../config/site";
import PageContainer from "../components/layout/PageContainer";
import SectionCard from "../components/layout/SectionCard";

function formatDate(value) {
  return new Date(value).toLocaleDateString(undefined, {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

function excerpt(text = "", len = 150) {
  const clean = String(text).replace(/\s+/g, " ").trim();
  return clean.length > len ? `${clean.slice(0, len).trim()}...` : clean;
}

const slides = [
  {
    image: slideOne,
    headline: `Welcome to ${siteConfig.name}`,
    subtitle: "A caring and ambitious school where pupils are known, supported, and encouraged.",
  },
  {
    image: slideTwo,
    headline: "Learning, Belonging, and Growth",
    subtitle: "Discover school news, events, admissions information, and life at Scoil Mhaolcheadair.",
  },
  {
    image: slideThree,
    headline: `Growing Together at ${siteConfig.name}`,
    subtitle: "Celebrating learning, community, and pupil success throughout the school year.",
  },
];

export default function HomePage() {
  const [index, setIndex] = useState(0);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);

    const rotate = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 6500);

    return () => clearInterval(rotate);
  }, []);

  useEffect(() => {
    let active = true;

    (async () => {
      setLoading(true);
      setError("");
      try {
        const allPosts = await fetchPosts();
        if (!active) return;
        const sorted = [...allPosts].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
        setPosts(sorted.slice(0, 4));
      } catch (err) {
        if (active) setError("Could not load latest posts.");
      } finally {
        if (active) setLoading(false);
      }
    })();

    return () => {
      active = false;
    };
  }, []);

  const latestNews = useMemo(() => posts.slice(0, 2), [posts]);

  return (
    <div className="pb-10">
      <section className="relative isolate flex min-h-[74vh] items-end overflow-hidden bg-slate-900 sm:min-h-[62vh] md:min-h-[68vh]">
        <div className="absolute inset-0">
          {slides.map((slide, i) => (
            <img
              key={slide.headline}
              src={slide.image}
              alt=""
              className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
                i === index ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/50 to-black/20 md:bg-gradient-to-r md:from-[var(--brand-navy)]/82 md:via-[#103055]/64 md:to-[var(--brand-green)]/64" />
        </div>

        <PageContainer className="relative pb-10 pt-4 sm:py-14 md:py-24">
          <div className="max-w-3xl rounded-3xl bg-black/45 p-5 text-white shadow-2xl backdrop-blur-[2px] sm:p-7 md:bg-transparent md:p-0 md:shadow-none md:backdrop-blur-0">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/85 sm:text-sm">Primary School in Kerry</p>
            <h1 className="mt-2 text-3xl font-extrabold leading-tight sm:text-4xl md:text-6xl">{slides[index].headline}</h1>
            <p className="mt-3 max-w-xl text-sm leading-6 text-white/95 sm:text-base sm:leading-7 md:mt-4 md:text-lg">
              {slides[index].subtitle}
            </p>
            <div className="mt-5 flex gap-3 sm:mt-6 md:mt-8">
              <Link to="/admissions" className="btn-secondary flex-1 text-center sm:flex-none">Admissions</Link>
              <Link to="/latest" className="btn-accent flex-1 text-center sm:flex-none">Latest Updates</Link>
            </div>
          </div>
        </PageContainer>
      </section>

      <PageContainer className="section-stack pt-6 sm:pt-8 md:pt-10">
        <SectionCard className="p-5 sm:p-6 md:p-8">
          <div className="grid items-center gap-6 md:grid-cols-[150px_1fr]">
            <img src={siteConfig.crest} alt={`${siteConfig.name} crest`} className="mx-auto h-24 w-auto md:h-36" />
            <div>
              <h2 className="text-2xl font-extrabold text-[#0f2748] sm:text-3xl md:text-4xl">{siteConfig.name}</h2>
              <p className="mt-3 text-sm leading-7 text-muted sm:text-base">
                {siteConfig.name} serves local families. We aim to provide a safe, inclusive,
                and high-quality learning environment where each child can flourish.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="rounded-full bg-[#e9f1fb] px-3 py-1 text-xs font-bold text-[#12325d]">Established {siteConfig.yearEstablished}</span>
                <span className="rounded-full bg-[#e8f4ee] px-3 py-1 text-xs font-bold text-[#1f5d47]">Inclusive Learning</span>
                <span className="rounded-full bg-[#f3edf5] px-3 py-1 text-xs font-bold text-[#5b3b71]">Community Focused</span>
              </div>
            </div>
          </div>
        </SectionCard>

        <SectionCard className="surface-soft border-0 p-5 sm:p-6 md:p-8">
          <div className="grid gap-6 md:grid-cols-[1.2fr_1fr] md:gap-8">
            <div>
              <h2 className="text-2xl font-extrabold text-[#0f2748] sm:text-3xl">Why Families Choose Scoil Mhaolcheadair</h2>
              <p className="mt-3 text-sm leading-7 text-muted sm:text-base">
                Our staff combine strong teaching with a warm school culture so pupils are known personally and supported academically.
                We balance literacy, numeracy, wellbeing, and active learning from junior infants through to sixth class.
              </p>
            </div>
            <div className="grid gap-3">
              <div className="rounded-xl border border-[#d7e0ef] bg-white p-4">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#4f6786]">School Ethos</p>
                <p className="mt-1 text-sm text-[#1c3558]">Care, respect, and high expectations for every child.</p>
              </div>
              <div className="rounded-xl border border-[#d7e0ef] bg-white p-4">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#4f6786]">Parent Partnership</p>
                <p className="mt-1 text-sm text-[#1c3558]">Clear communication and practical support for families.</p>
              </div>
              <div className="rounded-xl border border-[#d7e0ef] bg-white p-4">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#4f6786]">Pupil Experience</p>
                <p className="mt-1 text-sm text-[#1c3558]">A safe environment where children belong and gain confidence.</p>
              </div>
            </div>
          </div>
        </SectionCard>

        <section className="grid gap-8 lg:grid-cols-[2fr_1fr]">
          <SectionCard className="p-5 sm:p-6">
            <div className="mb-5 flex items-center justify-between">
              <h2 className="text-2xl font-extrabold text-[#0f2748] sm:text-3xl">Latest News</h2>
              <Link to="/latest" className="link-brand">View all</Link>
            </div>

            {loading ? <p className="text-muted">Loading latest posts...</p> : null}
            {error ? <p className="text-red-700">{error}</p> : null}

            {!loading && !error && latestNews.length === 0 ? (
              <p className="text-muted">No recent posts yet.</p>
            ) : null}

            {!loading && !error && latestNews.length > 0 ? (
              <div className="grid gap-5 md:grid-cols-2">
                {latestNews.map((post) => (
                  <article key={post._id} className="overflow-hidden rounded-xl border border-slate-200 bg-white">
                    <img
                      src={post.imageUrl || fallback}
                      alt={post.title}
                      className="h-44 w-full object-cover"
                      loading="lazy"
                    />
                    <div className="p-4">
                      <div className="flex items-start justify-between gap-3">
                        <h3 className="text-lg font-bold text-[#122e54]">{post.title}</h3>
                        <span className="text-xs text-slate-500">{formatDate(post.createdAt)}</span>
                      </div>
                      <p className="mt-2 text-sm leading-6 text-muted">{excerpt(post.content)}</p>
                      <Link to={`/post/${post._id}`} className="mt-3 inline-block link-brand">
                        Read more
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            ) : null}
          </SectionCard>

          <SectionCard className="p-5 sm:p-6">
            <h2 className="text-2xl font-extrabold text-[#0f2748]">School Calendar</h2>
            <p className="mt-2 text-sm text-muted">Important dates and upcoming events.</p>
            <div className="calendar-shell mt-4 flex justify-center">
              <Calendar value={new Date()} className="home-calendar rounded-xl border border-slate-200" />
            </div>
          </SectionCard>
        </section>

        <SectionCard className="bg-gradient-to-r from-[#0f2748] to-[#1f6b52] p-6 text-white sm:p-8">
          <h2 className="text-2xl font-extrabold sm:text-3xl">Join Our School Community</h2>
          <p className="mt-3 max-w-3xl text-sm leading-7 text-white/90 md:text-base">
            Discover what makes {siteConfig.name} a welcoming place to learn. Get in touch for admissions,
            school visits, and enrolment support.
          </p>
          <Link to="/contact" className="btn-accent mt-6">Contact the Office</Link>
        </SectionCard>
      </PageContainer>
    </div>
  );
}
