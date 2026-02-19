export default function PageHeading({ title, subtitle }) {
  return (
    <header className="mb-8 rounded-2xl border border-[var(--border-soft)] bg-gradient-to-r from-[var(--brand-navy)] to-[var(--brand-green)] px-6 py-8 text-white shadow-sm">
      <h1 className="text-3xl font-extrabold md:text-4xl">{title}</h1>
      {subtitle ? <p className="mt-3 max-w-3xl text-sm text-white/85 md:text-base">{subtitle}</p> : null}
    </header>
  );
}
