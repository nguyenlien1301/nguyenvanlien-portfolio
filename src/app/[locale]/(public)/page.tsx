import { baseOpenGraph } from "@/app/shared-metadata";
import Header from "@/components/layout/header";
import AboutSection from "@/components/sections/about-section";
import ContactSection from "@/components/sections/contact-section";
import EducationSection from "@/components/sections/education-section";
import HeroSection from "@/components/sections/hero-section";
import ProjectSection from "@/components/sections/project-section";
import SkillsSection from "@/components/sections/skills-section";
import { Metadata } from "next";

// export const metadata: Metadata = {
//   title: "Nguyễn Văn Liền - Front-end Developer",
//   description:
//     "Nguyễn Văn Liền là Front-end Developer. Xây dựng website,landing page tối ưu hiệu năng và SEO.",
// };

type Props = {
  params: Promise<{
    locale: string;
  }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;

  const isVI = locale === "vi";

  const title = isVI
    ? "Nguyễn Văn Liền | Front-end Developer"
    : "Nguyen Van Lien | Front-end Developer";

  const description = isVI
    ? "Portfolio của Nguyễn Văn Liền - Front-end Developer chuyên xây dựng website, landing page và web application bằng React, Next.js và TypeScript."
    : "Portfolio of Nguyen Van Lien - Front-end Developer specializing in building websites, landing pages and web applications using React, Next.js and TypeScript.";

  return {
    metadataBase: new URL("https://nguyenvanlien-portfolio.vercel.app"),
    title,
    description,
    authors: [{ name: "Nguyễn Văn Liền" }],
    creator: "Nguyễn Văn Liền",
    publisher: "Nguyễn Văn Liền Portfolio",
    keywords: [
      "Nguyễn Văn Liền",
      "Frontend Developer",
      "React Developer",
      "Next.js Developer",
      "Portfolio Developer",
      "Web Developer Vietnam",
    ],
    alternates: {
      canonical: `/${locale}`,
      languages: {
        vi: "/vi",
        en: "/en",
      },
    },

    openGraph: {
      title,
      description,
      url: `/${locale}/`,
      siteName: "Nguyễn Văn Liền Portfolio",
      ...baseOpenGraph(locale),
      images: [
        {
          url: "http://localhost:3000/images/banner-portfolio.png",
          width: 1200,
          height: 630,
          alt: "Nguyen Van Lien Portfolio",
        },
      ],
    },
    // robots: {
    //   index: true,
    //   follow: true,
    // },
  };
}
const Home = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <AboutSection />
      <EducationSection />
      <SkillsSection />
      <ProjectSection />
      {/* <AwardSection /> */}
      {/* <ExperienceSection /> */}
      <ContactSection />
    </>
  );
};

export default Home;
