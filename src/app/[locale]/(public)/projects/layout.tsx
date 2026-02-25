import PageHeader from "@/components/layout/page-header";

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <PageHeader />
      {children}
    </>
  );
}
