import BackToTopButton from "@/components/common/backto-top-button";
import CustomCursor from "@/components/common/custom-cursor";
import ScrollProgress from "@/components/common/scroll-progress";
import Footer from "@/components/layout/footer";
import React from "react";

const PublicLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <CustomCursor />
      <ScrollProgress />
      {children}
      <Footer />
      <BackToTopButton />
    </>
  );
};

export default PublicLayout;
