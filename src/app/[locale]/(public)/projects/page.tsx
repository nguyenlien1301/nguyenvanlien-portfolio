import { Metadata } from "next";
import ProjectContainer from "./project-page";
export const metadata: Metadata = {
  title: "Các dự án Front-end & Web App",
  description:
    "Danh sách các dự án Front-end và Web App do Nguyễn Văn Liền thực hiện, sử dụng React, Next.js, TypeScript cùng các công nghệ web hiện đại, bao gồm website, landing page và hệ thống quản trị.",
};

const ProjectPage = () => {
  return <ProjectContainer />;
};

export default ProjectPage;
