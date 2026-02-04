"use client";
import Link from "next/link";
import {
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "../ui/breadcrumb";

const BreadcrumbComponent = ({ title }: { title: string }) => {
  return (
    <BreadcrumbList>
      <BreadcrumbItem>
        <BreadcrumbLink asChild>
          <Link href="/" className="hover:text-primary transition-all">
            Home
          </Link>
        </BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbSeparator />
      <BreadcrumbItem>
        <BreadcrumbPage>{title}</BreadcrumbPage>
      </BreadcrumbItem>
    </BreadcrumbList>
  );
};

export default BreadcrumbComponent;
