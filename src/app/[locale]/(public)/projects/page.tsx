import { baseOpenGraph } from "@/app/shared-metadata";
import { Metadata } from "next";

import PageHeader from "@/components/layout/page-header";
import ProjectContainer from "./project-page";

type Props = {
  params: Promise<{
    locale: string;
  }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;

  const isVI = locale === "vi";

  return {
    title: isVI
      ? "Các dự án Front-end & Web App | Nguyễn Văn Liền"
      : "Front-end & Web App Projects | Nguyen Van Lien",

    description: isVI
      ? "Danh sách các dự án Front-end và Web App do Nguyễn Văn Liền thực hiện, sử dụng React, Next.js, TypeScript cùng các công nghệ web hiện đại, bao gồm website, landing page và hệ thống quản trị."
      : "A collection of Front-end and Web App projects developed by Nguyen Van Lien, built using React, Next.js, TypeScript, and modern web technologies, including websites, landing pages, and management systems.",

    metadataBase: new URL("https://nguyenvanlien-portfolio.vercel.app"),
    alternates: {
      canonical: `/${locale}/projects`,
      languages: {
        vi: "/vi/projects",
        en: "/en/projects",
      },
    },

    openGraph: {
      title: isVI
        ? "Các dự án Front-end | Nguyễn Văn Liền"
        : "Front-end Projects | Nguyen Van Lien",
      description: isVI
        ? "Portfolio dự án Front-end và Web App."
        : "Front-end and Web App portfolio.",
      url: `/${locale}/projects/`,
      siteName: "Nguyễn Văn Liền Portfolio",
      images: [
        {
          url: "https://nguyenvanlien-portfolio.vercel.app/images/banner-portfolio-project.png",
          width: 1200,
          height: 630,
          alt: "Portfolio",
        },
      ],
      ...baseOpenGraph(locale),
    },
  };
}

const ProjectPage = () => {
  return (
    <>
      <PageHeader />
      <ProjectContainer />
    </>
  );
};

export default ProjectPage;
