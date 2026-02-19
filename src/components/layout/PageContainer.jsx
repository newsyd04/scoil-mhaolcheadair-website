export default function PageContainer({ children, className = "" }) {
  return <div className={`site-container ${className}`}>{children}</div>;
}
