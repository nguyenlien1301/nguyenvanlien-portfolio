"use client";
import Link from "next/link";
import React from "react";
import {
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "../ui/breadcrumb";

const BreadcrumbComponent = ({
  title,
  className,
}: {
  title: string;
  className?: React.ReactNode;
}) => {
  return (
    <BreadcrumbList className={`${className}`}>
      <BreadcrumbItem>
        <BreadcrumbLink asChild>
          <Link
            href="/"
            className="hover:text-primary transition-all text-sm sm:text-base"
          >
            Home
          </Link>
        </BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbSeparator />
      <BreadcrumbItem>
        <BreadcrumbPage className="text-sm sm:text-base">
          {title}
        </BreadcrumbPage>
      </BreadcrumbItem>
    </BreadcrumbList>
  );
};

export default BreadcrumbComponent;
