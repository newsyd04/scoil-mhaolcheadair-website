export default function ProfileGrid({ people }) {
  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
      {people.map((person) => (
        <article key={`${person.name}-${person.title}`} className="surface-soft p-4 text-center">
          {person.image ? (
            <img
              src={person.image}
              alt={person.name}
              className="mx-auto h-20 w-20 rounded-full object-cover"
              loading="lazy"
            />
          ) : (
            <div className="mx-auto grid h-20 w-20 place-items-center rounded-full bg-[#d9e2f0] text-xl font-extrabold text-[#34537a]">
              {person.name
                .split(" ")
                .slice(0, 2)
                .map((v) => v[0])
                .join("")}
            </div>
          )}
          <h3 className="mt-3 text-sm font-bold text-[#102a4a] sm:text-base">{person.name}</h3>
          <p className="mt-1 text-xs text-slate-600 sm:text-sm">{person.title}</p>
        </article>
      ))}
    </div>
  );
}
