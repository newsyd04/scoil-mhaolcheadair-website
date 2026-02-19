export default function SectionCard({ children, className = "" }) {
  return <section className={`surface-card ${className}`}>{children}</section>;
}
