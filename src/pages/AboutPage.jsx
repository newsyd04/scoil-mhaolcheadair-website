import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import crest from "../assets/scoil-crest.png";

const AboutPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const staffMembers = [
    {
      name: "Placeholder Name",
      title: "Principal",
      image:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fisobarscience-1bfd8.kxcdn.com%2Fwp-content%2Fuploads%2F2020%2F09%2Fdefault-profile-picture1.jpg&f=1&nofb=1&ipt=16c4f69f00caa12820ed5e58afdea3582c086a204a901abb7d890a9a7987a5c2",
    },
    {
      name: "Placeholder Name",
      title: "Deputy Principal",
      image:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fisobarscience-1bfd8.kxcdn.com%2Fwp-content%2Fuploads%2F2020%2F09%2Fdefault-profile-picture1.jpg&f=1&nofb=1&ipt=16c4f69f00caa12820ed5e58afdea3582c086a204a901abb7d890a9a7987a5c2",
    },
    {
      name: "Placeholder Name",
      title: "School Secretary",
      image:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fisobarscience-1bfd8.kxcdn.com%2Fwp-content%2Fuploads%2F2020%2F09%2Fdefault-profile-picture1.jpg&f=1&nofb=1&ipt=16c4f69f00caa12820ed5e58afdea3582c086a204a901abb7d890a9a7987a5c2",
    },
    {
      name: "Placeholder Name",
      title: "Naoináin Bheaga/ Mhóra",
      image:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fisobarscience-1bfd8.kxcdn.com%2Fwp-content%2Fuploads%2F2020%2F09%2Fdefault-profile-picture1.jpg&f=1&nofb=1&ipt=16c4f69f00caa12820ed5e58afdea3582c086a204a901abb7d890a9a7987a5c2",
    },
    {
      name: "Placeholder Name",
      title: "Rang 1/2",
      image:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fisobarscience-1bfd8.kxcdn.com%2Fwp-content%2Fuploads%2F2020%2F09%2Fdefault-profile-picture1.jpg&f=1&nofb=1&ipt=16c4f69f00caa12820ed5e58afdea3582c086a204a901abb7d890a9a7987a5c2",
    },
    {
      name: "Placeholder Name",
      title: "Rang 3/4",
      image:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fisobarscience-1bfd8.kxcdn.com%2Fwp-content%2Fuploads%2F2020%2F09%2Fdefault-profile-picture1.jpg&f=1&nofb=1&ipt=16c4f69f00caa12820ed5e58afdea3582c086a204a901abb7d890a9a7987a5c2",
    },
    {
      name: "Placeholder Name",
      title: "Rang 3/4",
      image:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fisobarscience-1bfd8.kxcdn.com%2Fwp-content%2Fuploads%2F2020%2F09%2Fdefault-profile-picture1.jpg&f=1&nofb=1&ipt=16c4f69f00caa12820ed5e58afdea3582c086a204a901abb7d890a9a7987a5c2",
    },
    {
      name: "Placeholder Name",
      title: "Rang 5/6",
      image:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fisobarscience-1bfd8.kxcdn.com%2Fwp-content%2Fuploads%2F2020%2F09%2Fdefault-profile-picture1.jpg&f=1&nofb=1&ipt=16c4f69f00caa12820ed5e58afdea3582c086a204a901abb7d890a9a7987a5c2",
    },
  ];

  // const groupMembers = [
  //   {
  //     name: "Placeholder Name",
  //     title: "SET Team",
  //     image:
  //       "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.vecteezy.com%2Fsystem%2Fresources%2Fpreviews%2F036%2F280%2F651%2Foriginal%2Fdefault-avatar-profile-icon-social-media-user-image-gray-avatar-icon-blank-profile-silhouette-illustration-vector.jpg&f=1&nofb=1&ipt=968804e089275771be11c2179112c076746df85d36cd6bfbace9f38a6d59364f",
  //   },
  //   {
  //     name: "Placeholder Name",
  //     title: "SNA Team",
  //     image:
  //       "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.vecteezy.com%2Fsystem%2Fresources%2Fpreviews%2F036%2F280%2F651%2Foriginal%2Fdefault-avatar-profile-icon-social-media-user-image-gray-avatar-icon-blank-profile-silhouette-illustration-vector.jpg&f=1&nofb=1&ipt=968804e089275771be11c2179112c076746df85d36cd6bfbace9f38a6d59364f",
  //   },
  //   {
  //     name: "Placeholder Name",
  //     title: "EAL Teacher",
  //     image:
  //       "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.vecteezy.com%2Fsystem%2Fresources%2Fpreviews%2F036%2F280%2F651%2Foriginal%2Fdefault-avatar-profile-icon-social-media-user-image-gray-avatar-icon-blank-profile-silhouette-illustration-vector.jpg&f=1&nofb=1&ipt=968804e089275771be11c2179112c076746df85d36cd6bfbace9f38a6d59364f",
  //   },
  //   {
  //     name: "Placeholder Name",
  //     title: "Bus Escort",
  //     image:
  //       "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.vecteezy.com%2Fsystem%2Fresources%2Fpreviews%2F036%2F280%2F651%2Foriginal%2Fdefault-avatar-profile-icon-social-media-user-image-gray-avatar-icon-blank-profile-silhouette-illustration-vector.jpg&f=1&nofb=1&ipt=968804e089275771be11c2179112c076746df85d36cd6bfbace9f38a6d59364f",
  //   },
  //   {
  //     name: "Placeholder Name",
  //     title: "School Caretaker",
  //     image:
  //       "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.vecteezy.com%2Fsystem%2Fresources%2Fpreviews%2F036%2F280%2F651%2Foriginal%2Fdefault-avatar-profile-icon-social-media-user-image-gray-avatar-icon-blank-profile-silhouette-illustration-vector.jpg&f=1&nofb=1&ipt=968804e089275771be11c2179112c076746df85d36cd6bfbace9f38a6d59364f",
  //   },
  // ];

  // const BOMMembers = [
  //   {
  //     name: "Placeholder Name",
  //     title: "Chairperson",
  //     image:
  //       "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.vecteezy.com%2Fsystem%2Fresources%2Fpreviews%2F036%2F280%2F651%2Foriginal%2Fdefault-avatar-profile-icon-social-media-user-image-gray-avatar-icon-blank-profile-silhouette-illustration-vector.jpg&f=1&nofb=1&ipt=968804e089275771be11c2179112c076746df85d36cd6bfbace9f38a6d59364f",
  //   },
  //   {
  //     name: "Placeholder Name",
  //     title: "Patron's Nominee",
  //     image:
  //       "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.vecteezy.com%2Fsystem%2Fresources%2Fpreviews%2F036%2F280%2F651%2Foriginal%2Fdefault-avatar-profile-icon-social-media-user-image-gray-avatar-icon-blank-profile-silhouette-illustration-vector.jpg&f=1&nofb=1&ipt=968804e089275771be11c2179112c076746df85d36cd6bfbace9f38a6d59364f",
  //   },
  //   {
  //     name: "Placeholder Name",
  //     title: "School Principal",
  //     image:
  //       "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.vecteezy.com%2Fsystem%2Fresources%2Fpreviews%2F036%2F280%2F651%2Foriginal%2Fdefault-avatar-profile-icon-social-media-user-image-gray-avatar-icon-blank-profile-silhouette-illustration-vector.jpg&f=1&nofb=1&ipt=968804e089275771be11c2179112c076746df85d36cd6bfbace9f38a6d59364f",
  //   },
  //   {
  //     name: "Placeholder Name",
  //     title: "Teachers' Nominee",
  //     image:
  //       "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.vecteezy.com%2Fsystem%2Fresources%2Fpreviews%2F036%2F280%2F651%2Foriginal%2Fdefault-avatar-profile-icon-social-media-user-image-gray-avatar-icon-blank-profile-silhouette-illustration-vector.jpg&f=1&nofb=1&ipt=968804e089275771be11c2179112c076746df85d36cd6bfbace9f38a6d59364f",
  //   },
  //   {
  //     name: "Placeholder Name",
  //     title: "Parents' Nominee",
  //     image:
  //       "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.vecteezy.com%2Fsystem%2Fresources%2Fpreviews%2F036%2F280%2F651%2Foriginal%2Fdefault-avatar-profile-icon-social-media-user-image-gray-avatar-icon-blank-profile-silhouette-illustration-vector.jpg&f=1&nofb=1&ipt=968804e089275771be11c2179112c076746df85d36cd6bfbace9f38a6d59364f",
  //   },
  //   {
  //     name: "Placeholder Name",
  //     title: "Parents' Nominee",
  //     image:
  //       "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.vecteezy.com%2Fsystem%2Fresources%2Fpreviews%2F036%2F280%2F651%2Foriginal%2Fdefault-avatar-profile-icon-social-media-user-image-gray-avatar-icon-blank-profile-silhouette-illustration-vector.jpg&f=1&nofb=1&ipt=968804e089275771be11c2179112c076746df85d36cd6bfbace9f38a6d59364f",
  //   },
  //   {
  //     name: "Placeholder Name",
  //     title: "Community Nominee",
  //     image:
  //       "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.vecteezy.com%2Fsystem%2Fresources%2Fpreviews%2F036%2F280%2F651%2Foriginal%2Fdefault-avatar-profile-icon-social-media-user-image-gray-avatar-icon-blank-profile-silhouette-illustration-vector.jpg&f=1&nofb=1&ipt=968804e089275771be11c2179112c076746df85d36cd6bfbace9f38a6d59364f",
  //   },
  //   {
  //     name: "Placeholder Name",
  //     title: "Community Nominee",
  //     image:
  //       "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.vecteezy.com%2Fsystem%2Fresources%2Fpreviews%2F036%2F280%2F651%2Foriginal%2Fdefault-avatar-profile-icon-social-media-user-image-gray-avatar-icon-blank-profile-silhouette-illustration-vector.jpg&f=1&nofb=1&ipt=968804e089275771be11c2179112c076746df85d36cd6bfbace9f38a6d59364f",
  //   },
  // ];

  // Updated: first sticky note bg and fold are #1C2E5A, and no tilting
  const stickyNotes = [
    {
      title: "About Us",
      body: "A welcoming, inclusive school where every child is supported to thrive.",
      bg: "#1C2E5A",
      foldBg: "#1C2E5A",
      pattern: "dots",
      href: "/about",
      cta: null,
    },
    {
      title: "Our Values",
      body: "Respect, kindness, curiosity and teamwork—every day in our classrooms.",
      bg: "#F5AB00",
      foldBg: "rgba(255,255,255,0.18)",
      pattern: "rings",
      href: "/values",
      cta: null,
    },
    {
      title: "School Policies",
      body: "Key policies, procedures and guidance for parents and guardians.",
      bg: "#E45C7A",
      foldBg: "rgba(255,255,255,0.18)",
      pattern: "plus",
      href: "/policies",
      cta: "Read more",
    },
    {
      title: "Green Flag",
      body: "Celebrating sustainability initiatives and our commitment to the environment.",
      bg: "#6AA84F",
      foldBg: "rgba(255,255,255,0.18)",
      pattern: "leaf",
      href: "/green-flag",
      cta: "Read more",
    },
  ];

  const NotePattern = ({ type }) => {
    if (type === "dots") {
      return (
        <svg
          viewBox="0 0 140 140"
          className="absolute right-5 top-8 h-16 w-16 opacity-25"
          aria-hidden="true"
        >
          {Array.from({ length: 24 }).map((_, i) => {
            const x = 12 + (i % 6) * 20;
            const y = 12 + Math.floor(i / 6) * 20;
            return <circle key={i} cx={x} cy={y} r="2.5" fill="white" />;
          })}
        </svg>
      );
    }

    if (type === "rings") {
      return (
        <svg
          viewBox="0 0 140 140"
          className="absolute right-6 top-10 h-16 w-16 opacity-25"
          aria-hidden="true"
        >
          <circle cx="70" cy="70" r="42" fill="none" stroke="white" strokeWidth="5" />
          <circle cx="70" cy="70" r="22" fill="none" stroke="white" strokeWidth="5" />
        </svg>
      );
    }

    if (type === "plus") {
      return (
        <svg
          viewBox="0 0 140 140"
          className="absolute right-6 top-10 h-16 w-16 opacity-22"
          aria-hidden="true"
        >
          <path
            d="M70 25v90M25 70h90"
            stroke="white"
            strokeWidth="8"
            strokeLinecap="round"
          />
          <path
            d="M48 48l44 44M92 48L48 92"
            stroke="white"
            strokeWidth="6"
            strokeLinecap="round"
            opacity="0.7"
          />
        </svg>
      );
    }

    if (type === "leaf") {
      return (
        <svg
          viewBox="0 0 180 140"
          className="absolute right-4 top-8 h-20 w-20 opacity-25"
          aria-hidden="true"
        >
          <path
            d="M135 25c-35 8-62 35-70 72 36-10 63-37 70-72Z"
            fill="none"
            stroke="white"
            strokeWidth="6"
            strokeLinejoin="round"
          />
          <path
            d="M68 99c10-18 28-34 52-46"
            fill="none"
            stroke="white"
            strokeWidth="5"
            strokeLinecap="round"
          />
        </svg>
      );
    }

    return null;
  };

  const NoteSquiggle = ({ variant }) => {
    const common = {
      fill: "none",
      stroke: "white",
      strokeLinecap: "round",
      strokeLinejoin: "round",
    };

    if (variant === 0) {
      return (
        <svg viewBox="0 0 420 110" className="w-full h-16">
          <path
            d="M-10,75 C55,35 125,105 195,65 C250,35 315,25 360,45 C392,60 410,55 430,40"
            {...common}
            strokeWidth="6"
          />
        </svg>
      );
    }
    if (variant === 1) {
      return (
        <svg viewBox="0 0 420 110" className="w-full h-16">
          <path
            d="M-10,70 C70,10 140,95 210,55 C280,15 330,55 360,65 C395,78 410,55 430,30"
            {...common}
            strokeWidth="6"
          />
          <path
            d="M-10,92 C80,55 150,105 225,72 C292,44 345,78 430,55"
            {...common}
            strokeWidth="4"
            opacity="0.65"
          />
        </svg>
      );
    }
    if (variant === 2) {
      return (
        <svg viewBox="0 0 420 110" className="w-full h-16">
          <path
            d="M-10,80 C40,60 95,25 160,60 C230,98 275,30 330,40 C375,48 400,70 430,52"
            {...common}
            strokeWidth="6"
          />
        </svg>
      );
    }
    return (
      <svg viewBox="0 0 420 110" className="w-full h-16">
        <path
          d="M-10,76 C70,30 120,110 200,65 C260,30 300,30 345,55 C375,72 395,70 430,50"
          {...common}
          strokeWidth="6"
        />
        <path
          d="M300,92 C330,75 355,70 430,78"
          {...common}
          strokeWidth="4"
          opacity="0.65"
        />
      </svg>
    );
  };

  const StickyNote = ({ title, body, bg, foldBg, pattern, href, cta, squiggleVariant }) => (
    <div
      className="relative w-full rounded-3xl shadow-xl overflow-hidden text-white
                 transition-transform duration-200 hover:-translate-y-1 hover:shadow-2xl"
      style={{ backgroundColor: bg }}
    >
      {/* Fold */}
      <div
        className="absolute top-0 right-0 h-16 w-16 origin-top-right rotate-45"
        style={{ backgroundColor: foldBg }}
        aria-hidden="true"
      />
      {/* Fold edge shadow */}
      <div
        className="absolute top-0 right-0 h-16 w-16 origin-top-right rotate-45"
        style={{ boxShadow: "inset -10px 10px 0 rgba(0,0,0,0.14)" }}
        aria-hidden="true"
      />

      <NotePattern type={pattern} />

      <div className="px-8 pt-8 pb-10 text-center">
        <h3 className="text-3xl font-extrabold tracking-tight">{title}</h3>
        <p className="mt-6 text-base leading-relaxed opacity-95 max-w-[28ch] mx-auto">
          {body}
        </p>

        {cta && (
          <div className="mt-6">
            <Link
              to={href}
              className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-sm font-semibold
                         ring-1 ring-white/25 hover:bg-white/20 hover:ring-white/35 transition"
            >
              {cta}
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        )}
      </div>

      <div className="pointer-events-none absolute bottom-4 left-0 right-0 opacity-35">
        <NoteSquiggle variant={squiggleVariant} />
      </div>
    </div>
  );

  return (
    <div className="relative min-h-screen bg-[#F9F8F4] w-full overflow-hidden">
      <div className="min-h-screen px-4 flex flex-col items-center z-10 relative">
        <section className="w-full max-w-6xl p-8 bg-[#F9F8F4] rounded-2xl my-12">
          <header className="text-center mb-8">
            <div className="flex items-center justify-center mb-4">
              <img src={crest} className="h-48" alt="Scoil Mhaolcheadair crest" />
            </div>

            <h2 className="text-4xl font-extrabold text-[#1C2E5A] mb-2">About Scoil Mhaolcheadair</h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              A quick snapshot of our school - who we are, what we value, and the work we’re proud of.
            </p>
          </header>

          <hr className="mt-6 mb-8" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {stickyNotes.map((n, i) => (
              <StickyNote
                key={n.title}
                title={n.title}
                body={n.body}
                bg={n.bg}
                foldBg={n.foldBg}
                pattern={n.pattern}
                href={n.href}
                cta={n.cta}
                squiggleVariant={i}
              />
            ))}
          </div>

          <header className="text-center mb-8">
            <h2 className="text-2xl font-extrabold text-[#1C2E5A] mb-2">Meet Our Staff</h2>
            <p className="text-gray-500 text-lg">
              Dedicated professionals who bring passion and excellence to their roles every day.
            </p>
          </header>

          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-12">
            {staffMembers.map((staff, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center space-y-4 bg-gray-100 rounded-lg p-6 shadow-md hover:shadow-lg transition"
              >
                <img src={staff.image} alt={staff.name} className="w-24 h-24 rounded-full object-cover" />
                <div>
                  <h3 className="text-lg font-bold text-gray-900">{staff.name}</h3>
                  <p className="text-gray-500">{staff.title}</p>
                </div>
              </div>
            ))}
          </div>

          {/* <div className="mb-12">
            <h3 className="text-2xl font-extrabold text-[#1C2E5A] text-center mb-6">Specialized Teams</h3>
            <div className="space-y-8">
              {groupMembers.map((group, index) => (
                <div
                  key={index}
                  className="flex flex-col sm:flex-row items-center text-center sm:text-left bg-gray-100 rounded-lg p-6 shadow-md hover:shadow-lg transition"
                >
                  <img src={group.image} alt={group.title} className="w-24 h-24 rounded-full object-cover mb-4 sm:mb-0 sm:mr-6" />
                  <div>
                    <h4 className="text-lg font-bold text-gray-900">{group.title}</h4>
                    <p className="text-gray-500">{group.name}</p>
                  </div>
                </div>
              ))}
            </div>
          </div> */}

          {/* <div>
            <h3 className="text-2xl font-extrabold text-[#1C2E5A] text-center mb-6">Board of Management Members</h3>
            <div className="space-y-8">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-12">
                {BOMMembers.map((staff, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center text-center space-y-4 bg-gray-100 rounded-lg p-6 shadow-md hover:shadow-lg transition"
                  >
                    <img src={staff.image} alt={staff.name} className="w-24 h-24 rounded-full object-cover" />
                    <div>
                      <h3 className="text-lg font-bold text-gray-900">{staff.name}</h3>
                      <p className="text-gray-500">{staff.title}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div> */}
        </section>
      </div>
    </div>
  );
};

export default AboutPage;
