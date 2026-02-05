"use client";

import { Database } from "lucide-react";
import React from "react";
const EmtyData = ({
  title,
  className,
}: {
  title: string;
  className?: React.ReactNode;
}) => {
  return (
    <div
      className={`w-full mx-auto flex items-center justify-center ${className}`}
    >
      <div className="bg-white dark:bg-gray-900 border border-gray-800 w-md rounded-2xl shadow-xl p-5 text-center">
        <div className="relative mb-6">
          <div className="absolute inset-0 bg-blue-100 rounded-full blur-2xl opacity-50"></div>
          <div className="relative inline-flex items-center justify-center size-16 md:size-20 bg-linear-to-br from-blue-500 to-blue-600 rounded-full">
            <Database
              className="size-8 md:size-10 text-white"
              strokeWidth={1.5}
            />
          </div>
        </div>
        <h2 className="text-base md:text-2xl font-bold text-slate-800 mb-3 dark:text-slate-200">
          {title}
        </h2>
      </div>
    </div>
  );
};

export default EmtyData;
