import { siteConfig } from "../../config/site";
import PageContainer from "./PageContainer";
import PageHeading from "./PageHeading";

export default function InternalPageLayout({ title, subtitle, children, className = "" }) {
  return (
    <main className={`page-shell py-8 md:py-10 ${className}`}>
      <PageContainer>
        <PageHeading title={title} subtitle={subtitle || siteConfig.tagline} />
        <div className="section-stack">{children}</div>
      </PageContainer>
    </main>
  );
}
